import React from 'react';

export class ListaItens extends React.Component {
    render() {
        return (
            // Não usar atributo key dentro do elemento. 
            // <li key={this.props.id}>{this.props.value}</li>
            <li>{this.props.value}</li> // Essa maneira esta correta.
        )
    }
}

export class Listas extends React.Component {
    render() {
        const numeros = [
            { id: 'n1', name: 'abc' },
            { id: 'n2', name: 'def' },
            { id: 'n3', name: 'ghi' },
            { id: 'n4', name: 'jkl' },
            { id: 'n5', name: 'mno' }
        ];
        // const numeros = [6,4,5,3,2];
        // não recomendado usar o index como chave "Key" key={index}
        // const listaItens = numeros.map((n) => <li key={n.id}>{n.name}</li>)

        // Por via de regra. Elementos dentro de uma função map() devem especificar o atributo key.
        const listaItens = numeros.map((n, index) =>
            // Correto. A chave deve ser definida dentro do Array.
            <ListaItens key={n.id} value={n.name} />
        )

        // console.log(listaItens);
        //listaItens tem os seguintes valores:
        // <li key="2">2<li>
        // <li key="3">3<li>

        return (
            <ul style={{ backgroundColor: 'gray' }}>{listaItens}</ul>
        );
    }
}

export function ListaItens2(props) {
    return (
        <li>{props.value}</li>
    )
}

// Poderia pegar de um NanoID ou shortID ou UUUI. Enfim, um gerador de Ids
let gerarIds = 1;

//Devo passar um array quando for chamar o componente.
export function Litsas2(props) {
    const listaItens = props.arr.map(n =>
        // stringify pq o componente react não aceita objetos como children em componentes.
        <ListaItens2 key={gerarIds++} value={JSON.stringify(n)} />)

    return (
        <ul style={{ backgroundColor: 'goldenrod' }}>{listaItens}</ul>
    )
}