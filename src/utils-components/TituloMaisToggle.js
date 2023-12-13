import React from "react"

const estilo = {
    display: "inline"
}

export default function TituloMaisToggle({ titulo, children }) {
    let [exibirConteudo, setExibirConteudo] = React.useState(false);

    function handleExibirConteudoClick() {
        setExibirConteudo(!exibirConteudo);
    }

    return (
        <div style={{ display: "block" }}>
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