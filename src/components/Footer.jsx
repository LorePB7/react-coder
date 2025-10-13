import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaMobileAlt, FaLaptop, FaHome, FaShoppingCart, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsSpeakerFill } from "react-icons/bs";
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
                <FaGithub className="w-6 h-6" />
                <span>GitHub</span>
              </a>
            </div>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/celulares" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                  <FaMobileAlt className="w-5 h-5" />
                  <span>Celulares</span>
                </Link>
              </li>
              <li>
                <Link to="/category/computadoras" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                  <FaLaptop className="w-5 h-5" />
                  <span>Computadoras</span>
                </Link>
              </li>
              <li>
                <Link to="/category/parlantes" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                  <BsSpeakerFill className="w-5 h-5" />
                  <span>Parlantes</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Útiles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                  <FaHome className="w-5 h-5" />
                  <span>Inicio</span>
                </Link>
              </li>
              <li>
                <Link to="/cart" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                  <FaShoppingCart className="w-5 h-5" />
                  <span>Mi Carrito</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">3425941552</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@corondatech.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-5 h-5 text-blue-400 mt-1" />
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
