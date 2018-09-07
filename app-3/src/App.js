// import React, { Component } from 'react';

// export default class App extends Component{
//   constructor(){
//     super()
//     this.state={
//       list:['mango', 'poppy', 'rumble', 'Granita', 'GranBob'],
//       input:''
//     }
//   }
//   handleInput=(val)=> {
//     this.setState({input:val})
//   }
//   render(){
//     let listToDisplay=this.state.list.filter((e,i)=> {
//       return e.includes(this.state.input)
//     }).map((e,i)=> {
//       return(
//         <h4 key={i}>{e}</h4>
//       )
//     })
//     return(
//       <div>
//         list
//         <input value={this.state.input} onChange={(e)=> this.handleInput(e.target.value)}/>
//         {listToDisplay}
//       </div> 
//     )
//   }
// }


import React, {Component} from 'react';

export default class App extends Component{
  constructor(){
    super()
    this.state={
      sayians:['Kakorot', 'Prince Vageta', 'Gohan', 'Trunks'],
      name:''
    }
  }
  searchName=(val)=> {
    this.setState({name:val})
  }
  render(){
    let {sayians, name}=this.state;
    let mappedSayians=sayians.filter((e,i)=> {
      return e.includes(name)
    }).map((e,i)=> {
      return(
        <h4 key={i}>{e}</h4>
      )
    })
    return(
      <div>
        <input value={this.state.name} onChange={(e)=> this.searchName(e.target.value)}/>
        {mappedSayians}
      </div> 
    )
  }
}