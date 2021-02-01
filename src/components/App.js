import React from "react";
import "./index.css";

import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signup from "./Signup/Signup";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import PrivateRoute from "./PrivateRoute";

export default function App() {
  return (
    <Container
      className="App d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}
