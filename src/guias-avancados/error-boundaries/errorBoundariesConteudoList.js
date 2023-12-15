// ordem de estudo
import SemErrorBoundary from "./SemErrorBoundary";
import ErrorBoundaryApp from "./demonstracao-ao-vivo/ErrorBoundaryApp";
import MeuErrorBoundaryApp from "./MeuErrorBoundaryApp";

const errorBoundariesConteudoList = [
  {
    titulo: "SemErroBoundary.js",
    componente: <SemErrorBoundary />,
  },
  {
    titulo: "App.js - ErrorBoundary em ação",
    componente: <ErrorBoundaryApp />,
  },
  {
    titulo: "MeuErrorBoundaryApp.js",
    componente: <MeuErrorBoundaryApp />,
  },
];

export default errorBoundariesConteudoList;