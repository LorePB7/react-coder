import React from "react";

const Loader = ({ text = "Cargando..." }) => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <span className="text-lg text-gray-600">{text}</span>
      </div>
    </div>
  );
};

export default Loader;
