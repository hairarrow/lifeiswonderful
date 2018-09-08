import React, { Component } from "react";
import "./App.css";
import Cubes from "./components/Cubes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Hello World!</h1>
        <Cubes />
      </div>
    );
  }
}

export default App;
