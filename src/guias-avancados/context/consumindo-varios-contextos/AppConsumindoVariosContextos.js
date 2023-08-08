import React from 'react';
import { MeuErrorBoundary } from '../../error-boundaries/MeuErrorBoundary';

// Theme context, default to light theme
const ThemeContext = React.createContext('tema-Light-padrao');

// Signed-in user context
const UserContext = React.createContext({
    name: 'user-Guest-padrao',
});

export class AppConsumindoVariosContextos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'TemaColorido',
            name: { name: 'UserAtual' },
        };
    }

    render() {
        // esses dados vem das props passadas ao utilizar o contexto
        // const { signedInUser, theme } = this.props;

        // Componente App fornece os valores inicias do context
        return (
            <>
                <MeuErrorBoundary>
                    {/* não utilizar definindo componente dentro do value. 
                <UserContext.Provider value = {{name: 'meuNome' }} > */}
                    <ThemeContext.Provider value={this.state.theme}>
                        {/* name esta errado para poder entrar no componente error boundary */}
                        <UserContext.Provider value={this.state.namet}>
                            <Content />
                        </UserContext.Provider>
                    </ThemeContext.Provider>

                    {/* Esse componente abaixo utiliza os valores default de React.createContext */}

                    <Content />
                </MeuErrorBoundary>
            </>
        );
    }
}

// Um componente pode consumir vários contexts.
function Content() {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <UserContext.Consumer>
                    {user => (
                        <div style={{ border: '2px solid red' }}>
                            <h2>Componente usando 2(dois) contextos</h2>
                            <div><strong>user: {user.name}</strong></div>
                            <div><strong>theme: {theme}</strong></div>
                        </div>
                    )}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}
