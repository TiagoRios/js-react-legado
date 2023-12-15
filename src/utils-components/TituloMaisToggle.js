import React from "react"

const estilo = {
    display: "inline"
}

export default function TituloMaisToggle({ titulo, children }) {
    let [exibirConteudo, setExibirConteudo] = React.useState(false);

    function handleExibirConteudoClick() {
        setExibirConteudo(!exibirConteudo);
    }

    // TODO: Aplicador novo layout de apresentação.
    return (
        <div style={{ display: "block" }}>
            <br />
            <h2 style={estilo}>
                {titulo}
            </h2>

            <button
                onClick={handleExibirConteudoClick}
                style={estilo}
            >
                {exibirConteudo ? "Esconder" : "Exibir"}
            </button>

            {exibirConteudo && children}
        </div>
    )
}