import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col h-full hover:shadow-lg transition-shadow duration-200">
      <div className="w-full h-40 bg-gray-100 rounded-md mb-4 overflow-hidden flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-200"
        />
      </div>
      
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {product.name}
      </h3>
      
      <p className="text-gray-600 mb-4 flex-grow text-sm">
        {product.description}
      </p>
      
      <div className="mt-auto">
        <div className="text-2xl font-bold text-blue-600 mb-4">
          ${product.price}
        </div>
        
        <Link 
          to={`/item/${product.id}`}
          className="block w-full bg-blue-600 text-black px-4 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-bold text-center border-2 border-blue-600 hover:border-blue-700 shadow-md hover:shadow-lg"
        >
          Ver Detalle
        </Link>
      </div>
      
      <div className="mt-2 h-6 flex items-center">
        {product.stock <= 5 && product.stock > 0 && (
          <div className="text-sm text-orange-600 font-medium">
            ¡Últimas {product.stock} unidades!
          </div>
        )}
        
        {product.stock === 0 && (
          <div className="text-sm text-red-600 font-medium">
            Sin stock
          </div>
        )}
        
        {product.stock > 5 && (
          <div className="text-sm text-transparent">
            Espacio reservado
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
