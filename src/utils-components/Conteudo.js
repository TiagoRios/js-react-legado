import Header from "./Header";

export default function Conteudo({ conteudo, level }) {
  return (<>
    <Header
      level={level}
      title={conteudo.titulo}
    />

    {conteudo.componente}
  </>)
}