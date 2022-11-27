//Texting
import { lazy } from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/:products_slug/:product_id"
          element={<ProductDetail />}
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/categories/:category_slug/:category_id"
          element={<CategoryProduct />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
