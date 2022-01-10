import React from "react";
import API from "../../utils/API.js";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const myAPI  = new API();
  return (
  <Route
    {...rest}
    render={(props) => {
      if (myAPI.loggedIn() === false) {
        return <Redirect to="/login" />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
);
  }