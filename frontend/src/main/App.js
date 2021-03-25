import React from "react";
import GlobalStyle from "../styles/globalStyles";
import { Sidebar } from "../components/Sidebar";
import { Main, Content } from "./style";
import { StateProvider } from "../context/theme";
import { RootRouter } from "../routes";
import { history } from "../routes/history.js";
import { Router } from "react-router-dom";

export const App = () => {
  return (
    <Router history={history}>
      <StateProvider>
        <GlobalStyle />
        <Main>
          <Sidebar />
          <Content>
            <RootRouter />
          </Content>
        </Main>
      </StateProvider>
    </Router>
  );
};
