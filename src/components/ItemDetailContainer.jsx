import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import { db } from "../services/firebase";
import { doc, getDoc } from "firebase/firestore";
import { MdError } from "react-icons/md";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        
        if (!id) {
          setError("ID de producto no válido");
          setProduct(null);
          return;
        }
        
        const productRef = doc(db, "productos", String(id));
        const snapshot = await getDoc(productRef);
        
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        } else {
          setError("El producto solicitado no existe");
          setProduct(null);
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
        setError("Error al cargar el producto. Por favor intentá de nuevo.");
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <Loader text="Cargando producto..." />;
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="mb-8">
            <MdError className="text-6xl mb-4 text-red-500 block mx-auto" />
            <h1 className="text-3xl font-bold text-red-600 mb-4">
              Error al cargar el producto
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {error}
            </p>
          </div>
          
          <div className="space-y-4">
            <Link 
              to="/"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium text-lg"
            >
              Volver al catálogo
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
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
