import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import JobList from "../jobs/JobList";
import LoginForm from "../forms/LoginForm";
import SignupForm from "../forms/SignupForm";
import ProfileForm from "../forms/ProfileForm";
import PrivateRoute from "./PrivateRoute";
import ProtectingRoute from "./ProtectingRoute";

/** Routes are wrapped by <Private> would only visible when logged in
 *
 * Invalid links will be redirected to Home page.
 */

const Routes = ({ login, signup }) => {
  return (
    <div className="pt-4">
      <Switch>
        <Route exact path="/">
          <Home login={login} />
        </Route>
        <ProtectingRoute exact path="/login">
          <LoginForm login={login} />
        </ProtectingRoute>
        <ProtectingRoute exact path="/signup">
          <SignupForm signup={signup} />
        </ProtectingRoute>

        <PrivateRoute exact path="/companies">
          <CompanyList />
        </PrivateRoute>
        <PrivateRoute exact path="/companies/:handle">
          <CompanyDetail />
        </PrivateRoute>
        <PrivateRoute exact path="/jobs">
          <JobList />
        </PrivateRoute>
        <PrivateRoute exact path="/profile">
          <ProfileForm />
        </PrivateRoute>

        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default Routes;
