import { useState, useEffect } from "react";

const Admin = () => {
  const [blogCount, setBlogCount] = useState(0);
  const [serviceCount, setServiceCount] = useState(0);
  const [memberCount, setMemberCount] = useState(0);

  useEffect(() => {
    setBlogCount(42);
    setServiceCount(12);
    setMemberCount(8);
  }, []);

  return (
    <div className="p-8 bg-gradient-to-r from-blue-50 to-gray-100 min-h-screen">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Welcome, Admin
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Blog Count Card */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Blogs</h3>
          <p className="text-5xl font-extrabold text-dark">{blogCount}</p>
          <p className="text-gray-600 mt-2">Total Blogs</p>
        </div>
        {/* Service Count Card */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Services</h3>
          <p className="text-5xl font-extrabold text-dark">{serviceCount}</p>
          <p className="text-gray-600 mt-2">Total Services</p>
        </div>
        {/* Member Count Card */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Members</h3>
          <p className="text-5xl font-extrabold text-dark">{memberCount}</p>
          <p className="text-gray-600 mt-2">Total Members</p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
