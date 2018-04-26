import React, { Component } from 'react';

class RandomNumberGame extends Component {
  constructor(props){
    super(props);
    this.state = {
      numberOfguesses : 0,
      theMagicNumber : 0,
      currentNumber: 0
    }
  }
  componentDidMount = () => {
    console.log("nu är den renderad");
    this.setState({
      theMagicNumber: Math.floor(Math.random()*100)
    })
  }

  handleClick = () =>{
    console.log("tjoho");

  }

  render(){

    return(
      <div>
        Hejsan på dig
        <input type="text" />
        <button onClick={ this.handleClick }> klick me </button>
      </div>
    );
  }
}

export default RandomNumberGame;
