import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosSecure from "../../hooks/axios.config";
import toast from "react-hot-toast";

const AgreementRequests = () => {
  const queryClient = useQueryClient();

  // Get pending agreement requests
  const { data: requests = [], isLoading } = useQuery({
    queryKey: ["agreementRequests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/agreements?status=pending");
      return res.data;
    },
  });

  // Accept/Reject handler
  const mutation = useMutation({
    mutationFn: async ({ data, action }) => {
      const { email } = data;

      // Step 1: Mark agreement as checked
      await axiosSecure.patch(`/agreements/updateStatus/${email}`, {
        status: "checked",
      });

      // Step 2: Store user with role (member or user)
      const role = action === "accept" ? "member" : "user";
      await axiosSecure.post("/users", {
        ...data,
        role,
      });

      return action;
    },
    onSuccess: (action) => {
      toast.success(`Request ${action === "accept" ? "accepted" : "rejected"} successfully!`);
      queryClient.invalidateQueries(["agreementRequests"]);
    },
    onError: () => toast.error("Failed to process request."),
  });

  const handleAction = (data, action) => {
    mutation.mutate({ data, action });
  };

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Agreement Requests</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Floor</th>
              <th className="py-2 px-4 border">Block</th>
              <th className="py-2 px-4 border">Room</th>
              <th className="py-2 px-4 border">Rent</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req, i) => (
              <tr key={i} className="text-center border-t">
                <td className="py-2 px-4 border">{req.name}</td>
                <td className="py-2 px-4 border">{req.email}</td>
                <td className="py-2 px-4 border">{req.floor}</td>
                <td className="py-2 px-4 border">{req.block}</td>
                <td className="py-2 px-4 border">{req.apartmentNo}</td>
                <td className="py-2 px-4 border">{req.rent}৳</td>
                <td className="py-2 px-4 border space-x-2">
                  <button
                    onClick={() => handleAction(req, "accept")}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleAction(req, "reject")}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgreementRequests;
