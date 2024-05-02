import React, { useState } from "react";
import Modal from "../components/Modal";
import images from "../photoContent";
import PageHeader from "../components/PageHeader";

const getColumns = (images, numCols, openModal) => {
  let columns = [];
  for (let i = 0; i < numCols; i++) {
    columns.push([]);
  }
  for (let i = 0; i < images.length; i++) {
    columns[i % numCols].push(images[i]);
  }
  return (
    <>
      {columns.map((column, index) => (
        <div className="gallery-column" key={index}>
          {column.map((image, imgIndex) => (
            <div
              className="gallery-image-wrap"
              onClick={() => openModal(image.source)}
              key={imgIndex}
            >
              <img
                className="gallery-image"
                src={image.lowRes}
                alt={image.title}
              />
              <div className="gallery-image-description">
                <h1
                  className="header"
                  style={{ margin: "0", fontSize: "1.5rem" }}
                >
                  {image.title}
                </h1>
                <div className="paragraph">
                  <i>{image.description}</i>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

const Gallery = () => {
  const [modalImage, setModalImage] = useState(null);
  const openModal = (image) => {
    setModalImage(image);
    console.log({ image });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="page-column">
      <PageHeader>Gallery</PageHeader>

      <div className="gallery-container">
        {getColumns(images, 4, openModal)}
      </div>
      {modalImage && <Modal image={modalImage} closeModal={closeModal} />}
    </div>
  );
};

export default Gallery;
