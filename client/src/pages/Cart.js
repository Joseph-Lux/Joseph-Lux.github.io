import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import CartProduct from "../components/CartProduct";
import { Link } from "react-router-dom";
import serverURL from "../GetServerURL";

const Cart = () => {
  const [cart, setCart] = useState({});
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    fetch(`${serverURL}/cart`, { credentials: "include" })
      .then((response) => response.json())
      .then((data) => {
        setCart(data);
      })
      .catch((error) => {
        console.error("Error loading cart: ", error);
      });
  }, []);

  useEffect(() => {
    let total = 0;
    Object.keys(cart).forEach((itemID) => {
      total += cart[itemID].product.price * cart[itemID].quantity;
    });
    setSubtotal(total);
  }, [cart]);

  const removeFromCart = (id) => {
    fetch(`${serverURL}/cart/remove`, {
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

  const changeQuantity = (id, num) => {
    const updatedCart = { ...cart };
    updatedCart[id].quantity += num;
    setCart(updatedCart);
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
                incrementQuantity={() => changeQuantity(itemID, 1)}
                decrementQuantity={() => changeQuantity(itemID, -1)}
              />
            );
          })}
          <div className="cart-header paragraph">
            <div
              style={{
                marginLeft: "725px",
                width: "130px",
                textAlign: "center",
              }}
            >
              ${subtotal}
            </div>
          </div>
          <div className="paragraph disclaimer-wrapper">
            <i>
              * Disclaimer: Checkout is in test mode. Items are not actually for
              sale. If you are interested in purchasing anything, please email{" "}
              <a href="mailto:josephandrewlux@gmail.com">
                josephandrewlux@gmail.com
              </a>
            </i>
          </div>
          <div className="checkout-button-wrapper">
            <Link to="/checkout" style={{ marginLeft: "725px" }}>
              <button className="my-button">Checkout</button>
            </Link>
          </div>
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
      <Link to="/store" style={{ alignSelf: "center", marginBottom: "50px" }}>
        <button className="my-button">Continue shopping</button>
      </Link>
    </div>
  );
};

export default Cart;
