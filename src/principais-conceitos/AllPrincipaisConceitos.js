import React from "react";
import TituloMaisToggle from "../utils-components/TituloMaisToggle";

import principaisConceitosList from "./principaisConceitosList"

export default function AllPrincipaisConceitos() {
    return (
        principaisConceitosList.map((conteudo) => {
            return (
                <TituloMaisToggle
                    key={conteudo.titulo}
                    titulo={conteudo.titulo}
                >
                    {conteudo.componente}
                </TituloMaisToggle>
            )
        })
    )
}