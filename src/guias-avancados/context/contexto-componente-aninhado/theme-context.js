import React from "react";
import { theme } from "../themes";

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const ThemeContext = React.createContext({
  theme: theme.light,
  toggleTheme: () => { },
});