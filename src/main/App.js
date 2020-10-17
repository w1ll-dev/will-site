import React from "react";
import { ThemeProvider } from "styled-components";
import themes from "../styles/themes";
import GlobalStyle from "../styles/globalStyles";
import { Sidebar } from "../components/Sidebar";
import { Main } from "./style";

export const App = () => {
  return (
    <ThemeProvider theme={themes.dark}>
      <GlobalStyle />
      <Main>
        <Sidebar />
      </Main>
    </ThemeProvider>
  );
};
