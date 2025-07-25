import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../hooks/axios.config";
import { AuthContext } from "../../Provider/AuthProvider";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      return res.data;
    },
    enabled: !!user?.email, // Wait for user to be loaded
  });

  if (isLoading) return <p>Loading payment history...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Payment History</h2>
      <div className="overflow-x-auto">
        <table className="table w-full border rounded shadow">
          <thead className="bg-gray-100">
            <tr>
              <th>#</th>
              <th>Month</th>
              <th>Apartment</th>
              <th>Rent</th>
              <th>Discount</th>
              <th>Final Amount</th>
              <th>Transaction ID</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, idx) => (
              <tr key={payment._id}>
                <td>{idx + 1}</td>
                <td>{payment.month}</td>
                <td>
                  {payment.block}-{payment.floor}-{payment.apartmentNo}
                </td>
                <td>${payment.rent}</td>
                <td>${payment.discount}</td>
                <td>${payment.finalAmount}</td>
                <td className="text-sm break-all">{payment.transactionId}</td>
                <td>{new Date(payment.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {payments.length === 0 && (
          <p className="text-gray-500 mt-4">No payment history found.</p>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
