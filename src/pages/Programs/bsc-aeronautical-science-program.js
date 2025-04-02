import React from "react";
import { Accordion, Button, Card } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Recruiters from "./component/Recruiters";
import CampusSlider from "./component/CampusSlider";
import LeadForm from "./component/LeadForm";
import Testimonials from "../../components/Testimonials/Testimonials";
import Feedback from "../Home/component/Feedback";
import CampusGallery from "../Home/component/FetauredEventsSection";

const MBAcoursedetail = () => {
  const page1Campuses = [
    {
      name: "IIMT University, Meerut",
      program: "B.Sc - Aeronautical Science | UGC approved",
      specialisations: 6,
      certifications: 10,
      fees: "₹ 3.40 Lacs",
      images: [
        "assets/placement/iimt1.jpg",
        "assets/placement/iimt2.jpg",
        "assets/placement/iimt3.jpg",
      ],
    },
  ];
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #fdfbf9, #f4ebdd)",
      }}
    >
      <section className="space position-relative">
        <div
          className="bg-img"
          style={{
            backgroundImage: "url('../assets/img/update1/bg/bg_overlay_1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img src="../assets/img/update1/bg/bg_overlay_1.png" alt="overlay" />
        </div>
        <div
          className="container text-center"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
          }}
        >
          <nav aria-label="breadcrumb">
            <h1
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#fff",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              B.Sc - Aeronautical Science
            </h1>
            <ol
              style={{
                listStyle: "none",
                padding: "0",
                margin: "0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "16px",
              }}
            >
              <li
                style={{
                  marginRight: "10px",
                }}
              >
                <Link
                  to="/"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Home
                </Link>
              </li>
              <li
                style={{
                  marginRight: "10px",
                  color: "#fff",
                }}
              >
                <i className="fas fa-chevron-right"></i>
              </li>
              <li
                style={{
                  marginRight: "10px",
                }}
              >
                <Link
                  to="/programs"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Programs
                </Link>
              </li>
              <li
                style={{
                  marginRight: "10px",
                  color: "#fff",
                }}
              >
                <i className="fas fa-chevron-right"></i>
              </li>
              <li
                style={{
                  marginRight: "10px",
                }}
              >
                <a
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Aeronautical Science
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <div className="our-promise-container">
        <div className="our-promise-content">
          <div className="our-promise-text">
            <p className="promise-title">OUR PROMISE</p>
            <h2 className="main-heading">
              Kickstart your career with{" "}
              <span className="highlight">diverse job opportunities</span>
            </h2>
            <div className="graduate-img">
              <img src="../assets/img/g.png" alt="Graduate" />
            </div>
            <Link
              style={{ marginTop: "-110px", marginLeft: "40px" }}
              to="/contact"
              className="th-btn style5"
            >
              Get in Touch <i className="fas fa-long-arrow-right ms-2" />
            </Link>
          </div>

          <div className="job-stats">
            <div className="stat-box">
              <strong>150+</strong>
              <p>Varied job profiles</p>
            </div>
            <div className="stat-box">
              <strong>1100+</strong>
              <p>Unique job opportunities</p>
            </div>
            <div className="stat-box">
              <strong>28.5%</strong>
              <p>Students with 2+ job offers</p>
            </div>
            <Link
              style={{ marginLeft: "40px" }}
              to="../../assets/img/AEROSPACE.pdf"
              className="th-btn style4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-long-arrow-down ms-2" />
              Download Brochure
            </Link>
          </div>
        </div>
      </div>

      <section className="product-details space-top space-extra-bottom">
        <div className="container">
          <div className="row gx-60">
            <div className="col-lg-6">
              <div className="product-big-img">
                <div className="img">
                  <img
                    src="../assets/program/aharadaedu1.JPG"
                    alt="MBA in FinTech Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <h3>Course Overview</h3>
              <div className="product-about">
                <p className="text">
                  Our B.Sc in Aeronautical Science is designed to provide
                  students with a comprehensive understanding of aviation
                  technologies, aerodynamics, aerospace engineering, and the
                  necessary skills to innovate and manage advanced aviation
                  systems. This program equips graduates with the expertise to
                  lead and drive innovation in the global aviation and aerospace
                  industries.
                </p>

                <p className="text">
                  <strong>Duration of the Course:</strong> The B.Sc in
                  Aeronautical Science is a 3-year full-time program that
                  combines theoretical learning with practical experience.
                  Students will gain hands-on exposure to flight mechanics,
                  aerodynamics, aerospace systems, and aviation safety,
                  preparing them for key roles in aviation, aerospace
                  engineering, and the aviation research sector.
                </p>

                <p className="text">
                  <strong>Eligibility Requirements:</strong> Applicants must
                  have completed higher secondary education (12th grade) with a
                  strong background in mathematics and physics from a recognized
                  board. While prior experience in aviation or engineering is
                  beneficial, it is not a mandatory requirement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div
        className="feature-area fa2 py-140"
        style={{ backgroundColor: "#f7f7f7", paddingBottom: "40px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div
                className="site-heading text-center"
                style={{ marginTop: "50px" }}
              >
                <h2
                  className="site-title"
                  style={{ fontSize: "2rem", fontWeight: "600" }}
                >
                  Why Choose{" "}
                  <span style={{ color: "#d89e37" }}>
                    Aeronautical Science - B.Sc
                  </span>
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#555",
                  }}
                >
                  Explore the fascinating world of aviation and aerospace in the
                  B.Sc in Aeronautical Science program. This program prepares
                  you for a successful career in aviation, aerospace
                  engineering, and flight mechanics, empowering you to innovate
                  and lead in the dynamic field of aviation.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {[
              {
                id: "01",
                title: "Comprehensive Aeronautical Science Curriculum",
                description:
                  "Gain a strong foundation in aerodynamics, flight mechanics, aerospace systems, and aviation safety, combining theoretical knowledge with practical experience.",
              },
              {
                id: "02",
                title: "Industry Expert Faculty",
                description:
                  "Learn from leading experts in aviation and aerospace engineering, who provide guidance in various disciplines, including aircraft design and aerodynamics.",
              },
              {
                id: "03",
                title: "Internship & Practical Experience",
                description:
                  "Participate in internships with leading aviation companies, aerospace engineering firms, and aviation research organizations to gain hands-on experience in the aviation industry.",
              },
              {
                id: "04",
                title: "Global Career Opportunities in Aeronautics",
                description:
                  "Unlock global career opportunities with aviation companies, aerospace research centers, and defense industries shaping the future of aviation and aerospace technology.",
              },
            ].map((item) => (
              <div className="col-md-6 col-lg-3 d-flex" key={item.id}>
                <div
                  className="feature-item w-100 d-flex flex-column"
                  style={{
                    padding: "20px",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    flexGrow: 1,
                  }}
                >
                  <span
                    className="count"
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      color: "#d89e37",
                    }}
                  >
                    {item.id}
                  </span>
                  <div className="feature-content">
                    <h4
                      className="feature-title"
                      style={{ fontSize: "1.25rem", fontWeight: "600" }}
                    >
                      {item.title}
                    </h4>
                    <p style={{ fontSize: "1rem", flexGrow: 1 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="department-single-area"
        style={{ paddingTop: "40px", paddingBottom: "40px" }}
      >
        <div className="container">
          <div className="department-single-wrapper">
            <div className="row">
              <div className="col-xl-4 col-lg-4">
                <div className="department-sidebar">
                  <div
                    style={{
                      backgroundColor: "white",
                      borderRadius: "16px",
                      padding: "24px",
                      display: "grid",
                      gap: "16px",
                      marginBottom: "50px",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <h3
                      style={{
                        color: "#d89e37",
                        fontWeight: "bold",
                        fontSize: "30px",
                      }}
                    >
                      Talk to Our Counsellor
                    </h3>
                    <LeadForm />
                  </div>
                  <div
                    className="widget widget_banner"
                    data-overlay="theme"
                    data-opacity={9}
                  >
                    <div className="widget-banner">
                      <h4 className="title text-white">
                        Need Help? We Are Here To Help You
                      </h4>
                      <div className="">
                        <img src="../assets/img/university/02.jpg" alt="img" />
                      </div>
                      <h5 className="subtitle mt-4">You Get Admission</h5>
                      <a href="tel:+91-7303381360" className="link">
                        +91-7303381360
                      </a>
                      <Link to="/apply-now" className="th-btn style7">
                        Apply Now <i className="far fa-arrow-right ms-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8">
                <div className="department-details">
                  <div className="department-details-img mb-30">
                    <img
                      src="../assets/program/aharadaedu3.JPG"
                      alt="Fine Arts"
                      style={{
                        width: "100%",
                        height: "565px",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                  <div className="department-details">
                    <h3
                      className="mb-20"
                      style={{ fontSize: "2rem", fontWeight: "bold" }}
                    >
                      Aeronautical Science - B.Sc
                    </h3>
                    <p
                      className="mb-20"
                      style={{ fontSize: "1rem", lineHeight: "1.6" }}
                    >
                      The B.Sc in Aeronautical Science program is designed to
                      provide students with a comprehensive understanding of
                      aviation technologies, flight mechanics, aerodynamics, and
                      aerospace engineering. The program prepares you for a
                      successful career in aviation, equipping you with the
                      skills to innovate and lead in the aviation industry and
                      aerospace research.
                    </p>
                    <p
                      className="mb-20"
                      style={{ fontSize: "1rem", lineHeight: "1.6" }}
                    >
                      This program focuses on developing technical skills in
                      aircraft design, flight operations, aerodynamics, and
                      aviation safety. Students will gain hands-on experience
                      and learn from industry professionals in the field of
                      Aeronautical Science.
                    </p>

                    <div style={{ marginTop: "30px" }}>
                      <div>
                        <h3
                          className="mb-3"
                          style={{ fontSize: "1.75rem", fontWeight: "bold" }}
                        >
                          How To Succeed in Aeronautical Science - B.Sc
                        </h3>
                        <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                          To excel in the Aeronautical Science - B.Sc program,
                          focus on developing a deep understanding of aviation
                          technologies, flight principles, and aerospace
                          engineering. Here are some tips to guide your
                          preparation:
                        </p>
                      </div>
                      <ul
                        className="department-single-list"
                        style={{ listStyle: "none", paddingLeft: "0" }}
                      >
                        <li
                          style={{
                            paddingLeft: "20px",
                            marginBottom: "10px",
                            fontSize: "1rem",
                          }}
                        >
                          <i
                            className="far fa-check"
                            style={{ marginRight: "10px" }}
                          />
                          Understand the fundamentals of aerodynamics, flight
                          mechanics, and aircraft design.
                        </li>
                        <li
                          style={{
                            paddingLeft: "20px",
                            marginBottom: "10px",
                            fontSize: "1rem",
                          }}
                        >
                          <i
                            className="far fa-check"
                            style={{ marginRight: "10px" }}
                          />
                          Develop strong technical and analytical skills to
                          solve complex aviation problems.
                        </li>
                        <li
                          style={{
                            paddingLeft: "20px",
                            marginBottom: "10px",
                            fontSize: "1rem",
                          }}
                        >
                          <i
                            className="far fa-check"
                            style={{ marginRight: "10px" }}
                          />
                          Participate in aviation-related internships,
                          workshops, and practical training with aviation
                          companies.
                        </li>
                        <li
                          style={{
                            paddingLeft: "20px",
                            marginBottom: "10px",
                            fontSize: "1rem",
                          }}
                        >
                          <i
                            className="far fa-check"
                            style={{ marginRight: "10px" }}
                          />
                          Collaborate with peers and mentors in aviation
                          research projects and real-world applications.
                        </li>
                        <li
                          style={{
                            paddingLeft: "20px",
                            marginBottom: "10px",
                            fontSize: "1rem",
                          }}
                        >
                          <i
                            className="far fa-check"
                            style={{ marginRight: "10px" }}
                          />
                          Stay updated with the latest trends in aerospace
                          technologies and aviation safety regulations.
                        </li>
                      </ul>
                    </div>
                    <div className="my-4">
                      <h3
                        className="mb-3"
                        style={{ fontSize: "1.75rem", fontWeight: "bold" }}
                      >
                        Admission in Aeronautical Science - B.Sc
                      </h3>
                      <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                        The admission process for the B.Sc in Aeronautical
                        Science includes an entrance exam, interview, and a
                        review of academic qualifications. Candidates must
                        demonstrate strong proficiency in physics and
                        mathematics, along with a keen interest in aviation.
                        Prepare to showcase your academic potential and passion
                        for aerospace and aviation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* How to Apply Section */}
        <div>
          <div
            className="container"
            style={{
              background: "linear-gradient(to bottom, #fdfbf9, #fdfbf9)",
              padding: "50px",
            }}
          >
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div
                  className="content-info"
                  style={{
                    padding: "0px",
                    borderRadius: "8px",
                  }}
                >
                  <div className="site-heading mb-3">
                    <h2
                      className="site-title"
                      style={{ fontSize: "2rem", fontWeight: "600" }}
                    >
                      Details About{" "}
                      <span style={{ color: "#d89e37" }}>How To Apply</span>{" "}
                      B.Sc - Aeronautical Science
                    </h2>
                  </div>
                  <p
                    className="content-text"
                    style={{ fontSize: "1rem", lineHeight: "1.6" }}
                  >
                    Applying for the B.Sc in Aeronautical Science is an exciting
                    and challenging opportunity to dive into the world of
                    aviation and aerospace technology. This program will provide
                    you with the knowledge and skills necessary to pursue a
                    career in aviation, from aircraft design to flight
                    operations and air traffic control. Follow the steps below
                    to submit your application correctly and get ready to take
                    flight in this dynamic field.
                  </p>

                  <p
                    className="content-text mt-2"
                    style={{ fontSize: "1rem", lineHeight: "1.6" }}
                  >
                    The program encompasses various aspects of aeronautical
                    science, including aircraft systems, flight dynamics,
                    aerodynamics, aviation safety, and air traffic control. It
                    prepares you for roles in aviation companies, air traffic
                    management, aerospace engineering, and aviation safety
                    organizations. Below are the steps you need to follow to
                    apply and ensure a smooth application process.
                  </p>
                </div>
              </div>

              <div
                className="content-img wow fadeInRight"
                style={{
                  padding: "0px",
                  borderRadius: "8px",
                }}
              >
                <img
                  src="../assets/program/application.svg"
                  alt="Fine Arts Application"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Apply Details Section */}
        <div
          className="apply-details"
          style={{ marginTop: "50px", marginBottom: "30px" }}
        >
          <div className="container">
            <div className="details-wrapper">
              <div className="row mb-8">
                <div className="col-lg-6">
                  <div className="career-scope">
                    <h3
                      className="mb-3"
                      style={{ fontSize: "1.75rem", fontWeight: "600" }}
                    >
                      Career Prospects and Future Scope for B.Sc - Aeronautical
                      Science
                    </h3>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      Completing a B.Sc in Aeronautical Science offers exciting
                      career opportunities in the aviation and aerospace
                      industries. This program prepares graduates for roles in
                      aircraft design, aviation safety, air traffic control,
                      flight operations, and more. Below are some potential
                      career paths:
                    </p>
                    <ul
                      style={{
                        paddingLeft: "20px",
                        fontSize: "1rem",
                        lineHeight: "1.6",
                      }}
                    >
                      <li style={{ marginBottom: "10px" }}>
                        Aerospace Engineer
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Flight Operations Officer
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Air Traffic Controller
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Aircraft Maintenance Engineer
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Aviation Safety Expert
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Aerodynamics Specialist
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Aerospace Research Scientist
                      </li>
                    </ul>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      The field of aeronautical science continues to grow, with
                      increasing opportunities in aircraft design, aviation
                      safety, aerospace engineering, and flight operations.
                      Graduates with a B.Sc in Aeronautical Science will be
                      prepared for key roles in the aviation and aerospace
                      industries, contributing to advancements in aviation
                      technology and safety.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="details-right">
                    <h3
                      className="mb-3"
                      style={{ fontSize: "1.75rem", fontWeight: "600" }}
                    >
                      Application Requirements and Support for B.Sc -
                      Aeronautical Science
                    </h3>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      To successfully apply for the B.Sc in Aeronautical
                      Science, ensure that you have the following documents:
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      <span style={{ fontWeight: "bold" }}>
                        1. Higher Secondary Education (12th):
                      </span>{" "}
                      From a recognized board, preferably with a background in
                      science (Physics, Mathematics, Chemistry).
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      <span style={{ fontWeight: "bold" }}>
                        2. Statement of Purpose (SOP):
                      </span>{" "}
                      Explaining your motivation for pursuing the B.Sc in
                      Aeronautical Science and your long-term goals in aviation
                      and aerospace.
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      <span style={{ fontWeight: "bold" }}>
                        3. Identification Proof:
                      </span>{" "}
                      A valid government-issued ID such as a passport or
                      national ID card.
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      <span style={{ fontWeight: "bold" }}>
                        4. Academic Transcripts:
                      </span>{" "}
                      Provide your high school (12th grade) marks or equivalent
                      certification.
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      <span style={{ fontWeight: "bold" }}>
                        5. Financial Support:
                      </span>{" "}
                      Available for eligible candidates, including need-based
                      aid, scholarships, and loan programs to assist with
                      tuition fees.
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      Please ensure that all documents are in order to avoid any
                      delays in the application process. Explore the available
                      financial support options to assist with your tuition fees
                      and related expenses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Recruiters />
        <div className="scholarship-content">
          <div className="scholarship-img"></div>
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ marginBottom: "15px" }}>
              Aeronautical Science and Engineering Program
            </h3>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                marginBottom: "30px",
              }}
            >
              Our B.Sc. in Aeronautical Science program provides students with
              in-depth knowledge and practical experience in the field of
              aerospace engineering. The program covers everything from aircraft
              design and propulsion systems to navigation, aviation safety, and
              air traffic control, equipping students with the skills necessary
              to thrive in the aerospace industry.
            </p>
          </div>
          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ marginBottom: "30px" }}>Our Program Highlights</h3>
            <div className="row">
              <div className="col-lg-4">
                <div className="scholarship-item">
                  <h4>Aerospace Engineering Fundamentals</h4>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    Gain a solid foundation in aerodynamics, aircraft
                    structures, materials science, and propulsion systems, which
                    are essential for designing and analyzing aerospace systems.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="scholarship-item">
                  <h4>Flight Simulation and Control</h4>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    Learn about flight dynamics, control systems, and the use of
                    advanced flight simulators to study real-world aeronautical
                    applications and aviation technology.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="scholarship-item">
                  <h4>Aviation Safety and Regulations</h4>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    Understand the principles of aviation safety, air traffic
                    control, and regulatory frameworks governing the aviation
                    and aerospace industries to ensure safe and efficient
                    operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Mentorship and Program Details */}
        <div style={{ paddingBottom: "80px" }}>
          <div className="container">
            <div className="details-wrapper">
              <div className="row">
                <div className="col-lg-6">
                  <div className="details-item">
                    <h3 style={{ marginBottom: "15px" }}>
                      Guidance and Support
                    </h3>
                    <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                      The B.Sc. in Aeronautical Science program provides
                      students with personalized mentorship from industry
                      experts, experienced engineers, and aerospace
                      professionals. Our team of mentors will guide you through
                      various aspects of the aeronautical field, helping you
                      develop a successful career in aviation, aerospace
                      engineering, or related industries.
                    </p>
                    <Link
                      to="/apply-now"
                      style={{
                        backgroundColor: "#d89e37",
                        color: "#fff",
                        padding: "10px 20px",
                        textDecoration: "none",
                        borderRadius: "5px",
                        fontSize: "16px",
                        display: "inline-block",
                      }}
                    >
                      Apply for the Program{" "}
                      <i className="fas fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="details-item">
                    <h3 style={{ marginBottom: "15px" }}>
                      Program Requirements
                    </h3>

                    <ul
                      style={{
                        marginTop: "10px",
                        listStyleType: "none",
                        paddingLeft: "0",
                      }}
                    >
                      <li style={{ fontSize: "16px" }}>
                        <i className="fas fa-check-circle" /> Higher Secondary
                        (12th) education from a recognized board, preferably
                        with a background in physics, mathematics, or
                        engineering-related fields.
                      </li>
                      <li style={{ fontSize: "16px" }}>
                        <i className="fas fa-check-circle" /> A strong
                        understanding of mathematics and physics.
                      </li>
                      <li style={{ fontSize: "16px" }}>
                        <i className="fas fa-check-circle" /> Statement of
                        Purpose (SOP) outlining your passion for aerospace and
                        your career goals in the field of aeronautical science.
                      </li>
                      <li style={{ fontSize: "16px" }}>
                        <i className="fas fa-check-circle" /> Valid
                        government-issued ID proof.
                      </li>
                      <li style={{ fontSize: "16px" }}>
                        <i className="fas fa-check-circle" /> Recent
                        passport-sized photographs.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CampusGallery />
      <CampusSlider campuses={page1Campuses} />

      <div className="programfaq-faq-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="programfaq-faq-right">
                <div className="programfaq-site-heading mb-4">
                  <h2 className="programfaq-site-title my-3">
                    General{" "}
                    <span className="programfaq-highlighted-text">
                      Frequently
                    </span>{" "}
                    Asked Questions
                  </h2>
                </div>
                <p className="programfaq-faq-description">
                  The B.Sc. in Aeronautical Science program provides students
                  with the essential skills and knowledge needed for a
                  successful career in the aerospace industry. The program
                  covers aerodynamics, aircraft design, aviation safety, and
                  flight dynamics, among other topics. Learn more about the
                  application process, eligibility, and program details here.
                </p>
                <p className="programfaq-faq-description">
                  Our goal is to train the next generation of aerospace
                  engineers and aviation professionals who will shape the future
                  of aviation technology and contribute to the industry’s growth
                  and safety standards.
                </p>

                <Link to="/contact" className="mt-2 programfaq-faq-button">
                  Have Any Question? <i className="fas fa-arrow-right-long" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <Accordion
                defaultActiveKey="0"
                className="programfaq-faq-accordion"
              >
                <Card className="programfaq-faq-card">
                  <Accordion.Item eventKey="4">
                    <Accordion.Header className="programfaq-faq-header">
                      <span>
                        <i
                          className="fas fa-rocket"
                          style={{ color: "#d89e37" }}
                        />
                      </span>
                      What Career Opportunities After Completing the Program?
                    </Accordion.Header>
                    <Accordion.Body className="programfaq-faq-body">
                      Graduates of the B.Sc. in Aeronautical Science program can
                      pursue careers in aerospace engineering, aircraft
                      maintenance, air traffic control, flight testing, aviation
                      safety, and aircraft design. Career paths may also include
                      working in aviation operations, drone technology, or in
                      aviation regulatory bodies.
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <Card className="programfaq-faq-card">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="programfaq-faq-header">
                      <span>
                        <i
                          className="fas fa-paper-plane"
                          style={{ color: "#d89e37" }}
                        />
                      </span>
                      How Can I Apply for the B.Sc. in Aeronautical Science
                      Program?
                    </Accordion.Header>
                    <Accordion.Body className="programfaq-faq-body">
                      You can apply online by filling out the application form
                      available on our website. Make sure to submit all required
                      documents, including your academic transcripts, a
                      Statement of Purpose (SOP), and any additional
                      documentation required by the program.
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <Card className="programfaq-faq-card">
                  <Accordion.Item eventKey="5">
                    <Accordion.Header className="programfaq-faq-header">
                      <span>
                        <i
                          className="fas fa-clock"
                          style={{ color: "#d89e37" }}
                        />
                      </span>
                      What is the Duration of the B.Sc. in Aeronautical Science
                      Program?
                    </Accordion.Header>
                    <Accordion.Body className="programfaq-faq-body">
                      The B.Sc. in Aeronautical Science is a 3-year full-time
                      program that combines theoretical learning with practical
                      experience in aviation, aerospace technology, and flight
                      dynamics.
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <Card className="programfaq-faq-card">
                  <Accordion.Item eventKey="6">
                    <Accordion.Header className="programfaq-faq-header">
                      <span>
                        <i
                          className="fas fa-users-cog"
                          style={{ color: "#d89e37" }}
                        />
                      </span>
                      Will I Get Internship Opportunities During the Program?
                    </Accordion.Header>
                    <Accordion.Body className="programfaq-faq-body">
                      Yes, the program offers internship opportunities with
                      leading aerospace companies, aviation agencies, and air
                      traffic control services. These internships will provide
                      hands-on experience in areas such as aircraft maintenance,
                      aerospace engineering, and aviation safety.
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <Feedback />
      <Testimonials />
    </div>
  );
};

export default MBAcoursedetail;
