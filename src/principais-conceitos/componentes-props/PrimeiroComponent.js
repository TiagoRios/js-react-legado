import React from "react";

export function PrimeiroComponent(props) {
    return React.createElement('div', { style: { backgroundColor: 'hotpink' } },
        React.createElement('h1', {}, 'sem JSX: ' + props.name),
        React.createElement('h1', {}, 'sem JSX: ' + props.name)
    )
    //jogar um objeto javascript dentro
    // return (<div style={{backgroundColor:'gray'}}>
    //     <h1>com JSX --- {props.name}</h1>
    //     <h1>com JSX -- {props.name}</h1>
    // </div>)
}


// esse codigo abaixo mostra a diferença entre componentes definidos com e sem JSX
// os códigos abaixo não são usados em lugar algum. Foi feito para verificar a complexidade e manutenabilidade.
const algumVariavel = "algum texto aqui";
const element = React.createElement;

// O react compila o código JSX para essa forma para fazer a renderização. 
const compoent = element('div', { style: { border: '2px solid red' } },
    element('h1', { className: 'nomeAlgumaClasse', style: { border: '2px solid red' } },
        'Texto do meu h1' + algumVariavel),
    element('div', { className: 'nomeAlgumaClasse', style: { border: '2px solid red' } },
        element('h2', {}, 'outro texto para h2'),
        element('p', {}, 'Algum texto dentro de p')
    ),
);

// Para quem ja conhece HTML é bem mais pratico e intuitivo.
const componente = <div style={{ border: '2px solid red' }}>
    <h1 className="nomeAlgumaClasse" style={{ border: '2px solid red' }}>
        Texto do meu h1 {algumVariavel}
    </h1>
    <div className="nomeAlgumaClasse" style={{ border: '2px solid red' }}>
        <h2>outro texto para h2</h2>
        <p>Algum texto dentro de p</p>
    </div>
</div>