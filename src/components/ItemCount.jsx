import React, { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);
  const [added, setAdded] = useState(false);
  const [disableAdd, setDisableAdd] = useState(false);

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
    if (count > 0 && stock > 0 && !disableAdd) {
      onAdd(count);
      setAdded(true);
      setDisableAdd(true);
      setTimeout(() => {
        setDisableAdd(false);
        setAdded(false);
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col space-y-4 items-center">
      <div className="grid grid-cols-3 items-center justify-items-center gap-4">
        <button
          onClick={handleDecrement}
          disabled={count <= 1}
          className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed flex items-center justify-center font-bold text-lg transition-colors duration-200"
        >
          -
        </button>
        
        <span className="text-2xl font-bold text-gray-900 w-10 text-center">
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
      
      <div className="flex flex-col items-center space-y-3 w-full">
        <button
          onClick={handleAddToCart}
          disabled={count <= 0 || stock <= 0 || disableAdd}
          className="inline-flex bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 font-medium"
        >
          {disableAdd ? "Agregando..." : "Agregar al Carrito"}
        </button>
        <div className="min-h-[2rem] flex items-center mt-3">
          {added && (
            <div className="text-green-700 bg-green-100 border border-green-300 px-3 py-1.5 rounded-md text-sm text-center">
              ¡Producto agregado al carrito exitosamente!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
