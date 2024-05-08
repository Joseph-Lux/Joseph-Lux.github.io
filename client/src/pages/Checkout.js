import React, { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import PageHeader from "../components/PageHeader";
import { useCart } from "../components/CartContext";
import serverURL from "../GetServerURL";

const stripePromise = loadStripe("pk_test_lbKnP7kYWo7JHiMZvrbBZyFu");

const CheckoutForm = () => {
  console.log("StripePromise:", stripePromise);
  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch(`${serverURL}/create-checkout-session`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, []);

  const options = { fetchClientSecret };

  const { cartCount } = useCart();

  return (
    <div className="page-column" id="checkout">
      {cartCount > 0 ? (
        <>
          <PageHeader>Checkout</PageHeader>
          <div
            className="paragraph disclaimer-wrapper"
            style={{ marginBottom: "50px" }}
          >
            <i>
              * Disclaimer: Checkout is in test mode. Items are not actually for
              sale. If you are interested in purchasing anything, please email{" "}
              <a href="mailto:josephandrewlux@gmail.com">
                josephandrewlux@gmail.com
              </a>
            </i>
          </div>
          <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        </>
      ) : (
        <>
          <div
            className="header"
            style={{ textAlign: "center", margin: "50px 0px" }}
          >
            Cart is empty
          </div>
          <a href="/store" style={{ alignSelf: "center" }}>
            <button className="my-button">Return to Store</button>
          </a>
        </>
      )}
    </div>
  );
};

export default CheckoutForm;
