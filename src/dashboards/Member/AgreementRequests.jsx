import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../hooks/axios.config";
 

const AgreementRequests = () => {
    const { data: requests = [], isLoading, isError } = useQuery({
        queryKey: ["agreementRequests"],
        queryFn: async () => {
            const res = await axiosSecure.get("/agreements");
            return res.data;
        }
    });

    if (isLoading) return <p className="text-center mt-10">Loading...</p>;
    if (isError) return <p className="text-center text-red-500 mt-10">Failed to load requests.</p>;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Agreement Requests</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border rounded shadow">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border">Name</th>
                            <th className="py-2 px-4 border">Email</th>
                            <th className="py-2 px-4 border">Apartment</th>
                            <th className="py-2 px-4 border">Floor</th>
                            <th className="py-2 px-4 border">Block</th>
                            <th className="py-2 px-4 border">Rent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((req, i) => (
                            <tr key={i} className="text-center border-t">
                                <td className="py-2 px-4 border">{req.name}</td>
                                <td className="py-2 px-4 border">{req.email}</td>
                                <td className="py-2 px-4 border">{req.apartmentNo}</td>
                                <td className="py-2 px-4 border">{req.floor}</td>
                                <td className="py-2 px-4 border">{req.block}</td>
                                <td className="py-2 px-4 border">{req.rent}৳</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AgreementRequests;
