import { Children, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useUserRole from "../hooks/useUserRole";
import Loading from "../Components/Loading";
import { Navigate } from "react-router";

 

const AdminRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext)
    const {role,roleLoading} = useUserRole();

    if(loading||roleLoading){
        return <Loading></Loading>
    }

    if(!user || role !=='admin'){
        return <Navigate state={{from:location.pathname}}to='/forbidden'></Navigate>
    }

    return (children);
};

export default AdminRoute;