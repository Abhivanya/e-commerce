import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./store/cartContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
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
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
