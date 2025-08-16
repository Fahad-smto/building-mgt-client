import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";

const Newsletter = () => {
  return (
    <section className="bg-gradient-to-r from-blue-300 to-indigo-400 text-white py-16 px-6 rounded-2xl shadow-lg max-w-4xl mx-auto mt-12 mb-12">
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-center mb-4">
          <FaEnvelopeOpenText className="text-5xl text-yellow-200" />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg opacity-90 mb-8">
          Get the latest building updates, rent notices, and event news
          directly in your inbox.
        </p>

        <form className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:flex-1 px-5 py-3 rounded-xl text-black  dark:text-black bg-white dark:bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-6 py-3 bg-blue-400   font-bold rounded-xl shadow-md text-white hover:bg-blue-300 transition"
          >
            Subscribe
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Newsletter;
