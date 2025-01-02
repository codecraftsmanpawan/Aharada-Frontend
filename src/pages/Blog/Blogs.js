import React, { useEffect } from "react";
import Preloader from "../../components/Preloader";
import Header from "../../components/Header/Header";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Footer from "../../components/Footer/Footer";
function Blogs() {
  useEffect(() => {
    document.title = "Blogs - Aharada Education";
  }, []);
  return (
    <div>
      {/* <Preloader /> */}
      <Header />
      <main>
        <Breadcrumbs />
        <section className="th-blog-wrapper space-top space-extra2-bottom">
          <div className="container">
            <div className="row gx-40">
              <div className="col-xxl-8 col-lg-7">
                <div className="th-blog blog-single has-post-thumbnail">
                  <div className="blog-img">
                    <a href="/blogDetails">
                      <img src="assets/img/blog/01.jpeg" alt="Blog Image" />
                    </a>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fa-light fa-clock" />
                        05 June, 2023
                      </a>{" "}
                      <a href="/blogDetails">
                        <i className="fa-light fa-book" />
                        Business Analysis
                      </a>
                    </div>
                    <h2 className="blog-title">
                      <a href="/blogDetails">
                        Educate, Empower, Excel: Discover the Power of Learning!
                      </a>
                    </h2>
                    <p className="blog-text">
                      Uniquely pursue emerging experiences before liemerging
                      content. Efficiently underwhelm customer directed total
                      linkage after B2C synergy. Dynamically simplify superior
                      human capital whereas efficient infrastructures generate
                      business web-readiness after wireless outsourcing.
                    </p>
                    <a href="/blogDetails" className="link-btn">
                      Read More Details
                      <i className="fas fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>

                <div className="th-blog blog-single">
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fa-light fa-calendar-days" />
                        24 June, 2023
                      </a>{" "}
                      <a href="/blogDetails">
                        <i className="fa-light fa-book" />
                        Business Analysis
                      </a>
                    </div>
                    <h2 className="blog-title">
                      <a href="/blogDetails">
                        Gain insights into how parents can support childs
                        Education at home
                      </a>
                    </h2>
                    <p className="blog-text">
                      Access a range of teaching strategies, lesson plans,
                      classroom management techniques, and assessment methods
                      for educators. Stay updated on the latest trends and best
                      practices in education. Explore profiles of professionals
                      in various fields to gain insights into their experiences
                      and career journeys.
                    </p>
                    <a href="/blogDetails" className="link-btn">
                      Read More Details
                      <i className="fas fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
                <div className="th-blog blog-single has-post-thumbnail">
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fa-light fa-calendar-days" />
                        28 June, 2023
                      </a>{" "}
                      <a href="/blogDetails">
                        <i className="fa-light fa-book" />
                        Business Analysis
                      </a>
                    </div>
                    <h2 className="blog-title">
                      <a href="/blogDetails">
                        University class starting soon while the lovely valley
                        team work
                      </a>
                    </h2>
                    <p className="blog-text">
                      Explore our collection of articles, tutorials, videos, and
                      interactive tools to enhance your knowledge and foster a
                      love for learning. Get valuable tips on preparing for
                      exams, including creating study schedules, practicing past
                      papers, managing exam anxiety, and optimizing your
                      performance on test day.
                    </p>
                    <a href="/blogDetails" className="link-btn">
                      Read More Details
                      <i className="fas fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>

                <div className="th-pagination">
                  <ul>
                    <li>
                      <a href="blog.html">01</a>
                    </li>
                    <li>
                      <a href="blog.html">02</a>
                    </li>
                    <li>
                      <a href="blog.html">03</a>
                    </li>
                    <li>
                      <a href="blog.html">
                        <i className="far fa-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-4 col-lg-5">
                <aside className="sidebar-area">
                  <div className="widget widget_search">
                    <form className="search-form">
                      <input type="text" placeholder="Search Product..." />{" "}
                      <button type="submit">
                        <i className="far fa-search" />
                      </button>
                    </form>
                  </div>
                  <div className="widget widget_categories">
                    <h3 className="widget_title">Categories</h3>
                    <ul>
                      <li>
                        <a href="service-details.html">Design</a>
                        <span>(08)</span>
                      </li>
                      <li>
                        <a href="service-details.html">Development</a>{" "}
                        <span>(12)</span>
                      </li>
                      <li>
                        <a href="service-details.html">Photography</a>
                        <span>(15)</span>
                      </li>
                      <li>
                        <a href="service-details.html">Health</a>
                        <span>(21)</span>
                      </li>
                      <li>
                        <a href="service-details.html">Health</a>
                        <span>(14)</span>
                      </li>
                      <li>
                        <a href="service-details.html">Finance</a>
                        <span>(05)</span>
                      </li>
                      <li>
                        <a href="service-details.html">Technology</a>
                        <span>(10)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="widget">
                    <h3 className="widget_title">Recent Posts</h3>
                    <div className="recent-post-wrap">
                      <div className="recent-post">
                        <div className="media-img">
                          <a href="/blogDetails">
                            <img
                              src="assets/img/blog/recent-post-1-1.jpg"
                              alt="Blog Image"
                            />
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="post-title">
                            <a className="text-inherit" href="/blogDetails">
                              How To Start Learn Online Study From Your Home
                            </a>
                          </h4>
                          <div className="recent-post-meta">
                            <a href="blog.html">
                              <i className="fal fa-calendar" />
                              21/6/2023
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="recent-post">
                        <div className="media-img">
                          <a href="/blogDetails">
                            <img
                              src="assets/img/blog/recent-post-1-2.jpg"
                              alt="Blog Image"
                            />
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="post-title">
                            <a className="text-inherit" href="/blogDetails">
                              A Guide for Teachers and Education Staff.
                            </a>
                          </h4>
                          <div className="recent-post-meta">
                            <a href="blog.html">
                              <i className="fal fa-calendar" />
                              22/6/2023
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="recent-post">
                        <div className="media-img">
                          <a href="/blogDetails">
                            <img
                              src="assets/img/blog/recent-post-1-3.jpg"
                              alt="Blog Image"
                            />
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="post-title">
                            <a className="text-inherit" href="/blogDetails">
                              Educate Empower Excel Discover the Power.
                            </a>
                          </h4>
                          <div className="recent-post-meta">
                            <a href="blog.html">
                              <i className="fal fa-calendar" />
                              25/6/2023
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget widget_tag_cloud">
                    <h3 className="widget_title">Popular Tags</h3>
                    <div className="tagcloud">
                      <a href="blog.html">Business</a>{" "}
                      <a href="blog.html">Courses</a>{" "}
                      <a href="blog.html">Online</a>{" "}
                      <a href="blog.html">Remote</a>{" "}
                      <a href="blog.html">Education</a>{" "}
                      <a href="blog.html">Solution</a>{" "}
                      <a href="blog.html">Students</a>{" "}
                      <a href="blog.html">UX</a>
                    </div>
                  </div>
                  <div
                    className="widget widget_banner"
                    data-overlay="theme"
                    data-opacity={9}
                    data-bg-src="assets/img/widget/widget-banner-bg.png"
                  >
                    <div className="widget-banner">
                      <h4 className="title">
                        Need Help? We Are Here To Help You
                      </h4>
                      <div className="logo">
                        <img src="public/assets/logo.png" alt="img" />
                      </div>
                      <h5 className="subtitle">You Get Admission</h5>
                      <a href="tel:+11156456825" className="link">
                        +256 214 203 215
                      </a>{" "}
                      <a href="/contact" className="th-btn style7">
                        Contact Us Now <i className="far fa-arrow-right ms-1" />
                      </a>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Blogs;
