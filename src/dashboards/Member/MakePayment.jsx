import { useContext, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axiosSecure from "../../hooks/axios.config";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaMoneyBillWave } from "react-icons/fa";

const MakePayment = () => {
  const { user } = useContext(AuthContext);
  const [month, setMonth] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [finalRent, setFinalRent] = useState(null);

  // 1. Fetch user data (to get rent info and role)
  const { data: userData = {}, isLoading } = useQuery({
    queryKey: ["userInfo", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`);
      return res.data;
    },
  });

  const handleApplyCoupon = async () => {
    if (!couponCode) return toast.error("Please enter a coupon code");
    try {
      const res = await axiosSecure.get(`/coupons?code=${couponCode}`);
      if (res.data) {
        const percent = res.data.discount;
        const reduced = userData.rent - (userData.rent * percent) / 100;
        setDiscount(percent);
        setFinalRent(Math.round(reduced));
        toast.success(`Coupon applied! ${percent}% off`);
      } else {
        toast.error("Invalid coupon");
        setDiscount(0);
        setFinalRent(null);
      }
    } catch {
      toast.error("Error applying coupon");
    }
  };

  const mutation = useMutation({
    mutationFn: async () => {
      const paymentData = {
        email: userData.email,
        floor: userData.floor,
        block: userData.block,
        apartmentNo: userData.apartmentNo,
        rent: userData.rent,
        discount,
        finalAmount: finalRent || userData.rent,
        month,
        date: new Date(),
      };
      const res = await axiosSecure.post("/payments", paymentData);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Payment submitted!");
      setCouponCode("");
      setDiscount(0);
      setFinalRent(null);
      setMonth("");
    },
    onError: () => toast.error("Failed to submit payment"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!month) return toast.error("Select a month");
    mutation.mutate();
  };

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;

  // 2. Show nothing if user is not a member
  if (userData?.role !== "member") {
    console.log(userData);
    return (
      <div className="text-center mt-20 text-red-500 font-semibold">
        Access denied.
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded p-6 mt-10">
      <h2 className="text-2xl font-semibold flex gap-2 items-center text-blue-600 mb-6">
        <FaMoneyBillWave /> Make Rent Payment
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={userData.name}
          readOnly
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          value={userData.email}
          readOnly
          className="w-full px-4 py-2 border rounded"
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            value={`Floor: ${userData.floor}`}
            readOnly
            className="px-4 py-2 border rounded"
          />
          <input
            type="text"
            value={`Block: ${userData.block}`}
            readOnly
            className="px-4 py-2 border rounded"
          />
        </div>
        <input
          type="text"
          value={`Apartment: ${userData.apartmentNo}`}
          readOnly
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          value={`Rent: ৳${finalRent || userData.rent}`}
          readOnly
          className="w-full px-4 py-2 border rounded text-green-600 font-semibold"
        />

        <select
          className="w-full px-4 py-2 border rounded"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        >
          <option value="">Select Rent Month</option>
          {[
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December",
          ].map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter Coupon Code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="flex-1 px-4 py-2 border rounded"
          />
          <button
            type="button"
            onClick={handleApplyCoupon}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Apply
          </button>
        </div>

        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {mutation.isPending ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </div>
  );
};

export default MakePayment;
