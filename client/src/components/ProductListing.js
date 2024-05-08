import AddToCartButton from "./AddToCartButton";
import { Link } from "react-router-dom";

const ProductListing = ({ product }) => {
  return (
    <div className="product-list">
      <img
        className="product-list__thumbnail"
        src={product.thumbnail}
        alt="product thumbnail"
      />
      <div className="product-list__text">
        <Link
          className="header simple-link"
          to={"/product/" + product.id}
          style={{ marginBottom: "0" }}
        >
          {product.title}
        </Link>
        <div className="price">${product.price}</div>
        <div className="paragraph">{product.shortDesc}</div>
        <AddToCartButton id={product.id} quantity={1} />
      </div>
    </div>
  );
};

export default ProductListing;
