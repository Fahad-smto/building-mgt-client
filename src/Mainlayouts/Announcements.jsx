import { useEffect, useState } from "react";
import axios from "axios";

const Announcements = () => {
    const [announcements, setAnnouncements] = useState([]);
    console.log(announcements);
    useEffect(() => {
         
        axios.get("http://localhost:5000/announcements")
            .then(res => setAnnouncements(res.data))
            .catch(err => console.error("Failed to fetch announcements", err));
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">📢 Announcements</h2>

            {announcements.length === 0 ? (
                <p className="text-center text-gray-500">No announcements available.</p>
            ) : (
                <div className="grid md:grid-cols-1 gap-6">
                    {announcements.map((item, index) => (
                        <div key={index} className="bg-white border shadow-md p-6 rounded-lg hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.message}</p>
                            <p className="text-sm text-gray-400 mt-2">📅 {new Date(item.date).toLocaleDateString()}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Announcements;
