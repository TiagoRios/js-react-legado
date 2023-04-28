import React from "react";
//Utiliza pseudo-class :focus para modificar a cor do outline dos inputs
import './entradaDeTexto.css'

// define a 'ref' no construtor: this.inputDeTexto = React.createRef();
// usa a 'ref' na função manipuladora: this.inputTexto.current.focus();
export class EntradaDeTexto extends React.Component {
    constructor(props) {
        super(props);
        // Cria um ref para guardar o inputDeTexto no DOM
        this.inputDeLogin = React.createRef();
        this.inputDeSenha = React.createRef();

        this.handleFocusLogin = this.handleFocusLogin.bind(this);
        this.handleFocusSenha = this.handleFocusSenha.bind(this);
    }

    handleFocusLogin() {
        this.inputDeLogin.current.focus();
    }

    handleFocusSenha() {
        this.inputDeSenha.current.focus();
    }

    render() {
        return (
            // ou com ref utilizando React.forwardRef((props, ref)=>())
            // <Form ref={{ //esse ref é do componente definido com a instrução acima.
            <Form refe={{
                inputDeLogin: this.inputDeLogin,
                inputDeSenha: this.inputDeSenha,
            }}
                onClick={{
                    login: this.handleFocusLogin,
                    senha: this.handleFocusSenha
                }}
            />
        );
    }
}

// Sem utilizar React.forwarRef
class Form extends React.Component {
    render() {
        /*
        // You can’t specify pseudo-classes using inline styles. 
        // That means :hover, :focus, :active, or :visited 
        // go out the window rather than the component.

        // Also, you can’t specify media queries for responsive styling. 
        // Let’s consider another way to style your React app.

        // Use a `ref` callback para guardar a referencia do texto no input dentro do DOM 
        // elemento em um campo (por exemplo, this.inputDeTexto).
        */
        return (
            <><h4>Entrada de texto</h4>
                <form>
                    <label htmlFor='loginId' name='labelLogin'>Insira o login:</label><br />
                    <input id='loginId' name="login"
                        type="text"
                        // olha o tamanho dessa instrução.
                        // outra maneira com seria 'ref.inputDeLogin' com forwardRef.
                        ref={this.props.refe.inputDeLogin}
                    /><br />
                    <label htmlFor='senhaId' name='labelSenha'>Insira a senha:</label><br />
                    <input id='senhaId' name="senha"
                        type="password"
                        ref={this.props.refe.inputDeSenha}
                    /><br />
                    {/* recebendo um objeto com dois tipos de onClick */}
                    <input type='button' value='foco login' onClick={this.props.onClick.login} />
                    <input type='button' value='foco senha' onClick={this.props.onClick.senha} />

                    <hr />
                </form>
            </>
        )
    }
}

// Essa forma utilizando encaminhamento de ref também funciona com componentes de classe.
// Veja guias avançados: encaminhamento de refs. para entender.
// const Form = React.forwardRef((props, ref) => (
//     <><h4>Entrada de texto</h4>
//         <form>
//             <label htmlFor='loginId' name='labelLogin'>Insira o login:</label><br />
//             <input id='loginId' name="login"
//                 type="text"
//                 ref={ref.inputDeLogin}
//             /><br />
//             <label htmlFor='senhaId' name='labelSenha'>Insira a senha:</label><br />
//             <input id='senhaId' name="senha"
//                 type="password"
//                 ref={ref.inputDeSenha}
//             /><br />
//             {/* recebendo um objeto com dois tipos de onClick */}
//             <input type='button' value='foco login' onClick={props.onClick.login} />
//             <input type='button' value='foco senha' onClick={props.onClick.senha} />

//             <hr />
//         </form>
//     </>
// ))