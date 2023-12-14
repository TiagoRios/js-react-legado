import React from "react";

import theme from "../themes";

const ThemeContext = React.createContext({
  theme: theme.light,
  toggleTheme: () => { },
});

export default ThemeContext;