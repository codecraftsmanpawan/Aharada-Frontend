import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
    });
  }, []);

  // Auto image slider logic
  const images = ["assets/hero.png", "assets/hero.png", "assets/hero.png"];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
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
          <div className="col-lg-6" style={{ marginTop: "-70px" }}>
            <div className="hero-style2">
              <span className="hero-subtitle">Educate, Empower, Excel</span>
              <h1 className="hero-title text-theme">Aharada Education</h1>
              <h1 className="hero-title">
                Soar High with World-Class Learning
              </h1>
              <div className="checklist">
                <ul>
                  <li>Global Placement Support</li>
                  <li>Practical, Real-World Training</li>
                </ul>
              </div>
              <div className="btn-group">
                <Link to="/programs" className="th-btn">
                  Explore Programs
                  <i className="fas fa-long-arrow-right ms-2" />
                </Link>
                <Link
                  to="assets/img/Aharada Brochure.pdf"
                  className="th-btn style5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Brochure
                  <i className="fas fa-long-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Auto-changing image section */}
          <div className="col-xl-6">
            <div className="hero-img2">
              <img
                src={images[currentImage]}
                alt="Aharada Hero"
                style={{
                  width: "100%",
                  borderBottom: "15px solid #072e46",
                  borderRadius: "32%",
                  transition: "opacity 0.5s ease-in-out",
                }}
              />
            </div>
          </div>
        </div>
      </div>

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
          <a href="tel:+7303381360" className="th-btn">
            <i className="fas fa-phone ms-2 mr-5" /> Connect Now
          </a>
        </div>
      </div>

      <section
        style={{
          background: "linear-gradient(to bottom, #072e46, #145f8b)",
          marginTop: "-140px",
          paddingBottom: "60px",
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
                  <Link to="/campus-life">Campus Life</Link>
                </h3>
                <p className="feature-list_text">
                  Experience a dynamic campus atmosphere that encourages growth,
                  collaboration, and diverse student engagement.
                </p>
                <Link to="/campus-life" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="feature-list">
                <div className="feature-list_icon">
                  <i className="fal fa-user-graduate" />
                </div>
                <h3 className="feature-list_title">
                  <Link to="/scholarships">Scholarships</Link>
                </h3>
                <p className="feature-list_text">
                  Access various scholarships to make your academic journey more
                  affordable and stress-free.
                </p>
                <Link to="/scholarships" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="feature-list">
                <div className="feature-list_icon">
                  <i className="fal fa-book-open-cover" />
                </div>
                <h3 className="feature-list_title">
                  <Link to="/department">Departments</Link>
                </h3>
                <p className="feature-list_text">
                  Explore our diverse range of departments that offer
                  specialized programs for various fields of study.
                </p>
                <Link to="/department" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="feature-list">
                <div className="feature-list_icon">
                  <i className="fal fa-graduation-cap" />
                </div>
                <h3 className="feature-list_title">
                  <Link to="/apply-now">Admission</Link>
                </h3>
                <p className="feature-list_text">
                  Begin your journey with a seamless admission process, making
                  your transition to university smooth and easy.
                </p>
                <Link to="/apply-now" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
