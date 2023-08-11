import React from "react"

import AllAcessibility from "./acessibility/AllAcessibility"
import TituloMaisToggle from "../utils-components/TituloMaisToggle"

export default class AllGuiasAvancados extends React.Component {
    render() {
        return (<>
            <TituloMaisToggle nome="Acessibilidade" componente={<AllAcessibility />} />
        </>)
    }
}