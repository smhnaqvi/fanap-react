import React from "react";
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps
} from "react-router-dom";
import { useAuth } from ".";

export interface PrivateRouteProps extends RouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

export const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, ...rest } = props;
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      children={(routeProps: RouteComponentProps<any>) => {
        return !!user ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              search: `from=${routeProps.location.pathname}`,
              state: { from: routeProps.location }
            }}
          />
        );
      }}
    />
  );
};
