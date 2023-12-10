import React from 'react';

export class LoggingButtonVinculacaoBind extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me vinculação no construtor
      </button>
    );
  }
}

// Problemas de desempenho com arrow function callback.
export class LoggingButtonArrowFuntion extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={() => this.handleClick()}>
        Click me arrow function callback
      </button>
    );
  }
}

export class LoggingButtonCampoClasse extends React.Component {
  handleClick = () => {
    console.log('this is:', this);
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me sintaxe campo de classe
      </button>
    );
  }
}

export default class ExibirLoggingButtons extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: 'green' }}>
        <LoggingButtonVinculacaoBind />
        <LoggingButtonArrowFuntion />
        <LoggingButtonCampoClasse />
      </div>
    );
  }
}