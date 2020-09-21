import React, { Component }from 'react'
import ReactDOM from 'react-dom'

class FirstComponent extends Component{
    render() {
        return(
            <div className='firstComponent'>
                Hello, This is the first component.
            </div>
        )
    }
}
ReactDOM.render(
    <FirstComponent/>,
    document.getElementById('content')
)