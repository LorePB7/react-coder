import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    setCart(prevCart => {
  
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
   
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {

        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  const removeItem = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some(item => item.id === id);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getUniqueItemsCount = () => {
    return cart.reduce((count) => count + 1, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const value = {
    cart,
    addItem,
    removeItem,
    clear,
    isInCart,
    getTotalItems,
    getUniqueItemsCount,
    getTotalPrice
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
