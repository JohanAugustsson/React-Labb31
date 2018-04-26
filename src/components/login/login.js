import React , { Component } from 'react';
import './login.css'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoggedIn : false
    }
  }

  handleClick = () => {
    this.setState({
      isLoggedIn : !this.state.isLoggedIn
    })
  }

  render() {
    let btnClass , btnText;
    let inlogg = ""


    if (this.state.isLoggedIn){
      btnClass = "btnIn";
      btnText = "inloggad";
      inlogg = (
        <h1> Inloggad </h1>
      )
    } else {
      btnClass = "btnOut";
      btnText = "utloggad";
      inlogg = (
        <h1> ej inloggad </h1>
      )
    }

    return (
      <div className="container-login">
        <button onClick={ this.handleClick } className={ btnClass }> { btnText } </ button>
        { inlogg }
      </div>
    );
  }
}

export default Login;
