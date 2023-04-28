import React from "react";
import { BotaoAbrirFecharQuestao } from "./botao-abrir-fechar-questao/BotaoAbrirFecharQuestao";
import { Questao } from "./questao/Questao";

/**
 * intermediário para compartilhar a 'ref' do DOM somente entre os componentes filhos.
 * Não posso colocar dentro da mesma div, porque a questao precisa ser fechada
 */
export class QuestaoMaisBotaoAbriFecharQuestao extends React.Component {
    constructor(props) {
        super(props);
        this.divRef = React.createRef();
    }
    render() {
        return (
            <div>
                <BotaoAbrirFecharQuestao referencia={this.divRef} idQuestao={this.props.questao.id} styles={this.props.botaoQuestao}>
                    Questao {this.props.questao.id}
                </BotaoAbrirFecharQuestao>
                <Questao referencia={this.divRef} questao={this.props.questao} display={this.props.display} />
            </div>)
    }
}