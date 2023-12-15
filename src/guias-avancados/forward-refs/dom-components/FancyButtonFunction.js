import React from "react";

import estilos from "./estilos";

// props.ref não existem, devo usar uma palavra diferente de 'ref'
export default function FancyButtonFunction({ children, referencia }) {
  return (
    <div>
      <button
        ref={referencia}
        style={estilos}
      >
        {children}
      </button>
    </div>
  )
}