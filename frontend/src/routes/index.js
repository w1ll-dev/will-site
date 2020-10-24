import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { RoutesENUM } from "../contants/";
import { ExperiencesPage } from "../pages/Experiences";
import { CodeSkills } from "../pages/CodeSkills";
import { HomePage } from "../pages/Home";
import { Settigs } from "../pages/Settings";

export const RootRouter = () => {
  return (
    <Switch>
      <Route exact path={RoutesENUM.HOME}>
        <HomePage />
      </Route>
      <Route exact path={RoutesENUM.CODE_SKILLS}>
        <CodeSkills />
      </Route>
      <Route exact path={RoutesENUM.SETTINGS}>
        <Settigs />
      </Route>
      <Route exact path={RoutesENUM.EXPERIENCE}>
        <ExperiencesPage />
      </Route>
      <Redirect to={RoutesENUM.HOME} />
    </Switch>
  );
};
