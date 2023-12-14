import React from 'react';

import ThemeContext from './ThemeContext';
import ButtonToggleTheme from './ButtonToggleTheme';

import theme from "../themes";

export default class ContextoAninhado extends React.Component {
  constructor(props) {
    super(props);

    // Este componente deve ser declarado antes do uso.
    // Posso usar no componentDidMount
    this.toggleTheme = () => {
      this.setState((state) => ({
        theme:
          state.theme === theme.dark
            ? theme.light
            : theme.dark,
      }));
    };

    this.state = {
      theme: theme.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}

function Content() {
  return <ButtonToggleTheme />;
}