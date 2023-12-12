import React from "react";

import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scale: 'celsius',
            temperature: '',
        };

        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(temperature) {
        this.setState({ scale: 'celsius', temperature });
    }

    handleFahrenheitChange(temperature) {
        this.setState({ scale: 'fahrenheit', temperature });
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;

        const celsius = scale === 'fahrenheit'
            ? tryConvert(temperature, toCelsius)
            : temperature;

        const fahrenheit = scale === 'celsius'
            ? tryConvert(temperature, toFahrenheit)
            : temperature;

        return (
            <div>
                <TemperatureInput
                    onChange={this.handleCelsiusChange}
                    scale='celsius'
                    temperature={celsius}
                />

                <TemperatureInput
                    onChange={this.handleFahrenheitChange}
                    scale='fahrenheit'
                    temperature={fahrenheit}
                />

                <BoilingVerdict
                    scale={scale}
                    temperature={parseFloat(temperature)} />
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
    const temperatureFloat = parseFloat(temperature);

    if (Number.isNaN(temperatureFloat)) {
        return '';
    }

    const convertResult = convert(temperatureFloat);
    const rounded = Math.round(convertResult * 1000) / 1000;

    return rounded.toString();
}