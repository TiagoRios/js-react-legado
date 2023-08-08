import React from "react";

/**
 * Esse componente usar tag <textarea>
 */
export class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Por favor, escreva uma dissertação sobre o seu elemento DOM favorito.'
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    alert('Uma dissertação foi enviada: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (<div>
      <h4>Componente com tag &lt;textarea&gt; controlada</h4>

      <form onSubmit={this.handleSubmit}>
        <label>
          Dissertação:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Enviar" />
      </form>

    </div>);
  }
}
