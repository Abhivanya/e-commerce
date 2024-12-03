import React from "react";
import { Card, Row, Container, Button, Col } from "react-bootstrap";
import Style from "./Content.module.css";
const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const Content = () => {
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
      <Container fluid="sm" style={{ width: "58%", margin: "0 auto" }}>
        <Row>
          {productsArr.map((product, index) => (
            <Col key={index + new Date()} sm={12} lg={6} className="mb-4">
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
                    <Button variant="primary">ADD TO CART</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Content;
