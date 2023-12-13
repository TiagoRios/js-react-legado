import React from "react"
import TituloMaisToggle from "../utils-components/TituloMaisToggle"

import guiasAvancadosList from "./guiasAvancadosList"

export default class AllGuiasAvancados extends React.Component {
    render() {
        return (
            guiasAvancadosList.map((conteudo) => {
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
}