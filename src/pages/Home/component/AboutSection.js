import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div
      className="space overflow-hidden"
      id="about-sec"
      style={{
        marginTop: "-50px",
        background: "linear-gradient(to bottom,rgb(255, 253, 253), #ffffff)",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div
              className="img-box1 mb-40 mb-xl-0"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="img1">
                <img
                  className="tilt-active"
                  src="assets/img/normal/about_1_1.png"
                  alt="About"
                />
              </div>

              <div className="img2">
                <img
                  className="tilt-active"
                  src="assets/img/normal/about_1_2.png"
                  alt="About"
                />
              </div>
              <div
                className="shape-mockup jump"
                data-left="-67px"
                data-bottom={0}
              >
                <img src="assets/img/normal/about_1_shape1.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="col-xl-6" data-aos="fade-left" data-aos-delay="400">
            <div className="title-area mb-30">
              <span className="sub-title">
                <i className="fal fa-book me-2" /> About Our University
              </span>
              <h2 className="sec-title">Welcome to Aharadaedu University.</h2>
            </div>
            <p className="mt-n2 mb-25">
              Collaboratively simplify user friendly networks after principle
              centered coordinate effective methods of empowerment distributed
              niche markets pursue market positioning web-readiness after
              resource sucking applications.
            </p>
            <p className="mb-30">
              Online education, also known as e-learning, is a method of
              learning that takes place over the internet. It offers individuals
              the opportunity to acquire knowledge, skills.
            </p>
            <div className="row align-items-center">
              <div
                className="col-md-auto"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div className="about-grid_img mb-30 mb-md-0">
                  <img src="assets/img/normal/about_1_4.png" alt="img" />
                </div>
              </div>
              <div className="col-md-7" data-aos="fade-up" data-aos-delay="800">
                <div className="checklist">
                  <ul>
                    <li>Get access to 4,000+ of our top courses</li>
                    <li>Popular topics to learn now</li>
                    <li>Find the right instructor for you</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="btn-group mt-40" data-aos="flip-up">
              <a href="/about" className="th-btn">
                About More
                <i className="fa-regular fa-arrow-right ms-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
