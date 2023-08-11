import React from 'react';
import { theme } from '../themes';

/*
// Context nos permite passar um valor a fundo da árvore de componente
// sem explicitamente passa-la por cada componente.
// Crie um Context para o tema atual (com 'theme.light' como padrão).
*/
const ThemeContext = React.createContext(theme.light);
ThemeContext.displayName = 'NomeMeuThemeContext';

export default class AppComContextoClass extends React.Component {
    render() {
        return (
            // Use um Provider para passar o tema atual para a árvore abaixo.
            // Qualquer componente pode acessa-la, não importa quão profundo esteja.
            // Neste exemplo, nós passamos "dark" como tema atual.
            <div style={{ display: 'flex' }}>
                {/* Utiliza o valor do contexto */}
                <Toolbar />
                <Toolbar />
                <Toolbar />

                < ThemeContext.Provider value={theme.colorido} >
                    <Toolbar />
                    <Toolbar />
                </ThemeContext.Provider >

                < ThemeContext.Provider value={theme.dark} >
                    <Toolbar />
                    <Toolbar />
                </ThemeContext.Provider >
            </div>
        );
    }
}

export class Toolbar extends React.Component {
    render() {
        return (
            <div>
                <ThemedButton />
            </div>
        );
    }
}

export class ThemedButton extends React.Component {
    // Atribua um contextType para ler o context do tema atual.
    // React vai encontrar o Provider acima mais próximo e vai usa-lo.

    // 1ª maneira utilizando sintaxe de campo de classe pública ES6.
    // static contextType = ThemeContext; // comente para usar a segunda forma
    render() {
        return (
            // Acessando o contexto
            <Button theme={this.context} />
        );
    }
}

class Button extends React.Component {
    render() {
        return (
            <button style={this.props.theme}>
                {(() => {
                    if (this.props.theme === theme.dark) {
                        return 'Dark';
                    } else if (this.props.theme === theme.colorido) {
                        return 'Colorido';
                    } else {
                        return 'Light';
                    }
                })()}
            </button>
        )
    }
}

// 1ª maniera usando 'static' com campo de classe publica ES.
// static contextType = ThemeContext;
// 2ª maneira, utilizando o contextType da classe que precisa obter o valor do contexto.
// Use this.context dentro do componente,após a configuração, para obter o valor do contexto.
ThemedButton.contextType = ThemeContext; // Comente para usar a primeira forma.