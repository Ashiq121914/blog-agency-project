import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
        <div className="flex flex-col items-center text-center">
          {/* Hero Heading */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-red-500">
            Welcome to BlogNest
          </h1>
          {/* Subheading */}
          <p className="mt-4 text-lg sm:text-xl text-gray-400">
            Discover insightful blogs, connect with amazing people, and explore
            new perspectives.
          </p>
          {/* Call-to-Action Buttons */}
          <div className="mt-6 flex justify-center space-x-4">
            <a
              href="#blog"
              className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
            >
              Explore Blogs
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
