import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaMobileAlt, FaBars, FaTimes } from "react-icons/fa";
import { BsSpeaker } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import CartWidget from "./CartWidget";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-white text-xl font-bold hover:text-blue-200 transition-colors duration-200 cursor-pointer"
              onClick={closeMenu}
            >
              Coronda Tech
            </Link>
          </div>
          
          <ul className="hidden md:flex space-x-8">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/10 group ${
                    isActive 
                      ? "text-blue-200 font-bold bg-white/20" 
                      : "text-white hover:text-blue-200"
                  }`
                }
              >
                <FaHome className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span>Inicio</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/category/celulares" 
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/10 group ${
                    isActive 
                      ? "text-blue-200 font-bold bg-white/20" 
                      : "text-white hover:text-blue-200"
                  }`
                }
              >
                <FaMobileAlt className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span>Celulares</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/category/computadoras" 
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/10 group ${
                    isActive 
                      ? "text-blue-200 font-bold bg-white/20" 
                      : "text-white hover:text-blue-200"
                  }`
                }
              >
                <FaComputer className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span>Computadoras</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/category/parlantes" 
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/10 group ${
                    isActive 
                      ? "text-blue-200 font-bold bg-white/20" 
                      : "text-white hover:text-blue-200"
                  }`
                }
              >
                <BsSpeaker className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span>Parlantes</span>
              </NavLink>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <CartWidget />
            </div>
            
            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-md p-2 transition-colors duration-200"
              aria-label="Menú"
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
                
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-4 pt-2 pb-4 space-y-2 bg-gradient-to-r from-blue-700 to-purple-700">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-md text-base font-medium transition-all duration-200 hover:bg-white/10 group ${
                  isActive 
                    ? "text-blue-200 font-bold bg-white/20" 
                    : "text-white hover:text-blue-200"
                }`
              }
              onClick={closeMenu}
            >
              <FaHome className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span>Inicio</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/category/celulares" 
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-md text-base font-medium transition-all duration-200 hover:bg-white/10 group ${
                  isActive 
                    ? "text-blue-200 font-bold bg-white/20" 
                    : "text-white hover:text-blue-200"
                }`
              }
              onClick={closeMenu}
            >
              <FaMobileAlt className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span>Celulares</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/category/computadoras" 
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-md text-base font-medium transition-all duration-200 hover:bg-white/10 group ${
                  isActive 
                    ? "text-blue-200 font-bold bg-white/20" 
                    : "text-white hover:text-blue-200"
                }`
              }
              onClick={closeMenu}
            >
              <FaComputer className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span>Computadoras</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/category/parlantes" 
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-md text-base font-medium transition-all duration-200 hover:bg-white/10 group ${
                  isActive 
                    ? "text-blue-200 font-bold bg-white/20" 
                    : "text-white hover:text-blue-200"
                }`
              }
              onClick={closeMenu}
            >
              <BsSpeaker className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span>Parlantes</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
