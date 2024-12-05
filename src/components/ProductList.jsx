import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  Row,
  Container,
  Button,
  Col,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import Style from "./ProductList.module.css";
import CartContext from "../store/cartContext";
import Cart from "./cart/Cart";
import { Link } from "react-router-dom";

const ProductList = ({ isCartOpen, closeCart }) => {
  const [showToast, setShowToast] = useState(false);
  const { addItem, cartItems } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const handleItem = (e, item) => {
    e.stopPropagation();
    let itemExits = false;
    for (let inx of cartItems) {
      if (item.id === inx.id) {
        itemExits = true;
        break;
      }
    }
    if (!itemExits) {
      setShowToast(true);
      addItem(item);
      // console.log(item);
    } else {
      alert("This item is already added to the cart");
    }
  };
  return (
    <div>
      <Cart isCartOpen={isCartOpen} closeCart={closeCart} />
      <Container
        className={Style.container}
        fluid="sm"
        style={{ width: "100%", margin: "0 auto" }}
      >
        <Row>
          {products.map((product, index) => (
            <Col key={product.id} sm={12} lg={6} xl={4} className="mb-4">
              <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card className={`${Style.card} border-0`}>
                  <Card.Body>
                    <h3 style={{ textAlign: "center" }}> {product.title}</h3>
                    <div className={Style["image-container"]}>
                      <Card.Img
                        src={product.image}
                        alt={product.title}
                        className={Style.cardImg}
                      />
                      <p>{product.description}</p>
                    </div>
                    <div className={Style.cardFooter}>
                      ${product.price}
                      <Button
                        variant="primary"
                        onClick={(e) => handleItem(e, product)}
                      >
                        ADD TO CART
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductList;
