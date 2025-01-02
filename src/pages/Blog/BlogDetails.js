import React, { useEffect } from "react";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

function BlogDetails() {
  useEffect(() => {
    document.title = "Blog Details - Aharada Education";
  }, []);
  return (
    <div>
      <main>
        <Breadcrumbs />
        <section className="th-blog-wrapper blog-details space-top space-extra2-bottom">
          <div className="container">
            <div className="row gx-30">
              <div className="col-xxl-8 col-lg-7">
                <div className="th-blog blog-single">
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fa-light fa-calendar-days" />
                        05 June, 2023
                      </a>{" "}
                      <a href="blog-details.html">
                        <i className="fa-light fa-book" />
                        Business Analysis
                      </a>
                    </div>
                    <h2 className="blog-title">
                      Educate, Empower, Excel: Discover the Power of Learning!
                    </h2>
                    <p>
                      Uniquely pursue emerging experiences before liemerging
                      content. Efficiently underwhelm customer directed total
                      linkage after B2C synergy. Dynamically simplify superior
                      human capital whereas efficient infrastructures generate
                      business web-readiness after wireless outsourcing.
                    </p>
                    <p>
                      A platform dedicated to exploring the transformative power
                      of education. We believe that education is not only a
                      means to acquire knowledge but also a catalyst for
                      personal growth, societal progress, and global
                      development. In this blog, we aim to inspire, inform, and
                      engage readers in conversations about the latest trends,
                      insights, and innovations in the field of education.
                    </p>
                    <blockquote>
                      <p>
                        Educational Strategies: We delve into effective teaching
                        and learning strategies, instructional method, &amp;
                        innovative approaches to engage students and enhance
                        learning outcomes.
                      </p>
                      <cite>Michel Clarck</cite>
                    </blockquote>
                    <p>
                      Educational Technology: We explore the role of technology
                      in education, from e-learning platform and digital
                      resource to virtual reality and artificial intelligence.
                      We discuss how technology is shaping the educational
                      landscape and revolutionizing the way we learn.
                    </p>
                    <p>
                      Education Policy and Advocacy: We delve into education
                      policy issue, discussing the challenge, reforms, and
                      initiative aimed improving educational system at local
                      national &amp; international level. We highlight the
                      importance of education advocacy and its impact on shaping
                      equitable and inclusive education for all.
                    </p>
                    <h3 className="h4 mb-25 mt-45">
                      Coaching for teachers improves retention
                    </h3>
                    <p>
                      Student Success and Well-being: We focus on supporting
                      student success and well-being, covering topics such as
                      study skills, exam preparation, stress management, mental
                      health, and student empowerment. We provide practical tips
                      and strategies to help students thrive academically and
                      personally.
                    </p>
                    <div className="blog-img mt-35">
                      <img
                        className="w-100"
                        src="assets/img/blog/blog_inner_1.jpg"
                        alt="Blog Image"
                      />
                    </div>
                    <div className="checklist mb-35">
                      <ul>
                        <li>
                          <span>1.</span> Educational Strategies: We delve into
                          effective teaching and learning strategies,
                          instructional methodologies, and innovative approaches
                          to engage students and enhance learning outcomes.
                        </li>
                        <li>
                          <span>2.</span> Educational Technology: We explore the
                          role of technology in education, from e-learning
                          platforms and digital resources to virtual reality and
                          artificial intelligence. We discuss how technology is
                          shaping the educational landscape and revolutionizing
                          the way we learn.
                        </li>
                        <li>
                          <span>3.</span> Lifelong Learning: We emphasize the
                          importance of lifelong learning and personal
                          development. We share tips and resources to foster a
                          culture of continuous learning and skill development,
                          both inside and outside the traditional classroom.
                        </li>
                      </ul>
                    </div>
                    <p>
                      To stay updated on our latest blog posts, subscribe to our
                      newsletter and follow us on social media platform. We look
                      forward to embarking on this educational journey with you
                      and creating a community of learners passionate about the
                      power of education.
                    </p>
                  </div>
                  <div className="share-links clearfix">
                    <div className="row justify-content-between">
                      <div className="col-md-auto">
                        <span className="share-links-title">Tags:</span>
                        <div className="tagcloud">
                          <a href="blog.html">Education</a>{" "}
                          <a href="blog.html">Online</a>
                        </div>
                      </div>
                      <div className="col-md-auto text-xl-end">
                        <span className="share-links-title">Share:</span>
                        <ul className="social-links">
                          <li>
                            <a href="https://facebook.com/" target="_blank">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/" target="_blank">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="https://linkedin.com/" target="_blank">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                          <li>
                            <a href="https://instagram.com/" target="_blank">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
                          <a href="blog-details.html">
                            <img
                              src="assets/img/blog/recent-post-1-1.jpg"
                              alt="Blog Image"
                            />
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="post-title">
                            <a
                              className="text-inherit"
                              href="blog-details.html"
                            >
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
                          <a href="blog-details.html">
                            <img
                              src="assets/img/blog/recent-post-1-2.jpg"
                              alt="Blog Image"
                            />
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="post-title">
                            <a
                              className="text-inherit"
                              href="blog-details.html"
                            >
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
                          <a href="blog-details.html">
                            <img
                              src="assets/img/blog/recent-post-1-3.jpg"
                              alt="Blog Image"
                            />
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="post-title">
                            <a
                              className="text-inherit"
                              href="blog-details.html"
                            >
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
                </aside>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default BlogDetails;
