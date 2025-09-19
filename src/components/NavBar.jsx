import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaMobileAlt} from "react-icons/fa";
import { BsSpeaker } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-white text-xl font-bold hover:text-blue-200 transition-colors duration-200 cursor-pointer"
            >
              Coronda Tech
            </Link>
          </div>
          
          <ul className="flex space-x-8">
            <li>
              <Link 
                to="/" 
                className="flex items-center space-x-2 text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/10 group"
              >
                <FaHome className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span>Inicio</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/category/celulares" 
                className="flex items-center space-x-2 text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/10 group"
              >
                <FaMobileAlt className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span>Celulares</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/category/computadoras" 
                className="flex items-center space-x-2 text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/10 group"
              >
                <FaComputer className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span>Computadoras</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/category/parlantes" 
                className="flex items-center space-x-2 text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/10 group"
              >
                <BsSpeaker className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span>Parlantes</span>
              </Link>
            </li>
          </ul>

          <div className="flex-shrink-0">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
