import React, { useState, useEffect } from "react";
import ProductListing from "../components/ProductListing";
import PageHeader from "../components/PageHeader";

const Store = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/productlist")
      .then((response) => {
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error loading products:", error);
      });
  }, []);

  return (
    <div className="page-column">
      <PageHeader>Store</PageHeader>
      {products !== null ? (
        products.map((product) => (
          <ProductListing key={product.id} product={product} />
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default Store;
