import React from "react";
import { Link } from "react-router-dom";

const AwardsSection = () => {
  return (
    <>
      <div
        className="space"
        style={{
          background: "linear-gradient(to bottom, #fdfbf9, #f4ebdd)",
          marginTop: "-40px",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 mb-45 mb-xl-0 text-center text-xl-start">
              <div className="title-area mb-35">
                <span className="sub-title">Awards and Recognitions</span>
                <h2
                  className="sec-title fw-semibold"
                  style={{ color: "#cd9644" }}
                >
                  Awards and Recognitions
                </h2>
              </div>
              <div className="row gy-4 mb-5">
                <div className="col-md-6">
                  <div
                    className="feature-card style2"
                    style={{ height: "300px", width: "330px" }}
                  >
                    <div>
                      <img src="./assets/img/Certificate3.JPG" alt="icon" />
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div
                    className="feature-card style2"
                    style={{ height: "300px", width: "330px" }}
                  >
                    <div>
                      <img src="./assets/img/Certificate1.JPG" alt="icon" />
                    </div>
                  </div>
                </div>
                <Link to="/awards">
                  View More<i class="fas fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="ps-xxl-5 ms-xl-2">
                <div className="video-box2">
                  <img src="./assets/img/about-us.webp" alt="video" />{" "}
                  <a
                    href="https://youtu.be/AYVMWDkMyxY?si=HD0kFjuoZTW4_IbZ"
                    className="play-btn style3 popup-video"
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="cta-area-1"
        style={{
          backgroundColor: "#c88c32",
          marginTop: "-60px",
          marginBottom: "80px",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-8">
              <div className="cta-wrap title-area mb-0">
                <div className="cta-icon">
                  <img src="assets/img/normal/cta-icon1.png" alt="icon" />
                </div>
                <div className="cta-content">
                  <h2 className="cta-title sec-title">
                    Explore Distance Courses
                  </h2>
                  <p className="cta-text">
                    Expand your knowledge and career potential with flexible
                    online learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-img-1" data-overlay="title" data-opacity={8}>
          <img
            src="assets/img/normal/cta_1_1.png"
            alt="Distance Learning Image"
          />
          <a href="" className="play-btn style2 ">
            <span style={{ color: "#fff" }}>Explore</span>
            <i className="fas fa-arrow-right ms-1" />
          </a>
        </div>
      </div>
    </>
  );
};

export default AwardsSection;
