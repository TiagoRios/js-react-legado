import React from "react";

const MyContext = React.createContext('valorPadrao')

// Exte exemplo não renderiza não. apenas para exemplificação onde usar this.context.
// Posso utiliza o this.context dentro dos metodos de ciclo de vida do compoente.
class MyClass extends React.Component {
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
            // pega o valor dentro do contexto criado.
            <h1>{this.context}</h1>
        )
    }
}
MyClass.contextType = MyContext;
