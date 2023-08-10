import React from 'react';

export const numeros = [
    { id: 'n1', name: 'abc' },
    { id: 'n2', name: 'def' },
    { id: 'n3', name: 'ghi' },
    { id: 'n4', name: 'jkl' },
    { id: 'n5', name: 'mno' }
];

export default class ListaClass extends React.Component {
    render() {
        // const numeros = [6,4,5,3,2];
        // não recomendado usar o index como chave "Key" key={index}
        // const listaItens = numeros.map((n) => <li key={n.id}>{n.name}</li>)

        // Por via de regra. Elementos dentro de uma função map() devem especificar o atributo key.
        const listaItens = this.props.arr.map((n, index) =>
            // Correto. A chave deve ser definida dentro do Array.
            <ItemListaClass key={n.id} value={n.name} />
        )

        // console.log(listaItens);
        //listaItens tem os seguintes valores:
        // <li key="2">2<li>
        // <li key="3">3<li>

        return (
            <ul style={{ backgroundColor: 'hotpink' }}>{listaItens}</ul>
        );
    }
}

class ItemListaClass extends React.Component {
    render() {
        return (
            // Não usar atributo key dentro do elemento. 
            // <li key={this.props.id}>{this.props.value}</li>
            <li>{this.props.value}</li> // Essa maneira esta correta.
        )
    }
}