import React, { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (count > 0 && stock > 0) {
      onAdd(count);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-4">
        <button
          onClick={handleDecrement}
          disabled={count <= 1}
          className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed flex items-center justify-center font-bold text-lg transition-colors duration-200"
        >
          -
        </button>
        
        <span className="text-2xl font-bold text-gray-900 min-w-[3rem] text-center">
          {count}
        </span>
        
        <button
          onClick={handleIncrement}
          disabled={count >= stock}
          className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed flex items-center justify-center font-bold text-lg transition-colors duration-200"
        >
          +
        </button>
      </div>
      
      <div className="text-sm text-gray-600 text-center">
        Stock disponible: {stock} unidades
      </div>
      
      <button
        onClick={handleAddToCart}
        disabled={count <= 0 || stock <= 0}
        className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 font-medium text-lg"
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ItemCount;
