import ThemeContext from './ThemeContext';

export default function ButtonToggleTheme() {
  return (
    <ThemeContext.Consumer>
      {
        (contexto) => <Botao
          theme={contexto.theme}
          toggleTheme={contexto.toggleTheme}
        />
      }
    </ThemeContext.Consumer>
  );
}

function Botao({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        border: theme.border
      }}
    >
      Toggle Theme
    </button>
  )
}