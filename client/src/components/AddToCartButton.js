import AddToCart from "../AddToCart";

const AddToCartButton = (props) => {
  return (
    <button
      className="my-button"
      style={{ marginTop: "30px", height: "50px", width: "150px" }}
      onClick={() => {
        AddToCart(props.id, props.quantity);
      }}
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
