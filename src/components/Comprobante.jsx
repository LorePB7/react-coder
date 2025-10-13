import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import Loader from "./Loader";
import { FaPrint } from "react-icons/fa";

const Comprobante = () => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const { orderId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        if (!orderId) return;
        
        const orderRef = doc(db, "orders", orderId);
        const orderSnap = await getDoc(orderRef);
        
        if (orderSnap.exists()) {
          setOrder({ id: orderSnap.id, ...orderSnap.data() });
        } else {
          console.error("No se encontró la orden");
        }
      } catch (error) {
        console.error("Error al obtener la orden:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  const handlePrint = () => {
    window.print();
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "Fecha no disponible";
    
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('es-AR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getPaymentMethodText = (method) => {
    const methods = {
      'debito': 'Tarjeta de Débito',
      'credito': 'Tarjeta de Crédito',
      'transferencia': 'Transferencia Bancaria'
    };
    return methods[method] || method;
  };

  if (loading) {
    return <Loader text="Cargando comprobante..." />;
  }

  if (!order) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            Comprobante no encontrado
          </h1>
          <p className="text-gray-600 mb-8">
            No se pudo encontrar el comprobante solicitado.
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div className="comprobante-print bg-white p-6 rounded-lg shadow-lg border border-gray-200 max-w-3xl mx-auto mb-8">

        <div className="text-center mb-6 border-b-2 border-gray-300 pb-4">
          <h1 className="text-2xl font-bold text-blue-600 mb-2">Coronda Tech</h1>
          <p className="text-gray-600 text-sm">Tu tienda de tecnología de confianza</p>
          <p className="text-xs text-gray-500 mt-1">Coronda, Santa Fe - Argentina</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-3">Comprobante de Compra</h2>
            <div className="space-y-1 text-sm">
              <p><span className="font-semibold">Número de Orden:</span> #{order.id}</p>
              <p><span className="font-semibold">Fecha:</span> {formatDate(order.fecha)}</p>
              <p><span className="font-semibold">Estado:</span> <span className="text-green-600 font-semibold">Completado</span></p>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-3">Información del Cliente</h2>
            <div className="space-y-1 text-sm">
              <p><span className="font-semibold">Nombre:</span> {order.comprador.name}</p>
              <p><span className="font-semibold">Email:</span> {order.comprador.email}</p>
              <p><span className="font-semibold">Teléfono:</span> {order.comprador.phone}</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Dirección de Entrega</h2>
          <div className="bg-gray-50 p-3 rounded-lg text-sm">
            <p>{order.comprador.address}</p>
            <p>{order.comprador.city}, {order.comprador.postalCode}</p>
            <p>Argentina</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Método de Pago</h2>
          <div className="bg-gray-50 p-3 rounded-lg text-sm">
            <p className="font-semibold">{getPaymentMethodText(order.comprador.paymentMethod)}</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Productos Comprados</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-3 py-2 text-left text-sm">Producto</th>
                  <th className="border border-gray-300 px-3 py-2 text-center text-sm">Cantidad</th>
                  <th className="border border-gray-300 px-3 py-2 text-right text-sm">Precio Unit.</th>
                  <th className="border border-gray-300 px-3 py-2 text-right text-sm">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {order.compras.map((item) => (
                  <tr key={item.id}>
                    <td className="border border-gray-300 px-3 py-2">
                      <div className="flex items-center gap-2">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-10 h-10 object-contain rounded"
                        />
                        <div>
                          <p className="font-semibold text-sm">{item.name}</p>
                          <p className="text-xs text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-center text-sm">{item.quantity}</td>
                    <td className="border border-gray-300 px-3 py-2 text-right text-sm">${item.price}</td>
                    <td className="border border-gray-300 px-3 py-2 text-right font-semibold text-sm">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="border-t-2 border-gray-300 pt-6">
          <div className="flex justify-end">
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-600">
                Total: ${order.total.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-300 text-center text-xs text-gray-500">
          <p>¡Gracias por tu compra!</p>
          <p>Para consultas: info@corondatech.com | +54 9 342 594-1552</p>
          <p className="mt-1">
            Este comprobante es válido como factura de compra.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 print:hidden justify-center items-center">
        <button
          onClick={handlePrint}
          className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors duration-200 font-medium flex items-center justify-center gap-2"
        >
          <FaPrint className="w-5 h-5" /> Imprimir Comprobante
        </button>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default Comprobante;
