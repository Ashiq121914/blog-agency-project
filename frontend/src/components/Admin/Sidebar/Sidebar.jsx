import { Link, NavLink } from "react-router-dom";
import {
  FaPlus,
  FaCogs,
  FaUsers,
  FaSignOutAlt,
  FaFileAlt,
  FaBars,
} from "react-icons/fa";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:w-64 w-[25%]">
      {/* Toggle Button for Mobile */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 bg-slate-600 text-white p-2 rounded-md"
      >
        <FaBars size={20} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-slate-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 w-64 z-40 flex flex-col`}
      >
        {/* Top - Logo */}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-center">
            <Link to="/admin">BlogNest AdminPanel</Link>
          </h1>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-6 ">
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/admin/blogs/list"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-4 py-3 rounded-lg hover:bg-slate-500 ${
                    isActive ? "bg-blue-800" : ""
                  }`
                }
              >
                <FaFileAlt />
                <span>Show Blogs</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/blogs/create"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-4 py-3 rounded-lg hover:bg-slate-500 ${
                    isActive ? "bg-blue-800" : ""
                  }`
                }
              >
                <FaPlus />
                <span>Create Blog</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/services/list"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-4 py-3 rounded-lg hover:bg-slate-500 ${
                    isActive ? "bg-blue-800" : ""
                  }`
                }
              >
                <FaCogs />
                <span>Show Services</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/services/create"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-4 py-3 rounded-lg hover:bg-slate-500 ${
                    isActive ? "bg-blue-800" : ""
                  }`
                }
              >
                <FaPlus />
                <span>Create Services</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/members/list"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-4 py-3 rounded-lg hover:bg-slate-500 ${
                    isActive ? "bg-blue-800" : ""
                  }`
                }
              >
                <FaUsers />
                <span>Show Members</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/members/create"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-4 py-3 rounded-lg hover:bg-slate-500 ${
                    isActive ? "bg-blue-800" : ""
                  }`
                }
              >
                <FaPlus />
                <span>Create Members</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Bottom - Logout */}
        <div className="p-6">
          <NavLink
            to="/admin/logout"
            className="flex items-center space-x-2 px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </NavLink>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
