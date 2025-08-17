import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // stagger effect
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100 },
    },
};

const FeaturedProducts = () => {
    const products = [
        {
            id: 1,
            title: "Luxury Apartment",
            description: "Get 20% off on the first month’s rent",
            image: "/4.jpg",
        },
        {
            id: 2,
            title: "Modern Studio",
            description: "Special offer: First month just $199",
            image: "/8.jpg",
        },
        {
            id: 3,
            title: "Family Apartment",
            description: "Enjoy a discounted rate this month",
            image: "/3.jpg",
        },
        {
            id: 4,
            title: "Premium Penthouse",
            description: "Limited-time offer on first month rent",
            image: "/6.jpg",
        },
    ];

    return (
        <section className="py-12 px-6 bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg mx-auto mt-12 mb-12">
            <div className="max-w-6xl mx-auto text-center ">
                {/* Heading Animation */}
                <motion.h2
                    className="text-3xl font-bold text-blue-700 mb-2"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    🌟  GET DISCOUNT
                </motion.h2>

                <motion.p
                    className="text-gray-600 mb-8 text-xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Enjoy <span className="font-urbanist text-red-500">20%</span> discount on the first month’s rent
                </motion.p>

                {/* Product Grid with Staggered Animations */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={cardVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="card bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
                        >
                            <figure>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-48 w-full object-cover"
                                />
                            </figure>
                            <div className="card-body text-center">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {product.title}
                                </h3>
                                <p className="text-blue-600 font-bold">{product.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action Button */}
                <motion.div
                    className="mt-8 flex justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Link
                        to="/apartment"
                        className="btn bg-blue-600 text-white rounded hover:bg-blue-700 transition flex items-center gap-2 group px-6 py-3 font-semibold"
                    >
                        Book Now!
                        <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                            <FaArrowRight />
                        </span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
