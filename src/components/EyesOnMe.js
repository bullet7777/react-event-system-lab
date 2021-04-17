// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {
    constructor(){
        super()
    }

    handleOnFocus=(e) =>{
        console.log('Good!')

    }
    handleOnBlur=(e) =>{
        console.log('Hey! Eyes on me!')
    }



    render() {
        return (
            <div>
                <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}></button>
            </div>
        )
    }
}
