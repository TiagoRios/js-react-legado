import React from "react";
import Titulo from "../../utils-components/Titulo";

/**
 * Componente React que representa um relógio e mostra as horas.
 * 
 * Trabalhando com estado (state) e ciclo de vida
 * 
 * preciso limpar recursos dos componentes que foram destruídos.
 * 
 * valores de this.props e this.state podem ser atualizados de forma assíncrona
 * não confie neles para calcular proximo state. use setstate((state, props)=>{}) ao 
 * inves da forma com objeto.
 *  
 * @see componentDidMount executa algo depois que renderizar componente no DOM.
 * @see componentWillUnmount limpar o DOM produzido quando componente for removido.
 */
export default class Clock extends React.Component {
    //Componentes de classe é obrigatório passar os PROPS no construtor
    constructor(props) {
        super(props);
        //state e privado do React.
        //No inicio, pega a hora e atribui ao state do componente
        this.state = { date: new Date() };
    }

    //após renderizar na tela executa a cada segundo
    componentDidMount() {
        this.temporizadorID = setInterval(// id do temporizador
            //poderia ter passado a função diretamente. 
            () => this.tick(),
            // () => this.setState({
            //     date: new Date()
            // }),
            1000 //tempo em milisegundos.
        );
    }

    //libera os recursos utilizados 
    componentWillUnmount() {
        clearInterval(this.temporizadorID);
    }

    //sempre que chamado atribui objeto Date() ao atributo date de Clock.
    tick() {
        //Essa é a forma correta.
        //Não altere o state diretamente por ex: this.state.date = new Date();
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (<div style={{ border: '5px solid brown' }}>
            <Titulo title="Clock.js" component={<>
                <h1>Relógio!</h1>
                {/* usando o state ao inves do props */}
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </>} />
        </div>);
    }
}