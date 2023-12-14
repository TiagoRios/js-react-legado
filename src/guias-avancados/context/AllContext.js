import React from "react";
import ConteudoList from "../../utils-components/ConteudoList";

import contextConteudoList from "./contextConteudoList";

export default function AllContext() {
    return <ConteudoList conteudos={contextConteudoList} />
}
