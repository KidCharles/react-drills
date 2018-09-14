import React, { Component } from "react";
import Button from "./ButtonLogin";

export default class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername=(val)=> {
      this.setState({
          username:val
      })
  }
  handlePassword=(val)=> {
    this.setState({
        password:val
    })
  }

  handleClick = () => {
    alert(
      `logged ${this.state.username} with password : ${this.state.password}`
    );
  };
  render() {
    return (
      <div>
        <input type="" className="" onChange={(e)=> this.handleUsername(e.target.value)} value={this.state.username} />
        <input type="" className="" onChange={(e)=> this.handlePassword(e.target.value)} value={this.state.password} />
        <Button fn={this.handleClick} />
      </div>
    );
  }
}
