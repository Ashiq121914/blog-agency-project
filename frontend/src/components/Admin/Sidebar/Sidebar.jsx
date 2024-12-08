import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaPlus,
  FaCogs,
  FaUsers,
  FaSignOutAlt,
  FaFileAlt,
} from "react-icons/fa";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/admin/logout`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`w-64 bg-white text-gray-800 shadow-lg flex flex-col justify-between absolute h-full md:static z-10 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Top - Logo */}
      <div className="p-6 border-b border-gray-200">
        <button
          className="block md:hidden bg-gray-800 text-white py-2 px-4 cursor-pointer mb-4 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          Toggle Panel
        </button>
        <h1 className="text-xl font-semibold text-center">
          <Link to="/admin">BlogNest AdminPanel</Link>
        </h1>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-6 mt-4">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/admin/blogs/create"
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-md hover:bg-gray-100 ${
                  isActive ? "bg-gray-200 font-semibold" : ""
                }`
              }
            >
              <FaPlus />
              <span>Create Blog</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/blogs/list"
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-md hover:bg-gray-100 ${
                  isActive ? "bg-gray-200 font-semibold" : ""
                }`
              }
            >
              <FaFileAlt />
              <span>Show Blogs</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/services/create"
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-md hover:bg-gray-100 ${
                  isActive ? "bg-gray-200 font-semibold" : ""
                }`
              }
            >
              <FaPlus />
              <span>Create Services</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/services/list"
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-md hover:bg-gray-100 ${
                  isActive ? "bg-gray-200 font-semibold" : ""
                }`
              }
            >
              <FaCogs />
              <span>Show Services</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/members/create"
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-md hover:bg-gray-100 ${
                  isActive ? "bg-gray-200 font-semibold" : ""
                }`
              }
            >
              <FaPlus />
              <span>Create Members</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/members/list"
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-md hover:bg-gray-100 ${
                  isActive ? "bg-gray-200 font-semibold" : ""
                }`
              }
            >
              <FaUsers />
              <span>Show Members</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Bottom - Logout */}
      <div className="p-6 border-t border-gray-200">
        <button
          onClick={logoutHandler}
          className="flex items-center justify-center space-x-2 w-full py-3 rounded-md bg-red-600 text-white hover:bg-red-700"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
