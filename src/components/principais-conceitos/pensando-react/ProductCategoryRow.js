import React from 'react';

// Não precisa de state pq ele recebe dados como props.
export class ProductCategoryRow extends React.Component {
    render() {
        return (
            <tr>
                <th colSpan="2" style={{ border: '2px solid cyan' }}>
                    {this.props.category}
                </th>
            </tr>
        );
    }
}