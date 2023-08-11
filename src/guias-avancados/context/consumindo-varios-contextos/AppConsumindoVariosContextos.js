import React from 'react';
import { MeuErrorBoundary } from '../../error-boundaries/MeuErrorBoundary';
import HeaderH2 from '../../../utils-components/HeaderH2';

// Theme context, default to light theme
const ThemeContext = React.createContext('tema-Light-padrao');

// Signed-in user context
const UserContext = React.createContext({
    name: 'user-Guest-padrao',
});

export default class AppConsumindoVariosContextos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'tema-dark',
            name: { name: 'Devimon' },
        };
    }

    render() {
        // esses dados vem das props passadas ao utilizar o contexto
        // const { signedInUser, theme } = this.props;

        // Componente App fornece os valores inicias do context
        return (
            <>
                <MeuErrorBoundary>
                    <HeaderH2>Usando valores do state - NÂO CONTEXTO</HeaderH2>
                    {/* não utilizar definindo componente dentro do value. 
                <UserContext.Provider value = {{name: 'meuNome' }} > */}
                    <ThemeContext.Provider value={this.state.theme}>
                        {/* name esta errado para poder entrar no componente error boundary */}
                        <UserContext.Provider value={this.state.name}>
                            <Content />
                        </UserContext.Provider>
                    </ThemeContext.Provider>

                    {/* Esse componente abaixo utiliza os valores default de React.createContext */}

                    <HeaderH2>Usando valores default de 2 contextos</HeaderH2>
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
                            <div><strong>user: {user.name}</strong></div>
                            <div><strong>theme: {theme}</strong></div>
                        </div>
                    )}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}
