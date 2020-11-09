import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, CssBaseline } from "@material-ui/core";
import TopBar from "components/TopBar";
import Articles from "pages/Articles"
import AddArticle from "pages/AddArticle"
import SignUp from "pages/SignUp"
import SignIn from "pages/SignIn"
export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <TopBar />
        <Container>
          <Switch>
            <Route
              exact
              path={["/", "/articles"]}
              component={Articles}
            />
            <Route
              exact
              path={"/add"}
              component={AddArticle}
            />
            <Route
              exact
              path={"/signin"}
              component={SignIn}
            />
            <Route
              exact
              path={"/signup"}
              component={SignUp}
            />
          </Switch>
        </Container>
      </Router>
    </React.Fragment>
  );
}
