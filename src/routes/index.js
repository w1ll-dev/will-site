import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { RoutesENUM } from "../contants/";

export const RootRouter = () => {
  return (
    <Switch>
      <Route exact path={RoutesENUM.HOME}>
        <div>HOME</div>
      </Route>
      <Route exact path={RoutesENUM.ABOUT}>
        <div>ABOUT</div>
      </Route>
      <Route exact path={RoutesENUM.CONTACT}>
        <div>CONTACT</div>
      </Route>
      <Redirect to={RoutesENUM.CONTACT} />
    </Switch>
  );
};
