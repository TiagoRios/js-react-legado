import React from 'react';

import nomeBotao from '../util-context/nomeBotao';
import theme from '../themes';

const ThemeContext = React.createContext(theme.light);
ThemeContext.displayName = 'NomeMeuThemeContext';

export default class ContextoClass extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex' }}>
                {/* utiliza tema padrão */}
                <Toolbar />

                {/* Provider passa o contexto para a árvore de componentes */}
                < ThemeContext.Provider value={theme.colorido} >
                    <Toolbar />
                </ThemeContext.Provider >

                < ThemeContext.Provider value={theme.dark} >
                    <Toolbar />
                </ThemeContext.Provider >
            </div>
        );
    }
}

export class Toolbar extends React.Component {
    render() {
        return <ThemedButton />
    }
}

export class ThemedButton extends React.Component {
    render() {
        return <Button />
    }
}

class Button extends React.Component {
    // 1ª maneira utilizando sintaxe de campo de classe pública ES6.
    static contextType = ThemeContext; // comente para usar a segunda forma

    render() {
        return (
            <button style={this.context}>
                {nomeBotao(this.context)}
            </button>
        )
    }
}

// 2ª maneira, Passsar o contexto para a classe que vai utilizá-lo.
// Use this.context dentro do componente após esta configuração.
// Button.contextType = ThemeContext; // Comente para usar a primeira forma.