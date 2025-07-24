import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axiosSecure from "../../hooks/axios.config";
import toast from "react-hot-toast";
import Swal from "sweetalert2";


const MakeAdmin = () => {
    const [search, setSearch] = useState("");
    const [keyword, setKeyword] = useState("");

    const { data: users = [], refetch, isFetching } = useQuery({
        queryKey: ["searchUsers", keyword],
        queryFn: async () => {
            if (!keyword) return [];
            const res = await axiosSecure.get(`/users/search?keyword=${keyword}`);
            return res.data;
        },
        enabled: !!keyword,
    });

    const mutation = useMutation({
        mutationFn: async ({ email, role }) => {
            const res = await axiosSecure.patch(`/users/role/${email}`, { role });
            return res.data;
        },
        onSuccess: () => {
            toast.success("Role updated");
            refetch();
        },
        onError: () => toast.error("Failed to update role"),
    });

    const handleSearch = (e) => {
        e.preventDefault();
        setKeyword(search.trim());
    };

    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: `Make ${user.name} an admin?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make admin"
        }).then((result) => {
            if (result.isConfirmed) {
                mutation.mutate({ email: user.email, role: "admin" });
                Swal.fire("Updated!", `${user.name} is now an admin.`, "success");
            }
        });
    };

    const handleRemoveAdmin = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: `Remove admin role from ${user.name}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove"
        }).then((result) => {
            if (result.isConfirmed) {
                mutation.mutate({ email: user.email, role: "user" });
                Swal.fire("Updated!", `${user.name} is no longer an admin.`, "success");
            }
        });
    };

    return (
        <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Make Admin</h2>
            <form onSubmit={handleSearch} className="mb-4 flex gap-2">
                <input
                    type="text"
                    placeholder="Search by name or email"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                />
                <button type="submit" className="btn btn-primary">Search</button>
            </form>

            {isFetching ? (
                <p>Loading...</p>
            ) : (
                <table className="w-full table-auto text-sm border">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border">Name</th>
                            <th className="py-2 px-4 border">Email</th>
                            <th className="py-2 px-4 border">Role</th>
                            <th className="py-2 px-4 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id} className="text-center">
                                <td className="py-2 px-4 border">{user.name}</td>
                                <td className="py-2 px-4 border">{user.email}</td>
                                <td className="py-2 px-4 border">{user.role}</td>
                                <td className="py-2 px-4 border">
                                    {user.role === "admin" ? (
                                        <button
                                            onClick={() => handleRemoveAdmin(user)}
                                            className="btn btn-sm bg-red-500 text-white"
                                        >
                                            Remove Admin
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="btn btn-sm bg-green-500 text-white"
                                        >
                                            Make Admin
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MakeAdmin;
