import React from 'react';

import { ProductRow } from './ProductRow';
import { ProductCategoryRow } from './ProductCategoryRow';

// Dentro da função o filtro pode ser feito com ou sem RegExp.
function filtrarDadosLista(arr, textoParaFiltrar, verificador) {
    let rows = [];
    let lastCategory = null;

    // RegExp literal somente funciona para para padroes estáticos.
    // RegExp é montada dinamicamente. Devo utilizar notação de obj RegExp.
    let regExpTextoParaFiltrar = new RegExp('[a-zA-Z ]*'+ textoParaFiltrar, 'i', 'g');
    
    arr.forEach((product) => {
        
        // Devo escolher somente uma das maneiras para fazer a filtragem:

        // Não utiliza RegExp
        // devo transformar tudo em minusculo antes de fazer a busca no index.
        if (product.name.toLowerCase().indexOf(textoParaFiltrar.toLowerCase()) === -1) {
            return;
        }

        // Utiliza RegExp
        if (product.name.search(regExpTextoParaFiltrar)) {
            return;
        }

        if (verificador && !product.stocked) {
            return;
        }

        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category} />
            );
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name} />
        );
        lastCategory = product.category;// prestar atenção nessa instrução.
    });
    return rows;
}

// Somente monta a tabela de produtos original sem filtros.
export class ProductTable extends React.Component {
    render() {

        let checked = this.props.checked;
        let produtos = this.props.products;
        let textoParaFiltrar = this.props.textoParaFiltrar;

        return (
            <table style={{
                border: '2px solid blue',
                // somente posso colocar borda em uma tag <TR> com isso.
                borderCollapse: 'collapse'
            }}>
                <thead style={{ border: '2px solid magenta' }}>
                    <tr style={{ border: '2px solid black' }}>
                        <th style={{ border: '2px solid hotpink' }}>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* retorna componentes <TR> com itens filtrados */}
                    {filtrarDadosLista(produtos, textoParaFiltrar, checked)}
                </tbody>
            </table>
        );
    }
}