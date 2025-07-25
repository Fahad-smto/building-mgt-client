import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";
import axiosSecure from "../../hooks/axios.config";
import { FaMoneyBillWave } from "react-icons/fa";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Stripe publishable key (replace with your real one)
const stripePromise = loadStripe(import.meta.env.VITE_Payment_key);

// CheckoutForm Component
const CheckoutForm = ({ userData, finalAmount, month, resetForm }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    try {
      // 1. Create PaymentIntent from backend
      const res = await axiosSecure.post("/create-payment-intent", {
        amount: finalAmount,
      });

      const clientSecret = res.data.clientSecret;

      // 2. Get card details
      const card = elements.getElement(CardElement);

      // 3. Confirm payment with Stripe
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: userData.name,
            email: userData.email,
          },
        },
      });

      if (result.error) {
        toast.error(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        // 4. Save payment info in database
        await axiosSecure.post("/payments", {
          email: userData.email,
          floor: userData.floor,
          block: userData.block,
          apartmentNo: userData.apartmentNo,
          rent: userData.rent,
          discount: userData.rent - finalAmount,
          finalAmount,
          month,
          transactionId: result.paymentIntent.id,
          date: new Date(),
        });

        toast.success("Payment successful!");
        resetForm();
      }
    } catch (err) {
      toast.error("Payment failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      <CardElement className="border rounded p-4" />
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        disabled={!stripe}
      >
        Pay ${finalAmount}
      </button>
    </form>
  );
};

// Main Component
const MakePayment = () => {
  const { user } = useContext(AuthContext);
  const [month, setMonth] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [finalRent, setFinalRent] = useState(null);

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

  const resetForm = () => {
    setCouponCode("");
    setDiscount(0);
    setFinalRent(null);
    setMonth("");
  };

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;

  if (userData?.role !== "member") {
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

      <input
        type="text"
        value={userData.name}
        readOnly
        className="w-full px-4 py-2 border rounded mb-2"
      />
      <input
        type="text"
        value={userData.email}
        readOnly
        className="w-full px-4 py-2 border rounded mb-2"
      />
      <div className="grid grid-cols-2 gap-4 mb-2">
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
        className="w-full px-4 py-2 border rounded mb-2"
      />
      <input
        type="text"
        value={`Rent: ৳${finalRent || userData.rent}`}
        readOnly
        className="w-full px-4 py-2 border rounded text-green-600 font-semibold mb-4"
      />

      <select
        className="w-full px-4 py-2 border rounded mb-4"
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

      <div className="flex gap-2 mb-4">
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

      {month ? (
        <Elements stripe={stripePromise}>
          <CheckoutForm
            userData={userData}
            finalAmount={finalRent || userData.rent}
            month={month}
            resetForm={resetForm}
          />
        </Elements>
      ) : (
        <p className="text-sm text-red-500 font-medium text-center">Please select a month to continue</p>
      )}
    </div>
  );
};

export default MakePayment;
