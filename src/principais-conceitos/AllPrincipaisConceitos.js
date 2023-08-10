import TituloMaisToggle from "../utils-components/TituloMaisToggle"

import AllComponentesProps from "./componentes-props/AllComponentesProps";
import AllComposicaoHeranca from "./composicao-heranca/AllComposicaoHeranca";

export default function AllPrincipaisConceitos() {
    return (<>
        <TituloMaisToggle nome="Componentes e props" componente={<AllComponentesProps />} />
        <TituloMaisToggle nome="Composição e herança" componente={<AllComposicaoHeranca />} />

        <hr />
        <h2>Não criados:</h2>

        <TituloMaisToggle nome="Condicional" componente={<h1>componente</h1>} />
        <TituloMaisToggle nome="Elevando o estado" componente={<h1>componente</h1>} />
        <TituloMaisToggle nome="Events" componente={<h1>componente</h1>} />
        <TituloMaisToggle nome="Forms" componente={<h1>componente</h1>} />
        <TituloMaisToggle nome="Listas e chaves" componente={<h1>componente</h1>} />
        <TituloMaisToggle nome="States" componente={<h1>componente</h1>} />
        <TituloMaisToggle nome="Pensando React" componente={<h1>componente</h1>} />
    </>
    )
}