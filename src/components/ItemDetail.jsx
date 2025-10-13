import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";

const ItemDetail = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = (quantity) => {
    addItem(product, quantity);
  };
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Producto no encontrado
          </h1>
          <Link 
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Imagen del producto */}
          <div className="md:w-2/5 bg-gray-100 flex items-center justify-center p-8">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-auto max-h-96 object-contain"
            />
          </div>
          
  
          <div className="md:w-3/5 p-8">
            <div className="mb-4">
              <Link 
                to="/"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                ← Volver al catálogo
              </Link>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            
            <div className="text-4xl font-bold text-blue-600 mb-6">
              ${product.price}
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Descripción
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Especificaciones
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li><span className="font-medium">Categoría:</span> {product.category}</li>
                <li><span className="font-medium">Stock disponible:</span> {product.stock} unidades</li>
                <li><span className="font-medium">ID del producto:</span> {product.id}</li>
              </ul>
            </div>
            
            <div className="flex flex-col space-y-4">
              {product.stock > 0 ? (
                <>
                  <ItemCount stock={product.stock} onAdd={handleAddToCart} />
                </>
              ) : (
                <div className="text-red-600 font-medium text-lg">
                  Sin stock disponible
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
