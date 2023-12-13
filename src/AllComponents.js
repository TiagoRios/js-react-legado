import React from "react";
import Details from "./utils-components/Details";

import componentsList from "./componentsList";

export class AllComponents extends React.Component {
    render() {
        return (
            componentsList.map((conteudo) => {
                return (
                    <Details
                        key={conteudo.titulo}
                        summary={conteudo.titulo}
                    >
                        {conteudo.componente}
                    </Details>
                )
            })
        )
    }
}