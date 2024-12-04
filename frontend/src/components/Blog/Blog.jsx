import { Link } from "react-router-dom";

const Blog = () => {
  // Sample data for blog posts (this should ideally come from an API or database)
  const blogs = [
    {
      id: 1,
      title: "The Power of Consistent Blogging",
      description:
        "Discover how consistent blogging can help establish your brand, grow your audience, and boost SEO.",
      image:
        "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "October 15, 2024",
    },
    {
      id: 2,
      title: "How to Engage Your Blog Readers Effectively",
      description:
        "Learn tips and strategies to keep your audience engaged and coming back for more on your blog.",
      image:
        "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "November 10, 2024",
    },
    {
      id: 3,
      title: "The Importance of SEO in Blogging",
      description:
        "A detailed guide on how SEO can make or break your blog's visibility and traffic.",
      image:
        "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "December 1, 2024",
    },
    {
      id: 4,
      title: "Mastering the Art of Blog Design",
      description:
        "How to design your blog for a great user experience and better conversions.",
      image:
        "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "December 5, 2024",
    },
    {
      id: 5,
      title: "Mastering the Art of Blog Design",
      description:
        "How to design your blog for a great user experience and better conversions.",
      image:
        "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "December 5, 2024",
    },
  ];

  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            All Blog Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-lg text-gray-600 mb-4">{blog.description}</p>
                <span className="text-sm text-gray-400">{blog.date}</span>
                <div className="mt-4">
                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
