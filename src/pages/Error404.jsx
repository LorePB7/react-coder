import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Página no encontrada
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            to="/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium text-lg"
          >
            Volver al inicio
          </Link>
          
          <div className="mt-6">
            <Link 
              to="/category/celulares"
              className="text-blue-600 hover:text-blue-800 font-medium mr-6"
            >
              Celulares
            </Link>
            <Link 
              to="/category/computadoras"
              className="text-blue-600 hover:text-blue-800 font-medium mr-6"
            >
              Computadoras
            </Link>
            <Link 
              to="/category/parlantes"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Parlantes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
