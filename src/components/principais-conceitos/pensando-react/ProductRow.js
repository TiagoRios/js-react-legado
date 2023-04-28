import React from 'react';

// Não precisa de state recebe dados como props.
export class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        const name = product.stocked
            ? product.name
            : <span style={{ color: 'red' }}>
                {product.name}
            </span>;

        return (
            // preciso atribuir isso a tag <TABLE> borderCollapse: 'collapse',
            // para poder colocar bordas em uma tag <TR>
            <tr style={{ border: '2px solid yellow' }}>
                <td >{name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}