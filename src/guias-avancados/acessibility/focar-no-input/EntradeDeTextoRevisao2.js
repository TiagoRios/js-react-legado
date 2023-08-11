import React from "react";
import './entradaDeTexto.css'

/**
 * Componente que envia a ref do componente pai para o compoente filho que precisa de uma ref
 */
export default class EntradaDeTextoRevisaoComponentePai extends React.Component {
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }
    render() {
        return (
            <form>
                <EntradaDeTextoRevisao2 inputReferencia={this.inputElement} />
            </form>
        )
    }
}

/**
 * Componente que recebe a ref de um elemento através de um componente superior.
 */
class EntradaDeTextoRevisao2 extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    // Não sei porque, não coloquei isso na classe pai no inicio.
    handleChange() {
        this.props.inputReferencia.current.focus();
    }

    render() {
        return (<>
            <h4>recebendo 'ref' via props do pai</h4>
            <label forHtml='inputTextoId'>Entre com um texto:</label><br />
            <input
                id="inputTextoId"
                type='text'
                name="inputTexto"
                ref={this.props.inputReferencia} /><br />
            <button type="button" onClick={this.handleChange}>Click para focar no input</button>
        </>)
    }
}