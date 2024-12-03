import React from "react";
import Nav from "react-bootstrap/Nav";
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
          <Nav.Link eventKey="link-2">Disabled</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Header;
