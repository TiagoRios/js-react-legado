import AllAcessibility from "./acessibility/AllAcessibility"
import { MyApp } from "./code-splitting/MyApp"
import AllContext from "./context/AllContext"

const guiasAvancadosList = [
  { titulo: 'Acessibilidade', componente: <AllAcessibility /> },
  { titulo: 'Code Splitting', componente: <MyApp /> },
  { titulo: 'Context', componente: <AllContext /> },
]

export default guiasAvancadosList;
