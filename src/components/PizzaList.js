import React, { Component } from 'react'
import Pizza from './pizza'

class PizzaList extends Component {
    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.state = {
            pizzas: [
                {
                    "index": 1,
                    "name": "Pizza1",
                    "price": 250,
                },
                {
                    "index": 2,
                    "name": "Pizza2",
                    "price": 350,
                },
                {
                    "index": 3,
                    "name": "Pizza3",
                    "price": 450,
                },
                {
                    "index": 4,
                    "name": "Pizza4",
                    "price": 550,
                },
                {
                    "index": 5,
                    "name": "Pizza5",
                    "price": 650,
                }
            ]
        }
    }
   handleItemClick(pizza){
    //    console.log(itemPrice)
    this.props.calculateTotalPrice(pizza)
   }
   
    render() {
        return (
            <div className='PizzaList'>
                <div className='row'>
                 
                    {this.state.pizzas.map((pizza => (
                        <li key={pizza.index}>
                            <Pizza addToCart={this.handleItemClick} name={pizza.name} price={pizza.price + this.props.newprice} />
                          
                        </li>

                    )))}
                </div>
            </div>
        );
    }
}
export default PizzaList;