import React, { useState } from "react"

import Titulo from "../../utils-components/Titulo";
import Calculator from "./Calculator";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

export default function AllElevandoState() {
    const [temperatura, setTemperatura] = useState(0);

    function handleTemperaturaClick(event) {
        setTemperatura(event)
    }

    return (<>

        <Titulo title="TemperatureInput.js"
            component={<>
                <TemperatureInput
                    scale='fahrenheit'
                    temperature={temperatura}
                    onChange={handleTemperaturaClick} />
                valor input: {temperatura && temperatura}
            </>}
        />

        <Titulo title="BoilingVerdict.js" component={<>
            <BoilingVerdict scale="celsius" temperature="100" />
            <BoilingVerdict scale="celsius" temperature="99" />
        </>} />

        <Titulo title="Calculator.js" component={<Calculator />} />
    </>)
}