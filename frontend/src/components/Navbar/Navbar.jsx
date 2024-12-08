import React, { useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-red-500 cursor-pointer">
              BlogNest
            </h1>
          </div>

          {/* Menu for large screens */}

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
            <Link to="/blog" className="hover:text-gray-400">
              Blog
            </Link>
            <Link to="/services" className="hover:text-gray-400">
              Services
            </Link>
            <Link to="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-800">
          <div className="space-y-2 px-2 pb-3 pt-2">
            <Link to="/" className="block hover:bg-gray-700 px-3 py-2 rounded">
              Home
            </Link>
            <Link
              to="/about"
              className="block hover:bg-gray-700 px-3 py-2 rounded"
            >
              About
            </Link>
            <Link
              to="/blog"
              className="block hover:bg-gray-700 px-3 py-2 rounded"
            >
              Blog
            </Link>
            <Link
              to="/services"
              className="block hover:bg-gray-700 px-3 py-2 rounded"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block hover:bg-gray-700 px-3 py-2 rounded"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
