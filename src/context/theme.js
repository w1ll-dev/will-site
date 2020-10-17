import React, { createContext, useState, useContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import themes from "../styles/themes";

const GlobalContext = createContext();

export const StateProvider = ({ children }) => {
  const [activeTheme, setTheme] = useState("light");

  useEffect(() => {
    const themeFromStorage = sessionStorage.getItem("theme") || "light";
    setTheme(themeFromStorage);
  }, []);

  const changeTheme = () => {
    const newTheme = activeTheme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    sessionStorage.setItem("theme", newTheme);
  };

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
