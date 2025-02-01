import React, { useState, useEffect } from "react";
import Modal from "react-modal";

import ApplyForm from "../ApplyForm/ApplyForm";
import { Link } from "react-router-dom";
import SocialIcon from "./SocialIcon";
import Marquee from "../../components/Marquee/Marquee";
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
                        <Link
                          to="mailto:info@aharadaedu.in"
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
                        </Link>

                        {/* Follow Us Text */}
                        <span className="social-title inline mr-4 text-gray-700">
                          Follow Us:
                        </span>

                        {/* Social Icons */}
                        <SocialIcon
                          to="https://www.facebook.com/aharadaeducation/"
                          iconClass="fab fa-facebook-f"
                          hoverColor="#3b5998" // Facebook Blue
                          label="Facebook"
                        />
                        <SocialIcon
                          to="https://www.instagram.com/aharadaeducation/"
                          iconClass="fab fa-instagram"
                          hoverColor="#E1306C" // Instagram Pink
                          label="Instagram"
                        />
                        <SocialIcon
                          to="https://www.twitter.com/"
                          iconClass="fab fa-twitter"
                          hoverColor="#1DA1F2" // Twitter Blue
                          label="Twitter"
                        />
                        <SocialIcon
                          to="https://www.linkedin.com/in/aharadaeducation/"
                          iconClass="fab fa-linkedin-in"
                          hoverColor="#0077B5" // LinkedIn Blue
                          label="LinkedIn"
                        />
                        <SocialIcon
                          to="https://www.youtube.com/@aharadaeducation498"
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
                      <nav
                        className={`main-menu ${
                          isMobileMenuOpen
                            ? "mobile-open"
                            : "d-none d-lg-inline-block"
                        }`}
                      >
                        <ul className="menu-list">
                          <li className="active">
                            <Link
                              to="/"
                              onMouseOver={(e) =>
                                (e.target.style.color = "#67676b")
                              }
                              onMouseOut={(e) => (e.target.style.color = "")}
                            >
                              Home
                            </Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link
                              to="#"
                              onMouseOver={(e) =>
                                (e.target.style.color = "#67676b")
                              }
                              onMouseOut={(e) => (e.target.style.color = "")}
                            >
                              About us
                            </Link>
                            <ul className="sub-menu">
                              <li>
                                <Link
                                  to="/about"
                                  onMouseOver={(e) =>
                                    (e.target.style.color = "#67676b")
                                  }
                                  onMouseOut={(e) =>
                                    (e.target.style.color = "")
                                  }
                                >
                                  About us
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/team-members"
                                  onMouseOver={(e) =>
                                    (e.target.style.color = "#67676b")
                                  }
                                  onMouseOut={(e) =>
                                    (e.target.style.color = "")
                                  }
                                >
                                  Our Team
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/faculty"
                                  onMouseOver={(e) =>
                                    (e.target.style.color = "#67676b")
                                  }
                                  onMouseOut={(e) =>
                                    (e.target.style.color = "")
                                  }
                                >
                                  Our Faculty
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/placement-team"
                                  onMouseOver={(e) =>
                                    (e.target.style.color = "#67676b")
                                  }
                                  onMouseOut={(e) =>
                                    (e.target.style.color = "")
                                  }
                                >
                                  Placement Team
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/events"
                                  onMouseOver={(e) =>
                                    (e.target.style.color = "#67676b")
                                  }
                                  onMouseOut={(e) =>
                                    (e.target.style.color = "")
                                  }
                                >
                                  Events
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/gallery"
                                  onMouseOver={(e) =>
                                    (e.target.style.color = "#67676b")
                                  }
                                  onMouseOut={(e) =>
                                    (e.target.style.color = "")
                                  }
                                >
                                  Gallery
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/guestLecturer"
                                  onMouseOver={(e) =>
                                    (e.target.style.color = "#67676b")
                                  }
                                  onMouseOut={(e) =>
                                    (e.target.style.color = "")
                                  }
                                >
                                  Guest Lecturer
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link
                              to="/programs"
                              onMouseOver={(e) =>
                                (e.target.style.color = "#67676b")
                              }
                              onMouseOut={(e) => (e.target.style.color = "")}
                            >
                              Programs
                            </Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link
                              to="#"
                              onMouseOver={(e) =>
                                (e.target.style.color = "#67676b")
                              }
                              onMouseOut={(e) => (e.target.style.color = "")}
                            >
                              Students
                            </Link>
                            <ul className="sub-menu">
                              <li>
                                <Link
                                  to="/noticeBoard"
                                  onMouseOver={(e) =>
                                    (e.target.style.color = "#67676b")
                                  }
                                  onMouseOut={(e) =>
                                    (e.target.style.color = "")
                                  }
                                >
                                  Notice
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/internship"
                                  onMouseOver={(e) =>
                                    (e.target.style.color = "#67676b")
                                  }
                                  onMouseOut={(e) =>
                                    (e.target.style.color = "")
                                  }
                                >
                                  Internship
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/placed-students"
                                  onMouseOver={(e) =>
                                    (e.target.style.color = "#67676b")
                                  }
                                  onMouseOut={(e) =>
                                    (e.target.style.color = "")
                                  }
                                >
                                  Placed Students
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/alumni"
                                  onMouseOver={(e) =>
                                    (e.target.style.color = "#67676b")
                                  }
                                  onMouseOut={(e) =>
                                    (e.target.style.color = "")
                                  }
                                >
                                  Alumni
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/grievance"
                                  onMouseOver={(e) =>
                                    (e.target.style.color = "#67676b")
                                  }
                                  onMouseOut={(e) =>
                                    (e.target.style.color = "")
                                  }
                                >
                                  Grievance
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/technicalclub"
                                  onMouseOver={(e) =>
                                    (e.target.style.color = "#67676b")
                                  }
                                  onMouseOut={(e) =>
                                    (e.target.style.color = "")
                                  }
                                >
                                  Technical Club
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link
                              to="/blogs"
                              onMouseOver={(e) =>
                                (e.target.style.color = "#67676b")
                              }
                              onMouseOut={(e) => (e.target.style.color = "")}
                            >
                              Blog
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/contact"
                              onMouseOver={(e) =>
                                (e.target.style.color = "#67676b")
                              }
                              onMouseOut={(e) => (e.target.style.color = "")}
                            >
                              Contact
                            </Link>
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
