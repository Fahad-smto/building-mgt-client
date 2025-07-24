import {  useContext } from "react";
import { useLocation } from "react-router";
import { Navigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "./Loading";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    console.log(user);

    if (loading) {
        return <Loading></Loading>
    }
    if (user && user?.email) {
        return children;
    }


    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;