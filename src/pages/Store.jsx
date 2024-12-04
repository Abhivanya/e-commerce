import React from "react";
import Cart from "../components/cart/Cart";
import Content from "../components/Content";
const Store = ({ isCartOpen, closeCart }) => {
  return (
    <>
      {" "}
      <Cart isCartOpen={isCartOpen} closeCart={closeCart} />
      <Content />
    </>
  );
};

export default Store;
