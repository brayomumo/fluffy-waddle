import React from 'react';

class HelloWorld extends React.Component{
    constructor(props){
        super (props);
        let firstname = this.props.name.split(" ")[0];
        this.state = {
            name: firstname
        }
    }
    render() {
        return <h1>Hello World {this.state.name} !</h1>
    }
}
export default HelloWorld;