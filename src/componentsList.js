import AllGuiasAvancados from "./guias-avancados/AllGuiasAvancados";
import AllPrincipaisConceitos from "./principais-conceitos/AllPrincipaisConceitos";
import AppReact from "./app-react-inicial/AppReact";
import ConsumindoApiRest from "./consumindo-api-rest/ConsumindoApiRest";

const componentsList = [
  { titulo: 'App React Inicial', componente: <AppReact /> },
  { titulo: 'Consumindo Api Rest React', componente: <ConsumindoApiRest /> },
  { titulo: 'Principais conceitos', componente: <AllPrincipaisConceitos /> },
  { titulo: 'Guias avançados', componente: <AllGuiasAvancados /> },
]

export default componentsList;