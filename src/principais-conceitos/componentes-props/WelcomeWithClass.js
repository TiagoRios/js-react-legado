import React from "react";

const objetoComEstilos = { backgroundColor: 'blue' };

export class WelcomeWithClass extends React.Component {
    render() {
        return (
            <div className="divisao" style={objetoComEstilos}>
                <h1>Ola, {this.props.name}</h1>
                <h2>descrição: {this.props.description}</h2>
            </div>
        )
    }
}