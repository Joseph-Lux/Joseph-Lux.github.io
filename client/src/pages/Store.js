import React, { useState, useEffect } from "react";
import ProductListing from "../components/ProductListing";
import PageHeader from "../components/PageHeader";
import serverURL from "../GetServerURL";

const Store = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch(`${serverURL}/api/productlist`)
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
