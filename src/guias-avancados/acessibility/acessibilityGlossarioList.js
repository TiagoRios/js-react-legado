import ClickForaExemplo from "./problema-a11y/ClickForaExemplo";
import EntradaDeTexto from "./focar-no-input/EntradeDeTexto";
import EntradaDeTextoRevisao1 from "./focar-no-input/EntradeDeTextoRevisao1";
import EntradaDeTextoRevisaoComponentePai from "./focar-no-input/EntradeDeTextoRevisao2";
import ExemploDeBlur from "./problema-a11y/ExemploDeBlur";
import {
  GlossarioSintaxClasse,
  GlossarioSintaxFunction,
} from "./uso-fragments/Glossario";

import itemList from "./uso-fragments/itemList";

const acessibilityGlossarioList = [
  {
    titulo: 'Controle do foco',
    subConteudos: [
      {
        titulo: "EntradaDeTexto.js",
        componente: <EntradaDeTexto />
      },
      {
        titulo: "EntradaDeTextoRevisão1.js",
        componente: <EntradaDeTextoRevisao1 />
      },
      {
        titulo: "EntradaDeTextoRevisão2.js",
        componente: < EntradaDeTextoRevisaoComponentePai />
      },
    ]
  },
  {
    titulo: 'Problema acessibility (a11y)',
    subConteudos: [
      {
        titulo: "ClickForaExemplo.js - problema",
        componente: <>
          <ClickForaExemplo />
          <ClickForaExemplo />
          <ClickForaExemplo />
        </>
      },
      {
        titulo: "ExemploDeBlur.js - solução",
        componente: <>
          <ExemploDeBlur />
          <ExemploDeBlur />
          <ExemploDeBlur />
        </>
      },
    ]
  },
  {
    titulo: 'Fragments',
    subConteudos: [
      {
        titulo: "Glossario.js",
        componente: <>
          <GlossarioSintaxClasse itens={itemList} />
          <GlossarioSintaxFunction itens={itemList} />
        </>
      },
    ]
  },
]

export default acessibilityGlossarioList;
