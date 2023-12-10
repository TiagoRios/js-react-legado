import React from 'react';

export default class ListaClass extends React.Component {
    render() {
        return (
            <ul style={{ backgroundColor: 'hotpink' }}>
                {criarListaItens(this.props.arr)}
            </ul>
        );
    }
}

function criarListaItens(arr) {
    return arr.map(item =>
        <ItemListaClass key={item.id} value={item.name} />
    )
}

class ItemListaClass extends React.Component {
    render() {
        return (<li>{this.props.value}</li>)
    }
}