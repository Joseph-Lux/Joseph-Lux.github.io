import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

function Banner() {
  const [menuOpen, setMenuOpen] = useState(false); // State to track if menu is open or closed
  const { cartCount } = useCart();
  const currentPage = useLocation().pathname;

  const pages = ["Home", "About", "Gallery", "Store", "Blog"];
  const links = {
    Home: "/",
    About: "/about",
    Gallery: "/gallery",
    Store: "/store",
    Blog: "/blog",
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menuOpen state
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPage]);

  return (
    <nav className="banner">
      <Link className="navbar-brand logo" to="/">
        <img
          className="rounded"
          src="/images/anchorBW-192x192.png"
          width="50"
          height=""
          alt=""
        />
        <div className="logo-text">Joseph Andrew Lux</div>
      </Link>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {" "}
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
      <div className="menu-toggle" onClick={toggleMenu}>
        {" "}
        &#9776;
      </div>
    </nav>
  );
}

export default Banner;
