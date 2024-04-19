import "./App.css";
import React from "react";
import Banner from "./components/Banner";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Store from "./pages/Store";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPage from "./pages/BlogPage";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/store" element={<Store />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postTitle" element={<BlogPage />} />
        <Route path="/product/:productSlug" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
