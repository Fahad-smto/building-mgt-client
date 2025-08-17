import { FaShieldAlt, FaUsers, FaCalendarCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const FeatureHighlights = () => {
    const features = [
        {
            icon: <FaShieldAlt className="text-blue-600 w-10 h-10" />,
            title: "Secure Access Control",
            description:
                "Manage resident and staff access with advanced permissions and monitoring for a safer building.",
        },
        {
            icon: <FaUsers className="text-green-600 w-10 h-10" />,
            title: "Resident Management",
            description:
                "Keep track of all residents, their lease agreements, and communication history in one place.",
        },
        {
            icon: <FaCalendarCheck className="text-purple-600 w-10 h-10" />,
            title: "Maintenance Scheduling",
            description:
                "Schedule, assign, and track maintenance requests with real-time updates to keep your building running smoothly.",
        },
    ];

    return (
        <section className="mx-auto px-6 py-16 text-center mt-12 mb-12 bg-blue-50 shadow-lg">
            <motion.h3
                className="text-3xl font-bold mb-12 text-gray-900"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Why Choose Our System?
            </motion.h3>

            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                {features.map(({ icon, title, description }, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center cursor-pointer"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.2)" }}
                    >
                        <motion.div
                            className="mb-4"
                            whileHover={{ rotate: 10 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            {icon}
                        </motion.div>
                        <h4 className="text-xl font-semibold mb-2">{title}</h4>
                        <p className="text-gray-600">{description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FeatureHighlights;
