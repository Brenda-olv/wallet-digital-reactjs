import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LoginScreen from './pages/login/index';
import RegisterScreen from './pages/register/index';
import DashboardScreen from './pages/dashboard/index';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginScreen />
        </Route>
        <Route path="/register">
          <RegisterScreen />
        </Route>
        <Route path="/dashboard">
          <DashboardScreen />
        </Route>
      </Switch>
    </Router>
  );
}