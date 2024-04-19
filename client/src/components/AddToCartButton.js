import AddToCart from "../AddToCart";
import { useCart } from "./CartContext";

const AddToCartButton = (props) => {
  const { cartCount, setCartCount } = useCart();
  return (
    <button
      className="my-button"
      style={{ marginTop: "30px", height: "50px", width: "150px" }}
      onClick={() => {
        AddToCart(props.id, props.quantity);
        setCartCount(cartCount + props.quantity);
      }}
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
