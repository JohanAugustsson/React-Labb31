import React, { Component } from 'react';


class NextLetter extends React.Component {
    
    constructor(props) { 
        super(props);
        this.state = { letters:''}
}

    nextLetter = (event) => {
        let str = event.target.value
        var list = str.split("")
       
       
        let newList = list.map(x=>{
           
            let nb = x.charCodeAt(0);
            
            if(nb===122) {
                nb = 97
            } else {
                nb++
            }
           
            let y = String.fromCharCode(nb);
            
            return y;
             
            
        })
        
        this.setState({
            letters: newList
            
        })
         // lettersToReplace.push(this.event.target.value )
    }
        render() {
          
        
            
            
            
            
            return (

        <div className="NextLetter">
            
            <input type="text" id="inputField" onChange={this.nextLetter.bind(this)} ></input>
                    <br/> <h3>Get the next letter!</h3>
                    <h4> { this.state.letters } </h4>
            
        </div>

        )//return

    }//render

}//component

export default NextLetter;