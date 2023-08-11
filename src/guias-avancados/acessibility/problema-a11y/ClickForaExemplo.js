 import React from "react";

// Isso geralmente é implementado ao anexar um click ao objeto de janela que fecha o popover:
// Esse exemplo funciona bem para usuarios com ponteiros ou mouse.
// mas opera-los com um teclado quebra a funcionalidade ao passar para outro elemento,
// já que o objeto window nunca recebe um evento click. 
// Isso pode levar a uma funcionalidade escondida que impede os usuários de usar seu aplicativo.

// veja a mesma funcionalidade em: ExamploDeBlur. 

// Quebra a acessibilidade

// Use este componente para testar: <JuntandoClickForaExemploDeBlur/>
export default class ClickForaExemplo extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false };
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
            this.setState({ isOpen: false });
        }
    }

    render() {
        return (
            <div ref={this.toggleContainer}>
                <button onClick={this.onClickHandler}>
                    Selecione uma opção - ClickForaExemplo</button>
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
