import Header from "../../utils-components/Header";

// Ordem de estudo
import SemContext from "./contexto/SemContexto";
import ContextoClass from "./contexto/ContextoClass";
import ContextoFunction from "./contexto/ContextoFunction";
import ContextoAninhado from "./contexto-aninhado/ContextoAninhado";
import ConsumindoContextos from "./consumindo-contextos/ConsumindoContextos";

export default function AllContext() {
    return (<>
        <Header title="SemContext.js" />
        <SemContext />

        <Header title="ContextoClass.js" />
        <ContextoClass />

        <Header title="ContextoFunction.js" />
        <ContextoFunction />

        <Header title="ContextoAninhado.js" />
        <ContextoAninhado />

        <Header title="ConsumindoContextos.js" />
        <ConsumindoContextos />
    </>)
}