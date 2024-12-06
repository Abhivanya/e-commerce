import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import CartContext from "../../store/cartContext";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
const Header = ({ openCart }) => {
  const { count } = useContext(CartContext);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isStorePage = location.pathname === "/store";
  const isProductsPage = location.pathname === "/products";
  return (
    <>
      <Nav className="bg-black d-flex justify-content-end  mb-1">
        <div
          className="d-flex position-sticky justify-content-left bg-black  gap-5"
          style={{
            width: "60%",
          }}
        >
          <Nav.Item>
            <NavLink
              to="/"
              className="text-white "
              style={{ fontSize: "20px" }}
            >
              Home
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              to="/products"
              className="text-white "
              style={{ fontSize: "20px" }}
            >
              Products
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              to="/store"
              className="text-white "
              style={{ fontSize: "20px" }}
            >
              Store
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              to="/about"
              className="text-white "
              style={{ fontSize: "20px" }}
            >
              About
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              to="/login"
              className="text-white "
              style={{ fontSize: "20px" }}
            >
              Login
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              to="/contactus"
              className="text-white "
              style={{ fontSize: "20px" }}
            >
              Contact us
            </NavLink>
          </Nav.Item>
        </div>
        {isStorePage || isProductsPage ? (
          <div onClick={openCart} style={{ textAlign: "end" }}>
            <Nav.Item>
              <Nav.Link
                eventKey="link-2"
                className="text-white fw-bold"
                style={{ fontSize: "16px" }}
              >
                <div className="border fw-bold border-info p-1 rounded position-relative me-1">
                  Cart{" "}
                  <span
                    className="text-info position-absolute  bg-black rounded"
                    style={{ fontSize: "18px", top: "-10px", right: "-13px" }}
                  >
                    {count}
                  </span>
                </div>
              </Nav.Link>
            </Nav.Item>
          </div>
        ) : (
          <div></div>
        )}
      </Nav>

      <Card
        bg="secondary"
        text="light"
        className="justify-content-center d-flex align-items-start mt-1"
      >
        <Card.Title
          className="align-self-center pb-5 fw-bold"
          style={{ fontSize: "100px" }}
        >
          The Generics
        </Card.Title>
        {isHomePage && (
          <Card.Body style={{ margin: "0 auto" }}>
            <Button
              style={{
                display: "block",
                border: "1px solid #56CCF2",
                padding: "15px 30px",
                fontSize: "23px",
                fontWeight: "200",
                margin: "10px auto",
                background: "inherit",
                cursor: "pointer",
                color: "white",
              }}
            >
              Get our Latest Album
            </Button>
            <Button
              style={{
                cursor: "pointer",
                display: "block",
                border: "2px solid #56CCF2",
                borderRadius: "50%",
                padding: "20px",
                fontSize: "30px",
                fontWeight: "200",
                margin: "20px auto",
                background: "inherit",
                color: "#56CCF2",
              }}
            >
              ►
            </Button>
          </Card.Body>
        )}
      </Card>
    </>
  );
};

export default Header;
