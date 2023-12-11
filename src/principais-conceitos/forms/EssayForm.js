import React from "react";

export default class EssayForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Por favor, escreva uma dissertação sobre o seu elemento DOM favorito.'
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert('Uma dissertação foi enviada: ' + this.state.value);
  }

  render() {
    return (
      <div>
        <h4>Componente com tag &lt;textarea&gt; controlada</h4>

        <form onSubmit={this.handleSubmit}>
          <label>
            Dissertação:
            <textarea
              onChange={this.handleChange}
              value={this.state.value}
            />
          </label>

          <input type="submit" value="Enviar" />
        </form>
      </div>
    );
  }
}
