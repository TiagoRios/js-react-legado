import React from 'react';

export class TestarSeAprendi extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tenhoCachorro: false }
        this.handleTenhaCachorroClick = this.handleTenhaCachorroClick.bind(this);
    }

    handleTenhaCachorroClick() {
        this.setState(function (state) {
            return (
                { tenhoCachorro: !state.tenhoCachorro }
            )
        })
    }

    render(){
        return(
            <div style={{border: '5px solid red'}}>
                <h4>Componente TestarSeAprendi</h4>
                <h2>voce tem um cachorro?</h2>
                <h3>{this.state.tenhoCachorro ? "Eu tenho um cachorro" : "Não, eu não tenho um cachorro!"}</h3>
                <button onClick={this.handleTenhaCachorroClick}>
                    mudar se tenho cachorro
                </button>
            </div>
        )
    }
}