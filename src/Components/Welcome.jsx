import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router";

const Welcome = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
      {/* Left Side - Image */}
      <div className="lg:w-1/2 relative group overflow-hidden rounded-xl shadow-lg">
        <img
          src="/5.jpg"
          alt="Building Management"
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
      </div>

      {/* Right Side - Text */}
      <div className="lg:w-1/2">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Efficient Building Management Made Easy
        </h2>
        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          Manage apartments, payments, and maintenance seamlessly with our
          all-in-one Building Management System. Streamline communication and
          keep residents happy with real-time updates and easy access.
        </p>
        <Link
          to="/apartment"
          className="px-6 w-fit py-3 inline-flex gap-1.5 items-center bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300 group"
        >
          Get Started
          <FaArrowTrendUp className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default Welcome;
