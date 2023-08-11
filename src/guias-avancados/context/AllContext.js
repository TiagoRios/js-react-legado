import Titulo from "../../utils-components/Titulo";

import AppSemContext from "./conteudo-site/AppSemContexto";
import AppComContextoClass from "./conteudo-site/AppComContextoClass";
import AppComContextoFunction from "./conteudo-site/AppComContextoFunction";
import AppContextoAninhado from "./contexto-componente-aninhado/AppContextoAninhado";
import AppConsumindoVariosContextos from "./consumindo-varios-contextos/AppConsumindoVariosContextos";

export default function AllContext() {
    return (<>
        <Titulo title="AppSemContext.js" component={<AppSemContext />} />
        <Titulo title="AppComContextoClass.js" component={<AppComContextoClass />} />
        <Titulo title="AppComContextoFunction.js" component={<AppComContextoFunction />} />
        <Titulo title="AppContextoAninhado.js" component={<AppContextoAninhado />} />
        <Titulo title="AppConsumindoVariosContextos.js" component={<AppConsumindoVariosContextos />} />
    </>)
}