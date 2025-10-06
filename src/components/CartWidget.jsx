import React from "react";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
  const { getUniqueItemsCount } = useCart();
  const itemCount = getUniqueItemsCount();

  return (
    <Link to="/cart" className="relative flex items-center">
      <BsCart2 className="w-6 h-6 text-white hover:text-blue-200 transition-colors duration-200 cursor-pointer" />
      
  
      {itemCount > 0 && (
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
          {itemCount}
        </div>
      )}
    </Link>
  );
};

export default CartWidget;
