import React, { useState } from "react"

import BoilingVerdict from "./BoilingVerdict";
import Calculator from "./Calculator";
import Header from "../../utils-components/Header";
import TemperatureInput from "./TemperatureInput";

export default function AllElevandoState() {
    const [temperatura, setTemperatura] = useState(0);

    function handleTemperaturaClick(event) {
        setTemperatura(event)
    }

    return (<>
        <Header title="TemperatureInput.js" />
        <TemperatureInput
            onChange={handleTemperaturaClick}
            scale='fahrenheit'
            temperature={temperatura}
        />
        valor input: {temperatura && temperatura}

        <Header title="BoilingVerdict.js" />
        <BoilingVerdict
            scale="celsius"
            temperature="100"
        />
        <BoilingVerdict
            scale="celsius"
            temperature="99"
        />

        <Header title="Calculator.js" />
        <Calculator />
    </>)
}