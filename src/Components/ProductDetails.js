import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getallProducts } from "../service/api";

function ProductDetails() {
  const {id} = useParams();

  const [product, setProduct] = useState({});


  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const response = await getallProducts(id);
    setProduct(response.data); //ajout de la reponse dans product du useState
    console.log(response.data);
  };

  return (
  <div>
      {product.id !== undefined ? (
     <Card  style={{ width: '18rem' }}   className={"text-center" + (product.like >= 6 ? " bestProduct" : "")} border="secondary">
        <Card.Header>
        <Card.Img variant="top" src={product.img && require("../assets/images/" + product.img)} alt="Product Img" height={200} />

        </Card.Header>

        <Card.Body>
          <Card.Title>Title : {product.name}</Card.Title>
          <Card.Text>Likes : {product.like}</Card.Text>
          <Card.Text>Quantity : {product.quantity}</Card.Text>
          <Card.Text>Description : {product.description}</Card.Text>
          <Card.Text>Price : {product.price} DT</Card.Text>

         
        </Card.Body>
      </Card>
      ): (
        <p> Product does not exist </p>
      )}
  </div>
  );
}

export default ProductDetails;