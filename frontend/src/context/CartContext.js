import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 🟢 1. Check karein ke kya pehle se LocalStorage mein koi data parha hai?
  const initialCart = localStorage.getItem('cartItems') 
    ? JSON.parse(localStorage.getItem('cartItems')) 
    : [];

  const [cart, setCart] = useState(initialCart);

  // 🟢 2. Jab bhi cart change ho, usey foran browser ki memory (LocalStorage) mein save karein
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cart));
  }, [cart]);

  // Product ko cart mein add karne ke liye
  const addToCart = (product) => {
    setCart((prevCart) => {
      const isExist = prevCart.find((item) => item._id === product._id);
      if (isExist) {
        return prevCart.map((item) =>
          item._id === product._id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  // Product remove karne ke liye (Single item)
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  // Poora cart khali karne ke liye
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cartItems'); // LocalStorage se bhi delete
  };

  // Total Items Counter Logic
  const totalItems = cart.reduce((total, item) => total + item.qty, 0);

  return (
    <CartContext.Provider 
      value={{ cart, addToCart, removeFromCart, clearCart, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);