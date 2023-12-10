import React from "react";
import Header from "../../utils-components/Header";

/**
 * Componente React que representa um relógio e mostra as horas.
 * 
 * Trabalhando com estado (state) e ciclo de vida
 * 
 * preciso limpar recursos dos componentes que foram destruídos.
 * 
 * valores de this.props e this.state podem ser atualizados de forma assíncrona
 * não confie neles para calcular proximo state. use setstate((state, props)=>{}) ao 
 * invés da forma com objeto.
 *  
 * @see componentDidMount executa algo depois que renderizar componente no DOM.
 * @see componentWillUnmount limpar o DOM produzido quando componente for removido.
 */
export default class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.temporizadorID = setInterval(
            () => this.tick(),
            1000
        );
    }

    //Para libera os recursos utilizados.
    componentWillUnmount() {
        clearInterval(this.temporizadorID);
    }

    tick() {
        //Não altere o state diretamente por ex: this.state.date = new Date();
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div style={{ border: '5px solid brown' }}>
                <Header title="Clock.js" />

                <h1>Relógio!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}