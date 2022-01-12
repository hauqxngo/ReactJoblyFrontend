import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import JobList from "../jobs/JobList";
import LoginForm from "../forms/LoginForm";
import SignupForm from "../forms/SignupForm";
import EditProfileForm from "../forms/EditProfileForm";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/companies">
        <CompanyList />
      </Route>
      <Route exact path="/companies/:handle">
        <CompanyDetail />
      </Route>
      <Route exact path="/jobs">
        <JobList />
      </Route>
      <Route exact path="/login">
        {/* <LoginForm /> */}
      </Route>
      <Route exact path="/signup">
        {/* <SignupForm /> */}
      </Route>
      <Route exact path="/profile">
        {/* <EditProfileForm /> */}
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
