import React, { useState } from "react";

const CartContext = React.createContext({
  count: 0,
  total: 0,
  cartItems: [],
  removeItem: (iitem) => {},
  addItem: (item) => {},
});

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const addItem = (item) => {
    setCartItems((prev) => [...prev, item]);
    setCount((prev) => prev + 1);
    setTotal((prev) => prev + item.price);
  };

  const removeItem = (item) => {
    const updatedItems = cartItems.filter((pro) => item.id !== pro.id);
    setCartItems(updatedItems);

    setCount((prev) => prev - 1);
    setTotal((prev) => prev - item.price);
  };
  const initialContextValue = {
    count: count,
    total: total,
    cartItems: cartItems,
    removeItem: removeItem,
    addItem: addItem,
  };
  return (
    <CartContext.Provider value={initialContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
