import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { RoutesENUM } from "../contants/";
import { AboutMe } from "../pages/AboutMe";
import { Contact } from "../pages/Contact";
import { HomePage } from "../pages/Home";

export const RootRouter = () => {
  return (
    <Switch>
      <Route exact path={RoutesENUM.HOME}>
        <HomePage />
      </Route>
      <Route exact path={RoutesENUM.ABOUT}>
        <AboutMe />
      </Route>
      <Route exact path={RoutesENUM.CONTACT}>
        <Contact />
      </Route>
      <Redirect to={RoutesENUM.HOME} />
    </Switch>
  );
};
