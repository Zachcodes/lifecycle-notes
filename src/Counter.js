import React, { Component } from "react";
import CounterDisplay from "./CounterDisplay";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  // componentDidMount will only run once right at the beginning of the life of the component. This is a good place to make network requests or set up timers e.t.c. Things that only need to happen one time.
  componentDidMount() {
    console.log("componentDidMount running");
    this.intervalId = setInterval(
      () => this.setState({ count: this.state.count + 1 }),
      1000
    );
  }

  // componentWillUnmount will only run one time at the end of the life of the component. This is where we can do cleanup and remove interval functions / cancel network requests.
  componentWillUnmount() {
    console.log("componentWillUnmount running");
    clearInterval(this.intervalId);
  }

  render() {
    return <CounterDisplay currentCount={this.state.count} />;
  }
}
