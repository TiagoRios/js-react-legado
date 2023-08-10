import React from "react";

function UserGreeting() {
    return <h1 className="greeting-msg">Welcome back!</h1>;
}

function GuestGreeting() {
    return <h1 className="greeting-msg">Please sign up.</h1>;
}

// sintaxe utilizando sintaxe de função.
export function Greeting(props) {
    // poderia fazer direto mais nao o fiz
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

//alternativa utilizando sintaxe de classe
export default class GreetingClass extends React.Component {

    // não funciona atribuindo a uma variável no corpo da classe. perdi um bom tempo nisso.
    // algumaVariavel = this.props.estaLogado;
    // use dentro do construtor ou do método usando "this.nomeVar"
    
    render() {
        this.a = this.props.estaLogado;
        if (this.a) { // esse é usado por default. caso utilize o outro modificar essa variavel
            return <UserGreeting />;
        } else {
            return <GuestGreeting />;
        }
    }

    // dessa forma posso ter mais condições.
    // poderia ter usado um switch,
    // render() {
    //     if(this.props.estaLogado){
    //         this.comp = <UserGreeting />; 
    //     }else if(!this.props.estaLogado){
    //         this.comp = <GuestGreeting />;
    //     }else {
    //         this.comp = <GuestGreeting />;
    //     }
    //     return this.comp;

    // }
}