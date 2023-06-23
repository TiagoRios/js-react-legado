import { Dialog } from "./Dialog";

// Um caso especial de do componente Dialog.
// Um componente mais especifico renderiza um componente mais genérico.
export function WelcomeDialog() {
  return (
    <Dialog title='Bem vindo' message='Agradecemos por visitar a nossa espaço nave!' />
  )
}