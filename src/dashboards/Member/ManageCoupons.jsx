import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axiosSecure from "../../hooks/axios.config";

const ManageCoupons = () => {
    const queryClient = useQueryClient();
    const [couponCode, setCouponCode] = useState("");
    const [discount, setDiscount] = useState("");

    // Fetch Coupons
    const { data: coupons = [], isLoading, error } = useQuery({
        queryKey: ["coupons"],
        queryFn: async () => {
            const res = await axiosSecure.get("/coupons");
            if (Array.isArray(res.data)) {
                return res.data;
            } else {
                console.error("Expected array, got:", res.data);
                return [];
            }
        }
    });

    // Add Coupon
    const addCoupon = useMutation({
        mutationFn: async (newCoupon) => {
            const res = await axiosSecure.post("/coupons", newCoupon);
            return res.data;
        },
        onSuccess: () => {
            toast.success("Coupon added!");
            setCouponCode("");
            setDiscount("");
            queryClient.invalidateQueries(["coupons"]);
        },
        onError: () => {
            toast.error("Failed to add coupon.");
        }
    });

    // Delete Coupon
    const deleteCoupon = useMutation({
        mutationFn: async (id) => {
            const res = await axiosSecure.delete(`/coupons/${id}`);
            return res.data;
        },
        onSuccess: () => {
            toast.success("Coupon deleted!");
            queryClient.invalidateQueries(["coupons"]);
        },
        onError: () => {
            toast.error("Failed to delete coupon.");
        }
    });

    // Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!couponCode || !discount) {
            toast.error("Fill all fields");
            return;
        }
        addCoupon.mutate({ code: couponCode, discount: parseFloat(discount) });
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Manage Coupons</h2>

            {/* Add Form */}
            <form onSubmit={handleSubmit} className="flex gap-4 items-center mb-6">
                <input
                    type="text"
                    placeholder="Coupon Code"
                    className="input input-bordered w-40"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Discount %"
                    className="input input-bordered w-32"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                />
                <button className="btn btn-primary" type="submit">
                    Add Coupon
                </button>
            </form>

            {/* Loading / Error / Empty State */}
            {isLoading && <p>Loading coupons...</p>}
            {error && <p className="text-red-500">Failed to fetch coupons</p>}
            {!isLoading && coupons.length === 0 && (
                <p className="text-gray-500">No coupons available.</p>
            )}

            {/* Coupon Table */}
            {coupons.length > 0 && (
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Code</th>
                                <th>Discount (%)</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coupons.map((coupon, i) => (
                                <tr key={coupon._id}>
                                    <td>{i + 1}</td>
                                    <td>{coupon.code}</td>
                                    <td>{coupon.discount}</td>
                                    <td>
                                        <button
                                            className="btn btn-error btn-sm"
                                            onClick={() => deleteCoupon.mutate(coupon._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ManageCoupons;
