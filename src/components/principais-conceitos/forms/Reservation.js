import React from "react";

export class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //se eu especificar uma props value aqui vai impedir que o usuário altere.
            //se eu colocar seu valor como 'null' ou 'undefined'. Ela se torna editavel novamente
            isGoing: true,
            numberOfGuests: 123,
            todosVaoVim: true
        }
    }

    //Sintaxe experimental no React. Use vinculação pelo construtor com function.prototype.bind().
    handleInputChange = (e) => {

        let valor
        // Dessa forma posso manipular multiplos componentes
        if (e.target.type === 'checkbox' && e.target.name === 'isGoing')
            valor = e.target.checked; //return true ou false
        else if (e.target.type === 'checkbox' && e.target.name === 'todosVaoVim')
            valor = e.target.checked;
        else
            valor = e.target.value;

        // Bom para manipular dois componentes
        // const valor = e.target.type === 'checkbox'
        //     ? e.target.checked //return true ou false
        //     : e.target.value //return um valor numerico

        // Sem nome de propriedades computadas
        // let partialState = = {};
        // partialState[e.target.name] =  valor;
        // this.setState(partialState);

        this.setState({
            // Usando: Nome de propriedades computadas.
            // Aqui a propriedade do objeto vai vim dinamicamente, seu valor não é fixo.
            [e.target.name]: valor //isGoing ou todosVaoVim são os possiveis nomes da propriedade. 
        })
    }

    render() {
        return (<>
            <h4>Componente com tag &lt;input&gt; e &lt;select&gt; controlada</h4>
            <form>
                <label htmlFor='isGoing'>Esta indo:</label>
                <input id='isGoing'
                    name="isGoing"
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                /><br />

                <label htmlFor='todosVaoVim'>Todos vao vim:</label>
                <input id='todosVaoVim'
                    name="todosVaoVim"
                    type='checkbox'
                    checked={this.state.todosVaoVim}
                    onChange={this.handleInputChange}
                /><br />

                <label htmlFor='numberOfGuests'>Número de convidados:</label>
                <input id='numberOfGuests'
                    name="numberOfGuests"
                    type='number'
                    value={this.state.numberOfGuests}
                    onChange={this.handleInputChange}
                />
            </form>
        </>
        )
    }
}