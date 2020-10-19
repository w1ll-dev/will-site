import React, { createContext, useState, useContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import themes from "../styles/themes";

const GlobalContext = createContext();

// Provide state to all app
export const StateProvider = ({ children }) => {
  const [activeTheme, setTheme] = useState("light");
  
  // if has no theme selected to session set light theme 
  useEffect(() => {
    const themeFromStorage = sessionStorage.getItem("theme") || "light";
    setTheme(themeFromStorage)
  }, []);
  
  // set theme to state and session storage 
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
// hook to get and update state
export const useTheme = () => {
  const { changeTheme, activeTheme } = useContext(GlobalContext);
  return { changeTheme, activeTheme };
};
