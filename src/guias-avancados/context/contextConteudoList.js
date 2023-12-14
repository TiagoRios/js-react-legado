// Ordem de estudo
import SemContext from "./contexto/SemContexto";
import ContextoClass from "./contexto/ContextoClass";
import ContextoFunction from "./contexto/ContextoFunction";
import ContextoAninhado from "./contexto-aninhado/ContextoAninhado";
import ConsumindoContextos from "./consumindo-contextos/ConsumindoContextos";

const contextConteudoList = [
  {
    titulo: "SemContext.js",
    componente: <SemContext />,
  },
  {
    titulo: "ContextoClass.js",
    componente: <ContextoClass />,
  },
  {
    titulo: "ContextoFunction.js",
    componente: <ContextoFunction />,
  },
  {
    titulo: "ContextoAninhado.js",
    componente: <ContextoAninhado />,
  },
  {
    titulo: "ConsumindoContextos.js",
    componente: <ConsumindoContextos />,
  },
];

export default contextConteudoList;
