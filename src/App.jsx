import React, { useContext, useState, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./store/cartContext";
import AuthContext from "./store/authContext";

import Login from "./pages/Login";
import Home from "./pages/Home";

const ContactUs = lazy(() => import("./pages/ContactUs"));
const About = lazy(() => import("./pages/About"));
const Store = lazy(() => import("./pages/Store"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const ProductList = lazy(() => import("./components/ProductList"));

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);

  const closeCart = () => setIsCartOpen(false);
  const openCart = () => setIsCartOpen(true);

  return (
    <CartProvider>
      <BrowserRouter>
        <Header openCart={openCart} />
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            {isLoggedIn && (
              <Route
                path="/store"
                element={
                  <Store isCartOpen={isCartOpen} closeCart={closeCart} />
                }
              />
            )}
            <Route path="/about" element={<About />} />
            {!isLoggedIn && <Route path="/login" element={<Login />} />}
            <Route
              exact
              path="/products"
              element={
                <ProductList isCartOpen={isCartOpen} closeCart={closeCart} />
              }
            />
            {isLoggedIn && (
              <Route path="/product/:productId" element={<ProductDetails />} />
            )}
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
