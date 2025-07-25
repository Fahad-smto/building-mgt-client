import { FaShieldAlt, FaUsers, FaCalendarCheck } from "react-icons/fa";

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
        <section className="max-w-6xl mx-auto px-6 py-16 text-center">
            <h3 className="text-3xl font-bold mb-12 text-gray-900">
                Why Choose Our System?
            </h3>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                {features.map(({ icon, title, description }, idx) => (
                    <div
                        key={idx}
                        className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
                    >
                        <div className="mb-4">{icon}</div>
                        <h4 className="text-xl font-semibold mb-2">{title}</h4>
                        <p className="text-gray-600">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeatureHighlights;
