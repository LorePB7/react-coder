import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  console.log("EmptyCart se está renderizando");
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
          className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-semibold text-xl shadow-lg border-2 border-blue-600"
        >
          Ver Productos
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
