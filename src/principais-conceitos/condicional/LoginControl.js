import React from "react";

import GreetingClass from "./Greeting";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default class LoginControl extends React.Component {
    constructor(props) {
        super(props);

        this.state = { // use setState() para modificar o estado.
            isLoggedIn: false
        }

        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
    }

    handleLoginClick() {
        this.setState(meuState => ({
            isLoggedIn: !meuState.isLoggedIn
        }));
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        let button;
        let isLoggedInnn = this.state.isLoggedIn;

        if (isLoggedInnn) {
            button = <LogoutButton meuOnClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton meuOnClick={this.handleLoginClick} />
        }

        return (
            <div style={{ border: '5px solid cyan' }}>
                <GreetingClass estaLogado={isLoggedInnn} />
                {button}
            </div>
        );
    }
} 