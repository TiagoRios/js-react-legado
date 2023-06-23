import React from "react";
import GreetingClass from "./Greeting";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.state = { isLoggedIn: false } // não modificar diretamente. usar setState()
    }

    handleLoginClick() {
        this.setState(meuState => ({
            isLoggedIn: !meuState.isLoggedIn
        }));
    }
    handleLogoutClick() {
        // dessa maneira é mais enxuta e mais legível que o método acima.
        this.setState({ isLoggedIn: false });
    }

    render() {
        let isLoggedInnn = this.state.isLoggedIn;
        let button;

        if (isLoggedInnn) {
            // Um evento de click e passado para a propriedade meuOnClick do componente LogoutButton.
            button = <LogoutButton meuOnClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton meuOnClick={this.handleLoginClick} />
        }

        return (
            <div style={{ border: '5px solid cyan' }}>
                <h4>Componente LoginControl</h4>
                <GreetingClass estaLogado={isLoggedInnn} />
                {button}
            </div>
        );
    }
} 