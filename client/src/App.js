import React, { Component } from "react";
import "./App.css";
import Cubes from "./components/Cubes";
import bigSquareMap from "./components/Cubes/bigSquareMap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Hello World!</h1>
        <Cubes cubeMap={bigSquareMap} />
      </div>
    );
  }
}

export default App;
