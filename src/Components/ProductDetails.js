import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import products from "../products.json";

function ProductDetails() {
    const {name} = useParams();
    const product = products.find((product)=>product.name === name);
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
     
      <Card  style={{ width: '18rem' }}   className={"text-center" + (product.like >= 6 ? " bestProduct" : "")} border="secondary">
        <Card.Header>
          <Card.Img variant="top" src={require(`../assets/images/${product.img}`)} alt="Product Img" height={200} />
        </Card.Header>

        <Card.Body>
          <Card.Title>Title : {product.name}</Card.Title>
          <Card.Text>Likes : {product.like}</Card.Text>
          <Card.Text>Quantity : {product.quantity}</Card.Text>
          <Card.Text>Description : {product.description}</Card.Text>
          <Card.Text>Price : {product.price} DT</Card.Text>

         
        </Card.Body>
      </Card>
  
    </div>
  )
}

export default ProductDetails