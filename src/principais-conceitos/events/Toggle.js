import React from 'react';

export class ToggleVinculacaoBind extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: true
    };

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

// Problemas de desempenho com arrow function callback.
export class ToggleArrowFuntion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      algumOutroAtributo: '',
      isToggleOn: true,
    };
  }

  handleClick() {
    this.setState(prevState => ({
      algumOutroAtributo: 'asdf',
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

export class ToggleCampoClasse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: true
    };
  }

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
  render() {
    return (
      <div style={{ backgroundColor: 'yellow' }}>
        <ToggleVinculacaoBind />
        <ToggleArrowFuntion />
        <ToggleCampoClasse />
      </div>
    )
  }
}