import React from "react";

import scaleNames from "./scales";

export default class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.value)
    }

    render() {
        const scale = this.props.scale;
        const temperature = this.props.temperature;

        return (
            <fieldset>
                <legend>
                    Informe a temperatura em {scaleNames[scale]}:
                </legend>

                <input
                    onChange={this.handleChange}
                    value={temperature}
                />
            </fieldset>
        );
    }
}
