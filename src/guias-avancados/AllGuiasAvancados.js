import React from "react"

import AllAcessibility from "./acessibility/AllAcessibility"
import TituloMaisToggle from "../utils-components/TituloMaisToggle"
import { MyApp } from "./code-splitting/MyApp"
import AllContext from "./context/AllContext"

export default class AllGuiasAvancados extends React.Component {
    render() {
        return (<>
            <TituloMaisToggle nome="Acessibilidade" componente={<AllAcessibility />} />
            <TituloMaisToggle nome="Code Splitting" componente={<MyApp />} />
            <TituloMaisToggle nome="Context" componente={<AllContext />} />
        </>)
    }
}