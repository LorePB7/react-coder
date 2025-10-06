import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <div className="mb-8">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tu carrito está vacío
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            ¡Agregá algunos productos para comenzar tu compra!
          </p>
        </div>
        
        <Link
          to="/"
          className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium text-lg"
        >
          Ver Productos
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
