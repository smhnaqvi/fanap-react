import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "components/ui";
import { PrivateRoute } from "components/Auth";

const LoginAsync = React.lazy(() => import("pages/Auth/Login"));
const RegisterAsync = React.lazy(() => import("pages/Auth/Register"));
const HomeAsync = React.lazy(() => import("pages/Home"));
const ProfileAsync = React.lazy(() => import("pages/Profile"));

function Main() {
  return (
    <Switch>
      <Route exact path="/login" component={LoginAsync} />
      <Route exact path="/register" component={RegisterAsync} />
      <Route>
        <Layout>
          <Switch>
            <PrivateRoute exact path="/" component={HomeAsync} />
            <PrivateRoute exact path="/profile" component={ProfileAsync} />
            <Route>Not Found</Route>
          </Switch>
        </Layout>
      </Route>
    </Switch>
  );
}

export default Main;
