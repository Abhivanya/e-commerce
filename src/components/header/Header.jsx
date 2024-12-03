import React from "react";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
const Header = () => {
  return (
    <>
      <Nav className="justify-content-center bg-black " activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home" className="text-white ">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Store</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">About</Nav.Link>
        </Nav.Item>
      </Nav>
      <Nav className="justify-content-left bg-black " activeKey="/cart">
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            Cart <span>0</span>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Card bg="secondary" text="light" className="justify-content-center">
        <Card.Title as="h1">The Generics</Card.Title>
      </Card>
    </>
  );
};

export default Header;
