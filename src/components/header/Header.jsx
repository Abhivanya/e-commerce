import React from "react";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
const Header = () => {
  return (
    <>
      <Nav className="bg-black d-flex justify-content-between  mb-1">
        <div
          className="d-flex justify-content-end  gap-5"
          style={{
            width: "60%",
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
        <div>
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
                  1
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
