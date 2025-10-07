import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { useCart } from "../context/CartContext";

const Item = ({ product }) => {
  const { addItem } = useCart();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleAddToCart = () => {
    if (product.stock > 0) {
      addItem(product, 1);
      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
      }, 2000);
    }
  };

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
        <div className="flex gap-2">
          <Link 
            to={`/item/${product.id}`}
            className="flex-1 bg-white text-black px-4 py-3 rounded-md hover:bg-blue-50 transition-colors duration-200 font-bold text-center border-2 border-blue-600 hover:border-blue-700 shadow-md hover:shadow-lg"
          >
            Ver Detalle
          </Link>
          
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="flex-1 bg-green-600 text-white px-4 py-3 rounded-md hover:bg-green-700 transition-colors duration-200 font-bold border-2 border-green-600 hover:border-green-700 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-green-600 flex items-center justify-center gap-2"
            title="Agregar al carrito"
          >
            <BsCartPlus className="w-5 h-5" />
            <span>Agregar</span>
          </button>
        </div>

        <div className="h-[38px] overflow-hidden mt-1">
          {showConfirmation && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-3 py-2 rounded text-sm text-center animate-fade-in">
              ¡Agregado al carrito!
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default Item;
