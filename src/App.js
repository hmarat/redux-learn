import React, { Component } from 'react'
import classes from "./App.module.scss"
import {connect} from "react-redux"
import Counter from "./Counter/Counter.js"
import {add, asyncAdd} from "./redux/actions/actions"

class App extends Component{
  render(){
    return (
      <div className={classes.App}>
        <h1>Counter <strong>{this.props.counter}</strong></h1>
        <hr/>
        <div>
          <button onClick={this.props.onAdd}>Add counter</button>
          <button onClick={this.props.onSub}>Sub counter</button>
        </div>
        <div>
          <button onClick={this.props.onAsyncAdd}>Async add 100</button>
        </div>
        <Counter />
      </div>
    );
  }
  
}

const mapStateToProps = state =>{
  return {
    counter: state.counter1.counter
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    onAdd: () => {dispatch(add(1))},
    onSub: () => {dispatch(add(-1))},
    onAsyncAdd: () => {dispatch(asyncAdd(100))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
