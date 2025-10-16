// src/context/CartContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      try {
        setCart(JSON.parse(saved));
      } catch (e) {
        console.error("Error al cargar el carrito");
      }
    }
  }, []);

  // Guardar en localStorage cada vez que cambie el carrito
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, selectedOptions, totalPrice) => {
    const item = {
      id: Date.now() + Math.random(), // ID único para el item en el carrito
      productId: product.id,
      title: product.title,
      image: product.image,
      basePrice: product.price,
      selectedOptions, // { "Tamaño": 10, "Color": 5 }
      totalPrice,
    };
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (itemId) => {
    setCart((prev) => prev.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.totalPrice, 0);
  };

  const getItemCount = () => {
    return cart.length;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotal,
        getItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};