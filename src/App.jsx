import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./store/cartContext";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Store from "./pages/Store";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./components/ProductList";
import Login from "./pages/Login";
const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const closeCart = () => setIsCartOpen(false);
  const openCart = () => setIsCartOpen(true);
  return (
    <CartProvider>
      <BrowserRouter>
        <Header openCart={openCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/store"
            element={<Store isCartOpen={isCartOpen} closeCart={closeCart} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route
            exact
            path="/products"
            element={
              <ProductList isCartOpen={isCartOpen} closeCart={closeCart} />
            }
          />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
