import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import CartProduct from "../components/CartProduct";

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

  const removeFromCart = (id) => {
    fetch("http://localhost:5000/cart/remove", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Item removed from cart successfully");
        } else {
          console.error("Failed to remove item from cart");
        }
        const updatedCart = { ...cart };
        console.log("updatedCart: ", updatedCart);
        delete updatedCart[id];
        setCart(updatedCart);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="page-column">
      <PageHeader>Your Cart</PageHeader>
      {Object.keys(cart).length !== 0 ? (
        <div style={{ marginBottom: "50px" }}>
          <div className="cart-header paragraph">
            <div
              style={{ width: "335px", marginLeft: "130px", textAlign: "left" }}
            >
              Product
            </div>
            <div style={{ width: "130px" }}>Price</div>
            <div style={{ width: "130px" }}>Quantity</div>
            <div style={{ width: "130px" }}>Subtotal</div>
          </div>
          {Object.keys(cart).map((itemID) => {
            return (
              <CartProduct
                product={cart[itemID].product}
                quantity={cart[itemID].quantity}
                onDelete={() => removeFromCart(itemID)}
              />
            );
          })}
        </div>
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
