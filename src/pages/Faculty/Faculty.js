import React, { useEffect } from "react";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

function Faculty() {
  useEffect(() => {
    document.title = "Faculty - Aharada Education";
  }, []);

  return (
    <div>
      <Breadcrumbs />
      <main>
        <div>
          <div className="team-area overflow-hidden space">
            <div className="container">
              <div className="row align-items-center gy-4">
                <div className="col-sm-6 col-lg-4 col-xl-3">
                  <div className="team-card style3">
                    <div className="team-img-wrap">
                      <div className="team-img">
                        <img src="assets/img/team/team_1_2.jpg" alt="Team" />
                      </div>
                    </div>
                    <div className="team-hover-wrap">
                      <div className="team-social">
                        <a href="#" className="icon-btn">
                          <i className="far fa-plus" />
                        </a>
                        <div className="th-social">
                          <a target="_blank" href="https://linkedin.com/">
                            <i className="fab fa-linkedin-in" />
                          </a>
                          <a href="mailto:lily.michelle@example.com">
                            <i className="fas fa-envelope" />
                          </a>
                        </div>
                      </div>
                      <div className="team-content">
                        <h3 className="team-title">
                          <a href="/facultyDetails">Lily Michelle</a>
                        </h3>
                        <span className="team-desig">Senior Instructor</span>
                      </div>
                      <div className="team-info">
                        <span>
                          <i className="fal fa-file-check" />
                          28 years+ Experience
                        </span>
                      </div>{" "}
                      <div className="team-info">
                        <span>
                          <i className="fa-light fa-chalkboard-teacher" />
                          25+ Workshops
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 col-xl-3">
                  <div className="team-card style3">
                    <div className="team-img-wrap">
                      <div className="team-img">
                        <img src="assets/img/team/team_1_2.jpg" alt="Team" />
                      </div>
                    </div>
                    <div className="team-hover-wrap">
                      <div className="team-social">
                        <a href="#" className="icon-btn">
                          <i className="far fa-plus" />
                        </a>
                        <div className="th-social">
                          <a target="_blank" href="https://linkedin.com/">
                            <i className="fab fa-linkedin-in" />
                          </a>
                          <a href="mailto:lily.michelle@example.com">
                            <i className="fas fa-envelope" />
                          </a>
                        </div>
                      </div>
                      <div className="team-content">
                        <h3 className="team-title">
                          <a href="/facultyDetails">Lily Michelle</a>
                        </h3>
                        <span className="team-desig">Senior Instructor</span>
                      </div>
                      <div className="team-info">
                        <span>
                          <i className="fal fa-file-check" />
                          28 years+ Experience
                        </span>
                      </div>{" "}
                      <div className="team-info">
                        <span>
                          <i className="fa-light fa-chalkboard-teacher" />
                          25+ Workshops
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 col-xl-3">
                  <div className="team-card style3">
                    <div className="team-img-wrap">
                      <div className="team-img">
                        <img src="assets/img/team/team_1_2.jpg" alt="Team" />
                      </div>
                    </div>
                    <div className="team-hover-wrap">
                      <div className="team-social">
                        <a href="#" className="icon-btn">
                          <i className="far fa-plus" />
                        </a>
                        <div className="th-social">
                          <a target="_blank" href="https://linkedin.com/">
                            <i className="fab fa-linkedin-in" />
                          </a>
                          <a href="mailto:lily.michelle@example.com">
                            <i className="fas fa-envelope" />
                          </a>
                        </div>
                      </div>
                      <div className="team-content">
                        <h3 className="team-title">
                          <a href="/facultyDetails">Lily Michelle</a>
                        </h3>
                        <span className="team-desig">Senior Instructor</span>
                      </div>
                      <div className="team-info">
                        <span>
                          <i className="fal fa-file-check" />
                          28 years+ Experience
                        </span>
                      </div>{" "}
                      <div className="team-info">
                        <span>
                          <i className="fa-light fa-chalkboard-teacher" />
                          25+ Workshops
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 col-xl-3">
                  <div className="team-card style3">
                    <div className="team-img-wrap">
                      <div className="team-img">
                        <img src="assets/img/team/team_1_2.jpg" alt="Team" />
                      </div>
                    </div>
                    <div className="team-hover-wrap">
                      <div className="team-social">
                        <a href="#" className="icon-btn">
                          <i className="far fa-plus" />
                        </a>
                        <div className="th-social">
                          <a target="_blank" href="https://linkedin.com/">
                            <i className="fab fa-linkedin-in" />
                          </a>
                          <a href="mailto:lily.michelle@example.com">
                            <i className="fas fa-envelope" />
                          </a>
                        </div>
                      </div>
                      <div className="team-content">
                        <h3 className="team-title">
                          <a href="/facultyDetails">Lily Michelle</a>
                        </h3>
                        <span className="team-desig">Senior Instructor</span>
                      </div>
                      <div className="team-info">
                        <span>
                          <i className="fal fa-file-check" />
                          28 years+ Experience
                        </span>
                      </div>{" "}
                      <div className="team-info">
                        <span>
                          <i className="fa-light fa-chalkboard-teacher" />
                          25+ Workshops
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden position-relative space bg-smoke"
            id="team-sec"
          >
            <div
              className="shape-mockup instructor-bg-shape1 jump d-lg-block d-none"
              data-left="3%"
              data-bottom="30%"
            >
              <img src="assets/img/normal/blog-3-bg-shape.png" alt="img" />
            </div>
            <div
              className="instructor_bg_shape2 shape-mockup d-xl-block d-none"
              data-left="-15%"
              data-top="3%"
            >
              <img src="assets/img/normal/instructor_1_shape1.png" alt="img" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-6 order-xl-2">
                  <div className="become-instructor-img mb-5 mb-xl-0 ms-xl-5">
                    <img
                      src="assets/img/normal/become-instructor-thumb.png"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-xl-6 order-xl-1">
                  <div className="title-area mb-30">
                    <span className="sub-title">
                      <i className="fal fa-book me-1" />
                      Instructor
                    </span>
                    <h2 className="sec-title">Become an Instructor.</h2>
                  </div>
                  <div className="row gy-4">
                    <div className="col-sm-6">
                      <div className="become-instructor-wrap">
                        <i className="fa-solid fa-badge-check" />
                        <h4 className="box-title">Teach your way</h4>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="become-instructor-wrap">
                        <i className="fa-solid fa-badge-check" />
                        <h4 className="box-title">Plan your curriculum</h4>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="become-instructor-wrap">
                        <i className="fa-solid fa-badge-check" />
                        <h4 className="box-title">Record your video</h4>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="become-instructor-wrap">
                        <i className="fa-solid fa-badge-check" />
                        <h4 className="box-title">Launch your course</h4>
                      </div>
                    </div>
                  </div>
                  <a href="about.html" className="th-btn mt-40">
                    Get Instructor{" "}
                    <i className="fa-regular fa-arrow-right ms-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Faculty;
