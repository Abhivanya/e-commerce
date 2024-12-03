import React, { useContext } from "react";
import CartContext from "../../store/cartContext";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
const Header = ({ openCart }) => {
  const { count } = useContext(CartContext);
  return (
    <>
      <Nav className="bg-black d-flex justify-content-end  mb-1">
        <div
          className="d-flex position-fixed justify-content-start  gap-5"
          style={{
            width: "70%",
          }}
        >
          <Nav.Item>
            <Nav.Link
              href="/home"
              className="text-white "
              style={{ fontSize: "20px" }}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-1"
              className="text-white "
              style={{ fontSize: "20px" }}
            >
              Store
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-2"
              className="text-white "
              style={{ fontSize: "20px" }}
            >
              About
            </Nav.Link>
          </Nav.Item>
        </div>
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
      </Nav>

      <Card
        bg="secondary"
        text="light"
        className="justify-content-center d-flex align-items-start"
      >
        <Card.Title
          className="align-self-center pb-5 fw-bold"
          style={{ fontSize: "100px" }}
        >
          The Generics
        </Card.Title>
      </Card>
    </>
  );
};

export default Header;
