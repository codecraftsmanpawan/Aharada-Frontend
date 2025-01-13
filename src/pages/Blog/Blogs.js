import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(4);
  const [searchQuery, setSearchQuery] = useState(""); // For search filter

  // Fetch blog posts on component mount
  useEffect(() => {
    document.title = "Blogs - Aharada Education";

    // Fetch blogs
    axios
      .get("https://backend.aharadaedu.in/api/blogs")
      .then((response) => {
        const sortedBlogs = response.data.blogPosts.sort((a, b) => {
          return new Date(b.publishedDate) - new Date(a.publishedDate);
        });
        setBlogs(sortedBlogs);
        setFilteredBlogs(sortedBlogs); // Initially, display all blogs
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  }, []);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Get current blogs to display on this page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Handle search filter by title
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter blogs by title
    const filtered = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBlogs(filtered);
    setCurrentPage(1); // Reset to first page after searching
  };

  // Function to get random 5 blogs
  const getRandomBlogs = () => {
    const shuffledBlogs = [...blogs];
    for (let i = shuffledBlogs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledBlogs[i], shuffledBlogs[j]] = [
        shuffledBlogs[j],
        shuffledBlogs[i],
      ];
    }
    return shuffledBlogs.slice(0, 5);
  };

  return (
    <div>
      <main>
        <Breadcrumbs />
        <section className="th-blog-wrapper space-top space-extra2-bottom">
          <div className="container">
            <div className="row gx-40">
              {/* Main Blog Content */}
              <div className="col-xxl-8 col-lg-7">
                {currentBlogs.length > 0 ? (
                  currentBlogs.map((blog) => (
                    <div className="th-blog blog-single" key={blog._id}>
                      <div className="blog-content">
                        <div className="blog-meta">
                          <a href="blog.html">
                            <i className="fa-light fa-clock" />
                            {new Date(blog.publishedDate).toLocaleDateString()}
                          </a>
                          <a href="/blogDetails">
                            <i className="fa-light fa-book" />
                            {blog.category}
                          </a>
                        </div>
                        <h2 className="blog-title">
                          {/* Use Link to navigate with the blog's ID */}
                          <Link to={`/blogDetails/${blog._id}`}>
                            {blog.title}
                          </Link>
                        </h2>
                        <div className="blog-img">
                          <Link to={`/blogDetails/${blog._id}`}>
                            <img
                              src={`https://backend.aharadaedu.in${blog.image}`}
                              alt={blog.title}
                            />
                          </Link>
                        </div>
                        <p
                          className="blog-text"
                          dangerouslySetInnerHTML={{
                            __html: blog.content,
                          }}
                          style={{
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 5,
                            overflow: "hidden",
                          }}
                        ></p>
                        {blog.content.length > 100 && (
                          <Link
                            to={`/blogDetails/${blog._id}`}
                            className="link-btn"
                          >
                            Read More Details
                            <i className="fas fa-arrow-right ms-2" />
                          </Link>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No blogs available at the moment.</p>
                )}

                {/* Pagination */}
                <div className="th-pagination">
                  <ul>
                    {[
                      ...Array(Math.ceil(filteredBlogs.length / blogsPerPage)),
                    ].map((_, index) => (
                      <li key={index}>
                        <a href="#" onClick={() => paginate(index + 1)}>
                          {index + 1}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar Content */}
              <div className="col-xxl-4 col-lg-5">
                <aside className="sidebar-area">
                  {/* Search Widget */}
                  <div className="widget widget_search">
                    <form className="search-form">
                      <input
                        type="text"
                        placeholder="Search Blogs..."
                        value={searchQuery}
                        onChange={handleSearchChange} // Update search filter
                      />
                      <button type="submit">
                        <i className="far fa-search" />
                      </button>
                    </form>
                  </div>

                  <div
                    className="widget widget_banner"
                    data-overlay="theme"
                    data-opacity={9}
                    // data-bg-src="../assets/img/university/2025.png"
                  >
                    <div className="widget-banner">
                      <h4 className="title text-white">
                        Need Help? We Are Here To Help You
                      </h4>
                      <div className="">
                        <img src="../assets/img/university/02.jpg" alt="img" />
                      </div>
                      <h5 className="subtitle mt-4">You Get Admission</h5>
                      <a href="tel:+91-7303381359" className="link">
                        +91-7303381359
                      </a>{" "}
                      <a href="/contact" className="th-btn style7">
                        Apply Now <i className="far fa-arrow-right ms-1" />
                      </a>
                    </div>
                  </div>

                  {/* Recent Posts Widget */}
                  <div className="widget">
                    <h3 className="widget_title">Recent Posts</h3>
                    <div className="recent-post-wrap">
                      {getRandomBlogs().map((blog) => (
                        <div className="recent-post" key={blog._id}>
                          <Link to={`/blogDetails/${blog._id}`}>
                            <img
                              src={`https://backend.aharadaedu.in${blog.image}`}
                              alt={blog.title}
                              className="recent-post-img"
                            />
                            <h4 className="recent-post-title">{blog.title}</h4>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Blogs;
