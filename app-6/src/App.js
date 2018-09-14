import React, { Component } from 'react';
import ToDo from './ToDo';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      tasks:[],
      input:''
    }
  }
    handleInput=(val)=> {
      this.setState({input:val})
    }
    handleClick=()=>{
      let inputVal = this.state.input
      let task= this.state.tasks.slice()
      task.push(inputVal)
      this.setState({
        tasks:task,
        input:''
      })
    }
  render() {
    console.log(this.state)
    let mappedTasks=this.state.tasks.map((e,i)=> {
      return(
        <div key={i}>
          <h3>{e}</h3>
        </div> 
      )
    })
    return (
      <div className="App">
      <ToDo
      fn1={this.handleInput}
      fn2={this.handleClick}
      input={this.state.input}
      />
      {mappedTasks}
      </div>
    );
  }
}

export default App;
