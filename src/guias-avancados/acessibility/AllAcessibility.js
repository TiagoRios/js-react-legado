import React, { Fragment } from "react";
import Header from "../../utils-components/Header";

import conteudoList from "./acessibilityConteudoList";

export default function AllAcessibility() {
    return (
        conteudoList.map((conteudo) => {
            return (
                <Fragment key={conteudo.titulo}>
                    <Header
                        level={1}
                        title={conteudo.titulo}
                    />

                    <ConteudoList conteudos={conteudo.subConteudos} />
                </Fragment>
            )
        })
    )
}

function ConteudoList({ conteudos, level }) {
    return (
        conteudos.map(sub => {
            return (
                <Conteudo
                    conteudo={sub}
                    key={sub.titulo}
                    level={level}
                />
            )
        })
    )
}

function Conteudo({ conteudo, level }) {
    return (<>
        <Header
            level={level}
            title={conteudo.titulo}
        />

        {conteudo.componente}
    </>)
}