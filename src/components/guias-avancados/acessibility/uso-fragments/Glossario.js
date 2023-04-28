import React, { Fragment } from "react"

// Objeto usado para testar o componente <Glossario> abaixo.
let arrItem = [
    { id: 1, nome: 'termo', descricao: 'alguma descrição do termo' },
    { id: 2, nome: 'Cachorro', descricao: 'Animal de estimação. Também conhecido como melhor amigo do homem.' }
];

/**
 * Este Component é um fragmento que será utilizado no componente <Glossario> 
 * definido aqui neste mesmo arquivo '.js'.
 */
class ListaDeItens extends React.Component {
    render() {
        // sintaxe curta. Quando Fragment não precisa de nenhuma prop na tag Fragment
        return (
            // isso evita que eu tenha que utilizar uma <div> para agrupar os elementos.
            <>
                <dt>{this.props.item.nome}</dt>
                <dd>{this.props.item.descricao}</dd>
            </>
        )
    }
}

/**
 * Este componente somente exibi uma lista de definições.
 */
// Definição de componente usando sintaxe de classe.
export class Glossario extends React.Component {
    render() {
        return (
            <dl>
                <h3>dl - lista de definições</h3>
                {arrItem.map(item => (
                    // Aqui utiliza o outro componente definido nesse arquivo
                    <ListaDeItens item={item} key={item.id} />
                    // comente o de cima e descomente o de baixo.
                    // <Fragment key={item.id}>
                    //     <dt>{item.nome}</dt>
                    //     <dd>{item.descricao}</dd>
                    // </Fragment>
                ))}
            </dl>
        );
    }
}

// definição usando sintaxe de function
// a diferença do Glossario acima é somente o uso da tag <fragment>
// com a prop key={item.id}
export function Glossario2(props) {
    return (
        <dl>
            {props.items.map(item => (
                // Fragments também aceitam `key`(chave) prop quando estão mapeando coleções
                <Fragment key={item.id}>
                    <dt>{item.nome}</dt>
                    <dd>{item.descricao}</dd>
                </Fragment>
            ))}
        </dl>
    );
}
