import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux';

 
class App extends Component {

  render() {
    return (
      <div className="App">
      <button onClick={this.props.IncrementHandler}>Increment</button>
      <button onClick={this.props.DecrementHandler}>Decrement</button>
      <h1>{this.props.counter}</h1>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    IncrementHandler : () => dispatch({type:'INCREMENT'}),
    DecrementHandler : () => dispatch({type:'DECREMENT'})
  }
}

const mapStateToProps = (state) => {
  return{
    counter : state.counter
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (App) ;
