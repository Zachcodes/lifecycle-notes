import React, { Component } from "react";

export default class Context extends Component {
  constructor() {
    super();
    this.state = {
      name: "Zach"
    };
    // In order to make sure that boundLogThis is always invoked using < Context /> as the value of this, we need to bind it in the constructor. It makes it so each new instance of < Context /> has a bound boundThis function
    this.boundLogThis = this.boundLogThis.bind(this);
  }

  logThis() {
    console.log("value of this in logThis: ", this);
  }

  boundLogThis() {
    console.log("value of this in boundLogThis: ", this);
    this.setState({ name: "John" });
  }

  render() {
    console.log("value of this in render", this);
    return (
      <div>
        {/* Passing this.logThis directly as the callback function for the onClick event without it being bound means that when the onClick event occurs, logThis will be invoked and this will undefined. */}
        <button onClick={this.logThis}>Not bound</button>
        {/* Since boundLogThis is bound to this in the constructor, it will always have the correct value of this */}
        <button onClick={this.boundLogThis}>Bound in constructor</button>
        {/* Even though logThis is not bound in the constructor, wrapping it in an es6 arrow function will capture the value of this in render. Since arrow functions don't get their own value of this and use the surrounding context, it will be based off renders value of this which is always going to be the < Context /> component. */}
        <button onClick={() => this.logThis()}>Arrow function bound</button>
      </div>
    );
  }
}
