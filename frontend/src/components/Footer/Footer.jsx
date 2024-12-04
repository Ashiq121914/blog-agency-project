import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-semibold">About Us</h2>
            <p className="mt-4 text-sm text-gray-400">
              We are dedicated to providing the best services to our customers.
              Stay connected for more updates!
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-lg font-semibold">Links</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-400">
                <span className="font-semibold">Email:</span>{" "}
                contact@website.com
              </li>
              <li className="text-gray-400">
                <span className="font-semibold">Phone:</span> +123 456 7890
              </li>
              <li className="text-gray-400">
                <span className="font-semibold">Address:</span> 123 Main Street,
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} BlogNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
