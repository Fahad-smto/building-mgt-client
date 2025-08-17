import { FaSolarPanel, FaSnowflake, FaHome, FaLock } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const features = [
  {
    id: 1,
    title: "Smart Home System",
    description: "Velit irure occaecat do consectetur dolore officia magna ut anim ut.",
    icon: <FaHome className="text-2xl text-blue-600" />,
  },
  {
    id: 2,
    title: "Solar Energy Panels",
    description: "Velit irure occaecat do consectetur dolore officia magna ut anim ut.",
    icon: <FaSolarPanel className="text-2xl text-blue-600" />,
  },
  {
    id: 3,
    title: "Central Air Conditioning",
    description: "Velit irure occaecat do consectetur dolore officia magna ut anim ut.",
    icon: <FaSnowflake className="text-2xl text-blue-600" />,
  },
  {
    id: 4,
    title: "Home Security System",
    description: "Velit irure occaecat do consectetur dolore officia magna ut anim ut.",
    icon: <FaLock className="text-2xl text-blue-600" />,
  },
];

const FeatureOverview = () => {
  return (
    <section className="py-16 bg-blue-50  shadow-lg mt-12 mb-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="space-y-6">

          <h2 className="text-4xl font-bold text-gray-900">
            Luxury living where <br /> comfort meets timeless style, effortlessly
          </h2>
          <p className="text-gray-600">
            Non anim in pariatur in ex excepteur commodo do officia amet
            incididunt ullamco nostrud aliquip minim magna esse dolore.
          </p>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all flex items-center gap-2 group"
          >
            <MdLocationOn className="text-xl transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
            Schedule Visit
          </button>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl shadow p-6 hover:shadow-2xl transition flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg text-gray-900">{feature.title}</h3>
              <p className="text-gray-500 mt-2 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureOverview;
