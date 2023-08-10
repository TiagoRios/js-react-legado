import TituloMaisToggle from "../utils-components/TituloMaisToggle"

import AllComponentesProps from "./componentes-props/AllComponentesProps";
import Clock from "./states-ciclo-vida/Clock";
import AllEvents from "./events/AllEvents";
import AllCondicional from "./condicional/AllCondicional";
import AllListasEChaves from "./listas-e-chaves/AllListasEChaves";
import AllForms from "./forms/AllForms";
import AllElevandoState from "./elevando-state/AllElevandoState";
import AllComposicaoHeranca from "./composicao-heranca/AllComposicaoHeranca";
import FilterableProductTable from "./pensando-jeito-react/FilterableProductTable";

export default function AllPrincipaisConceitos() {
    return (<>
        <TituloMaisToggle nome="Componentes e props" componente={<AllComponentesProps />} />
        <TituloMaisToggle nome="States e ciclo de vide" componente={<Clock />} />
        <TituloMaisToggle nome="Events" componente={<AllEvents />} />
        <TituloMaisToggle nome="Condicional" componente={<AllCondicional />} />
        <TituloMaisToggle nome="Listas e chaves" componente={<AllListasEChaves />} />
        <TituloMaisToggle nome="Forms" componente={<AllForms />} />
        <TituloMaisToggle nome="Elevando o estado" componente={<AllElevandoState />} />
        <TituloMaisToggle nome="Composição e herança" componente={<AllComposicaoHeranca />} />
        <TituloMaisToggle nome="Pensando do jeito React" componente={<FilterableProductTable />} />
    </>
    )
}