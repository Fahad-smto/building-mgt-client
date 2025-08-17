import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

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
        <section className="py-12 px-6 bg-gradient-to-r from-blue-50 to-blue-100   shadow-lg   mx-auto mt-12 mb-12">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-blue-700 mb-2">
                    🌟 Featured Products
                </h2>
                <p className="text-gray-600 mb-8 text-xl">
                    Enjoy <span className="text-red-500">20%</span> discount on the first month’s rent
                </p>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            whileHover={{ scale: 1.03 }}
                            className="card bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
                        >
                            <figure>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-48 w-full object-cover"
                                />
                            </figure>
                            <div className="card-body text-center">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {product.title}
                                </h3>
                                <p className="text-blue-600 font-bold">{product.description}</p>
                                <div className="card-actions justify-center mt-4">

                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-8 flex justify-center">

                    <Link
                        to="/apartment"
                        className="btn bg-blue-600 text-white rounded hover:bg-blue-700 transition flex items-center gap-2 group"
                    >
                        Book Now!
                        <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                            <FaArrowRight />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
