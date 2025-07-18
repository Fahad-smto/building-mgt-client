import { useState } from "react";
import { FaCreditCard, FaMoneyCheckAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const MakePayment = () => {
  const [form, setForm] = useState({
    cardNumber: "",
    name: "",
    expiry: "",
    cvv: "",
    amount: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (
      !form.cardNumber ||
      !form.name ||
      !form.expiry ||
      !form.cvv ||
      !form.amount
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    // Simulate payment success
    toast.success("Payment successful!");
    setForm({
      cardNumber: "",
      name: "",
      expiry: "",
      cvv: "",
      amount: "",
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6 flex items-center justify-center gap-2">
        <FaMoneyCheckAlt /> Make a Payment
      </h2>
      <form onSubmit={handlePayment} className="space-y-4">
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          maxLength={16}
          value={form.cardNumber}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="name"
          placeholder="Card Holder Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <div className="flex gap-4">
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            maxLength={5}
            value={form.expiry}
            onChange={handleChange}
            className="w-1/2 px-4 py-2 border rounded"
          />
          <input
            type="password"
            name="cvv"
            placeholder="CVV"
            maxLength={3}
            value={form.cvv}
            onChange={handleChange}
            className="w-1/2 px-4 py-2 border rounded"
          />
        </div>
        <input
          type="number"
          name="amount"
          placeholder="Amount (৳)"
          value={form.amount}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded flex items-center justify-center gap-2"
        >
          <FaCreditCard /> Pay Now
        </button>
      </form>
    </div>
  );
};

export default MakePayment;
