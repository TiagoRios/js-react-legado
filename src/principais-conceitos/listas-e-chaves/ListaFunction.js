import React from 'react';

export default function ListaFunction({ arr }) {
    return (
        <ul style={{ backgroundColor: 'goldenrod' }}>
            {criarListaItens(arr)}
        </ul>
    )
}

function criarListaItens(arr) {
    let gerarIds = 1; // Use um gerador de Ids.

    return arr.map(item =>
        // stringify pq o componente react não aceita objetos como children em componentes.
        <ItemListaFunction key={gerarIds++} value={JSON.stringify(item.name)} />)
}

function ItemListaFunction(props) {
    return (<li>{props.value}</li>)
}