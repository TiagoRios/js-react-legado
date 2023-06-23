import { Component } from "react";

export class BotaoAbrirFecharQuestao extends Component {
    constructor(props) {
        super(props);

        this.handleClick = () => {
            if (this.props.referencia.current.style.display === 'block') {
                this.props.referencia.current.style.display = 'none'
            } else {
                this.props.referencia.current.style.display = 'block'
            }
        }
    }

    render() {
        return (
            <button style={this.props.styles} type="button"
                onClick={this.handleClick}>
                {this.props.children}
            </button>
        )
    }
}