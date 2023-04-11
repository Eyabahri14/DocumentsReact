import Product from './Product';
// import products from "../products.json";
import {Card,Col,Row} from 'react-bootstrap'
import { Alert } from 'react-bootstrap';
import { Component, useEffect, useState } from "react";
import { getallProducts } from "../service/api";
import { deleteProduct } from "../service/api";

function Products (){
  const [Greeting,setGreeting]= useState(false) //initialiser Greeting à false
  const [product, setProduct] = useState({})
   const [showMessage,setShowMessage]=useState(false)
   const [products, setProducts] = useState([]);//pour affecter le resultat de la fct getAllProducts


//appel de l'api 
   useEffect(() => {
    const fetchData = async () => {
      const result = await getallProducts();
      setProducts(result.data);
    };
    fetchData();
  }, []);


  useEffect(() => {
    console.log("I have finished rendering avec un état = " + Greeting);
    setGreeting(true) //initialiser Greeting à true
    setTimeout(() => {
      setGreeting(false)
    }, 3000);
    return () => {
      console.log("I'm being destroyed");
    }
  }, []) //va devenir false aprés 3s qui sont 3000ms
  

  const deleteProd = async (id) => {
    const result = window.confirm("Are you sure you want to delete?");
    if (result) {
    try {
    await deleteProduct(id);
    console.log("Product deleted");
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    } catch (error) {
    console.log("Error deleting product");
    }
    }
    };

  const buy = (product) => {
    setProduct({
      ...product,
      quantity: product.quantity--
    });
    setShowMessage(true)
    setTimeout(() => {
      setShowMessage(false)
    }, 2000);
  };
  
     

  
    return (
      <div>
          {Greeting && (
          <Alert variant="success">
            <Alert.Heading>Hey, Welcome To Our Shop <strong> MyStore </strong>    </Alert.Heading>
            <p>
            Thank you for choosing our store, we hope you enjoy your shopping experience!
            </p>
            <hr />
          </Alert>
        ) 
        }



<Row className="justify-content-center m-4">
     {products.map((product,index)=>(
        <Col key ={index}  sm={4} >
      <Product 
      product={product}
      buyFunction={buy}
      deleteProd={deleteProd}
       />
       </Col>
     )
     )
     }
 </Row>
 
      </div>

    )
  

    }
export default Products; 