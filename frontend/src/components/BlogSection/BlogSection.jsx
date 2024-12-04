import React from "react";

const BlogSection = () => {
  // Sample blog data (title, description, and image)
  const blogs = [
    {
      title: "Blog Post 1",
      description: "This is a short description of Blog Post 1.",
      image:
        "https://images.unsplash.com/photo-1706264337427-fbd7405c3483?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Blog Post 2",
      description: "This is a short description of Blog Post 2.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Blog Post 3",
      description: "This is a short description of Blog Post 3.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Blog Post 4",
      description: "This is a short description of Blog Post 4.",
      image:
        "https://images.unsplash.com/photo-1706264337427-fbd7405c3483?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Blog Post 5",
      description: "This is a short description of Blog Post 5.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Blog Post 6",
      description: "This is a short description of Blog Post 6.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Latest Blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <a
                  href="#"
                  className="text-red-500 font-semibold hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
