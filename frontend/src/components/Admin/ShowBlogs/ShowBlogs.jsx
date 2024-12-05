import { useState } from "react";

const ShowBlogs = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Understanding React Hooks",
      createdAt: "2023-12-01",
    },
    {
      id: 2,
      title: "Building a Full-Stack App with MERN",
      createdAt: "2023-11-25",
    },
    {
      id: 3,
      title: "Tips for Writing Clean Code",
      createdAt: "2023-11-15",
    },
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      setBlogs(blogs.filter((blog) => blog.id !== id));
    }
  };

  const handleUpdate = (id) => {
    alert(`Update blog with ID: ${id}`);
    // Implement update functionality here
  };

  return (
    <div className="p-2 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-extrabold text-gray-700 mb-8 text-center">
        Blogs
      </h2>
      <div className="overflow-hidden rounded-lg shadow-md bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-500 text-white">
            <tr>
              <th className="py-4 px-6 text-left font-medium">ID</th>
              <th className="py-4 px-6 text-left font-medium">Title</th>
              <th className="py-4 px-6 text-left font-medium">Created At</th>
              <th className="py-4 px-6 text-center font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {blogs.map((blog) => (
              <tr key={blog.id} className="hover:bg-gray-100 transition">
                <td className="py-4 px-6">{blog.id}</td>
                <td className="py-4 px-6">{blog.title}</td>
                <td className="py-4 px-6">{blog.createdAt}</td>
                <td className="py-4 px-6 text-center space-x-2">
                  <button
                    onClick={() => handleUpdate(blog.id)}
                    className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md shadow hover:bg-green-600 transition"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md shadow hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {blogs.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="py-6 px-6 text-center text-gray-500 text-lg"
                >
                  No blogs available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowBlogs;
