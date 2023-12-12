import React from 'react';

import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

import './styles.css';
import productsMock from './products';

export default class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nomeProdutoParaFiltrar: '',
            somenteEmEstoque: false,
        }

        this.nomeProdutoParaFiltrarChange = this.nomeProdutoParaFiltrarChange.bind(this);
        this.somenteEmEstoqueChange = this.somenteEmEstoqueChange.bind(this);
    }

    nomeProdutoParaFiltrarChange(nome) {
        this.setState({
            nomeProdutoParaFiltrar: nome
        })
    }
    
    somenteEmEstoqueChange() {
        this.setState(state => ({
            somenteEmEstoque: !state.somenteEmEstoque
        }))
    }

    render() {
        return (
            <div className='meuStyle'>
                <SearchBar
                    nomeProduto={this.state.nomeProdutoParaFiltrar}
                    onSomenteEmEstoqueChange={this.somenteEmEstoqueChange}
                    onNomeProdutoParaFiltrarChange={this.nomeProdutoParaFiltrarChange}
                    somenteEmEstoque={this.somenteEmEstoque}
                />

                <ProductTable
                    nomeProduto={this.state.nomeProdutoParaFiltrar}
                    products={productsMock}
                    somenteEmEstoque={this.state.somenteEmEstoque}
                />
            </div>
        );
    }
}