import React from "react";
import { Switch, Route } from "react-router-dom";
import CompanyList from "../companies/CompanyList";
import Home from "../Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/companies">
        <CompanyList />
      </Route>
    </Switch>
  );
};

export default Routes;
