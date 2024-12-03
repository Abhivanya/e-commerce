import React, { useContext, useState } from "react";
import {
  Card,
  Row,
  Container,
  Button,
  Col,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import Style from "./Content.module.css";
import CartContext from "../store/cartContext";
const productsArr = [
  {
    id: 1,
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: 2,
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: 3,
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: 4,
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const Content = () => {
  const [showToast, setShowToast] = useState(false);
  const { addItem, cartItems } = useContext(CartContext);
  const handleItem = (item) => {
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
      console.log(item);
    } else {
      alert("This item is already added to the cart");
    }
  };
  return (
    <div>
      <h2
        className="align-self-center"
        style={{
          fontFamily: "Metal Mania",
          width: "80%",
          margin: "35px auto",
          textAlign: "center",
          fontSize: "35px",
          color: "black",
        }}
      >
        Music
      </h2>
      <Container fluid="sm" style={{ width: "100%", margin: "0 auto" }}>
        <Row>
          {productsArr.map((product, index) => (
            <Col
              key={index + new Date()}
              sm={12}
              lg={6}
              xl={4}
              className="mb-4"
            >
              <Card className={`${Style.card} border-0`}>
                <Card.Body>
                  <h3 style={{ textAlign: "center" }}> Album {index + 1}</h3>
                  <div className={Style["image-container"]}>
                    <Card.Img
                      src={product.imageUrl}
                      alt={product.title}
                      className={Style.cardImg}
                    />
                  </div>
                  <div className={Style.cardFooter}>
                    ${product.price}
                    <Button
                      variant="primary"
                      onClick={() => handleItem(product)}
                    >
                      ADD TO CART
                    </Button>
                  </div>
                </Card.Body>
              </Card>
              <ToastContainer
                position="bottom-end"
                className="mb-4 me-1"
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  width: "400px",
                }}
              >
                <Toast
                  bg={"info"}
                  onClose={() => setShowToast(false)}
                  show={showToast}
                  delay={3000}
                  autohide
                >
                  <Toast.Body style={{ fontSize: "16px" }}>
                    Your Product :{" "}
                    <span style={{ color: "red" }}>{product.title}</span> is
                    added to the cart
                  </Toast.Body>
                </Toast>
              </ToastContainer>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Content;
