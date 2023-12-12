import React from "react";

import Dialog from "./Dialog";

// Componente especializado renderizando um mais generico.
export default function WelcomeDialog() {
  return (
    <Dialog
      message='Agradecemos por visitar a nossa espaço nave!'
      title='Bem vindo'
    />
  )
}