import React from 'react';

export class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // Aqui utilizamos o `bind` para que o `this` funcione dentro da nossa callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON vinculação no construtor' : 'OFF'}
      </button>
    );
  }
}

/**
 * Sintaxe com arrow function
 * 
 * não recomendado dessa forma. problemas de desempenho podem aparecer.
 * 
*/

export class Toggle2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true, algumOutroAtributo:''};
  }

  handleClick() {
    this.setState(prevState => ({
      algumOutroAtributo:'asdf',
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={() => this.handleClick()}>
        {this.state.isToggleOn ? 'ON arrow function callback' : 'OFF'}
      </button>
    );
  }
}

/**
 * Sintaxe utilizando campo de classe.
 */
export class Toggle3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  // sintaxe de campo de classe.
  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON sintaxe campos de classe' : 'OFF'}
      </button>
    );
  }
}

export default class ExibirToggleButtons extends React.Component {
  render(){
    return (
      <div style={{backgroundColor:'yellow'}}>
        <Toggle />
        <Toggle2 />
        <Toggle3 />
      </div>
    )
  }
}