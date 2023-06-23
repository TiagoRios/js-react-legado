import { Component } from "react";

export class Opcao extends Component {
    render() {
        const opcao = this.props.opcao;
        const idQuestao = this.props.idQuestao;
        const idInput = idQuestao + '.' + opcao.id;
         
        return (
            <li style={{ listStyle: 'none',  marginBottom: '5px' }}>

                <input
                    id={idInput} //questao1.1
                    type='radio'
                    name={idQuestao} //Todos os item tem o mesmo nome
                    value={opcao.correta} // true ou false.
                    onChange={this.props.onChange} //
                    required='required'
                />

                <label htmlFor={idInput}>{opcao.texto}</label>
            </li>
        )
    }
}