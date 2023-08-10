import React from "react"

const estilo = {
    display: "inline"
}

export default function TituloMaisToggle({ nome, componente }) {
    let [mostrar, setMostrar] = React.useState(false);

    function handleMostrarClick() {
        setMostrar(!mostrar);
    }

    return (<div style={{display:"block"}}>
        <h2 style={estilo}>{nome}</h2>
        <button
            style={estilo}
            onClick={handleMostrarClick}>{mostrar ? "Esconder" : "Mostrar"}</button>

        {mostrar && componente}
    </div>
    )
}