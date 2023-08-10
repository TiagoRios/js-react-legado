import React, { Fragment } from "react"

export const posts = [
  { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', content: 'You can install React from npm.' },
  { id: 3, title: 'Dicas', content: 'Você pode obter dicas no site do React.' },
  { id: 4, title: 'Outros', content: 'outras informação busque no google.' },
];

export default function Blog(props) {
  return (
    <div style={{ display: "flex" }}>
      {/* Barra lateral com a lista de conteúdos */}
      <Sidebar styles={{
        border: '2px solid yellow',
        height: "auto"
      }} posts={props.posts} />

      {/* Conteudo principal */}
      <div style={{ border:"2px solid lightgreen", margin:"0 5px"}}>
        <h1 style={{ border:"2px solid orange", textAlign: 'center', margin: "15px" }}>Documentação React</h1>
        <Content styles={{
          border:"2px solid white",
          margin: "15px"
        }} posts={props.posts} />
      </div>

      {/* Barra lateral com a lista de conteúdos */}
      <Sidebar styles={{
        border: '2px solid blue',
      }} posts={props.posts} />

    </div>
  );
}

function Sidebar(props) {
  return (
    <div style={props.styles}>
      <ul >
        {/* aqui eu jogo diretamente o codigo sem precisar colocar em uma variavel antes. */}
        {props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    </div>
  )
}

function Content(props) {
  return (
    <div style={props.styles}>{
      props.posts.map((post) =>
        <Fragment key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </Fragment>
      )
    }</div>
  )
}