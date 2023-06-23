import React from "react";

//Melhor definir em um arquivo externo caso o componente tenha mais regras CSS.
const objetoComEstilos = {backgroundColor:'blue'}; //dessa forma não completa os nomes das cores.

export class WelcomeWithClass extends React.Component {
    render() {
        //style={{backgroundColor:'aquamarine'}} dessa forma completa nome das cores.
        return (<div style={objetoComEstilos}>
             <h1>Ola, {this.props.name}</h1>
            <h1>descrição: {this.props.description}</h1>
        </div>
        )
    }
}