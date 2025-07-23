import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosSecure from "../../hooks/axios.config";
import toast from "react-hot-toast";

const ManageMembers = () => {
  const queryClient = useQueryClient();

  // Load all users with role: member
  const { data: members = [], isLoading } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users?role=member");
      return res.data;
    }
  });

  // Mutation to change role to "user"
  const mutation = useMutation({
    mutationFn: async (email) => {
      await axiosSecure.patch(`/users/updateRole/${email}`, { role: "user" });
      return email;
    },
    onSuccess: (email) => {
      toast.success(`Member ${email} removed`);
      queryClient.invalidateQueries(["members"]);
    },
    onError: () => toast.error("Failed to remove member"),
  });

  const handleRemove = (email) => {
    mutation.mutate(email);
  };

  if (isLoading) return <p>Loading members...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Manage Members</h2>
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {members.map((user, index) => (
            <tr key={index} className="border-t text-left">
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">
                <button
                  onClick={() => handleRemove(user.email)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageMembers;
