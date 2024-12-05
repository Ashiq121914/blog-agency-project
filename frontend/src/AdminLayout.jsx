import { Outlet } from "react-router-dom";
import Sidebar from "./components/Admin/Sidebar/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};
export default AdminLayout;
