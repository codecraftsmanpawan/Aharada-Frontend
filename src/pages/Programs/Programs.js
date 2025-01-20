import React from "react";
import Course from "../Home/component/CouseOffer";
import { Link } from "react-router-dom";
const Programs = () => {
  return (
    <div>
      <section
        className="bg-smoke-half"
        style={{
          background: "linear-gradient(to bottom, #fdfbf9, #f4ebdd)",
          padding: "50px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 mb-30 mb-xl-0">
              <div
                className="cta-box"
                style={{
                  backgroundImage: `url('assets/img/update1/bg/cta_bg_5.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h3 className="cta-title">Apply for admission in 2025</h3>
                <p className="cta-text">
                  Completely predominate impactful products for front-end data.
                  Distinctively reinvent high payoff value whereas one-to-one
                  mindshare. Seamlessly exploit extensible content after
                  market-driven.
                </p>
                <Link to="/apply-now" className="th-btn">
                  Apply Now
                  <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="cta-box"
                style={{
                  backgroundImage: `url('assets/img/update1/bg/cta_bg_6.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h3 className="cta-title">Apply for Scholarship</h3>
                <p className="cta-text">
                  Completely predominate impactful products for front-end data.
                  Distinctively reinvent high payoff value whereas one-to-one
                  mindshare. Seamlessly exploit extensible content after
                  market-driven.
                </p>
                <Link to="/apply-now" className="th-btn">
                  Apply Now
                  <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="space bg-smoke" id="course-sec">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">University Programs</span>
            <h2 className="sec-title fw-semibold">
              Excellence In Teaching And Learning
            </h2>
          </div>
          <div className="row gy-4">
            <div className="col-md-6 col-xl-4">
              <div className="admission-card">
                <div className="admission-card_img">
                  <img
                    src="assets/img/update1/normal/admission_1_1.jpg"
                    alt=" image"
                  />
                </div>
                <h3 className="admission-card_title box-title">Diploma</h3>
                <p className="admission-card_text">
                  Globally envisioneer seamless catalysts for change through
                  standards compliant vortals. Quickly leverage existing
                  transparent solutions.
                </p>
                <Link to="/apply-now" className="link-btn">
                  Apply Now
                  <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="admission-card">
                <div className="admission-card_img">
                  <img
                    src="assets/img/update1/normal/admission_1_2.jpg"
                    alt=" image"
                  />
                </div>
                <h3 className="admission-card_title box-title">
                  {" "}
                  Undergraduate
                </h3>
                <p className="admission-card_text">
                  Globally envisioneer seamless catalysts for change through
                  standards compliant vortals. Quickly leverage existing
                  transparent solutions.
                </p>
                <Link to="/apply-now" className="link-btn">
                  Apply Now
                  <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="admission-card">
                <div className="admission-card_img">
                  <img
                    src="assets/img/update1/normal/admission_1_3.jpg"
                    alt=" image"
                  />
                </div>
                <h3 className="admission-card_title box-title">Postgraduate</h3>
                <p className="admission-card_text">
                  Globally envisioneer seamless catalysts for change through
                  standards compliant vortals. Quickly leverage existing
                  transparent solutions.
                </p>
                <Link to="/apply-now" className="link-btn">
                  Apply Now
                  <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Course />
    </div>
  );
};

export default Programs;
