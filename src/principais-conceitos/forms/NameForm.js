import React from "react";

export class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        // sintaxe vinculação pelo construtor.
        // this.handleChange = = this.handleChange.bind(this);
    }

    //Só para relembrar a sintaxe experimental no React usando ES6 arrow function
    // Vinculando o elemento sem precisar utilizar vinculação no construtor.
    handleSubmit = (e) => {
        alert(`Elemento submetido: ${this.state.value}`);
        e.preventeDefault();
    }

    // Deixar desse jeito para funcionar com vinculação pelo construtor e arrow function no atributo.
    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (<div>
            <h4>Componente com tag &lt;input&gt; controlada</h4>
            <form onSubmit={this.handleSubmit}>
                {/* Essa sintaxe não é recomendada: (event)=>this.handleAlgo(event)*/}
                {/* fiz somente com arrow function somente para testar meus conhecimentos sobre eventos no React. */}
                <Name value={this.state.value} onChange={(e)=>this.handleChange(e)}/>
                <input type='button' value='Submeter formulário' onClick={this.handleSubmit}/>
            </form>
            
            </div>)
    }
}


class Name extends React.Component {
    render() {
        return (
            <div style={{display:'inline'}}>
                <label htmlFor='name'>Name:</label>
                <input id='name'
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </div>
        )
    }
}


// Original do site React.
// classe NameForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
  
//       this.handleChange = = this.handleChange.bind(this);
//       this.handleSubmit = = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('Um nome foi enviado: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Nome:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Enviar" />
//         </form>
//       );
//     }
//   }