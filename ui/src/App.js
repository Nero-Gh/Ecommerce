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
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import OrderSuccess from "./pages/OrderSuccess";
import OrderFail from "./pages/OrderFail";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import Wishlist from "./pages/Wishlist";
import AddressList from "./pages/AddressList";
import AddAddress from "./components/productCard/AddAddress";
import SellerLogin from "./pages/SellerLogin";
import SellerRegister from "./pages/SellerRegister";
import SellerDashboard from "./pages/SellerDshboard";
import AddProduct from "./pages/AddProduct";
import SellerProducts from "./pages/SellerProducts";

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
        <Route
          path="/categories/:category_slug/:category_id"
          element={<CategoryProduct />}
        />

        {/* Customer Routes */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/customer/register" element={<Register />} />
        <Route path="/customer/login" element={<Login />} />
        <Route path="/customer/Dashboard" element={<Dashboard />} />
        <Route path="/customer/orders" element={<Orders />} />
        <Route path="/customer/profile" element={<Profile />} />
        <Route path="/customer/change-password" element={<ChangePassword />} />
        <Route path="/customer/address" element={<AddressList />} />
        <Route path="/customer/add-address" element={<AddAddress />} />
        <Route path="/customer/wishlist" element={<Wishlist />} />
        <Route path="/order/success" element={<OrderSuccess />} />
        <Route path="/order/fail" element={<OrderFail />} />

        {/* Seller Routes */}
        <Route path="/seller/login" element={<SellerLogin />} />
        <Route path="/seller/register" element={<SellerRegister />} />
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
        <Route path="/seller/products" element={<SellerProducts />} />
        <Route path="/seller/add-product" element={<AddProduct />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
