import React from "react";
import { Accordion, Button, Card } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Recruiters from "./component/Recruiters";
import CampusSlider from "./component/CampusSlider";
import LeadForm from "./component/LeadForm";
import Testimonials from "../../components/Testimonials/Testimonials";
import Feedback from "../Home/component/Feedback";

const MBAcoursedetail = () => {
  const page1Campuses = [
    {
      name: "Vidya Knowledge Park",
      program: "BBA Program | UGC recognised",
      specialisations: 3,
      certifications: 10,
      fees: "₹ 3.88 Lacs",
      images: [
        "../assets/placement/vidya1.jpg",
        "../assets/placement/vidya1.jpg",
        "../assets/placement/vidya1.jpg",
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
              BCA - Internet of Things (IoT)
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
                  Internet of Things (IoT)
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
                  Our BCA in Internet of Things (IoT) is designed to provide
                  students with a comprehensive understanding of IoT
                  technologies, including smart devices, sensors, network
                  protocols, cloud computing, and data analytics. This program
                  prepares graduates to take on leadership roles in the rapidly
                  evolving IoT sector, driving innovation and transformation
                  across industries.
                </p>

                <p className="text">
                  <strong>Duration of the Course:</strong> The BCA in Internet
                  of Things (IoT) is a 3-year full-time program that combines
                  theoretical knowledge with practical experience in IoT
                  applications, sensor networks, and embedded systems, preparing
                  students for various roles in IoT development, smart device
                  management, and data analysis.
                </p>

                <p className="text">
                  <strong>Eligibility Requirements:</strong> To apply for this
                  program, you must have completed higher secondary education
                  (12th grade) from a recognized board. While prior experience
                  in electronics, programming, or networking is beneficial, it
                  is not mandatory.
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
                    BCA - Internet of Things (IoT)
                  </span>
                </h2>
                <p
                  style={{ fontSize: "1rem", lineHeight: "1.6", color: "#555" }}
                >
                  Gain specialized knowledge and technical skills in the rapidly
                  growing field of IoT. This program prepares you for roles in
                  smart device development, sensor networks, data analytics, and
                  IoT infrastructure management.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {[
              {
                id: "01",
                title: "Comprehensive IoT Curriculum",
                description:
                  "Develop expertise in IoT systems, smart devices, cloud computing, data analysis, and sensor networks.",
              },
              {
                id: "02",
                title: "Industry Expert Faculty",
                description:
                  "Learn from experienced professionals and thought leaders in the IoT field who bring real-world insights.",
              },
              {
                id: "03",
                title: "Internship & Practical Experience",
                description:
                  "Gain hands-on experience through internships with leading IoT companies, contributing to real-time projects.",
              },
              {
                id: "04",
                title: "Global Career Opportunities in IoT",
                description:
                  "Unlock career opportunities with top tech companies, startups, and IoT solution providers worldwide.",
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
                      alt="Aviation Management"
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
                      BCA - Internet of Things (IoT)
                    </h3>
                    <p
                      className="mb-20"
                      style={{ fontSize: "1rem", lineHeight: "1.6" }}
                    >
                      The BCA in Internet of Things (IoT) provides students with
                      a comprehensive understanding of IoT technologies,
                      including smart devices, sensors, data analytics, and
                      cloud computing. The program covers the development and
                      management of IoT systems, IoT protocols, and applications
                      in various sectors such as healthcare, smart cities, and
                      manufacturing. Graduates are equipped to take on technical
                      and managerial roles in the rapidly growing IoT industry.
                    </p>
                    <p
                      className="mb-20"
                      style={{ fontSize: "1rem", lineHeight: "1.6" }}
                    >
                      The program focuses on the integration of devices,
                      networks, and data to create smart solutions. Students
                      will gain practical insights into designing, implementing,
                      and managing IoT solutions, while exploring the latest
                      trends in automation, artificial intelligence, and machine
                      learning as applied to IoT systems.
                    </p>

                    <div style={{ marginTop: "30px" }}>
                      <div>
                        <h3
                          className="mb-3"
                          style={{ fontSize: "1.75rem", fontWeight: "bold" }}
                        >
                          How To Succeed in BCA - Internet of Things (IoT)
                        </h3>
                        <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                          To excel in the BCA - Internet of Things (IoT)
                          program, focus on understanding the complexities of
                          sensor networks, cloud computing, and data analysis.
                          Here are some tips to guide your preparation:
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
                          Study the fundamentals of IoT devices, networks, and
                          communication protocols.
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
                          Understand cloud computing, data storage, and
                          analytics as applied to IoT systems.
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
                          Gain knowledge of security measures in IoT networks
                          and the importance of privacy.
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
                          Enhance programming skills to work with embedded
                          systems and IoT platforms.
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
                          Stay updated with the latest IoT trends, AI
                          integration, and machine learning applications in IoT.
                        </li>
                      </ul>
                    </div>
                    <div className="my-4">
                      <h3
                        className="mb-3"
                        style={{ fontSize: "1.75rem", fontWeight: "bold" }}
                      >
                        Admission in BCA - Internet of Things (IoT)
                      </h3>
                      <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                        The admission process for the BCA - Internet of Things
                        (IoT) program includes an entrance exam followed by a
                        personal interview. Be prepared to showcase your
                        interest in IoT technologies and demonstrate your
                        academic potential. Ensure you meet the eligibility
                        requirements and highlight your skills in programming,
                        electronics, or data science.
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
                      <span style={{ color: "#d89e37" }}>How To Apply</span> BCA
                      - Internet of Things (IoT)
                    </h2>
                  </div>
                  <p
                    className="content-text"
                    style={{ fontSize: "1rem", lineHeight: "1.6" }}
                  >
                    Applying for the BCA in Internet of Things (IoT) is a
                    structured process designed to ensure you have the necessary
                    skills and qualifications to thrive in the rapidly growing
                    IoT industry. Follow the steps below to submit your
                    application correctly and on time.
                  </p>

                  <p
                    className="content-text mt-2"
                    style={{ fontSize: "1rem", lineHeight: "1.6" }}
                  >
                    The program covers IoT technologies, including smart
                    devices, sensor networks, cloud computing, and data
                    analytics, preparing you for roles in smart cities,
                    healthcare, manufacturing, and various other IoT-driven
                    sectors. Below are the steps you need to follow to apply and
                    ensure a smooth application process.
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
                  alt="Aviation Application"
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
                      Career Prospects and Future Scope for BCA - Internet of
                      Things (IoT)
                    </h3>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      Completing a BCA in Internet of Things (IoT) opens doors
                      to a wide range of career opportunities in the rapidly
                      growing IoT sector. Graduates can work in various roles
                      within IoT development, smart device manufacturing, data
                      analytics, cloud computing, and system integration. Below
                      are some potential career paths:
                    </p>
                    <ul
                      style={{
                        paddingLeft: "20px",
                        fontSize: "1rem",
                        lineHeight: "1.6",
                      }}
                    >
                      <li style={{ marginBottom: "10px" }}>
                        IoT Solutions Architect
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Embedded Systems Engineer
                      </li>
                      <li style={{ marginBottom: "10px" }}>IoT Data Analyst</li>
                      <li style={{ marginBottom: "10px" }}>
                        Smart City Infrastructure Manager
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        IoT Network Engineer
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        IoT Security Specialist
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Cloud IoT Developer
                      </li>
                    </ul>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      The IoT industry is rapidly expanding with advancements in
                      smart cities, healthcare solutions, and industrial
                      automation. Graduates with a BCA in Internet of Things
                      (IoT) will be prepared to drive innovation, optimize
                      systems, and lead organizations in these cutting-edge
                      sectors.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="details-right">
                    <h3
                      className="mb-3"
                      style={{ fontSize: "1.75rem", fontWeight: "600" }}
                    >
                      Application Requirements and Support for BCA - Internet of
                      Things (IoT)
                    </h3>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      To successfully apply for the BCA in Internet of Things
                      (IoT), ensure that you have the following documents:
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      <span style={{ fontWeight: "bold" }}>
                        1. Higher Secondary Education (12th):
                      </span>
                      From a recognized board, preferably with a background in
                      science, technology, or engineering.
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      <span style={{ fontWeight: "bold" }}>
                        2. Work Experience (Optional):
                      </span>
                      Experience in technology, electronics, programming, or a
                      related field is preferred but not mandatory.
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      <span style={{ fontWeight: "bold" }}>
                        3. Identification Proof:
                      </span>
                      A valid government-issued ID such as a passport or
                      national ID card.
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      <span style={{ fontWeight: "bold" }}>
                        4. Statement of Purpose (SOP):
                      </span>
                      Explaining your motivation for pursuing the BCA in
                      Internet of Things (IoT) program and your long-term career
                      goals.
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      <span style={{ fontWeight: "bold" }}>
                        5. Financial Support:
                      </span>
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
              Mentor and Guest Speaker Program
            </h3>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                marginBottom: "30px",
              }}
            >
              Our BCA in Internet of Things (IoT) program offers unique
              opportunities for students to interact with industry experts.
              Through the Mentor and Guest Speaker program, students gain
              valuable insights into IoT technologies, smart devices, sensor
              networks, and more. Students will have the opportunity to network
              with professionals, gain guidance on their career journey, and
              explore emerging trends in the IoT sector.
            </p>
          </div>
          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ marginBottom: "30px" }}>Our Program Highlights</h3>
            <div className="row">
              <div className="col-lg-4">
                <div className="scholarship-item">
                  <h4>Industry Mentors</h4>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    Our mentors include leading professionals from the IoT,
                    tech, and electronics sectors. They provide one-on-one
                    guidance to help you shape your career in the rapidly
                    growing IoT field.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="scholarship-item">
                  <h4>Guest Lecturers</h4>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    Learn from industry experts through guest lectures,
                    workshops, and webinars. Leading professionals in the IoT
                    field will share their knowledge and experiences.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="scholarship-item">
                  <h4>IoT Innovation Hub</h4>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    Join our IoT Innovation Hub, where students collaborate on
                    projects focusing on IoT solutions for smart cities,
                    healthcare, automation, and more, contributing to real-world
                    innovations in the IoT space.
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
                      The BCA in Internet of Things (IoT) provides students with
                      personalized career guidance, mentorship from experienced
                      professionals, and hands-on learning opportunities. Our
                      team of mentors will help you identify the best career
                      paths and assist you in networking within the IoT, tech,
                      and electronics industries.
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
                        with a background in science or technology.
                      </li>
                      <li style={{ fontSize: "16px" }}>
                        <i className="fas fa-check-circle" /> Experience in
                        technology, electronics, or a related field (preferred
                        but not mandatory).
                      </li>
                      <li style={{ fontSize: "16px" }}>
                        <i className="fas fa-check-circle" /> Statement of
                        Purpose (SOP) explaining your motivation and career
                        goals in IoT and technology.
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
                  The BCA in Internet of Things (IoT) program equips students
                  with the necessary skills and knowledge to thrive in the
                  rapidly growing IoT industry. Learn everything you need to
                  know about the application process, eligibility, and program
                  details here.
                </p>
                <p className="programfaq-faq-description">
                  Our goal is to provide future leaders with the skills to
                  design, implement, and manage IoT solutions, driving
                  innovations in smart cities, healthcare, automation, and many
                  other IoT-driven sectors.
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
                {/* New FAQ Added */}
                <Card className="programfaq-faq-card">
                  <Accordion.Item eventKey="4">
                    <Accordion.Header className="programfaq-faq-header">
                      <span>
                        <i
                          className="fas fa-graduation-cap"
                          style={{ color: "#d89e37" }}
                        />
                      </span>
                      What Career Opportunities After Completing the Program?
                    </Accordion.Header>
                    <Accordion.Body className="programfaq-faq-body">
                      Graduates of the BCA in Internet of Things (IoT) program
                      can pursue careers in roles such as IoT solutions
                      architect, embedded systems engineer, smart city
                      infrastructure manager, cloud IoT developer, data analyst,
                      IoT security specialist, and IoT network engineer. You may
                      also explore opportunities in industries like healthcare,
                      manufacturing, automation, and smart home technologies.
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
                      How Can I Apply for the BCA in Internet of Things (IoT)
                      Program?
                    </Accordion.Header>
                    <Accordion.Body className="programfaq-faq-body">
                      You can apply online by filling out the application form
                      available on our website. Ensure that you submit all the
                      required documents, including your academic transcripts,
                      resume, and Statement of Purpose (SOP), which should
                      outline your interest in IoT and your future career goals
                      in the field of technology and innovation.
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
                      What is the Duration of the BCA in IoT Program?
                    </Accordion.Header>
                    <Accordion.Body className="programfaq-faq-body">
                      The BCA in Internet of Things (IoT) is a 3-year full-time
                      program designed to provide both theoretical knowledge and
                      practical experience in IoT systems, sensor networks,
                      cloud computing, and data analytics.
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
                      Yes, the program includes internship opportunities with
                      leading companies in the IoT and technology sectors,
                      allowing you to gain hands-on experience in developing,
                      managing, and optimizing IoT systems, data analytics, and
                      IoT applications. These internships help build
                      professional connections in the growing IoT industry.
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
