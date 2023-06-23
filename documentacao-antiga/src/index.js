import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { ListaQuestoes } from './projetoQuestoes/lista-questoes/ListaQuestoes';
import reportWebVitals from './reportWebVitals';

/*
// Usado pelo componente Comment
// let autor111 = = {
//   name: 'james',
//   nameAlt: 'Avatar da pessoa',
//   avatarUrl: 'https://www.shutterstock.com/image-vector/young-smiling-man-adam-avatar-600w-2107967969.jpg',
   <Comment author={autor111} text='algumm texto aqui asdf' date='2023' />
// }

// Usado pelo componente Blog
// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'},
//   {id: 3, title: 'Dicas', content: 'Você pode obter dicas no site do React.'},
//   {id: 4, title: 'Outros', content: 'outras informação busque no google.'},
// ];
<Blog posts={posts}/>
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <header style={{border:'3px solid red'}}>
      <ul style={{ listStyle:'none', display: 'flex', justifyContent:'space-evenly', backgroundColor: 'gray', color:'white'}}>
        <li>Home</li>
        <li>Questões</li>
        <li>Provas</li>
        <li>Sobre</li>
      </ul>
    </header>
    <main>

    </main> */}
    <div className="conteudo-flex" >
      <ListaQuestoes />
    </div>
    {/* <footer style={{textAlign:'center'}}>
      <p>@copiright 2023</p>
    </footer> */}
  </React.StrictMode>
);

/* If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 */
reportWebVitals(console.log());