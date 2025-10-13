import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div>
            <h3 className="text-xl font-bold mb-4">Coronda Tech</h3>
            <p className="text-gray-300 mb-4">
              Tu tienda de tecnología de confianza. Encontrá los mejores productos al mejor precio.
            </p>
            <div>
              <a 
                href="https://github.com/LorePB7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/celulares" className="text-gray-300 hover:text-white transition-colors duration-200">
                  📱 Celulares
                </Link>
              </li>
              <li>
                <Link to="/category/computadoras" className="text-gray-300 hover:text-white transition-colors duration-200">
                  💻 Computadoras
                </Link>
              </li>
              <li>
                <Link to="/category/parlantes" className="text-gray-300 hover:text-white transition-colors duration-200">
                  🔊 Parlantes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Útiles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  🏠 Inicio
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-300 hover:text-white transition-colors duration-200">
                  🛒 Mi Carrito
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📞</span>
                <span className="text-gray-300">3425941552</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📧</span>
                <span className="text-gray-300">info@corondatech.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-400 mt-1">📍</span>
                <span className="text-gray-300">Coronda, Santa Fe<br />Argentina</span>
              </div>
            </div>
          </div>
        </div>


        <hr className="border-gray-700 my-8" />


        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Lorenzo Píccolo. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Desarrollado en React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
