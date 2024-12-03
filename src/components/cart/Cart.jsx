import React, { useState, useContext } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Style from "./Cart.module.css";
import CartContext from "../../store/cartContext";
function Cart({ isCartOpen, closeCart }) {
  // Sample cart items
  const { cartItems, total, removeItem } = useContext(CartContext);
  const cartState = isCartOpen ? "d-block" : "d-none";

  return (
    <Container id="cart" className={`my-4 ${Style.cart} ${cartState}`}>
      {/* Header */}
      <Row>
        <Col className="text-end ">
          <Button
            variant="white"
            className="cancel border border-secondary p-1 rounded "
            onClick={closeCart}
          >
            X
          </Button>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <h2>CART</h2>
        </Col>
      </Row>

      <Row className="cart-header">
        <Col xs={4} className={`${Style.heading} fw-bold heading`}>
          ITEM
        </Col>
        <Col className={`${Style.heading} fw-bold heading`}>PRICE</Col>
        <Col className={`${Style.heading} fw-bold heading`}>QUANTITY</Col>
      </Row>

      {cartItems.length > 0 &&
        cartItems.map((item) => (
          <Row
            key={item.id}
            className={`${Style.rowItem} cart-row align-items-center my-3`}
          >
            <Col className="cart-item cart-column d-flex align-items-center">
              <Image
                src={item.imageUrl}
                alt={item.name}
                rounded
                style={{ width: "50px", height: "50px", marginRight: "10px" }}
              />
              <span>{item.title}</span>
            </Col>
            <Col className="cart-price ps-5 cart-column">
              ${item.price.toFixed(2)}
            </Col>
            <Col className="cart-quantity cart-column d-flex align-items-center">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, e.target.value)}
                className={`${Style.input} form-control me-2`}
                style={{ width: "60px" }}
                defaultValue={1}
                placeholder="1"
              />
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeItem(item)}
              >
                REMOVE
              </Button>
            </Col>
          </Row>
        ))}

      <Row className="cart-total mt-3">
        <Col className={`text-end ${Style.total}`}>
          <strong>Total </strong> ${total.toFixed(2)}
        </Col>
      </Row>

      <Row className="mt-4 ">
        <Col className={Style.btn}>
          <Button variant="primary" className="purchase-btn">
            PURCHASE
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
