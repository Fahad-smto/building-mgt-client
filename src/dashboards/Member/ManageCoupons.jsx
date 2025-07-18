import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
 
import toast from "react-hot-toast";
import axiosSecure from "../../hooks/axios.config";

const ManageCoupons = () => {
    const queryClient = useQueryClient();
    const [couponCode, setCouponCode] = useState("");
    const [discount, setDiscount] = useState("");

    const { data: coupons = [] } = useQuery({
        queryKey: ["coupons"],
        queryFn: async () => {
            const res = await axiosSecure.get("/coupons");
            return res.data;
        }
    });

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
        }
    });

    const deleteCoupon = useMutation({
        mutationFn: async (id) => {
            await axiosSecure.delete(`/coupons/${id}`);
        },
        onSuccess: () => {
            toast.success("Coupon deleted!");
            queryClient.invalidateQueries(["coupons"]);
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!couponCode || !discount) {
            toast.error("Fill all fields");
            return;
        }
        addCoupon.mutate({ code: couponCode, discount });
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Manage Coupons</h2>
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
        </div>
    );
};

export default ManageCoupons;
