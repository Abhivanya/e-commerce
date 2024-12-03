import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { CartProvider } from "./store/cartContext";
import MyModal from "./model/MyModal";
const App = () => {
  return (
    <CartProvider>
      <Header />
      <Content />
      <Footer />
      <MyModal />
    </CartProvider>
  );
};

export default App;
