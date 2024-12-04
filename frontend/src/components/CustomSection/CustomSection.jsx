import React from "react";

const CustomSection = () => {
  return (
    <section className="bg-slate-700 text-white py-16 my-[50px] relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1584946593743-fd6024679b68?q=80&w=2070&auto=format&fit=crop')",
        }}
      ></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Explore New Opportunities</h2>
          <p className="text-lg mb-6">
            We provide creative solutions to bring your ideas to life. Join us
            in making your vision a reality.
          </p>
          <a
            href="#"
            className="bg-red-500 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-red-600 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomSection;
