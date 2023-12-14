import React, { Fragment } from "react";
import ConteudoList from "../../utils-components/ConteudoList";
import Header from "../../utils-components/Header";

import acessibilityConteudoList from "./acessibilityConteudoList";

export default function AllAcessibility() {
    return (
        acessibilityConteudoList.map((conteudo) => {
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
