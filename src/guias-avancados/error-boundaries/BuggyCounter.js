import React from "react";

// Somente usado para testar os errors boundaries.
export default class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);

    this.displayName = 'BuggyCounter';

    this.state = {
      counter: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  }

  render() {
    if (this.state.counter === 3) {
      throw new Error(`I crashed! neste componente: ${this.displayName}`);
    }
    return (
      <h1 onClick={this.handleClick}>
        {this.state.counter}
      </h1>
    );
  }
}