import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../mock/products";
import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let productsData;
        
        if (categoryId) {
          productsData = await getProductsByCategory(categoryId);
        } else {
          productsData = await getProducts();
        }
        
        setProducts(productsData);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  const getCategoryTitle = () => {
    if (!categoryId) return greeting || "Bienvenido a Coronda Tech";
    
    const categoryTitles = {
      celulares: "Celulares",
      computadoras: "Computadoras", 
      parlantes: "Parlantes"
    };
    
    return categoryTitles[categoryId] || "Categoría";
  };

  if (loading) {
    return <Loader text="Cargando productos..." />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {getCategoryTitle()}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          {categoryId 
            ? `Descubrí nuestra increíble selección de ${getCategoryTitle().toLowerCase()} con la mejor calidad y precios.`
            : "Descubrí nuestra increíble selección de electrodomésticos con la mejor calidad y precios de todo el mercado."
          }
        </p>
        
        {products.length > 0 ? (
          <ItemList products={products} />
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-600 mb-4">
              No se encontraron productos
            </h3>
            <p className="text-gray-500">
              No hay productos disponibles en esta categoría.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
