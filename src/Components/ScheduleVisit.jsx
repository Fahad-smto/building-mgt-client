import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const ScheduleVisit = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !phone || !date || !time) {
            toast.error("Please fill all fields!");
            return;
        }

        // Here you would typically send data to your API
        toast.success("Visit scheduled successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setDate("");
        setTime("");
    };

    return (
        <section className="py-16 bg-blue-50 max-w-6xl mx-auto rounded-2xl shadow-lg mt-12">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-blue-900">
                        Schedule a <span className="text-blue-600">Visit</span>
                    </h2>
                    <p className="mt-3 text-blue-800">
                        Book a visit to explore the available apartments and facilities.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
                >
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <div className="md:col-span-2 text-center">
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all"
                            >
                                Schedule Visit
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ScheduleVisit;
