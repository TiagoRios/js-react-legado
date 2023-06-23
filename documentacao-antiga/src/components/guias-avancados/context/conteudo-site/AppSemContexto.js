import React from 'react';

// contexto light é o padrão
// const ThemeContext = React.createContext('light');

const theme = {
    dark: {
        backgroundColor: 'black',
        padding: '40px',
        border: '2px solid red',
        fontSize: '60px',
        color: 'white',
        borderRadius: '20px'
    },
    light: {
        backgroundColor: 'white',
        padding: '40px',
        border: '2px solid cyan',
        fontSize: '60px',
        color: 'green',
        borderRadius: '20px'
    }
}

export class AppSemContext extends React.Component {
    render() {
        return (
            <div>
                <h1>Botão que recebe props de vários componentes intermediários</h1>
                <h2>Não utiliza 'context'</h2>
                <Toolbar theme={theme.dark} />
                <hr />
                <Toolbar theme={theme.light} />
            </div>
        );
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
        </>
        )
    }
}
