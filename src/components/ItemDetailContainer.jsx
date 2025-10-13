import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import { db } from "../services/firebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        if (!id) {
          setProduct(null);
          return;
        }
        const productRef = doc(db, "productos", String(id));
        const snapshot = await getDoc(productRef);
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
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

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
