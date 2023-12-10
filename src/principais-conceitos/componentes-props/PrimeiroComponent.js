import React from "react";

export function PrimeiroComponent(props) {
    return React.createElement('div', { style: { backgroundColor: 'hotpink' } },
        React.createElement('h1', {}, 'sem JSX: ' + props.name),
        React.createElement('h1', {}, 'sem JSX: ' + props.name)
    )
}

const element = React.createElement;
const nome = "Algum nome";

// O react compila o código JSX para essa forma para fazer a renderização. 
const ComponenteJS = element('div', { style: { border: '2px solid red' } },
    element('h1',
        { className: 'nomeAlgumaClasse', style: { border: '2px solid red' } },
        'Texto do meu h1' + nome),

    element('div',
        { className: 'nomeAlgumaClasse', style: { border: '2px solid red' } },
        element('h2', {}, 'outro texto para h2'),
        element('p', {}, 'Algum texto dentro de p')
    ),
);

const ComponenteJSX = <div style={{ border: '2px solid red' }}>
    <h1 className="nomeAlgumaClasse" style={{ border: '2px solid red' }}>
        Texto do meu h1 {nome}
    </h1>

    <div className="nomeAlgumaClasse" style={{ border: '2px solid red' }}>
        <h2>outro texto para h2</h2>
        <p>Algum texto dentro de p</p>
    </div>
</div>

export {
    ComponenteJS,
    ComponenteJSX,
}