import React from "react";
import { BsCart2 } from "react-icons/bs";

const CartWidget = () => {

  const itemCount = 3;

  return (
    <div className="relative flex items-center">
      <BsCart2 className="w-6 h-6 text-white hover:text-blue-200 transition-colors duration-200 cursor-pointer" />
      
      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
        {itemCount}
      </div>
    </div>
  );
};

export default CartWidget;
