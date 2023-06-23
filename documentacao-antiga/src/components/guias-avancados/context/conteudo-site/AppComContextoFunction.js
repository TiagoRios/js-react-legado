import React from 'react';
import { theme } from './themes';

// contexto light é o padrão
const ThemeContext = React.createContext(theme.light);

export function AppComContextoFunction(props) {
    return (
        // Use um Provider para passar o tema atual para a árvore abaixo.
        // Qualquer componente pode acessa-la, não importa quão profundo esteja.
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ marginBottom: 0 }} >Utiliza contexto</h1>
            <h2 style={{ margin: 0 }} >Componentes de função</h2>
            {/* sem passar pelo provider pega o valor default criado theme.light*/}
            <Toolbar />
            <hr />
            {/* Se eu passar dessa forma preciso fornecer o value. 
            Se o value for undefined não utiliza o valor default */}
            < ThemeContext.Provider value={theme.dark} >
                <Toolbar />
            </ThemeContext.Provider >
            <hr />
            < ThemeContext.Provider value={theme.colorido} >
                <Toolbar />
            </ThemeContext.Provider >
        </div>
    );
}

export function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

export function ThemedButton() {
    return (
        <ThemeContext.Consumer>
            {valueVindoProvider => <Button theme={valueVindoProvider} />}
        </ThemeContext.Consumer>
    );
}

function Button(props) {
    return (
        <button style={props.theme}>
            {
                // IIFE = função imediatamente invocada. fiz dessa forma para praticar. 
                // poderia colocar em um função externa
                (() => {
                    if (props.theme === theme.dark) {
                        return 'Dark';
                    } else if (props.theme === theme.colorido) {
                        return 'Colorido';
                    } else {
                        return 'Light';
                    }
                })()
            }
        </button>
    )
}