import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 1. Product ko cart mein add karne ke liye
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

  // 2. Product remove karne ke liye (Single item)
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  // 3. 🟢 Poora cart khali karne ke liye (Remove All)
  const clearCart = () => {
    setCart([]);
  };

  // 4. Total Items Counter Logic (Navbar badge ke liye)
  const totalItems = cart.reduce((total, item) => total + item.qty, 0);

  return (
    <CartContext.Provider 
      // 🟢 Yahan clearCart add kar diya hai taake Cart page isay use kar sakay
      value={{ cart, addToCart, removeFromCart, clearCart, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);