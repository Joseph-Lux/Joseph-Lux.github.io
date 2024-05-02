import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import PageNotFound from "./PageNotFound";

const Return = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    if (sessionId) {
      fetch(`http://localhost:5000/session-status?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          setStatus(data.status);
          setCustomerEmail(data.customer_email);
        });
    }
  }, []);

  console.log("Status: ", status, " Email: ", customerEmail);
  if (status === null) {
    return <PageNotFound />;
  }
  if (status === "open") {
    return <Navigate to="/checkout" />;
  }

  if (status === "complete") {
    return (
      <div className="page-column">
        <PageHeader>Thank You</PageHeader>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          Your order was successful! A confirmation email will be sent to{" "}
          {customerEmail}. If you have any questions, please email{" "}
          <a href="mailto:josephandrewlux@gmail.com">
            josephandrewlux@gmail.com
          </a>
          .{" "}
        </div>
        <a href="/" style={{ alignSelf: "center" }}>
          <button className="my-button">Return to Home</button>
        </a>
      </div>
    );
  }

  return null;
};

export default Return;
