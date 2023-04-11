import { React, useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

//from class component to functionnal component 
function Product(props) {


  const navigate = useNavigate();
  const [product, setProduct] = useState(props.product);
 
  const addLike = () => {
    setProduct({ 
      //don't forget the spread
      ...product,
      
      like: product.like + 1 });
  };


  const redirectTo = () => {
    navigate("/products/updateProduct/"+product.id);
  }

  
 

  return (
    <div>
   
      <Card  style={{ width: '18rem' }}   className={"text-center" + (product.like >= 6 ? " bestProduct" : "")} border="secondary">
        <Card.Header>
          <Card.Img variant="top" src={require(`../assets/images/${product.img}`)} alt="Product Img" height={200} />
        </Card.Header>

        <Card.Body>
          <Card.Title><Link to={`/products/${product.id}`}>Title : {product.name}</Link></Card.Title>
          <Card.Text>Likes : {product.like}</Card.Text>
          <Card.Text>Quantity : {product.quantity}</Card.Text>
          <Card.Text>Description : {product.description}</Card.Text>
          <Card.Text>Price : {product.price} DT</Card.Text>
          <Row className="justify-content-center align-items-center m-4">
          <Button onClick={addLike} className="btn btn-success m-2">
            Like
          </Button>
        
          <Button
            onClick={() => props.buyFunction(product)}
            disabled={product.quantity === 0}
            className="btn btn-warning m-2"
          >
            Buy
          </Button>

          <Button
              variant="danger"
              onClick={() => props.deleteProd(product.id)}
            >
              Delete Product
            </Button>
          
           <Button onClick={redirectTo} className="btn btn-primary m-2">
            Update Product
          </Button>
           
        
          
        </Row>

        </Card.Body>
      </Card>
  
    </div>
  );
}

export default Product;
