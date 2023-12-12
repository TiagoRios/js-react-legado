import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.somenteEmEstoqueChange = this.somenteEmEstoqueChange.bind(this);
        this.textoParaFitlrarChange = this.textoParaFitlrarChange.bind(this);
    }

    somenteEmEstoqueChange(e) {
        this.props.onSomenteEmEstoqueChange(e.target.checked);
    }

    textoParaFitlrarChange(e) {
        this.props.onNomeProdutoParaFiltrarChange(e.target.value);
    }

    render() {
        return (
            <form style={{ border: '2px solid green' }}>
                <input
                    onChange={this.textoParaFitlrarChange}
                    placeholder="Search..."
                    type="text"
                    value={this.props.nomeProduto}
                />

                <Paragraph>
                    <input
                        checked={this.props.somenteEmEstoque}
                        onChange={this.somenteEmEstoqueChange}
                        type="checkbox"
                    />
                    {' '} Only show products in stock
                </Paragraph>
            </form>
        );
    }
}

function Paragraph({ children }) {
    return <p>{children}</p>
}