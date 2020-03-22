import React, { Fragment } from 'react';
import Home from "./components/home";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Cookie from "universal-cookie";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  const cookie = new Cookie();
  const passport = cookie.get("auth-token");
  return (
    <Fragment>
       <Router>
        <Switch>
          <Route path="/dashboard" >
            { passport ? <Dashboard /> : <Redirect to="/" /> }
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" >
            <Home />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
