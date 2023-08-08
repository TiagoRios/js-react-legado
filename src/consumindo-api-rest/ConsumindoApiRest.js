import React from "react";
import meuJsonLocal from './pessoas.json';

export class ConsumindoApiRest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pessoas: []
        }
    }

    // Precisa para atualizar o componente quando ouver atualização
    // Esse codigo é assincrono - requisição get pode vim atrasada.
    componentDidMount() {
        // Código para buscar localmente
        this.setState({ pessoas: meuJsonLocal.results }) // busca localmente.

        // Código para buscar pela API na internet - assincrono.
        // fetch('https://randomuser.me/api/?results=10').then(res => {
        //     if (res.ok) {
        //         return res;
        //     }
        //     throw res;
        // }).then(pessoa => {
        //     this.setState({ pessoas: pessoa.results })
        // }).catch((err) => {
        //     console.log('Erro na busca fetch: ' + err)
        // })
    }

    render() {
        return (
            <div>
                <h1>Consumindo uma API externa e/ou local:</h1>
                <ul id='authors'>
                    {this.state.pessoas.map((p) =>
                        <li key={p.login.uuid}>{p.name.title}. {p.name.first} {p.name.last} <br/> 
                        email: {p.email} <br />
                        cidade: {p.location.city}<br/><hr/>
                        </li>
                    )}
                </ul>
                <p>{console.log()}</p>
            </div>
        )
    }
}