import { motion } from "framer-motion";
import { GraduationCap, Hospital, Building2, Plane } from "lucide-react";

const nearbyPlaces = [
    {
        id: 1,
        title: "University",
        description: "Prestigious universities located within 5 km for higher education opportunities.",
        icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
    },
    {
        id: 2,
        title: "Hospital",
        description: "Top-rated hospitals and clinics available nearby for 24/7 healthcare.",
        icon: <Hospital className="w-12 h-12 text-green-600" />,
    },
    {
        id: 3,
        title: "College",
        description: "Renowned colleges are within reach, ideal for families with students.",
        icon: <Building2 className="w-12 h-12 text-purple-600" />,
    },
    {
        id: 4,
        title: "Airport",
        description: "International airport just 20 minutes away for quick travel access.",
        icon: <Plane className="w-12 h-12 text-orange-600" />,
    },
];

const HighlightsNearby = () => {
    return (
        <section className="py-16  bg-blue-50   mx-auto  shadow-lg mt-20 mb-20">

            <div className="max-w-6xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Highlights <span className="text-blue-600">Nearby</span>
                    </h2>
                    <p className="mt-3 text-gray-600 ">
                        Explore the important landmarks and services close to your residence.
                    </p>
                </div>

                {/* Grid Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {nearbyPlaces.map((place, index) => (
                        <motion.div
                            key={place.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition"
                        >
                            <div className="flex justify-center mb-4">{place.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800">{place.title}</h3>
                            <p className="text-gray-600 mt-2">{place.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HighlightsNearby;
