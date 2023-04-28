import React from 'react';

export class SearchBar extends React.Component {
    constructor(props){
        super(props);

        // Aqui utiliza o conceito de componentes controlados
        // fazendo o bind dentro do construtor
        this.handleTemNoEstoque = this.handleTemNoEstoque.bind(this);
        this.handleTextoFiltrado = this.handleTextoFiltrado.bind(this);
    }

    // Aqui define o método que vai manipular a prop onNoEstoqueChange
    handleTemNoEstoque(e){
        this.props.onTemNoEstoqueChange(e.target.checked);
    }
    
    // Define prop onTextoParaFiltrarChange
    handleTextoFiltrado(e){
        this.props.onTextoParaFiltrarChange(e.target.value);
    }
    
    render() {
        return (
            <form style={{ border: '2px solid green' }}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.value}
                    onChange={this.handleTextoFiltrado} />
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.checked}
                        onChange={this.handleTemNoEstoque} />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}