import React from 'react';

import Header from '../../../utils-components/Header';
import MeuErrorBoundary from '../../error-boundaries/MeuErrorBoundary';

const ThemeContext = React.createContext('tema-Light-padrao');

const UserContext = React.createContext({
    name: 'user-Guest-padrao',
});

export default class ConsumindoContextos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: 'tema-dark',
            name: {
                name: 'Devimon'
            },
        };
    }

    render() {
        return (
            <MeuErrorBoundary>
                <Header title="Usando valores do state - NÂO CONTEXTO" level={3} />

                <ThemeContext.Provider value={this.state.theme}>
                    <UserContext.Provider value={this.state.name}>
                        <Content />
                    </UserContext.Provider>
                </ThemeContext.Provider>

                {/* Esse componente abaixo utiliza os valores default de React.createContext */}

                <Header title="Usando valores default de 2 contextos" level={3} />
                <Content />

            </MeuErrorBoundary>
        );
    }
}

function Content() {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <UserContext.Consumer>
                    {user => (
                        <ExibirInfo
                            theme={theme}
                            user={user}
                        />
                    )}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}

function ExibirInfo({ theme, user }) {
    return (
        <div style={{ border: '2px solid red' }}>
            <div><strong>user: {user.name}</strong></div>
            <div><strong>theme: {theme}</strong></div>
        </div>
    )
}