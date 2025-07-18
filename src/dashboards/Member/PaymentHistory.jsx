import { FaReceipt } from "react-icons/fa";

const dummyHistory = [
  {
    id: "TXN001",
    date: "2025-07-01",
    amount: 15000,
    method: "Card",
    status: "Successful",
  },
  {
    id: "TXN002",
    date: "2025-06-01",
    amount: 15000,
    method: "Card",
    status: "Successful",
  },
  {
    id: "TXN003",
    date: "2025-05-01",
    amount: 15000,
    method: "Card",
    status: "Successful",
  },
];

const PaymentHistory = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-2">
        <FaReceipt /> Payment History
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Transaction ID</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Amount (৳)</th>
              <th className="px-4 py-2 border">Method</th>
              <th className="px-4 py-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyHistory.map((entry, index) => (
              <tr key={entry.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{entry.id}</td>
                <td className="px-4 py-2 border">{entry.date}</td>
                <td className="px-4 py-2 border">{entry.amount}</td>
                <td className="px-4 py-2 border">{entry.method}</td>
                <td className="px-4 py-2 border">
                  <span className="text-green-600 font-semibold">
                    {entry.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
