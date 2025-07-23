import { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../hooks/axios.config";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const fetchApartments = async ({ queryKey }) => {
  const [_, page, minRent, maxRent] = queryKey;
  const res = await axiosSecure.get(
    `/apartments?page=${page}&limit=6&minRent=${minRent}&maxRent=${maxRent}`
  );
  return res.data;
};

const Apartment = () => {
  const [page, setPage] = useState(1);
  const [minRent, setMinRent] = useState(0);
  const [maxRent, setMaxRent] = useState(10000);
  const [appliedApartmentNo, setAppliedApartmentNo] = useState(null);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // ✅ Load existing agreement if user already applied
  useEffect(() => {
    const fetchAgreement = async () => {
      if (user?.email) {
        try {
          const res = await axiosSecure.get(`/agreements/${user.email}`);
          setAppliedApartmentNo(res.data?.apartmentNo);
        } catch (err) {
          console.error("Failed to load agreement info");
        }
      }
    };
    fetchAgreement();
  }, [user]);

  // ✅ Handle Agreement Submission
  const handleAgreement = async (apartment) => {
    if (!user) {
      navigate("/login");
      return;
    }

    const agreementData = {
      name: user.displayName,
      email: user.email,
      floor: apartment.floor,
      block: apartment.block,
      apartmentNo: apartment.apartmentNo,
      rent: apartment.rent,
      status: "pending",
      
    };

    try {
      const res = await axiosSecure.post("/agreements", agreementData);
      if (res.data.insertedId) {
        setAppliedApartmentNo(apartment.apartmentNo);
        toast.success("Agreement request submitted!");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "You have already applied.");
    }
  };

  // ✅ Fetch apartments
  const { data, isLoading, isError } = useQuery({
    queryKey: ["apartments", page, minRent, maxRent],
    queryFn: fetchApartments,
    keepPreviousData: true,
  });

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (isError) return <p className="text-center text-red-500 mt-10">Error fetching apartments</p>;

  const totalPages = Math.ceil(data.total / 6);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Available Apartments</h2>

      {/* 🔍 Filter */}
      <div className="flex gap-4 mb-6 justify-center">
        <input
          type="number"
          placeholder="Min Rent"
          className="border p-2 rounded"
          value={minRent}
          onChange={(e) => setMinRent(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Max Rent"
          className="border p-2 rounded"
          value={maxRent}
          onChange={(e) => setMaxRent(Number(e.target.value))}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => setPage(1)}
        >
          Search
        </button>
      </div>

      {/* 🏠 Apartment Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {data.apartments.map((apt, i) => {
          const isApplied = apt.apartmentNo === appliedApartmentNo;

          return (
            <div key={i} className="border p-4 rounded shadow hover:shadow-lg transition">
              <img
                src={apt.image}
                alt={`Apartment ${apt.apartmentNo}`}
                className="h-48 w-full object-cover rounded"
              />
              <h3 className="mt-2 font-semibold text-xl">{apt.apartmentNo}</h3>
              <p>Floor: {apt.floor}</p>
              <p>Block: {apt.block}</p>
              <p>Rent: {apt.rent}৳</p>
              <button
                onClick={() => handleAgreement(apt)}
                disabled={isApplied}
                className={`mt-3 px-4 py-2 rounded text-white ${
                  isApplied
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {isApplied ? "Applied" : "Agreement"}
              </button>
            </div>
          );
        })}
      </div>

      {/* ⏩ Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        <button
          className="px-4 py-2 border rounded disabled:opacity-50"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Prev
        </button>
        <span className="px-4 py-2 border rounded">{page}</span>
        <button
          className="px-4 py-2 border rounded disabled:opacity-50"
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Apartment;
