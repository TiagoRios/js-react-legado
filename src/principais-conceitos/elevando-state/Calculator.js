import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

/**
 * O estado dos outros componentes foram elevados para o componente acima.
 */
export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {
            temperature: '',
            scale: 'celsius'
        };
    }

    handleCelsiusChange(temperature) {
        this.setState({ scale: 'celsius', temperature });
    }
    handleFahrenheitChange(temperature) {
        this.setState({ scale: 'fahrenheit', temperature });
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.state.scale;

        const celsius = scale === 'fahrenheit'
            ? tryConvert(temperature, toCelsius)
            : temperature;

        const fahrenheit = scale === 'celsius'
            ? tryConvert(temperature, toFahrenheit)
            : temperature;

        return (
            <div>
                <TemperatureInput scale='celsius'
                    temperature={celsius}
                    onChange={this.handleCelsiusChange} />
                <TemperatureInput scale='fahrenheit'
                    temperature={fahrenheit}
                    onChange={this.handleFahrenheitChange} />

                <BoilingVerdict scale={scale} temperature={parseFloat(temperature)} />
            </div>
        );
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}