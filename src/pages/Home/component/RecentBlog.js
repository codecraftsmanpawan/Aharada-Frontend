import React from "react";
import Slider from "react-slick";
// import "./homeblogsection.css";
const BlogSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true, // Enable auto-scrolling
    autoplaySpeed: 3000, // Set auto-scroll speed (3 seconds per slide)
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
                  <i className="fal fa-book me-2"></i> Our News & Blogs
                </span>
                <h2 className="sec-title">Latest News & Blogs</h2>
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
          {/* Blog Card 1 - Aharada Blog */}
          <div className="col-md-6 col-xl-4">
            <div className="th-blog blog-single style2">
              <div className="blog-img">
                <a href="#">
                  <img src="assets/img/blog/01.jpeg" alt="Aharada Blog Image" />
                </a>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <a className="author" href="blog.html">
                    <i className="fa-light fa-user"></i>by Aharada Team
                  </a>
                  <a href="blog.html">
                    <i className="fa-light fa-clock"></i>10 Jan, 2025
                  </a>
                </div>
                <h4 className="box-title">
                  <a href="#">
                    The Future of Education: How Technology is Shaping Learning
                  </a>
                </h4>
                <a href="#" className="link-btn">
                  Read More Details
                  <i className="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Blog Card 2 - Aharada Blog */}
          <div className="col-md-6 p-2 col-xl-4">
            <div className="th-blog blog-single style2">
              <div className="blog-img">
                <a href="#">
                  <img src="assets/img/blog/01.jpeg" alt="Aharada Blog Image" />
                </a>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <a className="author" href="blog.html">
                    <i className="fa-light fa-user"></i>by Aharada Team
                  </a>
                  <a href="blog.html">
                    <i className="fa-light fa-clock"></i>15 Jan, 2025
                  </a>
                </div>
                <h4 className="box-title">
                  <a href="#">
                    Innovative Approaches in Educational Technology for 2025
                  </a>
                </h4>
                <a href="#" className="link-btn">
                  Read More Details
                  <i className="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Blog Card 3 - Aharada Blog */}
          <div className="col-md-6 p-2 col-xl-4">
            <div className="th-blog blog-single style2">
              <div className="blog-img">
                <a href="#">
                  <img src="assets/img/blog/01.jpeg" alt="Aharada Blog Image" />
                </a>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <a className="author" href="blog.html">
                    <i className="fa-light fa-user"></i>by Aharada Team
                  </a>
                  <a href="blog.html">
                    <i className="fa-light fa-clock"></i>20 Jan, 2025
                  </a>
                </div>
                <h4 className="box-title">
                  <a href="#">
                    The Role of AI in Transforming Education Systems
                  </a>
                </h4>
                <a href="#" className="link-btn">
                  Read More Details
                  <i className="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default BlogSection;
