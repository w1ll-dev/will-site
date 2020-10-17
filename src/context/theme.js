import React, { createContext, useState, useContext } from "react";
import { ThemeProvider } from "styled-components";
import themes from "../styles/themes";

const GlobalContext = createContext();

export const StateProvider = ({ children }) => {
  const [activeTheme, setTheme] = useState("light");

  const changeTheme = () =>
    activeTheme === "dark" ? setTheme("light") : setTheme("dark");

  const theme = themes[activeTheme] || themes.light;

  return (
    <GlobalContext.Provider value={{ changeTheme, activeTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </GlobalContext.Provider>
  );
};

export const useTheme = () => {
  const { changeTheme, activeTheme } = useContext(GlobalContext);
  return { changeTheme, activeTheme };
};
