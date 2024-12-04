import {
  FaCameraRetro,
  FaChartPie,
  FaMobileAlt,
  FaPenNib,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";

const Service = () => {
  // Updated data for services
  const services = [
    {
      id: 1,
      title: "Creative Photography",
      description:
        "Capture moments with stunning visuals through our professional photography services.",
      icon: <FaCameraRetro className="text-5xl text-white" />,
    },
    {
      id: 2,
      title: "Data Analytics",
      description:
        "Unlock insights and trends with advanced data analysis for informed decision-making.",
      icon: <FaChartPie className="text-5xl text-white" />,
    },
    {
      id: 3,
      title: "Mobile App Development",
      description:
        "Designing cutting-edge mobile applications tailored to your business needs.",
      icon: <FaMobileAlt className="text-5xl text-white" />,
    },
    {
      id: 4,
      title: "Brand Identity Design",
      description:
        "Build a strong brand presence with unique and impactful design solutions.",
      icon: <FaPenNib className="text-5xl text-white" />,
    },
    {
      id: 5,
      title: "Startup Launch Support",
      description:
        "Providing resources and guidance to turn your innovative ideas into reality.",
      icon: <FaRocket className="text-5xl text-white" />,
    },
    {
      id: 6,
      title: "Cybersecurity Solutions",
      description:
        "Protect your business with robust and reliable cybersecurity strategies.",
      icon: <FaShieldAlt className="text-5xl text-white" />,
    },
  ];

  return (
    <div>
      <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Explore our diverse offerings tailored to meet your unique needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative bg-gradient-to-r from-teal-500 to-blue-500 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              >
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-opacity-10 rounded-lg"></div>
                <div className="text-center">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
