import React, { Component } from "react";

export default class CounterDisplay extends Component {
  // componentDidUpdate will run every signle render not including the first one. It runs when the component receives new props or the state of the component changes. It is passed the previous props of the component as well as the previous state. we can compare the previous props or previous state and see how they compare to the current props and current state of the component.
  componentDidUpdate(prevProps) {
    console.log("previous props: ", prevProps);
    console.log("this.props: ", this.props);
  }

  render() {
    return <div>{this.props.currentCount}</div>;
  }
}
