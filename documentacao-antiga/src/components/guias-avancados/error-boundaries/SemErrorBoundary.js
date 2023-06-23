import React from "react";

// O React não precisa que as error boundaries se recuperem de erros em manipuladores de evento.
// Ao contrário do método de renderização e dos métodos do ciclo de vida, 
// manipuladores de evento não acontecem durante a renderização.
// Então, se eles quebrarem, o React ainda sabe o que exibir na tela.
export class SemErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { meuError: null };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        try {
            throw new Error('Oi eu sou um erro lançado para fazer teste.')
        } catch (e) {
            // Maneira padrão.
            // this.setState({ meuError: e });
            // Dessa maneira não preciso definir meuError no state. E para usálo: this.state.e
            this.setState({ e });
        }
    }

    render() {
        // padrão
        // i f (this.state.meuError) {
        if (this.state.e) {
            return (
                <div>
                    <h1>Capturei um erro.</h1>
                    {/* padrão */}
                    {/* <h2>{this.state.meuError.toString()}</h2> */}
                    <h2>{this.state.e.toString()}</h2>
                </div>
            )
        }
        return <button onClick={this.handleClick}>Clique em mim</button>
    }
}
