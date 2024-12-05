import React, { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Style from "./ProductDetails.module.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const getProducts = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className={Style.container}>
      <h1>{product.title}</h1>
      <div className={Style.content}>
        <Image src={product.image} rounded />
        <div className={Style.details}>
          <h2>
            <span style={{ color: "blue" }}>Category :</span> {product.category}
          </h2>
          <p>{product.description}</p>
          <div className={Style.btn}>
            <span> Price : ${product.price}</span>
            <Button>Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
