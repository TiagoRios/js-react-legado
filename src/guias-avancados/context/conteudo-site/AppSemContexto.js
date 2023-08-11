import React from 'react';
import { theme } from '../themes';

// contexto light é o padrão
// const ThemeContext = React.createContext('light');

export default class AppSemContext extends React.Component {
    render() {
        return (<>
            <h3>Props são passadas entre vários componentes intermediários</h3>
            <div style={{ display: "flex" }}>
                <Toolbar theme={theme.dark} />
                <Toolbar theme={theme.light} />
            </div>
        </>);
    }
}

export function Toolbar(props) {
    // O componente Toolbar deve receber uma prop extra chamada "theme"
    // e repassar para o componente ThemedButton.
    // Isso pode ser bem trabalhoso porque, se cada botão na aplicação
    // precisar saber o tema, este (o tema) teria que ser repassado por
    // todos os componentes.
    return (
        <div>
            <ThemedButton theme={props.theme} />
        </div>
    );
}

export class ThemedButton extends React.Component {
    render() {
        return (
            <Button theme={this.props.theme} />
        );
    }
}

class Button extends React.Component {
    render() {
        return (<>
            <button style={this.props.theme}>Botão SEM Context</button>
        </>)
    }
}
