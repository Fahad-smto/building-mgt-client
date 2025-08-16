import { motion } from "framer-motion";

const FeaturedProducts = () => {
    const products = [
        {
            id: 1,
            name: "Modern Sofa",
            price: "$499",
            image:
                "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
        },
        {
            id: 2,
            name: "Smart Watch",
            price: "$199",
            image:
                "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
        },
        {
            id: 3,
            name: "Headphones",
            price: "$99",
            image:
                "https://img.daisyui.com/images/stock/photo-1609599962691-40f1a9f4b21d.webp",
        },
        {
            id: 4,
            name: "Gaming Chair",
            price: "$299",
            image:
                "https://img.daisyui.com/images/stock/photo-1503602642458-232111445657.webp",
        },
    ];

    return (
        <section className="py-12 px-6 bg-gradient-to-r from-blue-50 to-blue-100   shadow-lg   mx-auto mt-12 mb-12">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-blue-700 mb-2">
                    🌟 Featured Products
                </h2>
                <p className="text-gray-600 mb-8">
                    Discover our handpicked collection of top-selling and trending items.
                </p>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            whileHover={{ scale: 1.05 }}
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
                                    {product.name}
                                </h3>
                                <p className="text-blue-600 font-bold">{product.price}</p>
                                <div className="card-actions justify-center mt-4">
                                    <button className="btn bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
