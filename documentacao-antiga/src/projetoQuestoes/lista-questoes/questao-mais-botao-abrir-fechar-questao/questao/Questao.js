import React, { Component } from "react";
import { BotaoResponder } from "./botao-responder/BotaoResponder";
import { ListaOpcoes } from "./lista-opcoes/ListaOpcoes";

export class Questao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            checked: false,
            mostrarResultado: false,
        }

        this.onChange = (e) =>
            this.setState({
                value: e.target.value,
                checked: e.target.checked,
                mostrarResultado: false,
            }, () => 'x')

        this.handleClickResponder = () => {
            this.setState({
                mostrarResultado: true
            })
        }
    }

    render() {
        let questaoLabel = 'questao';
        return (<div ref={this.props.referencia}
                id={this.props.questao.id}
                style={{ display: `${this.props.display}`, padding: '0 10px' }}>

                <p>{this.props.questao.textoAssociado}</p>

                <p>{this.props.questao.enunciado}</p>

                <div style={this.props.questao.imagem === null ? { display: 'none' } : { width: '120px', height: '120px', backgroundColor: 'brown' }}>{this.props.questao.imagem}</div>
                <ListaOpcoes
                    arrOpcoes={this.props.questao.opcoes}
                    //para todos os input radio ter o mesmo nome
                    idQuestao={questaoLabel + this.props.questao.id} // questao + seu numero identificador.
                    onChange={this.onChange}
                />

                <BotaoResponder
                    onClick={this.handleClickResponder}
                    value={this.state.value}
                    disabled={!this.state.checked}
                />

                {/* preciso implementar em um componente */}
                <div style={this.state.mostrarResultado ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                    <div id='resultado' style={this.state.value === 'true' ? { color: 'lightgreen' } : { color: 'red' }}>
                        {this.state.value === 'true' ? 'acertou' : 'errou'}
                    </div>
                </div>
            </div >)
    }
}