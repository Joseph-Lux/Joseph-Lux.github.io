import { useLocation } from "react-router-dom";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

function Banner() {
  let pages = ["Home", "About", "Gallery", "Store", "Blog"];
  let links = {
    Home: "/",
    About: "/about",
    Gallery: "/gallery",
    Store: "/store",
    Blog: "/blog",
  };

  let currentPage = useLocation().pathname;

  const { cartCount } = useCart();

  return (
    <nav className="banner">
      <Link className="navbar-brand logo" to="/">
        <img
          className="rounded"
          src="/images/anchorBW.png"
          width="50"
          height=""
          alt=""
        />
        <div className="logo-text">Joseph Andrew Lux</div>
      </Link>
      <div className="nav-links">
        {pages.map((title) => (
          <Link
            className={links[title] === currentPage ? "active-link" : "link"}
            to={links[title]}
            key={links[title]}
          >
            {title}
          </Link>
        ))}
        <Link to="/cart" className="link">
          <img
            src="/images/shopping-cart-icon.png"
            width="18px"
            height="18px"
            alt="cart"
            style={{ marginRight: "5px" }}
          />
          {cartCount}
        </Link>
      </div>
    </nav>
  );
}

export default Banner;
