import "./App.css";
import React from "react";
import Banner from "./components/Banner";
import { Route, Routes, Switch } from "react-router-dom";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Store from "./pages/Store";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPage from "./pages/BlogPage";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import CheckoutForm from "./pages/Checkout";
import Return from "./pages/Return";
import PageNotFound from "./pages/PageNotFound";
import ScrollToTopOnMount from "./components/ScrollToTopOnMount";

function App() {
  return (
    <>
      <Banner />
      <ScrollToTopOnMount />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/store" element={<Store />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postTitle" element={<BlogPage />} />
        <Route path="/product/:productSlug" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/return" element={<Return />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
