import { useQuery } from "@tanstack/react-query";
import   { AuthContext } from "../Provider/AuthProvider";  
import axiosSecure from "../hooks/axios.config"; 
import { useContext } from "react";

const useUserRole = () => {
    const { user, loading } =  useContext(AuthContext);
 

    const { data: role = "user", isLoading: roleLoading ,refetch} = useQuery({
        enabled: !!user?.email && !loading,
        queryKey: ["userRole", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user.email}/role`);
            return res.data.role;
        },
    });

    return { role, roleLoading ,refetch};
};

export default useUserRole;
