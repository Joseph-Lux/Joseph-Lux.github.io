import { useLocation } from "react-router-dom";
import { useCart } from "./CartContext";

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
      <a className="navbar-brand logo" href="/">
        <img
          className="rounded"
          src="/anchorBW.png"
          width="50"
          height=""
          alt=""
        />
        <div className="logo-text">Joseph Andrew Lux</div>
      </a>
      <div className="nav-links">
        {pages.map((title) => (
          <a
            className={links[title] === currentPage ? "active-link" : "link"}
            href={links[title]}
            key={links[title]}
          >
            {title}
          </a>
        ))}
        <a href="/cart" className="link">
          <img
            src="/shopping-cart-icon.png"
            width="18px"
            height="18px"
            alt="cart"
            style={{ marginRight: "5px" }}
          />
          {cartCount}
        </a>
      </div>
    </nav>
  );
}

export default Banner;
