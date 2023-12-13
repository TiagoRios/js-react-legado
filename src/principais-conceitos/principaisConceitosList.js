// Esta na ordem que foi estudado.
import AllComponentesProps from "./componentes-props/AllComponentesProps";
import Clock from "./states-ciclo-vida/Clock";
import AllEvents from "./events/AllEvents";
import AllCondicional from "./condicional/AllCondicional";
import AllListasEChaves from "./listas-e-chaves/AllListasEChaves";
import AllForms from "./forms/AllForms";
import AllElevandoState from "./elevando-state/AllElevandoState";
import AllComposicaoHeranca from "./composicao-heranca/AllComposicaoHeranca";
import FilterableProductTable from "./pensando-jeito-react/FilterableProductTable";

const principaisConceitosList = [
  { titulo: 'Componentes e props', componente: <AllComponentesProps /> },
  { titulo: 'States e ciclo de vida', componente: <Clock /> },
  { titulo: 'Events', componente: <AllEvents /> },
  { titulo: 'Condicional', componente: <AllCondicional /> },
  { titulo: 'Listas e chaves', componente: <AllListasEChaves /> },
  { titulo: 'Forms', componente: <AllForms /> },
  { titulo: 'Elevando o estado', componente: <AllElevandoState /> },
  { titulo: 'Composição e herança', componente: <AllComposicaoHeranca /> },
  { titulo: 'Pensando do jetio React', componente: <FilterableProductTable /> },
]

export default principaisConceitosList;