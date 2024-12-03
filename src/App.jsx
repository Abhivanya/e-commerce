import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { CartProvider } from "./store/cartContext";
import Cart from "./components/cart/Cart";
const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const closeCart = () => setIsCartOpen(false);
  const openCart = () => setIsCartOpen(true);
  return (
    <CartProvider>
      <Cart isCartOpen={isCartOpen} closeCart={closeCart} />
      <Header openCart={openCart} />
      <Content />
      <Footer />
    </CartProvider>
  );
};

export default App;
