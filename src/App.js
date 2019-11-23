import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      count: 0,
    }
  }
  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The count is currently: 0</h1>
        <button data-test="increment-button">Increment Counter</button>
      </div>
    );
  }
}

export default App;
