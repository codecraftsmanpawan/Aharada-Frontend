import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Link } from "react-router-dom";

const Scholarships = () => {
  return (
    <div>
      {/* <Breadcrumbs />{" "} */}
      <section className="space position-relative">
        <div
          className="bg-img"
          style={{
            backgroundImage: "url('assets/img/update1/bg/bg_overlay_1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img src="assets/img/update1/bg/bg_overlay_1.png" alt="overlay" />
        </div>
        <div className="container text-center">
          <div className="title-area text-center mb-40">
            <span className="sub-title text-white">
              <i className="fal fa-book me-2" />
              Are You Ready For This Offer
            </span>
            <h2 className="sec-title text-white">
              50% Offer For Very First 50
              <br />
              <span className="fw-light">Student’s</span>
            </h2>
          </div>
          <div className="btn-group justify-content-center">
            <Link to="/apply-now" className="th-btn style2">
              Apply Now
              <i className="fas fa-arrow-right ms-2" />
            </Link>
          </div>
        </div>
      </section>
      <section className="product-details space-top space-extra-bottom">
        <div className="container">
          <div className="row gx-60">
            <div className="col-lg-6">
              <div className="product-big-img">
                <div className="img">
                  <img src="assets/img/sch.jpg" alt="Scholarship Image" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="product-about">
                <p className="text">
                  Aharada Education is committed to empowering students with
                  opportunities that transform their future. Our scholarship
                  program provides financial support and guidance to help
                  learners achieve their academic goals and unlock their true
                  potential.
                </p>
                <div className="checklist">
                  <ul>
                    <li>50% scholarship for the first 50 students</li>
                    <li>Accessible for a wide range of courses</li>
                    <li>
                      Dedicated mentorship and support throughout the program
                    </li>
                  </ul>
                </div>
                <div className="actions">
                  <Link to="/apply-now" className="th-btn style1">
                    Apply Now
                    <i className="fas fa-arrow-right ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Scholarships;
