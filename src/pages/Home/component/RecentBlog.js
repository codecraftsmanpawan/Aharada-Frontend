import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch blog posts on component mount
  useEffect(() => {
    axios
      .get("https://backend.aharadaedu.in/api/blogs")
      .then((response) => {
        setBlogs(response.data.blogPosts); // Set blog posts from the response
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="homeblogsection overflow-hidden space" id="blog-sec">
      <div className="container">
        <div className="mb-35 text-center text-md-start">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-8">
              <div className="title-area mb-md-0">
                <span className="sub-title">
                  <i className="fal fa-book me-2"></i> Our Blogs
                </span>
                <h2 className="sec-title">Latest Blogs</h2>
              </div>
            </div>
            <div className="col-md-auto">
              <a href="/blogs" className="th-btn">
                View All Posts
                <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>

        <Slider
          {...settings}
          className="slider-shadow th-carousel blog-slider-1"
        >
          {blogs.slice(0, 5).map((blog) => (
            <div className="col-md-6 col-xl-4" key={blog._id}>
              <div className="th-blog blog-single style2">
                <div className="blog-img">
                  <Link to={`/blogDetails/${blog._id}`}>
                    <img
                      src={`https://backend.aharadaedu.in${blog.image}`}
                      alt={blog.title}
                      style={{
                        width: "100%",
                        height: "220px",
                        objectFit: "cover",
                      }}
                    />
                  </Link>
                </div>
                <div
                  className="blog-content"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <div className="blog-meta">
                    <Link to={`/blogDetails/${blog._id}`}>
                      <i className="fa-light fa-clock"></i>
                      {new Date(blog.publishedDate).toLocaleDateString()}
                    </Link>
                  </div>
                  <h4
                    className="box-title"
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "normal",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      maxWidth: "100%",
                    }}
                  >
                    <Link to={`/blogDetails/${blog._id}`}>{blog.title}</Link>
                  </h4>
                  <Link className="link-btn" to={`/blogDetails/${blog._id}`}>
                    Read More Details
                    <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BlogSection;
