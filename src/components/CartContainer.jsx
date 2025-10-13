import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const CartContainer = () => {
  const { cart, clear, getTotalPrice, getTotalItems, getUniqueItemsCount } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClearCart = () => {
    Swal.fire({
      title: '¿Vaciar carrito?',
      text: '¿Estás seguro de que querés vaciar todo el carrito? Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Sí, vaciar todo',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        clear();
        Swal.fire({
          title: '¡Carrito vaciado!',
          text: 'Todos los productos fueron eliminados del carrito.',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });
      }
    });
  };

  if (loading) {
    return <Loader text="Cargando carrito..." />;
  }

  if (getTotalItems() === 0) {
    return <EmptyCart />;
  }

  const uniqueItems = getUniqueItemsCount();
  const totalUnits = getTotalItems();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Tu Carrito
        </h1>
        <p className="text-xl text-gray-600">
          {uniqueItems} {uniqueItems === 1 ? 'producto' : 'productos'} ({totalUnits} {totalUnits === 1 ? 'unidad' : 'unidades'}) en tu carrito
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">
            {cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Resumen de Compra
            </h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Productos ({totalUnits} {totalUnits === 1 ? 'unidad' : 'unidades'})</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Envío</span>
                <span>Gratis</span>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between text-xl font-bold text-gray-900">
                <span>Total</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button 
                onClick={() => navigate('/checkout')}
                className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors duration-200 font-medium text-lg"
              >
                Proceder al Pago
              </button>
              
              <button
                onClick={handleClearCart}
                className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition-colors duration-200 font-medium"
              >
                Vaciar Carrito
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
