import AllAcessibility from "./acessibility/AllAcessibility"
import AllContext from "./context/AllContext"
import CodeSplitting from "./code-splitting/CodeSplitting"
import AllErrorBoundaries from "./error-boundaries/AllErrorBoundaries"
import AllForwarRef from "./forward-refs/AllForwarRef"

const guiasAvancadosList = [
  { titulo: 'Acessibilidade', componente: <AllAcessibility /> },
  { titulo: 'Code Splitting', componente: <CodeSplitting /> },
  { titulo: 'Context', componente: <AllContext /> },
  { titulo: 'Error Boundaries', componente: <AllErrorBoundaries /> },
  { titulo: 'Forward ref', componente: <AllForwarRef /> },
]

export default guiasAvancadosList;
