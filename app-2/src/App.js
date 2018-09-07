// import React, { Component } from "react";

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       food: [],
//       userInput: ""
//     };
//   }
//   handleInput = e => {
//     this.setState({ userInput: e });
//   };
//   handleClick = input => {
//     let foods = this.state.food;
//     foods.push(input);
//     this.setState({
//       food: foods,
//       userInput: ""
//     });
//   };
//   render() {
//     let { food } = this.state;
//     let mappedFoods = food.map((e, i) => {
//       return <h4 key={i}>{e}</h4>;
//     });
//     return (
//       <div>
//         <h1>My Favorite Foods</h1>
//         <input
//           value={this.state.userInput}
//           onChange={e => this.handleInput(e.target.value)}
//         />
//         <button onClick={e => this.handleClick(this.state.userInput)}>
//           Add Food
//         </button>
//         {mappedFoods}
//       </div>
//     );
//   }
// }

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      food: [],
      pic: "",
      name: ""
    };
  }
  handleName = val => {
    this.setState({ name: val });
  };
  handlePic = val => {
    this.setState({ pic: val });
  };
  addFood = (name, pic) => {
    let foods = this.state.food;
    let item = {
      pic: pic,
      name: name
    };
    foods.push(item);
    this.setState({
      food: foods,
      pic:'',
      name:''
    });
  };
  render() {
    let {food}=this.state;
    let mappedFoods=food.map((e,i) => {
      return(
        <div key={i}>
        <img src={e.pic} width="100px"/>
        <h4>{e.name}</h4>
        </div> 
      )
    } )
    return (
      <div>
        <input
          placeholder="add picture here"
          value={this.state.pic}
          onChange={e => this.handlePic(e.target.value)}
        />
        <input
          placeholder="add food name here"
          value={this.state.name}
          onChange={e => this.handleName(e.target.value)}
        />
        <button
          onClick={e => this.addFood(this.state.name, this.state.pic)}
        >add</button>
        <h1>MY FOODS</h1>
        {mappedFoods}
      </div>
    );
  }
}
