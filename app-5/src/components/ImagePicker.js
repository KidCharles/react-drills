import React, { Component } from 'react';

import Image from './ImageRender';

export default class ImagePicker extends Component{
    constructor(props){
        super(props)
        this.state={
            input:''
        }
    }
    handleInput=(val)=> {
        this.setState({
            input:val
        })
    }
    render(){
        return(
            <div>
                <input value={this.state.input} placeHolder='image url here' onChange={(e)=> this.handleInput(e.target.value)}/>
                <br/>
                <br/>
                <br/>
                <Image
                img={this.state.input}
                />
            </div> 
        )
    }
}