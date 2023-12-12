import React from "react";

import Dialog from "./Dialog";

// Componente especializado renderizando um mais generico.
export default class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleChange(e) {
    this.setState({
      login: e.target.value
    });
  }

  handleSignUp() {
    alert(`Bem vindo a bordo, ${this.state.login}!`);

    this.setState({
      login: ''
    });
  }

  render() {
    return (
      <Dialog
        message="Como devemos te chamar?"
        title="Programa de exploração de Marte"
      >
        <input
          onChange={this.handleChange}
          value={this.state.login}
        />

        <button onClick={this.handleSignUp}>
          Inscreva-se!
        </button>
      </Dialog>
    );
  }
}