import React from "react";
import { Dialog } from "./Dialog";

// Componente especializado renderizando um mais generico.
export class SignUpDialog extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSignUp = this.handleSignUp.bind(this);
      this.state = {login: ''};
    }
  
    render() {
      return (
        <Dialog title="Programa de exploração de Marte"
                message="Como devemos te chamar?">
          <input value={this.state.login}
                 onChange={this.handleChange} />
          <button onClick={this.handleSignUp}>
            Inscreva-se!
          </button>
        </Dialog>
      );
    }
  
    handleChange(e) {
      this.setState({login: e.target.value});
    }
  
    handleSignUp() {
      alert(`Bem vindo a bordo, ${this.state.login}!`);
      this.setState({login: ''}); // Voltar ao valor original.
    }
  }