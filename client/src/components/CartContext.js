import React, { useState, useContext, createContext, useEffect } from "react";
import serverURL from "../GetServerURL";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch(`${serverURL}/cart/count`, { credentials: "include" })
      .then((response) => response.json())
      .then((data) => {
        setCartCount(data.cartCount);
        localStorage.setItem("cartCount", data.cartCount);
      })
      .catch((error) => console.error("Error retrieving cart count:", error));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", cartCount);
  }, [cartCount]);

  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
