import React from "react";
import './entradaDeTexto.css'
import Header from "../../../utils-components/Header";

export default class EntradaDeTexto extends React.Component {
    constructor(props) {
        super(props);

        this.inputDeLogin = React.createRef();
        this.inputDeSenha = React.createRef();

        this.handleFocusLogin = this.handleFocusLogin.bind(this);
        this.handleFocusSenha = this.handleFocusSenha.bind(this);
    }

    handleFocusLogin(e) {
        e.preventDefault();
        this.inputDeLogin.current.focus();
    }

    handleFocusSenha(e) {
        e.preventDefault();
        this.inputDeSenha.current.focus();
    }

    render() {
        return (<>
            < Header title="Componente usando classe" level={3} />
            <FormSintaxClasse
                onClick={{
                    login: this.handleFocusLogin,
                    senha: this.handleFocusSenha,
                }}
                refe={{ inputDeLogin: this.inputDeLogin, }}
            />

            < Header title="Componente usando forwardRef" level={3} />
            <FormSintaxForwardRef
                onClick={{
                    login: this.handleFocusLogin,
                    senha: this.handleFocusSenha,
                }}
                ref={{ inputDeSenha: this.inputDeSenha, }}
            />
        </>
        );
    }
}

class FormSintaxClasse extends React.Component {
    render() {

        // You can’t specify pseudo-classes using inline styles. 
        // That means :hover, :focus, :active, or :visited 
        // go out the window rather than the component.
        // Also, you can’t specify media queries for responsive styling. 
        return (<>
            <form>
                <input
                    id='loginId'
                    name="login"
                    placeholder="Insira o Login"
                    ref={this.props.refe.inputDeLogin}
                    type="text"
                />

                <ControlesFoco onClicks={{
                    login: this.props.onClick.login,
                    senha: this.props.onClick.senha,
                }} />
            </form>
        </>)
    }
}

const FormSintaxForwardRef = React.forwardRef((props, ref) => (
    <form>
        <input
            id='senhaId'
            name="senha"
            placeholder="Insira a Senha"
            ref={ref.inputDeSenha}
            type="password"
        />

        <ControlesFoco onClicks={{
            login: props.onClick.login,
            senha: props.onClick.senha,
        }} />
    </form>
))

function ControlesFoco({ onClicks }) {
    return (<>
        <button onClick={onClicks.login}>
            Foque no login
        </button>

        <button onClick={onClicks.senha} >
            Foque na senha
        </button>
    </>)

}