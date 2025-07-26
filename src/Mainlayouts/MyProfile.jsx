import { useContext, useEffect, useState } from "react";
import axiosSecure from "../hooks/axios.config";
import { AuthContext } from "../Provider/AuthProvider";
 

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [agreement, setAgreement] = useState(null);
 
  useEffect(() => {
    const fetchAgreement = async () => {
      if (user?.email) {
        try {
          const res = await axiosSecure.get(`/agreements/${user.email}`);
          setAgreement(res.data || null);
        } catch (err) {
          console.error("Failed to fetch agreement:", err);
        }
      }
    };
    fetchAgreement();
  }, [user]);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">My Profile</h2>

      <div className="bg-white shadow-lg rounded-xl p-6 md:flex gap-6 items-center">
        {/* Profile Picture */}
        <div className="flex-shrink-0 text-center md:text-left">
          <img
            src={user?.photoURL || "/user.jpg"}
            alt="User"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-600"
          />
        </div>

        {/* User Info */}
        <div className="mt-6 md:mt-0 flex-1">
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">{user?.displayName}</h3>
          <p className="text-gray-600 mb-4"><span className="font-medium">Email:</span> {user?.email}</p>

          <div className="border-t pt-4">
            <h4 className="text-xl font-semibold text-green-600 mb-2">Apartment Agreement Info</h4>
            <p><span className="font-medium">Floor:</span> {agreement?.floor || "None"}</p>
            <p><span className="font-medium">Block:</span> {agreement?.block || "None"}</p>
            <p><span className="font-medium">Apartment No:</span> {agreement?.apartmentNo || "None"}</p>
            <p><span className="font-medium">Rent:</span> {agreement?.rent ? `${agreement.rent}৳` : "None"}</p>
            <p><span className="font-medium">Status:</span> {agreement?.status || "None"}</p>
            <p><span className="font-medium">Applied Date:</span> {agreement?.date ? new Date(agreement.date).toLocaleDateString() : "None"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
