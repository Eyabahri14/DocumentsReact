import { React, useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//from class component to functionnal component 
function Product(props) {
  const [product, setProduct] = useState(props.product);
 
  const addLike = () => {
    setProduct({ 
      //don't forget the spread
      ...product,
      
      like: product.like + 1 });
  };

  

  return (
    <div>
     
      <Card  style={{ width: '18rem' }}   className={"text-center" + (product.like >= 6 ? " bestProduct" : "")} border="secondary">
        <Card.Header>
          <Card.Img variant="top" src={require(`../assets/images/${product.img}`)} alt="Product Img" height={200} />
        </Card.Header>

        <Card.Body>
          <Card.Title><Link to={`/products/${product.name}`}>Title : {product.name}</Link></Card.Title>
          <Card.Text>Likes : {product.like}</Card.Text>
          <Card.Text>Quantity : {product.quantity}</Card.Text>
          <Card.Text>Description : {product.description}</Card.Text>
          <Card.Text>Price : {product.price} DT</Card.Text>

          <Row className="justify-content-center align-items-center m-4">
            <div className="btn-group">
              <Button onClick={addLike} className="btn btn-danger m-2">
                Like
              </Button>
              <Button
                onClick={() => props.buyFunction(product)}
                disabled={product.quantity === 0}
                className="btn btn-warning m-2"
              >
                Buy
              </Button>
            </div>
          </Row>
        </Card.Body>
      </Card>
  
    </div>
  );
}

export default Product;
