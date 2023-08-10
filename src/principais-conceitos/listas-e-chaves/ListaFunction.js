import React from 'react';

// Poderia pegar de um NanoID ou shortID ou UUUI. Enfim, um gerador de Ids
let gerarIds = 1;

//Devo passar um array quando for chamar o componente.
export default function ListaFunction(props) {
    const listaItens = props.arr.map(n =>
        // stringify pq o componente react não aceita objetos como children em componentes.
        <ItemListaFunction key={gerarIds++} value={JSON.stringify(n.name)} />)

    return (
        <ul style={{ backgroundColor: 'goldenrod' }}>{listaItens}</ul>
    )
}

function ItemListaFunction(props) {
    return (
        <li>{props.value}</li>
    )
}