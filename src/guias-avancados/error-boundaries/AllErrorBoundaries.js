import React from "react";
import ConteudoList from "../../utils-components/ConteudoList";

import errorBoundariesConteudoList from "./errorBoundariesConteudoList";

export default function AllErrorBoundaries() {
  return (
    <ConteudoList
      conteudos={errorBoundariesConteudoList}
      level={2} />
  )
}