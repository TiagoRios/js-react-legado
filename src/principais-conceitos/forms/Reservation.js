import React from "react";

export default class Reservation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isGoing: true,
            numberOfGuests: 50,
            todosVaoVim: true
        }
    }

    handleInputChange = (e) => {
        let valor

        // manipulando multiplos componentes
        if (e.target.type === 'checkbox' && e.target.name === 'isGoing') {
            valor = e.target.checked; //return true ou false
        } else if (e.target.type === 'checkbox' && e.target.name === 'todosVaoVim') {
            valor = e.target.checked;
        } else {
            valor = e.target.value;
        }

        this.setState({
            // Usando: Nome de propriedades computadas.
            [e.target.name]: valor //isGoing ou todosVaoVim são os possiveis nomes da propriedade. 
        })
    }

    render() {
        return (<>
            <h4>Componente com tag &lt;input&gt; e &lt;select&gt; controlada</h4>

            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='isGoing'>Esta indo:</label>
                <input
                    checked={this.state.isGoing}
                    id='isGoing'
                    name="isGoing"
                    onChange={this.handleInputChange}
                    type='checkbox'
                />
                <br />

                <label htmlFor='todosVaoVim'>Todos vao vim:</label>
                <input
                    checked={this.state.todosVaoVim}
                    id='todosVaoVim'
                    name="todosVaoVim"
                    onChange={this.handleInputChange}
                    type='checkbox'
                />
                <br />

                <label htmlFor='numberOfGuests'>Número de convidados:</label>
                <input
                    id='numberOfGuests'
                    max={100}
                    min={0}
                    name="numberOfGuests"
                    onChange={this.handleInputChange}
                    type='number'
                    value={this.state.numberOfGuests}
                />
            </form>

            <p>isGoing: {this.state.isGoing ? "true" : "false"}</p>
            <p>numberOfGuests: {this.state.numberOfGuests}</p>
            <p>todosVaoVim: {this.state.todosVaoVim ? "true" : "false"}</p>
        </>
        )
    }
}