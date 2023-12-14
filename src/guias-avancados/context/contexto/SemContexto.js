import React from 'react';

import nomeBotao from '../util-context/nomeBotao';
import theme from '../themes';

export default class SemContext extends React.Component {
    render() {
        return (<>
            <h3>Props são passadas entre vários componentes intermediários</h3>

            <div style={{ display: "flex" }}>
                <Toolbar theme={theme.light} />
                <Toolbar theme={theme.colorido} />
                <Toolbar theme={theme.dark} />
            </div>
        </>);
    }
}

class Toolbar extends React.Component {
    render() {
        return <ThemedButton theme={this.props.theme} />;
    }
}

class ThemedButton extends React.Component {
    render() {
        return <Button theme={this.props.theme} />;
    }
}

class Button extends React.Component {
    render() {
        return (
            <button style={this.props.theme}>
                {nomeBotao(this.props.theme)}
            </button>
        )
    }
}
