import React from 'react';

export class LoggingButton extends React.Component {
  // Essa sintaxe garante que o `this` seja vinculado ao handleClick.
  // Atenção: essa é uma sintaxe *experimental*.
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

// problemas de desempenho com arrow function callback.
export class LoggingButton2 extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // Essa sintaxe garante que o `this` seja vinculado ao handleClick.
    return (
      // ****problemas de desempenho. É recomendado usar:
      // sintaxe de classe publica ou vinculação pelo construtor com function.prototype.bind().
      <button onClick={() => this.handleClick()}>
        Click me arrow function callback
      </button>
    );
  }
}

export class LoggingButton3 extends React.Component {
  constructor(props) {
    super(props);
    // vinculação no construtor.
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

export default class ExibirLoggingButtons extends React.Component{
  render(){
    return (
    <div style={{backgroundColor:'green'}}>
      <LoggingButton3 />
      <LoggingButton2 />
      <LoggingButton />
    </div>
    );
  } 
}