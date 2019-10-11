import React, { Component } from 'react'
import {connect} from "react-redux"
import {add2} from "../redux/actions/actions"

class Counter extends Component {
componentDidMount(){
    console.log("Counter 2/ Component did mount ")
}

    render() {
        return (
            <div style={{border: "1px solid grey", padding: "20px", margin: "50px 20px"}}>
                <h1>Counter <strong>{this.props.counter}</strong></h1>
                <hr/>
                <div>
                    <button onClick={this.props.onAdd}>Add</button>
                    <button onClick={this.props.onSub}>Sub</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        counter: state.counter2.counter
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onAdd: () => {dispatch(add2(1))},
        onSub: () => {dispatch(add2(-1))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)