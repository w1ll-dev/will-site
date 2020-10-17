import React from "react";
import {  Redirect, Route, Switch } from "react-router-dom";
import { RoutesENUM } from "../contants";

export const RootRouter = () => (
  <Switch>
    <Route exact path={RoutesENUM.HOME}>
      <center>Home</center>
    </Route>
    <Route exact path={RoutesENUM.CONTACT}>
      <center>Contact</center>
    </Route>
    <Route exact path={RoutesENUM.ABOUT_ME}>
      <center>About</center>
    </Route>
    <Redirect to={RoutesENUM.HOME} />
  </Switch>
);
