import React from "react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 flex flex-col lg:flex-row justify-between gap-4">
        {/* Left Side - Text Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-4xl font-semibold text-blue-900 mb-4">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            At BlogNest, we believe every story deserves to be shared. We’re a
            passionate team committed to building a platform that nurtures
            creativity and connects voices from all walks of life. Our goal is
            to empower bloggers to share their unique experiences and
            perspectives with the world.
          </p>

          {/* New Information */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              What Drives Us
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              What drives us is the belief that stories have the power to
              transform lives. We are dedicated to creating an inclusive
              community where people can learn, grow, and share their journey in
              a supportive environment.
            </p>

            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              Our Values
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              We prioritize collaboration, authenticity, and inspiration. Every
              post shared is a reflection of the creativity and dedication that
              our community brings to the table. We stand for transparency,
              trust, and building long-lasting relationships.
            </p>
          </div>

          {/* Call to Action */}
          <a
            href="#"
            className="inline-block text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md transition mt-4"
          >
            Become a Part of the Journey
          </a>
        </div>

        {/* Right Side - Image Section */}
        <div className="lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Image"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
