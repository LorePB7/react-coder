import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

const CartContainer = () => {
  const { cart, clear, getTotalPrice, getTotalItems, getUniqueItemsCount } = useCart();

  if (cart.length === 0) {
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
          {/* Lista de productos */}
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
              <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors duration-200 font-medium text-lg">
                Proceder al Pago
              </button>
              
              <button
                onClick={clear}
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
