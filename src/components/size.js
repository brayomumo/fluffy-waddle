import React from 'react'
import PizzaList from './PizzaList'

var cart = {
    "price":0,
    "pizzas":[]
}
class Sizes extends React.Component{
    constructor(props){
        super (props);
        this.sumPrice = this.sumPrice.bind(this);
        this.state = {
            totalPrice:[],
            categories: [
                {
                    "index":1,
                    "name": "Small",
                    "price": 200
                },
                {
                    "index":2,
                    "name": "Medium",
                    "price": 300
                },
                {
                    "index":3,
                    "name": "Large",
                    "price": 400
                }
            ]
        };
    }
 sumPrice(pizza){
        cart.pizzas.push(pizza)
        this.updateCart()
    console.log(cart)
 }
 updateCart= () =>{
    var totalPrice=0;
    for(var i=0; i< cart.pizzas.length;i++){
        totalPrice +=cart.pizzas[i].props.price
    }
    cart.price = totalPrice
    return cart;
}
    render() {
        return(
            <div className="Sizes">
                <div>
                <ul className='pizza'>
                    {this.state.categories.map((category =>(
                        
                        <li key={category.index}>
                           <h1 className='btn-danger'>{category.name}</h1> 
                            <PizzaList calculateTotalPrice={this.sumPrice} newprice = {category.price} />
                            
                        </li>
                    )))
                    }
                     </ul>
                </div>
               
            </div>
        )
    }
}
export default Sizes;