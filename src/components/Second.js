import React, { Component} from 'react';

class SecondComponent extends Component{
    constructor(props){
        super(props);
        this.state ={
            toggle:true
        };
        // this is to bind contenxt when passing Onclick as a callback 
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        this.setState((prevState, props) =>({
            toggle: !prevState.toggle
        }));
    }
    render() {
        return (
            <div onClick={this.onClick}>
                Hello  {this.props.name}! I am the SecondComponent<br>
                </br>
                Toggle is: {this.state.toggle}
            </div>
        );
    }
}
export default SecondComponent;