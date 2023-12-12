import React from 'react';

import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

// Monta a tabela de produtos original sem filtros.
export default class ProductTable extends React.Component {
    render() {
        const {
            nomeProduto,
            products,
            somenteEmEstoque,
        } = this.props

        return (
            <table style={{
                border: '2px solid blue',
                borderCollapse: 'collapse',
            }}>
                <thead style={{ border: '2px solid magenta' }}>
                    <tr style={{ border: '2px solid black' }}>
                        <th style={{ border: '2px solid hotpink' }}>
                            Name
                        </th>
                        <th>
                            Price
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {filtrarListaProdutos(products, nomeProduto, somenteEmEstoque)}
                </tbody>
            </table>
        );
    }
}

function filtrarListaProdutos(listaProdutos, nomeProduto, somenteEmEstoque) {
    let lastCategory = null;
    let listaProdutoFiltrado = [];

    listaProdutos.forEach((product) => {
        if (!isProdutoFoiEncontrado(product, nomeProduto)) {
            return;
        }

        if (!isProdutoEstocado(product, somenteEmEstoque)) {
            return;
        }

        if (!isProdutoNaMesmaCategoria(product, lastCategory)) {
            adicionarNovaCategoria(listaProdutoFiltrado, product);
        }

        adicionarNovoProduto(listaProdutoFiltrado, product);

        lastCategory = product.category; // prestar atenção nessa instrução.
    });

    return listaProdutoFiltrado;
}

function isProdutoFoiEncontrado(produto, nomeProduto) {
    let filtroRegex = new RegExp('[a-zA-Z ]*' + nomeProduto, 'i', 'g');

    if (produto.name.search(filtroRegex) === -1) {
        return false
    } else if ((produto.name.toLowerCase().indexOf(nomeProduto.toLowerCase()) === -1)) {
        return false;
    }

    return true;
}

function isProdutoEstocado(produto, somenteEmEstoquefiltro) {
    if (!produto.stocked && somenteEmEstoquefiltro) {
        return false;
    }

    return true;
}

function isProdutoNaMesmaCategoria(product, lastCategory) {
    if (product.category !== lastCategory) {
        return false;
    }

    return true;
}

function adicionarNovaCategoria(listaProduto, product) {
    listaProduto.push(
        <ProductCategoryRow
            category={product.category}
            key={product.category}
        />
    );
}

function adicionarNovoProduto(listaProduto, product) {
    listaProduto.push(
        <ProductRow
            key={product.name}
            product={product}
        />
    );
}
