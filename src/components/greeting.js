import React from 'react'

class Greeting extends React.Component{
    constructor(props){
        super (props);
        this.click = this.click.bind(this);

        this.state ={
            greeting: "Hello"
        }
    }
    click(e) {
        console.log(e.target)
        if (this.state.greeting =='Hello'){
            this.setState({
                greeting:"Hello World"
            })
        }else if (this.state.greeting == "Hello World"){
        this.setState({
            greeting:"Hello"
        });
    }
            
    }
    render(){
        return (
            <div>
                <p>{this.state.greeting} </p>
                <button onClick={this.click}> Click ME</button>
            </div>
        )
    }
}
export default Greeting