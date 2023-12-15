import ConteudoList from "../../utils-components/ConteudoList"

import forwardRefConteudoList from "./forwardRefConteudoList"

export default function AllForwarRef() {
  return (
    <ConteudoList
      conteudos={forwardRefConteudoList}
      level={2} />
  )
}