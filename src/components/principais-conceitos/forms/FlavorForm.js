import React from 'react';

export class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: ['coco'] };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        // 1ª
        // selectedOptions looks like this:
        // {
        //      '0': <1st selected HTMLOptionElement>,
        //      '1': <2nd selected HTMLOptionElement>,
        //      '2': <3rd selected HTMLOptionElement>
        // }

        // Gostei mais desse. Mas os outros também funcionam bem.
        let valores = Object.values(event.target.selectedOptions).map(opcao => opcao.value)

        // 2ª
        // Transformar a coleção em um array e mapear cada item no array (mapFunc é o segundo argumento)
        // let valores = Array.from(event.target.selectedOptions, option => option.value);

        // 3ª
        // Os argumentos dentro da função call são objetos 'array-like'.
        // let valores = [].slice.call(event.target.selectedOptions).map(opcao => opcao.value);

        this.setState({
            value: valores,
        });
    }

    handleSubmit(event) {
        alert('Seu(s) sabor(es) favorito(s): ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (<div>
            <h4>Componente com tag &lt;select&gt; controlada</h4>

            <form onSubmit={this.handleSubmit}>
                <label>
                    Escolha seu sabor favorito:
                    {/* <select size='5' value={this.state.value} onChange={this.handleChange}> */}
                    <select size='3' multiple={true} value={this.state.value} onChange={this.handleChange}>
                        <option value="coco">Coco</option>
                        <option value="laranja">Laranja</option>
                        <option value="limao">Limão</option>
                        <option value="manga">Manga</option>
                        <option value="morango">Morango</option>
                        <option value="pera">Pêra</option>
                        <option value="uva">Uva</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>

        </div>);
    }
}
