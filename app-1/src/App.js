// import React, { Component } from 'react';
// import './App.css';

// export default class App extends Component{
//   constructor(props){
//     super(props)
//     this.state={
//       userInput:''
//     }
//   }
//   handleInput=(val)=> {
//     this.setState({
//       userInput: val
//     })
//   }
//   render(){
//     return(
//       <div>
//         <input onChange={(e)=> this.handleInput(e.target.value)}/>
//         <p> {this.state.userInput}</p>
//       </div> 
//     )
//   }
// }


import React, {Component} from 'react';

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      message:''
    }
  }
  handleMessage=(val)=> {
    this.setState({message:val})
  }
  render(){
    return(
      <div>
        <input value={this.state.message} onChange={(e)=> this.handleMessage(e.target.value)}/>
        <p>{this.state.message}</p>
      </div> 
    )
  }
}
