// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {
    constructor(){
        super()

    }

     handleKeyUp=(e) =>{
        console.log('Entering password...')
        

    }

    render() {
        return (
            <div>
                <input type="password" onKeyUp={this.handleKeyUp}/>
                
            </div>
        )
    }
}

