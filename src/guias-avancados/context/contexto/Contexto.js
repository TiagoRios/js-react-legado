import React from "react";

// Normalmente em arquivo separado.
const MyContext = React.createContext('valorPadrao')

class Contexto extends React.Component {
    // static contextType = MyContext; // Maneira 1 de configurar contexto

    componentDidMount() {
        console.log('didMount: ' + this.context);
    }

    componentDidUpdate() {
        console.log('didUpdate: ' + this.context);
    }

    componentWillUnmount() {
        console.log('didUnmount: ' + this.context);
    }

    render() {
        return (
            // disponível depois de configurar o contexto
            <h1>{this.context}</h1>
        )
    }
}

Contexto.contextType = MyContext; // Maneira 2 de configurar contexto
