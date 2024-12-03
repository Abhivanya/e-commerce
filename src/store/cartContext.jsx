import React, { useState } from "react";

const initialContextValue = {
  count: 0,
  total: 0,
  cartItems: [],
  removeItem: (id) => {},
  addItem: (item) => {},
};
const CartContext = React.createContext({
  count: 0,
  total: 0,
  cartItems: [],
  removeItem: (id) => {},
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

  const removeItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);

    setCount((prev) => prev - 1);
    setTotal((prev) => prev - item.price);
  };
  return (
    <CartContext.Provider value={initialContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
