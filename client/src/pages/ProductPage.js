import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import AddToCartButton from "../components/AddToCartButton";
import Modal from "../components/Modal";

const renderContent = (product, openModal) => {
  return (
    <div className="product-page-container">
      <img
        src={product.image}
        className="product-image"
        onClick={() => openModal(product.image)}
        alt=""
      />
      <div className="product-page__info">
        <div
          className="header"
          style={{ borderBottom: "1px solid grey", paddingBottom: "20px" }}
        >
          {product.title}
        </div>
        <div className="price">${product.price}</div>
        <div className="paragraph">{product.shortDesc}</div>
        <AddToCartButton />
      </div>
    </div>
  );
};

const Product = () => {
  const { productSlug } = useParams();
  const [product, setProduct] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/product/" + productSlug)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => {
        console.error("Error loading product: ", error);
      });
  }, [productSlug]);

  return (
    <div className="page-column">
      <PageHeader>
        <a href="/store" className="simple-link">
          Store
        </a>
      </PageHeader>

      {product !== null ? renderContent(product, openModal) : <p>Loading...</p>}
      {modalImage && <Modal image={modalImage} closeModal={closeModal} />}
    </div>
  );
};

export default Product;
