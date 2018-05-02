import React, { Component } from 'react';
import './App.css';
import './components/Tabs/Tabs.css';
import Login from './components/login/login'

import Tabs from './components/Tabs/Tabs.js';

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
        
        <Tabs/>
      </div>
    );
  }
}

export default App;
