import React from "react";
import './entradaDeTexto.css'

export default class EntradaDeTextoRevisao1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            valueInput: '',
        };

        this.inputTexto = React.createRef();

        this.handleFocusInputTexto = this.handleFocusInputTexto.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFocusInputTexto() {
        this.inputTexto.current.focus();
    }

    handleChange(e) {
        this.setState({
            valueInput: e.target.value
        });
    }

    handleSubmit() {
        alert("Formulário submetido -- " + this.state.valueInput);
        this.handleFocusInputTexto();
    }

    render() {
        return (
            <form onSubmit={e => e.preventDefault()}>
                <input
                    id='algumTextoId'
                    name='algumTexto'
                    onChange={this.handleChange}
                    placeholder='Escreva algum texto'
                    ref={this.inputTexto}
                    type='text'
                />

                <button onClick={this.handleFocusInputTexto}>
                    Button - Focar no input
                </button>

                <input
                    onClick={this.handleFocusInputTexto}
                    type="button"
                    value='Focar no input - Tag Input'
                />

                <button onClick={this.handleSubmit}>
                    Submit
                </button>
            </form>
        )
    }
}
