import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout.jsx";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Service from "./components/Service/Service";
import Contact from "./components/Contact/Contact";
import Login from "./components/Admin/Login/Login";
import AdminLayout from "./AdminLayout";
import Admin from "./components/Admin/Admin";
import ShowBlogs from "./components/Admin/ShowBlogs/ShowBlogs";
import CreateBlog from "./components/Admin/CreateBlog/CreateBlog";
import ShowMembers from "./components/Admin/ShowMembers/ShowMembers";
import CreateMembers from "./components/Admin/CreateMembers/CreateMembers";
import ShowServices from "./components/Admin/ShowServices/ShowServices";
import CreateServices from "./components/Admin/CreateServices/CreateServices";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="services" element={<Service />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="" element={<Admin />} />
          <Route path="blogs/list" element={<ShowBlogs />} />
          <Route path="blogs/create" element={<CreateBlog />} />
          <Route path="members/list" element={<ShowMembers />} />
          <Route path="members/create" element={<CreateMembers />} />
          <Route path="services/list" element={<ShowServices />} />
          <Route path="services/create" element={<CreateServices />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
