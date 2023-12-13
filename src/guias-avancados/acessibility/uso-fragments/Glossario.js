import React, { Fragment } from "react"
import Header from "../../../utils-components/Header";

export class GlossarioSintaxClasse extends React.Component {
    render() {
        return (
            <dl>
                <Header
                    level={3}
                    title="dl - lista de definições - GlossarioSintaxClasse"
                />

                {this.props.itens.map(item => (
                    <ItemGlossario item={item} key={item.id} />
                ))}
            </dl>
        );
    }
}

export function GlossarioSintaxFunction({ itens }) {
    return (
        <dl>
            <Header
                level={3}
                title="dl - lista de definições - GlossarioSintaxFunction"
            />

            {itens.map(item => (
                <ItemGlossario item={item} key={item.id} />
            ))}
        </dl>
    );
}

function ItemGlossario({ item }) {
    return (<>
        <dt>{item.nome}</dt>
        <dd>{item.descricao}</dd>
    </>)
}