import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";

const renderCart = (cart) => {
  return (
    <ul>
      {Object.entries(cart).map(([key, value]) => (
        <li key={key}>
          <strong>{key}:</strong> {value}
        </li>
      ))}
    </ul>
  );
};

const Cart = () => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/cart", { credentials: "include" })
      .then((response) => response.json())
      .then((data) => {
        setCart(data);
      })
      .catch((error) => {
        console.error("Error loading cart: ", error);
      });
  }, []);

  return (
    <div className="page-column">
      <PageHeader>Your Cart</PageHeader>
      {cart !== null ? (
        renderCart(cart)
      ) : (
        <div
          className="header"
          style={{
            alignSelf: "center",
            marginBottom: "50px",
            textAlign: "center",
          }}
        >
          Your cart is currently empty.
        </div>
      )}
      <a href="/store" style={{ alignSelf: "center" }}>
        <button className="my-button">Continue shopping</button>
      </a>
    </div>
  );
};

export default Cart;
