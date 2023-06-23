import React, { Component } from "react";
import { QuestaoMaisBotaoAbriFecharQuestao } from "./questao-mais-botao-abrir-fechar-questao/QuestaoMaisBotaoAbriFecharQuestao";
import provasJSON from '../jsonMock/provas.json'

const botaoQuestao = {
    margin: '10px 0',
    width: '100%',
    borderRadius: '20px',
    fontSize: '2rem'
}

export class ListaQuestoes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none',
            displayEscondido: true,
        }

        this.handleClickMostrarTodos = () => {
            if (this.state.displayEscondido === true) {
                this.setState({ display: 'block', displayEscondido: !this.state.displayEscondido })
            } else {
                this.setState({ display: 'none', displayEscondido: !this.state.displayEscondido })
            }
        }
    }

    render() {
        return (
            <div style={{ alignContent: "center", marginTop: '10px', width: '100%', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center' }} >Todas as Questões</h2>

                <button style={{ display: 'block', margin: '10px 0', width: '50%', borderRadius: '20px', backgroundColor: 'lightgray', fontSize: '2rem' }}
                    onClick={this.handleClickMostrarTodos}>
                    {this.state.displayEscondido ? 'Abrir Questões' : 'Fechar Questões'}
                </button>

                {
                    provasJSON.provas.map((prova) =>
                        <div key={prova.id}>
                            {/* id:{prova.id} <br />
                            banca: {prova.banca} <br />
                            tipo prova:{prova.tipo} <br />
                            formação:{prova.formacao} <br />
                            cargo:{prova.cargo} <br />
                            nível:{prova.nivel} <br />
                            estado:{prova.localidade.map((l) => l.estado)} <br />
                            uf:{prova.localidade.map((l) => l.uf)} <br /> */}
                            {prova.questoes.map((questao) =>
                                <div key={questao.id}>
                                    <QuestaoMaisBotaoAbriFecharQuestao key={questao.id}
                                        botaoQuestao={botaoQuestao}
                                        questao={questao}
                                        display={this.state.display}
                                    />
                                </div>
                            )}
                        </div>
                    )
                }
            </div >
        )
    }
}