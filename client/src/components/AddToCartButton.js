import AddToCart from "../AddToCart";
import { useCart } from "./CartContext";

const AddToCartButton = ({ id, quantity }) => {
  const { cartCount, setCartCount } = useCart();
  return (
    <button
      className="my-button"
      style={{ marginTop: "30px", height: "50px", width: "150px" }}
      onClick={() => {
        AddToCart(id, quantity);
        setCartCount(cartCount + quantity);
      }}
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
