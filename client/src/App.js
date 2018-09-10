import React, { Component } from "react";
import Splash from "./components/Splash";
import Homepage from "./components/Homepage";

class App extends Component {
  render() {
    return (
      <div>
        <Splash />
        <Homepage />
      </div>
    );
  }
}

export default App;
