import { ThemeContext } from './theme-context';

export default function ThemeTogglerButton() {
  // The Theme Toggler Button receives not only the theme
  // but also a toggleTheme function from the context
  return (
    <ThemeContext.Consumer>
      {
        // veja: o assunto "function as a child" em guias avançados.
        // arrow function que retorna um elemento <button>
        // aqui usa o state = { theme, toggleTheme } desestruturação
        ({ theme, toggleTheme }) => (
          <button
            onClick={toggleTheme}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
              border: theme.border
            }}>
            Toggle Theme
          </button>
        )
      }
    </ThemeContext.Consumer>
  );
}