import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Swal from 'sweetalert2';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebase";

const Checkout = () => {
  const { cart, getTotalPrice, getTotalItems, clear } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [buyer, setBuyer] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: ''
  });
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const buyerData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    });
  };

  const finalizarCompra = (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.email || !buyer.phone || !buyer.address || !buyer.city || !buyer.postalCode || !buyer.paymentMethod) {
      Swal.fire({
        title: 'Campos requeridos',
        text: 'Por favor completá todos los campos del formulario.',
        icon: 'warning',
        confirmButtonText: 'Entendido'
      });
      return;
    }

    let order = {
      comprador: buyer,
      compras: cart,
      total: getTotalPrice(),
      fecha: serverTimestamp()
    };

    const ventas = collection(db, "orders");

    addDoc(ventas, order)
      .then((res) => {
        setOrderId(res.id); 
        Swal.fire({
          title: '¡Compra exitosa!',
          text: `Tu pedido #${res.id} fue procesado correctamente.`,
          icon: 'success',
          confirmButtonText: 'Continuar'
        }).then(() => {
          clear();
        });
      })
      .catch((error) => {
        console.error("Error al crear la orden:", error);
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al procesar tu compra. Intentá de nuevo.',
          icon: 'error',
          confirmButtonText: 'Entendido'
        });
      });
  };

  if (loading) {
    return <Loader text="Cargando checkout..." />;
  }

  if (getTotalItems() === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Tu carrito está vacío
          </h1>
          <p className="text-gray-600 mb-8">
            No hay productos para procesar el pago.
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Volver al catálogo
          </button>
        </div>
      </div>
    );
  }

  if (orderId) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="mb-8">
            <div className="text-6xl mb-4">✅</div>
            <h1 className="text-4xl font-bold text-green-600 mb-4">
              ¡Compra Exitosa!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Tu pedido ha sido procesado correctamente
            </p>
            <div className="bg-gray-100 rounded-lg p-6 max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Número de Orden
              </h2>
              <p className="text-3xl font-mono text-blue-600 font-bold">
                #{orderId}
              </p>
            </div>
          </div>
          
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium text-lg"
          >
            Volver al Catálogo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Finalizar Compra
        </h1>
        <p className="text-xl text-gray-600">
          Completá tus datos para procesar el pago
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Resumen del Pedido
          </h3>
          
          <div className="space-y-4 mb-6">
            {cart.map(item => (
              <div key={item.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-md">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-600">Cantidad: {item.quantity}</p>
                  <p className="text-sm text-gray-600">${item.price} c/u</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3 border-t pt-4">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal ({getTotalItems()} {getTotalItems() === 1 ? 'unidad' : 'unidades'})</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Envío</span>
              <span className="text-green-600 font-medium">Gratis</span>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between text-2xl font-bold text-gray-900">
              <span>Total a pagar</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Datos de Envío
          </h2>
          
          <form onSubmit={finalizarCompra} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={buyer.name}
                  onChange={buyerData}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={buyer.email}
                  onChange={buyerData}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                  value={buyer.phone}
                  onChange={buyerData}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Dirección *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                  value={buyer.address}
                  onChange={buyerData}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  Ciudad *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={buyer.city}
                  onChange={buyerData}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                  Código Postal *
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={buyer.postalCode}
                  onChange={buyerData}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-1">
                Forma de Pago *
              </label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={buyer.paymentMethod}
                onChange={buyerData}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Seleccioná una opción</option>
                <option value="debito">Débito</option>
                <option value="credito">Crédito</option>
                <option value="transferencia">Transferencia</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors duration-200 font-medium text-lg mt-6"
            >
              Confirmar Compra - ${getTotalPrice().toFixed(2)}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
