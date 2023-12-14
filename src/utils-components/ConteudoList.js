import Conteudo from "./Conteudo"

export default function ConteudoList({ conteudos, level }) {
  return (
    conteudos.map(conteudo => {
      return (
        <Conteudo
          conteudo={conteudo}
          key={conteudo.titulo}
          level={level}
        />
      )
    })
  )
}