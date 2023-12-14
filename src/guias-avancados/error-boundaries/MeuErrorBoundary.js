import React from "react";


// eslint-disable-next-line no-lone-blocks
{/* 
<MeuErrorBoundary>
    <AlgumComponenteQuePodeAcontecerErro />
</MeuErrorBoundary> 
*/}

// Não esta funcionando chamar os dois metodos ao mesmo tempo. 
// componente não renderiza. propriedade fica undefined
export default class MeuErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        // propriedade utilizada para fins de debbuging, normalmente o nome é inferido automaticamente.
        this.displayName = 'NovoNome-MeuErrorBoundary';
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    /**
     * Método chamado durante a fase de renderização.
     * 
     * Efeitos colaterais NÃO são permitidos neste método. significa não poder alterar com setState, tentei mas não é possível.
     * 
     * @param {*} error È o erro que foi lançado por um compoente. 
     * @returns objeto com valor do state trocado.
     */
    // static getDerivedStateFromError(error) {
    //     // Atualiza o state para que a próxima renderização mostre a UI alternativa.
    //     // return { hasError: true };
    //     console.log(error.toString());
    //     // rreturn {
    //     //     hasError: true,
    //     // };
    // }

    /**
     * Ele é chamado durante a fase de commit
     * 
     * Efeitos colaterais são permitidos neste método.
     * 
     * Este método também é usado para registro (logs) de erros.
     * @param {*} error É o erro que foi lançado pelo componente descendente. 
     * @param {*} errorInfo Ele armazena o componenteStack trace dos componentes as quais lançaram esse erro.
     */
    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            error: error,
            errorInfo: errorInfo
        })

        // Você também pode registrar o erro em um serviço de relatórios de erro
        // logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Você pode renderizar qualquer UI alternativa
            return (<>
                <div style={{ margin: '0 auto', width: '60%' }}>
                    <h1 style={{ fontSize: '2em' }}>Ops! Algo deu errado.</h1>
                    <br />
                    <details style={{ whiteSpace: 'pre-wrap', fontSize: '1.5em' }}>
                        {/* Exibe o nome do erro. */}
                        '{this.displayName}'
                        <br />
                        <br />
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {/* Mostra a pilha de erros. */}
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            </>)
        }
        // Renderiza os filhos desse componente. componentes entre as tags dele.
        return this.props.children;

        // rreturn (
        //     <>{this.state.hasError ?
        //         <h1>Ops! Algo deu errado.</h1> :
        //         this.props.children
        //     }</>
        // )
    }
}