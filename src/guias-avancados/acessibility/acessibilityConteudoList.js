import EntradaDeTexto from "./focar-no-input/EntradeDeTexto";
import EntradaDeTextoRevisao1 from "./focar-no-input/EntradeDeTextoRevisao1";
import {
  GlossarioSintaxClasse,
  GlossarioSintaxFunction,
} from "./uso-fragments/Glossario";
import ProblemaAcessibilidade from "./problema-a11y/ProblemaAcessibilidade";
import SolucaoAcessibilidade from "./problema-a11y/SolucaoAcessibilidade";

import itemList from "./uso-fragments/itemList";

const acessibilityConteudoList = [
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
    ]
  },
  {
    titulo: 'Problema acessibility (a11y)',
    subConteudos: [
      {
        titulo: "ProblemaAcessibilidade.js",
        componente: <>
          <ProblemaAcessibilidade />
          <ProblemaAcessibilidade />
          <ProblemaAcessibilidade />
        </>
      },
      {
        titulo: "SolucaoAcessibilidade.js",
        componente: <>
          <SolucaoAcessibilidade />
          <SolucaoAcessibilidade />
          <SolucaoAcessibilidade />
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

export default acessibilityConteudoList;
