import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "pages/Dashboard"
import Signin from "pages/SignIn";
import Signup from "pages/SignUp";
import PrivateRoute from "routes/PrivateRoute"
import { AuthProvider } from "providers/auth";

export default function App() {
  return (
    <AuthProvider>
       <ToastContainer />
      <Router>
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute exact path={["/","dashboard"]} component={Dashboard} />
        </Switch>
      </Router>
    </AuthProvider> 
  );
}