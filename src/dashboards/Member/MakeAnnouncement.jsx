import { useState } from "react";
import toast from "react-hot-toast";
import axiosSecure from "../../hooks/axios.config";
 
const MakeAnnouncement = () => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axiosSecure.post("/announcements", {
                title,
                message,
                date: new Date(),
            });

            if (res.data.insertedId) {
                toast.success("Announcement created!");
                setTitle("");
                setMessage("");
            }
        } catch (err) {
            toast.error("Failed to create announcement.");
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-8">
            <h2 className="text-2xl font-bold mb-4">Make Announcement</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="w-full border p-2 rounded"
                    />
                </div>
                <div>
                    <label className="block font-medium">Message</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full border p-2 rounded h-32"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default MakeAnnouncement;
