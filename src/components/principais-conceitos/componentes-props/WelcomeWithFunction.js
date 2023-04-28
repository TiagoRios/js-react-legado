import React from "react";

export function WelcomeWithFunction(props) {
    return (<div className="divisao" style={{backgroundColor:'darkgray'}}>
        <h1>Ola, {props.name}</h1>
        <h1>descrição: {props.description}</h1>
    </div>
    )
}