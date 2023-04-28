import React from 'react';
import { theme } from "../conteudo-site/themes";
import { ThemeContext } from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';

export class AppContextoAninhado extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === theme.dark
            ? theme.light
            : theme.dark,
      }));
    };

    // Estado também contém a função de atualização
    // Passando para o provedor de contexto
    this.state = {
      theme: theme.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    // Todo o estado (state) é passado para o provedor
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}