import {React,Component} from 'react'
import {Card,Col,Row,Button} from 'react-bootstrap'


class Product extends Component {

   
  state = {
 
    like: this.props.product.like,
    quantity: this.props.product.quantity,
    ...this.props.product,
  }

  addLike = () => {
    this.setState({
      ...this.state, //pour charger aussi les autres attributs de product quand like change
      like: this.state.like + 1
    })
  }



  render() {
    return (
      <div>
         <Card style={{ width: "18rem" }} className="text-center" border="secondary">

        <Card.Header>
        <Card.Img
          variant="top"
          src={require("../assets/images/" + this.state.img)}
          alt="Product Img"
          height={200}
        />               
        </Card.Header>

        <Card.Body>
                    <Card.Title>Title : {this.state.name}</Card.Title>
                    <Card.Text>Likes : {this.state.like }</Card.Text>
                    <Card.Text>Quantity : {this.state.quantity }</Card.Text>
                    <Card.Text>Description : {this.state.description }</Card.Text>
                    <Card.Text>Price : {this.state.price} DT</Card.Text>

                    <Row className="justify-content-center align-items-center m-4">

                    <div className="btn-group" >
                    <Button onClick={this.addLike} className="btn btn-danger m-2">Like</Button>
                    <Button onClick={() => this.props.buyFunction(this.state)} disabled={this.state.quantity === 0} className="btn btn-warning m-2">Buy</Button>

                    </div>

                   </Row>
                    
          </Card.Body>
          </Card>
      </div>
    )
  }
}

export default Product;
