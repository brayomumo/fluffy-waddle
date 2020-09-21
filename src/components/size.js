import React from 'react'
import { Button, Form } from 'react-bootstrap';
import PizzaList from './PizzaList'


class Sizes extends React.Component {
    constructor(props) {
        super(props);
        this.sumPrice = this.sumPrice.bind(this);
        this.state = {
            totalPrice: [],
            categories: [
                {
                    "index": 1,
                    "name": "Small",
                    "price": 200
                },
                {
                    "index": 2,
                    "name": "Medium",
                    "price": 300
                },
                {
                    "index": 3,
                    "name": "Large",
                    "price": 400
                }
            ]
        };
    }
    sumPrice(pizza) {
        var price = pizza.props.price;
        this.props.sendCart(price, pizza.props);
    }

    render() {
        return (
            <div className="Sizes">
                <div>
                    <ul className='pizza'>
                        {this.state.categories.map((category => (

                            <li key={category.index}>
                                <h1 className='btn-danger'>{category.name}</h1>
                                <PizzaList calculateTotalPrice={this.sumPrice} newprice={category.price} />

                            </li>
                        )))
                        }
                    </ul>
                </div>

            </div>
        )
    }
}

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.updateCart = this.updateCart.bind(this)
        this.clearCart = this.clearCart.bind(this);
        this.checkout = this.checkout.bind(this);
        this.state = {
            price: 0,
            items: [],
            person: {
                firstname: "",
                lastname: " ",
                location: " ",
            }
        }
    }
    updateCart(newPrice, newItem) {
        this.setState((prevState, props) => ({
            price: prevState.price + newPrice,
            items: prevState.items.concat({
                "type": newItem.name,
                "price": newItem.price
            })
        }));
    }
    clearCart() {
        this.setState({
            price: 0,
            items: []
        })

    }
    checkout() {
		console.log(this.state.price)
		alert("Thanks for shopping with us today "+this.state.person.firstname+" "+this.state.person.lastname+"\n Your odrder will be delivered at "+this.state.person.location)
		window.location.reload(false)
		
    }
    handleChange(event) {
        let person = this.state.person
        person[event.target.name] = event.target.value;
        this.setState({ person });
    }
    render() {
        return (<div>
            <div className="container">
                <div className='Sizes'>
                    <Sizes sendCart={this.updateCart} />
                </div>
                <h2>------CART------</h2>
                <div>
                    <div>
                        {this.state.items.map((item, i) => (
                            <ul key={i}>
                                <li> name: {item.type}</li>
                                <li>Price: {item.price}</li>
                            </ul>
                        ))}
                    </div>
                    <h3>Total Price: {this.state.price}</h3><br></br>
                   
                </div>
            </div>
            <Form>
			    <Form.Control  placeholder='First name' type='text' name='firstname'value={this.state.firstname} onChange={this.handleChange.bind(this)} /><br></br>
				<Form.Control type='text' placeholder='Last name' name='lastname' value={this.state.lastname} onChange={this.handleChange.bind(this)} /><br></br>
				<Form.Control type='text' placeholder='Delivery Location' name='location' value={this.state.location} onChange={this.handleChange.bind(this)} /><br></br>
            </Form><br></br>
			<Button onClick={this.checkout.bind(this)} classname='btn btn-primary'>Checkout</Button>
                    <Button onClick={this.clearCart.bind(this)} className='btn-danger'>Clear Cart</Button>
        </div>

        )
    }
}
export default Cart;
