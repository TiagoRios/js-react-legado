import React from 'react';
import { theme } from './themes';

/*
// Context nos permite passar um valor a fundo da árvore de componente
// sem explicitamente passa-la por cada componente.
// Crie um Context para o tema atual (com 'theme.light' como padrão).
*/
const ThemeContext = React.createContext(theme.light);
ThemeContext.displayName = 'NomeMeuThemeContext';

export class AppComContextoClass extends React.Component {
    render() {
        return (
            // Use um Provider para passar o tema atual para a árvore abaixo.
            // Qualquer componente pode acessa-la, não importa quão profundo esteja.
            // Neste exemplo, nós passamos "dark" como tema atual.
            <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', alignItems: 'center' }}>
                <h1 style={{ marginBottom: 0 }} >Utiliza contexto</h1>
                <h2 style={{ margin: 0 }} >Componentes de classe</h2>
                <Toolbar />
                <hr />
                < ThemeContext.Provider value={theme.colorido} >
                    <Toolbar />
                </ThemeContext.Provider >
                <hr />
                < ThemeContext.Provider value={theme.dark} >
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
    /*
    // Atribua um contextType para ler o context do tema atual.
    // React vai encontrar o Provider acima mais próximo e vai usa-lo.

    // 1ª maneira utilizando sintaxe de campo de classe pública ES6.
    // static contextType = ThemeContext;
    */
    render() {
        return (
            // poderia retirar daqui e passar diretamente no componente final
            <Button theme={this.context} />
        );
    }
}

class Button extends React.Component {
    render() {
        return (
            // poderia utilizar this.context diretamente aqui
            <button style={this.props.theme}>
                {
                    // IIFE = função imediatamente invocada. fiz dessa forma para praticar. 
                    // poderia colocar em um função externa
                    (() => {
                        if (this.props.theme === theme.dark) {
                            return 'Dark';
                        } else if (this.props.theme === theme.colorido) {
                            return 'Colorido';
                        } else {
                            return 'Light';
                        }
                    })()
                }
            </button>
        )
    }
}

// 2ª maneira, utilizando contextType da classe que precisa obter o valor do contexto
// Componente que utiliza o this.context dentro dele precisa obter o valor do contexto
// outra forma é usando 'static' em com campo de classe publica.
ThemedButton.contextType = ThemeContext;