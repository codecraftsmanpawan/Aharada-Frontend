import React, { useState, useEffect } from "react";
import Modal from "react-modal";

import ApplyForm from "../ApplyForm/ApplyForm";
import { Link } from "react-router-dom";
import SocialIcon from "./SocialIcon";
import Marquee from "../../components/Marquee/Marquee";
import "./Header.css";
Modal.setAppElement("#root");

function Header() {
  const [isAcademicsModalOpen, setIsAcademicsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  // New state for ApplyForm visibility
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Functions to handle ApplyForm visibility
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const closeApplyForm = () => {
    setIsFormVisible(false);
  };

  // Sticky Menu effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <>
      <Marquee message="🎉 Admission is Open! Apply Now! 🎉" />
      <header
        className="th-header header-layout1"
        style={{
          background: "linear-gradient(to bottom, #072e46, #145f8b)",
        }}
      >
        {/* Header Top */}
        <div className="header-top fixed">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto d-none d-lg-block">
                <div className="header-links">
                  <ul>
                    <li>
                      <i className="far fa-phone" />
                      <Link
                        to="tel:+917303381359"
                        onMouseOver={(e) => (e.target.style.color = "#93b3e6")}
                        onMouseOut={(e) => (e.target.style.color = "")}
                      >
                        IIMT University
                      </Link>
                    </li>
                    <li>
                      <i className="far fa-phone" />
                      <Link
                        to="tel:+917303381347"
                        onMouseOver={(e) => (e.target.style.color = "#93b3e6")}
                        onMouseOut={(e) => (e.target.style.color = "")}
                      >
                        SAGE University
                      </Link>
                    </li>
                    <li>
                      <i className="far fa-phone" />
                      <Link
                        to="tel:+917579811099"
                        onMouseOver={(e) => (e.target.style.color = "#93b3e6")}
                        onMouseOut={(e) => (e.target.style.color = "")}
                      >
                        Subharti University
                      </Link>
                    </li>
                    <li>
                      <i className="far fa-phone" />
                      <Link
                        to="tel:+919520269895"
                        onMouseOver={(e) => (e.target.style.color = "#93b3e6")}
                        onMouseOut={(e) => (e.target.style.color = "")}
                      >
                        DBUU
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-links header-right">
                  <ul>
                    <li>
                      <div
                        className="header-social"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        {/* Email Icon */}
                        <a
                          href="mailto:info@aharadaedu.in"
                          aria-label="Email"
                          onMouseOver={(e) =>
                            (e.target.style.color = "#93b3e6")
                          }
                          onMouseOut={(e) => (e.target.style.color = "")}
                          style={{
                            color: "#3b5998",
                            transition: "color 0.3s ease",
                            marginRight: "1rem",
                            fontSize: "1.25rem",
                            cursor: "pointer",
                            textDecoration: "none",
                          }}
                        >
                          <i className="far fa-envelope"></i>
                        </a>

                        {/* Follow Us Text */}
                        <span className="social-title inline mr-4 text-gray-700">
                          Follow Us:
                        </span>

                        {/* Social Icons */}
                        <a
                          href="https://www.facebook.com/aharadaeducation/"
                          className="social-icon"
                          aria-label="Facebook"
                          style={{ color: "#3b5998", marginRight: "1rem" }}
                          onMouseOver={(e) =>
                            (e.target.style.color = "#3b5998")
                          }
                          onMouseOut={(e) => (e.target.style.color = "")}
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                          href="https://www.instagram.com/aharadaeducation/"
                          className="social-icon"
                          aria-label="Instagram"
                          style={{ color: "#E1306C", marginRight: "1rem" }}
                          onMouseOver={(e) =>
                            (e.target.style.color = "#E1306C")
                          }
                          onMouseOut={(e) => (e.target.style.color = "")}
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a
                          href="https://x.com/Aharadaedu"
                          className="social-icon"
                          aria-label="Twitter"
                          style={{ color: "#1DA1F2", marginRight: "1rem" }}
                          onMouseOver={(e) =>
                            (e.target.style.color = "#1DA1F2")
                          }
                          onMouseOut={(e) => (e.target.style.color = "")}
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/aharadaeducation/"
                          className="social-icon"
                          aria-label="LinkedIn"
                          style={{ color: "#0077B5", marginRight: "1rem" }}
                          onMouseOver={(e) =>
                            (e.target.style.color = "#0077B5")
                          }
                          onMouseOut={(e) => (e.target.style.color = "")}
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a
                          href="https://www.youtube.com/@aharadaeducation"
                          className="social-icon"
                          aria-label="YouTube"
                          style={{ color: "#FF0000", marginRight: "1rem" }}
                          onMouseOver={(e) =>
                            (e.target.style.color = "#FF0000")
                          }
                          onMouseOut={(e) => (e.target.style.color = "")}
                        >
                          <i className="fab fa-youtube"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Menu Area */}
        <div className={`sticky-wrapper ${isSticky ? "sticky" : ""}`}>
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link to="/">
                      <img
                        src="../assets/logo.png"
                        width="160px"
                        alt="Aharadaedu"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="row">
                    <div className="col-auto">
                      <nav className={`main-menu d-none d-lg-inline-block`}>
                        <ul className="menu-list">
                          <li className="active">
                            <Link
                              style={{
                                fontWeight: "bold",
                                color: isHovered ? "#064771" : "",
                              }}
                              onMouseEnter={() => setIsHovered(true)}
                              onMouseLeave={() => setIsHovered(false)}
                              to="/"
                            >
                              Home
                            </Link>
                          </li>

                          <li className="menu-item-has-children">
                            <Link
                              style={{
                                fontWeight: "bold",
                                color: isHovered ? "#064771" : "",
                              }}
                              onMouseEnter={() => setIsHovered(true)}
                              onMouseLeave={() => setIsHovered(false)}
                              to="#"
                            >
                              About Us
                            </Link>
                            <ul className="sub-menu">
                              <li>
                                <Link
                                  style={{
                                    fontWeight: "bold",
                                    color: isHovered ? "#064771" : "",
                                  }}
                                  onMouseEnter={() => setIsHovered(true)}
                                  onMouseLeave={() => setIsHovered(false)}
                                  to="/about"
                                >
                                  About Us
                                </Link>
                              </li>
                              <li>
                                <Link
                                  style={{
                                    fontWeight: "bold",
                                    color: isHovered ? "#064771" : "",
                                  }}
                                  onMouseEnter={() => setIsHovered(true)}
                                  onMouseLeave={() => setIsHovered(false)}
                                  to="/department"
                                >
                                  Departments
                                </Link>
                              </li>
                              <li>
                                <Link
                                  style={{
                                    fontWeight: "bold",
                                    color: isHovered ? "#064771" : "",
                                  }}
                                  onMouseEnter={() => setIsHovered(true)}
                                  onMouseLeave={() => setIsHovered(false)}
                                  to="/team-members"
                                >
                                  Our Team
                                </Link>
                              </li>
                              <li>
                                <Link
                                  style={{
                                    fontWeight: "bold",
                                    color: isHovered ? "#064771" : "",
                                  }}
                                  onMouseEnter={() => setIsHovered(true)}
                                  onMouseLeave={() => setIsHovered(false)}
                                  to="/faculty"
                                >
                                  Our Faculty
                                </Link>
                              </li>
                              <li>
                                <Link
                                  style={{
                                    fontWeight: "bold",
                                    color: isHovered ? "#064771" : "",
                                  }}
                                  onMouseEnter={() => setIsHovered(true)}
                                  onMouseLeave={() => setIsHovered(false)}
                                  to="/placement-team"
                                >
                                  Placement Team
                                </Link>
                              </li>
                              <li>
                                <Link
                                  style={{
                                    fontWeight: "bold",
                                    color: isHovered ? "#064771" : "",
                                  }}
                                  onMouseEnter={() => setIsHovered(true)}
                                  onMouseLeave={() => setIsHovered(false)}
                                  to="/events"
                                >
                                  Events
                                </Link>
                              </li>
                              <li>
                                <Link
                                  style={{
                                    fontWeight: "bold",
                                    color: isHovered ? "#064771" : "",
                                  }}
                                  onMouseEnter={() => setIsHovered(true)}
                                  onMouseLeave={() => setIsHovered(false)}
                                  to="/gallery"
                                >
                                  Gallery
                                </Link>
                              </li>
                              <li>
                                <Link
                                  style={{
                                    fontWeight: "bold",
                                    color: isHovered ? "#064771" : "",
                                  }}
                                  onMouseEnter={() => setIsHovered(true)}
                                  onMouseLeave={() => setIsHovered(false)}
                                  to="/our-guest-Lecturer"
                                >
                                  Our Guest Lecturers
                                </Link>
                              </li>
                              <li>
                                <Link
                                  style={{
                                    fontWeight: "bold",
                                    color: isHovered ? "#064771" : "",
                                  }}
                                  onMouseEnter={() => setIsHovered(true)}
                                  onMouseLeave={() => setIsHovered(false)}
                                  to="/our-mentors"
                                >
                                  Our Mentors
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link
                              style={{
                                fontWeight: "bold",
                                color: isHovered ? "#064771" : "",
                              }}
                              onMouseEnter={() => setIsHovered(true)}
                              onMouseLeave={() => setIsHovered(false)}
                              to="/programs"
                            >
                              Programs
                            </Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link
                              style={{
                                fontWeight: "bold",
                                color: isHovered ? "#064771" : "",
                              }}
                              onMouseEnter={() => setIsHovered(true)}
                              onMouseLeave={() => setIsHovered(false)}
                              to="#"
                            >
                              Students
                            </Link>
                            <ul className="sub-menu">
                              <li>
                                <Link
                                  style={{
                                    fontWeight: "bold",
                                    color: isHovered ? "#064771" : "",
                                  }}
                                  onMouseEnter={() => setIsHovered(true)}
                                  onMouseLeave={() => setIsHovered(false)}
                                  to="/noticeBoard"
                                >
                                  Notice
                                </Link>
                              </li>
                              <li>
                                <Link
                                  style={{
                                    fontWeight: "bold",
                                    color: isHovered ? "#064771" : "",
                                  }}
                                  onMouseEnter={() => setIsHovered(true)}
                                  onMouseLeave={() => setIsHovered(false)}
                                  to="/internship"
                                >
                                  Internship
                                </Link>
                              </li>
                              <li>
                                <Link
                                  style={{
                                    fontWeight: "bold",
                                    color: isHovered ? "#064771" : "",
                                  }}
                                  onMouseEnter={() => setIsHovered(true)}
                                  onMouseLeave={() => setIsHovered(false)}
                                  to="/placed-students"
                                >
                                  Placed Students
                                </Link>
                              </li>
                              <li>
                                <Link
                                  style={{
                                    fontWeight: "bold",
                                    color: isHovered ? "#064771" : "",
                                  }}
                                  onMouseEnter={() => setIsHovered(true)}
                                  onMouseLeave={() => setIsHovered(false)}
                                  to="/alumni"
                                >
                                  Alumni
                                </Link>
                              </li>
                              <li>
                                <Link
                                  style={{
                                    fontWeight: "bold",
                                    color: isHovered ? "#064771" : "",
                                  }}
                                  onMouseEnter={() => setIsHovered(true)}
                                  onMouseLeave={() => setIsHovered(false)}
                                  to="/grievance"
                                >
                                  Grievance
                                </Link>
                              </li>
                              <li>
                                <Link
                                  style={{
                                    fontWeight: "bold",
                                    color: isHovered ? "#064771" : "",
                                  }}
                                  onMouseEnter={() => setIsHovered(true)}
                                  onMouseLeave={() => setIsHovered(false)}
                                  to="https://aerospaceclub.org/"
                                >
                                  Our Clubs
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link
                              style={{
                                fontWeight: "bold",
                                color: isHovered ? "#064771" : "",
                              }}
                              onMouseEnter={() => setIsHovered(true)}
                              onMouseLeave={() => setIsHovered(false)}
                              to="/blogs"
                            >
                              Blog
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={{
                                fontWeight: "bold",
                                color: isHovered ? "#064771" : "",
                              }}
                              onMouseEnter={() => setIsHovered(true)}
                              onMouseLeave={() => setIsHovered(false)}
                              to="/contact"
                            >
                              Contact
                            </Link>
                          </li>
                        </ul>
                      </nav>

                      {/* Mobile Menu Toggle Button */}
                      <button
                        type="button"
                        className="th-menu-toggle d-block d-lg-none"
                        onClick={toggleMobileMenu}
                      >
                        <i className="far fa-bars"></i>
                      </button>
                    </div>
                    <div className="col-auto d-none d-xl-block">
                      <div className="header-button">
                        <Link
                          onClick={toggleFormVisibility}
                          className={"th-btn style1 sideMenuToggler"}
                        >
                          Apply Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <ul className="menu-list">
              <li>
                <Link to="/" onClick={handleMenuItemClick}>
                  Home
                </Link>
              </li>
              <li className="menu-item-has-children">
                <Link to="#" onClick={handleMenuItemClick}>
                  About Us
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/about" onClick={handleMenuItemClick}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/department" onClick={handleMenuItemClick}>
                      Departments
                    </Link>
                  </li>
                  <li>
                    <Link to="/team-members" onClick={handleMenuItemClick}>
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/faculty" onClick={handleMenuItemClick}>
                      Our Faculty
                    </Link>
                  </li>
                  <li>
                    <Link to="/placement-team" onClick={handleMenuItemClick}>
                      Placement Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/events" onClick={handleMenuItemClick}>
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery" onClick={handleMenuItemClick}>
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/our-guest-Lecturer"
                      onClick={handleMenuItemClick}
                    >
                      Our Guest Lecturers
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-mentors" onClick={handleMenuItemClick}>
                      Our Mentors
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/programs" onClick={handleMenuItemClick}>
                  Programs
                </Link>
              </li>
              <li className="menu-item-has-children">
                <Link to="#" onClick={handleMenuItemClick}>
                  Students
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/noticeBoard" onClick={handleMenuItemClick}>
                      Notice
                    </Link>
                  </li>
                  <li>
                    <Link to="/internship" onClick={handleMenuItemClick}>
                      Internship
                    </Link>
                  </li>
                  <li>
                    <Link to="/placed-students" onClick={handleMenuItemClick}>
                      Placed Students
                    </Link>
                  </li>
                  <li>
                    <Link to="/alumni" onClick={handleMenuItemClick}>
                      Alumni
                    </Link>
                  </li>
                  <li>
                    <Link to="/grievance" onClick={handleMenuItemClick}>
                      Grievance
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://aerospaceclub.org/"
                      onClick={handleMenuItemClick}
                    >
                      Our Clubs
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/blogs" onClick={handleMenuItemClick}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleMenuItemClick}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Apply Now Button and ApplyForm */}
        <div
          className="apply-now-container"
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          {!isFormVisible && (
            <>
              <button
                className="apply-now-button red"
                onClick={toggleFormVisibility}
              >
                Apply Now
              </button>
            </>
          )}

          {/* Conditionally Render the Form */}
          {isFormVisible && <ApplyForm closeApplyForm={closeApplyForm} />}
        </div>
      </header>
    </>
  );
}

export default Header;
