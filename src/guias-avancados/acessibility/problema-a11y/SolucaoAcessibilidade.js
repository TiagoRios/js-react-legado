import React from "react";
import LinkList from "./LinkList";

export default class SolucaoAcessibilidade extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };

        this.timeOutId = null;

        this.onClickHandler = this.onClickHandler.bind(this);
        // O evento Blur é acionado quando o elemento PERDE o foco.
        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this);
    }

    onClickHandler() {
        this.setState(currentState => ({
            isOpen: !currentState.isOpen
        }));
    }

    // Fechamos o popover no próximo tick usando setTimeout.
    // Isso é necessário porque precisamos primeiro checar se
    // outro filho do elemento recebeu foco como
    // o evento blur é acionado antes do novo evento de foco.

    onBlurHandler() {
        this.timeOutId = setTimeout(() => {
            this.setState({
                isOpen: false
            });
        });
    }

    onFocusHandler() {
        clearTimeout(this.timeOutId);
    }

    render() {
        return (
            <div
                onBlur={this.onBlurHandler}
                onFocus={this.onFocusHandler}
            >
                <button
                    aria-expanded={this.state.isOpen}
                    aria-haspopup="true"
                    onClick={this.onClickHandler}
                >
                    Selecione uma opção
                </button>

                {this.state.isOpen && <LinkList />}
            </div>
        );
    }
}

