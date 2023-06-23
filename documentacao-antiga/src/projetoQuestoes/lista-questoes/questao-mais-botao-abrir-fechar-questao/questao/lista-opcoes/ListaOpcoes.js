import React from "react";
import { Opcao } from "./opcao/Opcao";

export class ListaOpcoes extends React.Component {
    render() {
        return (<ul style={{ paddingLeft: '20px' }}>
            {this.props.arrOpcoes.map((opcao) =>
                <Opcao
                    key={opcao.id}
                    opcao={opcao}
                    idQuestao={this.props.idQuestao}
                    onChange={this.props.onChange}
                />
            )}
        </ul>)
    }
}   
