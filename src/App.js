import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";

class App extends Component {
  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The count is currently: 0</h1>
        <button data-test="increment-button">Increment Counter</button>
        <Counter />
      </div>
    );
  }
}

export default App;
