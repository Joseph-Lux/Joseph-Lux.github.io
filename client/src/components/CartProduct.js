import AddToCart from "../AddToCart";
import { useCart } from "./CartContext";
import { useState, useEffect } from "react";

const CartProduct = ({
  product,
  quantity,
  onDelete,
  incrementQuantity,
  decrementQuantity,
}) => {
  const { cartCount, setCartCount } = useCart();
  const [stateQuantity, setStateQuantity] = useState(quantity);

  useEffect(() => {
    setStateQuantity(quantity);
  }, [quantity]);

  return (
    <>
      <div className="cart-list paragraph">
        <a href={"/product/" + product.id}>
          <img src={product.thumbnail} />
        </a>
        <div style={{ marginLeft: "20px", width: "345px", textAlign: "left" }}>
          <a href={"/product/" + product.id} className="simple-link">
            {product.title}
          </a>
        </div>
        <div style={{ width: "130px" }}>${product.price}</div>
        <div style={{ width: "130px" }}>
          {
            <button
              className="cart-minus"
              disabled={stateQuantity <= 1}
              onClick={() => {
                AddToCart(product.id, -1);
                setStateQuantity(stateQuantity - 1);
                setCartCount(cartCount - 1);
                decrementQuantity(product.id, -1);
              }}
            >
              -
            </button>
          }

          {stateQuantity}
          <button
            className="cart-plus"
            disabled={stateQuantity >= 99}
            onClick={() => {
              AddToCart(product.id, 1);
              setStateQuantity(stateQuantity + 1);
              setCartCount(cartCount + 1);
              incrementQuantity(product.id, 1);
            }}
          >
            +
          </button>
        </div>
        <div style={{ width: "130px" }}>${product.price * stateQuantity}</div>
        <button
          className="remove-from-cart"
          onClick={() => {
            onDelete(product.id);
            setCartCount(cartCount - stateQuantity);
          }}
        >
          x
        </button>
      </div>
    </>
  );
};

export default CartProduct;
