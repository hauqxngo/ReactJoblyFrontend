import React, { useState, useEffect } from "react";
import Routes from "../routes/Routes";
import NavBar from "../navigation/NavBar";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import JoblyApi from "../../api/api";
import jwt from "jsonwebtoken";
import UserContext from "../auth/UserContext";
import Loading from "../navigation/Loading";
import useLocalStorage from "../hooks/useLocalStorage";

// Key name for storing token in localStorage to stay logged in
export const TOKEN_STORAGE_ID = "jobly-token";

/** Jobly application.
 *
 * - isLoaded: manages "Loading..." part before pulling user data from API.
 *
 * - currentUser: is user logged in? This is stored
 *   in UserContext to pass around easily.
 *
 * - token: is required for authentication JWT
 *   for logged in users. This is initially read from
 *   localStorage and synced to there via the useLocalStorage hook.
 *
 * App -> Routes
 */

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [applicationIds, setApplicationIds] = useState(new Set([]));

  // Load user info from API. Until a user is logged in and they have a token,
  // this should not run. It only needs to re-run when a user logs out, so
  // the value of the token is a dependency for this effect.

  useEffect(
    function loadUserInfo() {
      async function getCurrentUser() {
        if (token) {
          try {
            let { username } = jwt.decode(token);
            // put the token on the JoblyApi class
            JoblyApi.token = token;
            let currentUser = await JoblyApi.getCurrentUser(username);
            setCurrentUser(currentUser);
          } catch (err) {
            setCurrentUser(null);
          }
        }
        setIsLoaded(true);
      }

      // set isLoaded to false while async getCurrentUser runs; once the
      // data is fetched (or even if an error happens!), this will be set back
      // to false to control the spinner.
      setIsLoaded(false);
      getCurrentUser();
    },
    [token]
  );

  // handles logout
  const logout = () => {
    setCurrentUser(null);
    setToken(null);
  };

  // handles signup & automatically logs in after that
  async function signup(data) {
    try {
      let token = await JoblyApi.signup(data);
      setToken(token);
      return { success: true };
    } catch (err) {
      return { success: false, err };
    }
  }

  // handles log in
  async function login(data) {
    try {
      let token = await JoblyApi.login(data);
      setToken(token);
      return { success: true };
    } catch (err) {
      return { success: false, err };
    }
  }

  // checks if a job has been applied
  const hasApplied = (id) => {
    return applicationIds.has(id);
  };

  // makes API call & update set of application IDs when applying to a job
  const apply = (id) => {
    if (hasApplied(id)) return;
    JoblyApi.apply(currentUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
  };

  if (!isLoaded) return <Loading />;

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider
          value={{ currentUser, setCurrentUser, hasApplied, apply }}
        >
          <NavBar logout={logout} />
          <Routes login={login} signup={signup} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
