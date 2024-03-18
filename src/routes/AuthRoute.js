import React from "react";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
    const token = sessionStorage.getItem("token");
    if (!token) {
        return <Navigate to="/" replace />;
    }
    return children;
};

export default AuthRoute;
