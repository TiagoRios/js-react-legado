import React from 'react';

import nomeBotao from '../util-context/nomeBotao';
import theme from '../themes';

const ThemeContext = React.createContext(theme.light);

export default function ContextoFunction() {
    return (
        <div style={{ display: 'flex' }}>
            <Toolbar />

            < ThemeContext.Provider value={theme.colorido} >
                <Toolbar />
            </ThemeContext.Provider >

            < ThemeContext.Provider value={theme.dark} >
                <Toolbar />
            </ThemeContext.Provider >
        </div>
    );
}

export function Toolbar() {
    return <ThemedButton />;
}

export function ThemedButton() {
    return (
        <ThemeContext.Consumer>
            {valueVindoProvider => <Button theme={valueVindoProvider} />}
        </ThemeContext.Consumer>
    );
}

function Button({ theme }) {
    return (
        <button style={theme}>
            {nomeBotao(theme)}
        </button>
    )
}