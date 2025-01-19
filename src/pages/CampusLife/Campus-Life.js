import React from "react";
import { Link } from "react-router-dom";

const CampusLife = () => {
  return (
    <div>
      <section
        style={{
          background: "linear-gradient(to bottom, #f4ebdd , #fdfbf9)",
        }}
      >
        <div className="container">
          <div className="row flex-row-reverse align-items-center">
            <div className="col-xl-6">
              <div className="ps-xxl-5 ms-xl-2 pt-5 pt-xl-0 mt-4 mt-xl-0 mb-n5 mb-xl-0">
                <div className="text-center">
                  <img
                    src="assets/img/update1/normal/vector_4.png"
                    alt="campus vector"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 space text-left text-xl">
              <div className="title-area mb-35">
                <span className="sub-title " style={{ color: "#c88c32" }}>
                  Admissions Open
                </span>
                <h2
                  className="sec-title fw-medium "
                  style={{ color: "#c88c32" }}
                >
                  Explore Life at Aharada Education
                  <br />
                </h2>
              </div>
              <p className="mt-n2 mb-35 text-light">
                Discover a world-class learning environment that fosters
                innovation, creativity, and excellence. Aharada Education offers
                a dynamic campus life filled with opportunities to grow, connect
                with peers, and engage in diverse activities that shape your
                academic and personal journey.
              </p>
              <p className="mb-35 text-light">
                Admissions for the Fall 2023 semester are now open. Take the
                first step toward your dream career by enrolling at Aharada
                Education and unlock endless possibilities for success.
              </p>
              <Link to="/apply-now" className="th-btn style1 shadow-none">
                Apply Now
                <i className="fas fa-arrow-right ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        className="space"
        style={{
          background: "linear-gradient(to bottom, #fdfbf9, #f4ebdd)",
          marginTop: "-80px",
        }}
      >
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title" style={{ color: "#c88c32" }}>
              GUEST LECTURE & ADMISSIONS
            </span>
            <h2 className="sec-title fw-semibold" style={{ color: "#c88c32" }}>
              What Are You Looking For?
            </h2>
            <p className="sec-text">
              At Aharada Education, we bring exciting opportunities for both
              guest lecturers and aspiring students. Connect with us to inspire
              or get inspired.
            </p>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="th-box mb-5 mb-xl-0">
                <div className="th-box_img">
                  <img
                    src="assets/img/update1/normal/vector_1.png"
                    alt="Guest Lecture at Aharada"
                  />
                </div>
                <div className="th-box_content">
                  <h3 className="h4 th-box_title" style={{ color: "#c88c32" }}>
                    Want to Deliver a Guest Lecture?
                  </h3>
                  <p className="th-box_text">
                    Share your expertise and motivate students with your
                    knowledge. Join us as a guest lecturer and contribute to the
                    Aharada community! Inspire young minds and leave a lasting
                    impact on the leaders of tomorrow.
                  </p>

                  <Link to="/joinasInstructor" className="th-btn">
                    Apply Now
                    <i className="fas fa-arrow-right ms-2" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="th-box theme2">
                <div className="th-box_img">
                  <img
                    src="assets/img/update1/normal/vector_2.png"
                    alt="Admissions at Aharada"
                  />
                </div>
                <div className="th-box_content">
                  <h3 className="h4 th-box_title" style={{ color: "#c88c32" }}>
                    Looking for Admissions?
                  </h3>
                  <p className="th-box_text">
                    Take the first step toward your dream education. Explore our
                    courses and enroll today to start your transformative
                    journey. Your future begins here—unlock opportunities and
                    achieve your aspirations with Aharada Education.
                  </p>

                  <Link to="/apply-now" className="th-btn">
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

export default CampusLife;
