import React, { Component } from 'react';





class InputField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {checked: false}
        
}

    handleChecked = (event) => {
        
       this.setState({
           checked: !this.state.checked
            })
            
        
    }

        render() {
           
        if(this.state.checked === true) {
            console.log("sant")
        } else {
            console.log("falskt")
        }
            
            
            
            
            return (

        <div className="InputField">

            <input type="checkbox"  defaultChecked={this.state.checked} onClick={(event) => this.handleChecked()} />Check for Inputfield<br/>
                   
            
            <input type="text" className="textField" readOnly={!this.state.checked}></input>
        </div>

        )

    }

}

export default InputField;