import React, { Component } from 'react';
import '../Inputfield/Inputfield.css';
import InputField from '../Inputfield/Inputfield.js';





class Tabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {page: 0 };

}

    btnClick = (event,pageNumber) => { 
        if(pageNumber === this.state.page) {
            pageNumber = 0
        }
        console.log(pageNumber)
            this.setState({
                page: pageNumber

        })
}

    render() {

    let tabs;
        if(this.state.page === 1) {
            tabs = (
               <InputField/>
            )
        } 

        return (

                <div className="Tabs">

                        <div className="tab">

                            <button onClick={ (event) => this.btnClick(event,1)}>TAB ONE</button>

                            <button onClick={ (event) => this.btnClick(event,2)}>TAB TWO</button>

                            <button onClick={ (event) => this.btnClick(event,3)}>TAB THREE</button>

                      </div>

                    { tabs }

                    </div>

          );

   }

}

export default Tabs;