import React from "react";
import GlobalStyle from "../styles/globalStyles";
import { Sidebar } from "../components/Sidebar";
import { Main } from "./style";
import { StateProvider } from "../context/theme";

export const App = () => {
  return (
    <StateProvider>
      <GlobalStyle />
      <Main>
        <Sidebar />
      </Main>
    </StateProvider>
  );
};
