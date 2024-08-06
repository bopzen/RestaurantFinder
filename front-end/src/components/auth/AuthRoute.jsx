import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext.jsx";

export default function AuthRoute() {
    const { token, role } = useContext(AuthContext);

    if (!token || role != "restaurant"){
        return <Navigate to="/unauthorized" />;
    }
    return <Outlet />;
};

