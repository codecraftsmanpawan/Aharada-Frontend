import React, { useState, useEffect } from "react";
import Modal from "react-modal";

import ApplyForm from "../ApplyForm/ApplyForm";
import { Link } from "react-router-dom";
import SocialIcon from "./SocialIcon";
// import "./Header.css";
Modal.setAppElement("#root");

function Header() {
  const [isAcademicsModalOpen, setIsAcademicsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // New state for ApplyForm visibility
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Function to open the Programs modal

  // Function to close the Programs modal
  const closeAcademicsModal = () => {
    setIsAcademicsModalOpen(false);
  };

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

  return (
    <>
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
                      <a href="tel:+917303381359">IIMT University</a>
                    </li>
                    <li>
                      <i className="far fa-phone" />
                      <a href="tel:+917303381359">SAGE University</a>
                    </li>
                    <li>
                      <i className="far fa-phone" />
                      <a href="tel:+917303381359">Subharti University</a>
                    </li>
                    <li>
                      <i className="far fa-phone" />
                      <a href="tel:+917303381359">DBUU</a>
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
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "#4B5563")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "#6B7280")
                          }
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
                        <SocialIcon
                          href="https://www.facebook.com/aharadaeducation/"
                          iconClass="fab fa-facebook-f"
                          hoverColor="#3b5998" // Facebook Blue
                          label="Facebook"
                        />
                        <SocialIcon
                          href="https://www.instagram.com/aharadaeducation/"
                          iconClass="fab fa-instagram"
                          hoverColor="#E1306C" // Instagram Pink
                          label="Instagram"
                        />
                        <SocialIcon
                          href="https://www.twitter.com/"
                          iconClass="fab fa-twitter"
                          hoverColor="#1DA1F2" // Twitter Blue
                          label="Twitter"
                        />
                        <SocialIcon
                          href="https://www.linkedin.com/in/aharadaeducation/"
                          iconClass="fab fa-linkedin-in"
                          hoverColor="#0077B5" // LinkedIn Blue
                          label="LinkedIn"
                        />
                        <SocialIcon
                          href="https://www.youtube.com/@aharadaeducation498"
                          iconClass="fab fa-youtube"
                          hoverColor="#FF0000" // YouTube Red
                          label="YouTube"
                        />
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
                    <a href="/">
                      <img
                        src="../assets/logo.png"
                        width="160px"
                        alt="Aharadaedu"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="row">
                    <div className="col-auto">
                      <nav
                        className={`main-menu ${
                          isMobileMenuOpen
                            ? "mobile-open"
                            : "d-none d-lg-inline-block"
                        }`}
                      >
                        <ul className="menu-list">
                          <li className="active">
                            <Link to="/">Home</Link>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#">About us</a>
                            <ul className="sub-menu">
                              <li>
                                <Link to="/about">About us</Link>
                              </li>
                              <li>
                                <Link to="/faculty">Our Faculty</Link>
                              </li>
                              <li>
                                <Link to="/placement">Placement</Link>
                              </li>
                              <li>
                                <Link to="/events">Events</Link>
                              </li>
                              <li>
                                <Link to="/gallery">Gallery</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="/programs">Programs</a>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#">Students</a>
                            <ul className="sub-menu">
                              <li>
                                <Link to="/noticeBoard">Notice</Link>
                              </li>
                              <li>
                                <Link to="/internship">Internship</Link>
                              </li>
                              <li>
                                <Link to="/alumni">Alumni</Link>
                              </li>
                              <li>
                                <Link to="/grievance">Grievance</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/blogs">Blog</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                        </ul>
                      </nav>
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

        {/* Apply Now Button and ApplyForm */}
        <div
          className="apply-now-container"
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          {!isFormVisible && (
            <button
              className="apply-now-button red"
              onClick={toggleFormVisibility}
            >
              Apply Now
            </button>
          )}

          {/* Conditionally Render the Form */}
          {isFormVisible && <ApplyForm closeApplyForm={closeApplyForm} />}
        </div>
      </header>
    </>
  );
}

export default Header;
