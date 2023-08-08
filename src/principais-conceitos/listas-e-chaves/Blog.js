// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'},
//   {id: 3, title: 'Dicas', content: 'Você pode obter dicas no site do React.'},
//   {id: 4, title: 'Outros', content: 'outras informação busque no google.'},
// ];

export function Blog(props) {
  return (
    <div>

      {/* Barra lateral com a lista de conteúdos */}
      <Sidebar styles={{
        float: 'left',
        border: '2px solid yellow',
      }} posts={props.posts} />

      {/* Barra lateral com a lista de conteúdos */}
      <Sidebar styles={{
        float: 'right',
        border: '2px solid blue',
      }} posts={props.posts} />


      {/* Conteudo principal */}
      <div style={{ border: '2px solid green', margin: '5px' }}>
        <h1 style={{ textAlign: 'center', display: 'block', }}>Documentação React</h1>
        <Content styles={{
          float: 'left',
          border: '2px solid red',
        }} posts={props.posts} />
      </div>

    </div>
  );
}

function Sidebar(props) {
  return (
    <ul style={props.styles}>
      {/* aqui eu jogo diretamente o codigo sem precisar colocar em uma variavel antes. */}
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  )
}

function Content(props) {
  return (
    <div style={props.styles}>{
      props.posts.map((post) =>
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      )
    }</div>
  )
}