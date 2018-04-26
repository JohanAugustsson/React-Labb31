import React, { Component } from 'react';
import './App.css';
import Login from './components/login/login'
import RandomNumberGame from './components/randomNb/randomNb'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      test : "hej"
    }
  }


  render() {
    return (
      <div className="App">
        <Login />
        <RandomNumberGame />
      </div>
    );
  }
}

export default App;
