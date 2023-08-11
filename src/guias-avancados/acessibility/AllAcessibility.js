import Titulo from "../../utils-components/Titulo";
import HeaderH2 from "../../utils-components/HeaderH2";

import EntradaDeTexto from "./focar-no-input/EntradeDeTexto";
import EntradaDeTextoRevisao1 from "./focar-no-input/EntradeDeTextoRevisao1";
import EntradaDeTextoRevisaoComponentePai from "./focar-no-input/EntradeDeTextoRevisao2";

import ExemploDeBlur from "./problema-a11y/ExemploDeBlur";
import ClickForaExemplo from "./problema-a11y/ClickForaExemplo";

import Glossario, { Glossario2, arrItem } from "./uso-fragments/Glossario";

export default function AllAcessibility() {
    return (<>
        <HeaderH2>Controle do foco</HeaderH2>
        <Titulo title="EntradaDeTexto.js" component={<EntradaDeTexto />} />
        <Titulo title="EntradaDeTextoRevisão1.js" component={<EntradaDeTextoRevisao1 />} />
        <Titulo title="EntradaDeTextoRevisão2.js" component={<EntradaDeTextoRevisaoComponentePai />} />

        <HeaderH2>Problema acessibility (a11y)</HeaderH2>
        <Titulo title="ClickForaExemplo.js - problema" component={<>
            <ClickForaExemplo /><ClickForaExemplo /><ClickForaExemplo />
        </>} />
        <Titulo title="ExemploDeBlur.js - solução" component={<>
            <ExemploDeBlur /><ExemploDeBlur /><ExemploDeBlur />
        </>} />

        <HeaderH2>Fragments</HeaderH2>
        <Titulo title="Glossario.js" component={<>
            <Glossario /><Glossario2 items={arrItem} />
        </>} />
    </>)
}