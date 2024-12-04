import React from "react";
import Cart from "../components/cart/Cart";
import Content from "../components/Content";
import { Button, Container } from "react-bootstrap";
const tours = [
  {
    id: 1,
    date: "JUL16",
    place: "DETROIT, MI",
    specification: "DTE ENERGY MUSIC THEATRE",
  },
  {
    id: 2,
    date: "JUL19",
    place: "TORONTO,ON",
    specification: "BUDWEISER STAGE",
  },
  {
    id: 3,
    date: "JUL 22",
    place: "BRISTOW, VA",
    specification: "JIGGY LUBE LIVE",
  },
  {
    id: 4,
    date: "JUL 29",
    place: "PHOENIX, AZ",
    specification: "AK-CHIN PAVILION",
  },
  {
    id: 5,
    date: "AUG 2",
    place: "LAS VEGAS, NV",
    specification: "T-MOBILE ARENA",
  },
  {
    id: 6,
    date: "AUG 7",
    place: "CONCORD, CA",
    specification: "CONCORD PAVILION",
  },
];
const Home = () => {
  return (
    <Container fluid="md " style={{ margin: "50px auto" }}>
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
        TOURS
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
        }}
      >
        {tours.map((tour) => (
          <div
            key={tour.id}
            style={{
              borderBottom: "1px solid black",
              fontSize: "16px",
              display: "flex",
              justifyContent: "space-around",
              padding: "6px",
              color: "#777777",
            }}
          >
            <span>{tour.date}</span>
            <span>{tour.place}</span>
            <span style={{ width: "230px" }}>{tour.specification}</span>
            <Button
              style={{
                fontWeight: "600",
                fontSize: "14px",
                backgroundColor: "#56CCF2",
              }}
            >
              BUY TICKETS
            </Button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Home;
