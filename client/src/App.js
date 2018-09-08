import React, { Component } from "react";
import "./App.css";

const Cube = () => (
  <div className="cube">
    <div className="face front" />
    <div className="face side" />
    <div className="face top" />
  </div>
);

const CubesRow = () => (
  <div className="cubes__row">
    <Cube />
    <Cube />
    <Cube />
    <Cube />
  </div>
);

const CubesColumn = () => (
  <div className="cubes__column">
    <CubesRow />
    <CubesRow />
    <CubesRow />
    <CubesRow />
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Hello World!</h1>
        <div className="cubes">
          <CubesColumn />
          <CubesColumn />
          <CubesColumn />
          <CubesColumn />
        </div>
      </div>
    );
  }
}

export default App;
