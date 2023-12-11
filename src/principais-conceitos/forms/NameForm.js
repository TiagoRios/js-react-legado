import React from "react";

export default class NameForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`Elemento submetido: ${this.state.value}`);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (
            <div>
                <h4>Componente com tag &lt;input&gt; controlada</h4>

                <form onSubmit={this.handleSubmit}>
                    <Name
                        onChange={(e) => this.handleChange(e)}
                        value={this.state.value}
                    />

                    <input
                        type='submit'
                        value='Submeter formulário'
                    />
                </form>
            </div>
        )
    }
}

class Name extends React.Component {
    render() {
        return (
            <div style={{ display: 'inline' }}>
                <label htmlFor='name'>Name:</label>

                <input
                    id='name'
                    onChange={this.props.onChange}
                    value={this.props.value}
                />
            </div>
        )
    }
}
