import React, { Component } from 'react';
import './randomNb.css'

class RandomNumberGame extends Component {
  constructor(props){
    super(props);
    this.state = {
      numberOfguesses : 0,
      theMagicNumber : 0,
      currentNumber: "",
      msgToUser : ""
    }
  }
  componentDidMount = () => {
    this.setState({
      theMagicNumber: Math.floor(Math.random()*100)
    })
    this.refs.userInput.focus();
  }

  handleClick = (e) =>{
    let theMagicNumber = this.state.theMagicNumber;
    let currentNumber = this.state.currentNumber;
    let msgToUser;

    if( currentNumber > 0 ){
      if( currentNumber ==  theMagicNumber ){
        msgToUser = "Grattis du gissade rätt!!"
      }else {
        this.setState({
          numberOfguesses : this.state.numberOfguesses + 1,
          currentNumber : ""
        })
        if(theMagicNumber > currentNumber ){
          msgToUser = "För lågt!"
        } else {
          msgToUser = "För högt!"
        }
      }
    }
    this.setState({ msgToUser }) // sätter meddelandet till användaren
    let timeMsg = setInterval( ()=>{
      this.setState({ msgToUser: ""})
      clearInterval(timeMsg)
    }, 1500);
    this.refs.userInput.focus();
  }

  updateCurrentNumber = (e) =>{
    this.setState({
      currentNumber : e.target.value
    })

  }

  checkPressedKey = (e) =>{                        // Gör så att endast 0-9 accepteras i inputfältet
    let minNumber = 48                            // motsvarar 0
    let maxNumber = 57                            // mostsvarar 9
    let currentNumber = this.state.currentNumber;
    if(e.charCode < minNumber || e.charCode > maxNumber ){
      e.preventDefault();
    } else if (e.charCode == minNumber ){         // Får ej börja med 0
      if(currentNumber.length < 1){
        e.preventDefault();
      }
    }
  }

  handleClickReset = () => {
    this.setState({
      numberOfguesses : 0,
      currentNumber : "",
      theMagicNumber: Math.floor(Math.random()*100),
      msgToUser : ""
    })
    this.refs.userInput.focus();
  }

  render(){

    return(
      <div className="container-RandomNumberGame">
        <p>Gissa på ett heltal mellan 0-100 </p>
        <p>Antal gissningar gjorda: { this.state.numberOfguesses }</p>
        {/* <p>The magic number: { this.state.theMagicNumber}</p> */}
        {/* <p>Nummer som gissas: { this.state.currentNumber }</p> */}
        <p>{ this.state.currentNumber>99 ? "För högt!! Måste va under 100.. kom igen nu!": "Vågar du gissa??"}</p>
        <input type="number" ref="userInput" onChange= { this.updateCurrentNumber } onKeyPress= { this.checkPressedKey } value={ this.state.currentNumber }/>
        <button onClick={ this.handleClick }> Gissa talet </button>
        <button onClick={ this.handleClickReset }> Reset </button>
        <div className="divMsgToUser"><p>{ this.state.msgToUser }</p></div>
      </div>
    );
  }
}

export default RandomNumberGame;
