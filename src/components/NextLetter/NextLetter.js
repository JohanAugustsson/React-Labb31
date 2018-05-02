import React, { Component } from 'react';


class NextLetter extends React.Component {
    
    constructor(props) { 
        super(props);
        this.state = {  
            
            letters:'',
            numberOfStep: 1
        } 
}

    nextLetter = (event) => {
        let str = event.target.value
        var list = str.split("")
       
       
        let newList = list.map(x=>{
           
            let nb = x.charCodeAt(0);
            
            nb = nb+ Number(this.state.numberOfStep)
            
            if(nb > 122) {
                nb -= 26
            } 
           
            let y = String.fromCharCode(nb);
            
            return y;
             
            
        })
        
        
        
        this.setState({
            letters: newList
            
            
        })
         // lettersToReplace.push(this.event.target.value )
    }
    
    handleNumber = (event) => {
        
        let number = event.target.value
        
        
        if(number > 25 || number < 1) {
            
            alert("NOPE")
            
            
        } else {
            
        
            
        
        
        
        
        this.setState({
            numberOfStep: event.target.value,
            letters: ''
            
            })
        }
        
    }
    
        render() {
          
        
            
            
            
            
            return (

        <div className="NextLetter">
            
            <input value={this.state.letters}  type="text" id="inputField" onChange={this.nextLetter.bind(this)} ></input>
                    <br/> <h3>Get the next letter!</h3>
                    <h4> { this.state.letters } </h4>


                    <input value={this.state.numberOfStep} type="number" id="inputField2" onChange={this.handleNumber.bind(this)}></input>
                        <h4> Skriv ett nummer från 1-25 </h4>
            
        </div>

        )//return

    }//render

}//component

export default NextLetter;