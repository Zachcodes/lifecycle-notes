import React, { Component } from "react";
import "./App.css";
import Counter from "./Counter";
import Context from "./Context";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showCounter: true
    };
  }

  flipShowCount = () => {
    this.setState({ showCounter: !this.state.showCounter });
  };

  render() {
    return (
      <div className="App">
        <Context />
        {this.state.showCounter ? <Counter /> : null}
        <button onClick={this.flipShowCount}>Flip show count</button>
      </div>
    );
  }
}

export default App;
