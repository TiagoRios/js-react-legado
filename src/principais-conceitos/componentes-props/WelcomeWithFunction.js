import React from "react";

const objetoComEstilos = { backgroundColor: 'darkgray' };

export function WelcomeWithFunction({ description, name }) {
    return (
        <div className="divisao" style={objetoComEstilos}>
            <h1>Ola, {name}</h1>
            <h2>descrição: {description}</h2>
        </div>
    )
}