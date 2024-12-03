import React from "react";
import { Card, Container, Button } from "react-bootstrap";

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
    <Container>
      {productsArr.map((product, index) => (
        <Card key={index + product.name}>
          <Card.Header>Album {index + 1} </Card.Header>
          <Card.Img variant="top" src={`${product.imageUrl}`} thumbnail />
          <Card.Body>
            {product.price}
            <Button variant="primary">ADD TO CART</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Content;
