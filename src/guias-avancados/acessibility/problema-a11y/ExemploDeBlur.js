import React from "react";

// Use este componente para testar: <JuntandoClickForaExemploDeBlur/>
export default class ExemploDeBlur extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false };
        this.timeOutId = null;

        this.onClickHandler = this.onClickHandler.bind(this);
        // O evento Blur é acionado quando o elemento PERDE o foco.
        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this);
    }

    // No click modifica o valor da variável no state.
    onClickHandler() {
        this.setState(currentState => ({
            isOpen: !currentState.isOpen
        }));
    }

    // Fechamos o popover no próximo tick usando setTimeout.
    // Isso é necessário porque precisamos primeiro checar se
    // outro filho do elemento recebeu foco como
    // o evento blur é acionado antes do novo evento de foco.

    //Quando perder o foco definia o isOpen = false.
    onBlurHandler() {
        this.timeOutId = setTimeout(() => {
            this.setState({
                isOpen: false
            });
        });
    }

    // Se o elemento filho receber foco, não feche o popover.
    // Quando ganhar foco, execute clearTimeout no ID de setTimeout  
    onFocusHandler() {
        clearTimeout(this.timeOutId);
    }

    render() {
        // O React nos ajuda cancelando o blur e
        // focando nos eventos do elemento pai.
        return (
            <div onBlur={this.onBlurHandler} onFocus={this.onFocusHandler}>
                <button onClick={this.onClickHandler} aria-haspopup="true" aria-expanded={this.state.isOpen}>
                    Selecione uma opção - ExamploDeBlur
                </button>
                {this.state.isOpen && (
                    <ul>
                        <li><a href='#opcao1'>Opção 1</a></li>
                        <li><a href='#opcao2'>Opção 2</a></li>
                        <li><a href='#opcao3'>Opção 3</a></li>
                    </ul>
                )}
            </div>
        );
    }
}