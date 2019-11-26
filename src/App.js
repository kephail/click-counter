import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div data-test="component-app">
        <h1>
          The count is currently:{" "}
          <span data-test="counter-display">{this.state.count}</span>
        </h1>
        <button
          data-test="increment-button"
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increment Counter
        </button>
        <button
          data-test="decrement-button"
          onClick={() => {
            if (this.state.count > 0)
              this.setState({ count: this.state.count - 1 });
          }}
        >
          Decrement Counter
        </button>
      </div>
    );
  }
}

export default App;
