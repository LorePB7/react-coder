import React from "react";
import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeItem } = useCart();

  const handleRemove = () => {
    removeItem(item.id);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">

      <div className="hidden md:flex md:gap-6">
        <div className="w-32 h-32 bg-gray-100 rounded-md flex-shrink-0 flex items-center justify-center p-2">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {item.name}
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              {item.category}
            </p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-blue-600 font-bold text-lg">
              ${item.price} x {item.quantity}
            </div>
            
            <div className="text-gray-900 font-bold text-xl">
              Total: ${(item.price * item.quantity).toFixed(2)}
            </div>
            
            <button
              onClick={handleRemove}
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors duration-200 font-medium"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>


      <div className="flex md:hidden items-center space-x-4 min-w-0">
        <div className="w-20 h-20 bg-gray-100 rounded-md flex-shrink-0 flex items-center justify-center p-2">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">
            {item.name}
          </h3>
          <p className="text-gray-600 text-sm mb-2">
            {item.category}
          </p>
          <div className="flex flex-col space-y-1">
            <div className="text-blue-600 font-bold text-base">
              ${item.price} x {item.quantity}
            </div>
            <div className="text-gray-900 font-bold text-lg">
              Total: ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        </div>
        
        <button
          onClick={handleRemove}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200 font-medium flex-shrink-0"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
