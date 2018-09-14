import React, { Component } from "react";
import "./App.css";
import ImagePicker from "./components/ImagePicker";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ImagePicker />
      </div>
    );
  }
}

export default App;
