import React from 'react';

import { ProductTable } from './ProductTable';
import { SearchBar } from './SearchBar';

import { PRODUCTS } from './productList';
import './styles.css';

export class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textoParaFiltrar: '',
            temNoEstoque: false
        }
        this.handleTemNoEstoque = this.handleTemNoEstoque.bind(this);
        this.handleTextoParaFiltrar = this.handleTextoParaFiltrar.bind(this);
    }

    handleTextoParaFiltrar(texto) {
        this.setState({
            textoParaFiltrar: texto
        })
    }

    // dessa maneira também funciona???? Sim. 100 %; 
    handleTemNoEstoque() {
        this.setState(n => ({
            temNoEstoque: !n.temNoEstoque
        }))
    }

    render() {
        return (
            //definindo as propriedades css aqui mesmo. tem autocomplete de código.
            <div className='meuStyle'>
                <SearchBar
                    value={this.state.textoParaFiltrar}
                    onTemNoEstoqueChange={this.handleTemNoEstoque}
                    onTextoParaFiltrarChange={this.handleTextoParaFiltrar} />
                {/* o array de produtos deve vim de fora do componente */}
                <ProductTable products={PRODUCTS}
                    checked={this.state.temNoEstoque}
                    textoParaFiltrar={this.state.textoParaFiltrar} />
            </div>
        );
    }
}