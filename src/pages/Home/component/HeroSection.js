import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
    });
  }, []);

  return (
    <div
      className="th-hero-wrapper hero-4"
      id="hero"
      style={{
        background: "linear-gradient(to bottom, #fdfbf9, #f4ebdd)",
      }}
    >
      <div
        className="th-hero-bg"
        data-bg-src="assets/img/hero/hero_bg_2_1.jpg"
      />
      <div className="container z-index-common">
        <div className="row">
          <div
            className="col-lg-6"
            style={{ marginTop: "-100px" }}
            data-aos="fade-right"
          >
            <div className="hero-style2">
              <span className="hero-subtitle">
                Educate, Empower, Excel &amp; Shape Your Future
              </span>

              <h1 className="hero-title text-theme">Aharada Education</h1>
              <h1 className="hero-title">
                Soar High with World-Class Learning
              </h1>
              <div className="checklist">
                <ul>
                  <li>Global Placement Support</li>
                  <li>Practical, Real-World Training</li>
                  <li>Networking with Industry Leaders</li>
                  <li>Scholarships &amp; Financial Aid</li>
                  <li>Certified Programs Across Industries</li>
                </ul>
              </div>

              <div className="btn-group">
                <a href="#" className="th-btn">
                  Explore Programs
                  <i className="fas fa-long-arrow-right ms-2" />
                </a>
                <a href="#" className="th-btn style5">
                  Download Brochure
                  <i className="fas fa-long-arrow-right ms-2" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6" data-aos="fade-left">
            <div className="hero-img2">
              <img src="assets/01.png" alt="Aharada Hero" width="100%" />
              <div
                className="hero-counter-wrap hero-counter2 "
                style={{ marginRight: "210px" }}
              >
                <div className="hero-counter_icon">
                  <img
                    src="assets/img/icon/hero2-counter-icon2.svg"
                    alt="icon"
                  />
                </div>
                <div className="details">
                  <h3 className="hero-counter_number">
                    <span className="counter-number">10,000</span>+
                  </h3>
                  <p className="hero-counter_text">
                    Graduates in Leading Roles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className="hero-shape shape1"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img src="assets/img/hero/shape_2_1.png" alt="shape" />
      </div> */}
      {/* 
      <div
        className="hero-shape shape3 d-sm-block d-none"
        data-aos="fade-down"
        data-aos-delay="600"
      >
        <img src="assets/img/hero/shape_2_3.png" alt="shape" />
      </div> */}

      <div className="ripple-shape">
        <span className="ripple-1" />
        <span className="ripple-2" />
        <span className="ripple-3" />
        <span className="ripple-4" />
        <span className="ripple-5" />
        <span className="ripple-6" />
      </div>

      <div
        className="px-3"
        data-pos-for="#course-sec"
        data-sec-pos="bottom-half"
        style={{
          marginBottom: "90px",
          marginTop: "-60px",
        }}
      >
        <div className="notification-box2">
          <div className="notification-icon">
            <img
              src="assets/img/update1/icon/notification.png"
              alt="Notification Icon"
            />
          </div>
          <div className="notification-content">
            <h4 className="notification-title">Talk to Our Counsellor</h4>
            <p className="notification-text">
              Get expert guidance for your career.
            </p>
          </div>
          <a href="tel:+917303381359" className="th-btn">
            <i className="fas fa-phone ms-2 mr-5" /> Connect Now
          </a>
        </div>
      </div>

      <section
        style={{
          background: "linear-gradient(to bottom, #072e46, #145f8b)",
          marginTop: "-180px",
          paddingBottom: "20px",
        }}
      >
        <div
          className="container"
          style={{
            paddingTop: "140px",
          }}
        >
          <div className="row gy-4 justify-content-center">
            <div className="col-xl-3 col-md-6">
              <div className="feature-list">
                <div className="feature-list_icon">
                  <i className="fal fa-landmark" />
                </div>
                <h3 className="feature-list_title">
                  <a href="#">Campus Life</a>
                </h3>
                <p className="feature-list_text">
                  Experience a dynamic campus atmosphere that encourages growth,
                  collaboration, and diverse student engagement.
                </p>
                <a href="#" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="feature-list">
                <div className="feature-list_icon">
                  <i className="fal fa-user-graduate" />
                </div>
                <h3 className="feature-list_title">
                  <a href="#">Scholarships</a>
                </h3>
                <p className="feature-list_text">
                  Access various scholarships to make your academic journey more
                  affordable and stress-free.
                </p>
                <a href="#" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="feature-list">
                <div className="feature-list_icon">
                  <i className="fal fa-book-open-cover" />
                </div>
                <h3 className="feature-list_title">
                  <a href="#">Departments</a>
                </h3>
                <p className="feature-list_text">
                  Explore our diverse range of departments that offer
                  specialized programs for various fields of study.
                </p>
                <a href="#" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="feature-list">
                <div className="feature-list_icon">
                  <i className="fal fa-graduation-cap" />
                </div>
                <h3 className="feature-list_title">
                  <a href="#">Admission</a>
                </h3>
                <p className="feature-list_text">
                  Begin your journey with a seamless admission process, making
                  your transition to university smooth and easy.
                </p>
                <a href="#" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;