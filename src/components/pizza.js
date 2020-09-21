import React from 'react'
import { Card,Button } from 'react-bootstrap'

class Pizza extends React.Component{

    checkPrice=()=>{
       var pizza = this
       this.props.addToCart(pizza)
    }
    render(){
        return(
            <div className="pizza" onClick={(e)=> this.handleClick}>
               
               <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Pizza name: {this.props.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Pizza Price: {this.props.price}</Card.Subtitle>
                    <Card.Text>
                   Some weird Pizza description just for fun.
                    </Card.Text>
                    <Button onClick={this.checkPrice} >Select </Button>
                </Card.Body>
                </Card>
                
            </div>
        )
    }
}
export default Pizza