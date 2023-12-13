import React from "react";
import LinkList from "./LinkList";

// Ao usar mouse e ponteiros funciona bem.
// Ao usar teclado a funcionalidade é quebrada ao passar para outro elemento,
// pois o objeto window nunca recebe um evento click. 
// A funcionalidade pode estar escondida impedindo os usuários
// de usar seu aplicativo.

export default class ProblemaAcessibilidade extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };

        this.toggleContainer = React.createRef();

        this.onClickHandler = this.onClickHandler.bind(this);
        this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
    }

    componentDidMount() {
        window.addEventListener('click', this.onClickOutsideHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.onClickOutsideHandler);
    }

    onClickHandler() {
        this.setState(currentState => ({
            isOpen: !currentState.isOpen
        }));
    }

    onClickOutsideHandler(event) {
        if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
            this.setState({
                isOpen: false,
            });
        }
    }

    render() {
        return (
            <div ref={this.toggleContainer}>
                <button onClick={this.onClickHandler}>
                    Selecione uma opção
                </button>

                {this.state.isOpen && <LinkList />}
            </div>
        );
    }
}
