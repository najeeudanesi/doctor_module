/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";

const ProtectedRoute = ({ component: PureComponent, ...rest }) => {
  const il = { il: true }; // isLoggedin

  return (
    <Route
      {...rest}
      render={(props) =>
        il && il.il ? (
          <PureComponent {...props} {...rest} />
        ) : (
          <Navigate
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
