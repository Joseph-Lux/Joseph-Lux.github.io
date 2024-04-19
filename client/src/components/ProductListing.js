import AddToCartButton from "./AddToCartButton";

const ProductListing = ({ product }) => {
  return (
    <div className="product-list">
      <img
        className="product-list__thumbnail"
        src={product.thumbnail}
        alt="product thumbnail"
      />
      <div className="product-list__text">
        <a
          className="header simple-link"
          href={"/product/" + product.id}
          style={{ marginBottom: "0" }}
        >
          {product.title}
        </a>
        <div className="price">${product.price}</div>
        <div className="paragraph">{product.shortDesc}</div>
        <AddToCartButton id={product.id} quantity={1} />
      </div>
    </div>
  );
};

export default ProductListing;
