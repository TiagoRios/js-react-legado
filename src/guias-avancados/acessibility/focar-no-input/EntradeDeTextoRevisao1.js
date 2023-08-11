import React from "react";
import './entradaDeTexto.css'

// Utilize o exemplo EntradaDeTexto para revisar o conteúdo.
export default class EntradaDeTextoRevisao1 extends React.Component {
    constructor(props) {
        super(props);
        // state para revisão de componentes controlados.
        this.state = { valueInput: '' };
        this.inputTexto = React.createRef();

        this.handleFocusInputTexto = this.handleFocusInputTexto.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // revisão de componentes controlados.
        this.handleChange = this.handleChange.bind(this);
    }

    handleFocusInputTexto() {
        this.inputTexto.current.focus();
    }

    // Quando submeter chama o manipulador para inputTexto
    // e executa um método alert('com o valor do inputValue no state') 
    handleSubmit(event) {
        // event.preventDefault(); - não preciso utilizar porque estou usando em um evento de click.
        alert("Formulário submetido -- " + this.state.valueInput);
        this.handleFocusInputTexto();
    }

    // Usado para pegar o value dentro do input e coloca em uma state.
    handleChange(e) {
        this.setState({
            valueInput: e.target.value
        });
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor='algumTextoId'>Escreva algum texto:</label><br />
                    <input id='algumTextoId'
                        type='text'
                        name='algumTexto'
                        ref={this.inputTexto}
                        onChange={this.handleChange}
                    />
                    <button type="button" onClick={this.handleFocusInputTexto}>Focar no input - Tag Button</button>
                    <input type="button" value='Focar no input - Tag Input' onClick={this.handleFocusInputTexto} />
                    {/* quando não coloco o tipo ele infere que seja do tipo SUBMIT ?*/}
                    <button type='button' name='nomeMeuBotaoSubmit' onClick={this.handleSubmit}>Submit</button>
                </form>
            </>
        )
    }
}