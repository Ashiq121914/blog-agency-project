import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* Renders the child routes/pages */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;