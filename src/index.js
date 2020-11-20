import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.genealogie = ["Vader", "Luke", "Kylo Ren"];
  }

  render() {
    return (
      <div>
        A long time ago, in a far far away galaxy, there was a{" "}
        <User name={this.genealogie[0]} genealogie={this.genealogie.slice(1)} />
      </div>
    );
  }
}

const User = ({ name, genealogie }) => {
  let children;
  if (genealogie && genealogie.length != 0) {
    children =
      genealogie.length > 1 ? (
        <User name={genealogie[0]} genealogie={genealogie.slice(1)} />
      ) : (
        <User name={genealogie[0]} />
      );
    return (
      <span>
        {name}, who was the father of {children}{" "}
      </span>
    );
  } else {
    return <span>{name}, the last of their name.</span>;
  }
};

render(<App />, document.getElementById("root"));
