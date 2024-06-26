const Modal = ({ image, closeModal }) => {
  console.log(image);
  return (
    <div className="my-modal" onClick={closeModal}>
      <div className="my-modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <img src={image} alt="Modal" />
      </div>
    </div>
  );
};

export default Modal;
