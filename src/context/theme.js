import React, {
  createContext,
  useState,
  useContext,
  useEffect
} from "react";
import { ThemeProvider } from "styled-components";
import themes from "../styles/themes";

const GlobalContext = createContext();

// Provide state to all app
export const StateProvider = ({ children }) => {
  const [activeTheme, setTheme] = useState("light");

  // if has no theme selected to session set light theme
  useEffect(() => {
    const themeFromStorage = localStorage.getItem("theme") ?? "light";
    setTheme(themeFromStorage);
  }, []);

  // set theme to state and session storage
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const theme = themes[activeTheme] || themes.light;

  return (
    <GlobalContext.Provider
      value={{
        theme: {
          changeTheme,
          activeTheme,
        },
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </GlobalContext.Provider>
  );
};

// hook to get and update state
export const useTheme = () => {
  const { theme } = useContext(GlobalContext);
  const { changeTheme, activeTheme } = theme;
  return { changeTheme, activeTheme };
};
