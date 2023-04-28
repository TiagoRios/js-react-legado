import { Component } from "react";

export class BotaoResponder extends Component {
    render() {
        return (
                <button style={{ backgroundColor: 'orange', fontSize: '1.25rem' }}
                    onClick={this.props.onClick}
                    disabled={this.props.disabled}
                >
                    Responder
                </button>
        )
    }
}