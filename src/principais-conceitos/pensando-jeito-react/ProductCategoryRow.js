import React from 'react';

export default class ProductCategoryRow extends React.Component {
    render() {
        return (
            <tr>
                <th
                    colSpan="2"
                    style={{ border: '2px solid cyan' }}
                >
                    {this.props.category}
                </th>
            </tr>
        );
    }
}