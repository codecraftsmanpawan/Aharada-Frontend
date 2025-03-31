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
              MBA – HR & Aviation Management
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
                  HR & Aviation Management
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
                  Our MBA in HR & Aviation Management is designed to equip
                  students with comprehensive knowledge and skills in managing
                  human resources within the dynamic aviation industry. The
                  program blends core management principles with specialized
                  aviation training, addressing topics like organizational
                  behavior, recruitment strategies, employee engagement, airport
                  management, airline operations, and aviation safety.
                </p>

                <p className="text">
                  <strong>Duration of the Course:</strong> The MBA in HR &
                  Aviation Management is a 2-year full-time program that
                  combines theoretical knowledge with practical insights into
                  the aviation sector. The curriculum is curated to develop
                  strong managerial and leadership capabilities, preparing
                  students for roles in HR departments of airlines, airports,
                  and aviation-related businesses.
                </p>

                <p className="text">
                  <strong>Eligibility Requirements:</strong> Candidates must
                  hold a Bachelor’s degree in any discipline from a recognized
                  university. Those with prior experience or educational
                  background in management, human resources, or aviation will be
                  given preference during the selection process.
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
                    MBA - HR & Aviation Management
                  </span>
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#555",
                  }}
                >
                  Elevate your career by mastering HR strategies and aviation
                  operations. This program equips you with essential leadership
                  and management skills tailored for the fast-paced aviation
                  industry.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {[
              {
                id: "01",
                title: "Specialized HR Skills for Aviation",
                description:
                  "Gain in-depth knowledge in recruitment, talent management, and organizational development tailored to aviation environments.",
              },
              {
                id: "02",
                title: "Airport & Airline Operations",
                description:
                  "Understand the complexities of airport and airline management, including logistics, ground operations, and passenger services.",
              },
              {
                id: "03",
                title: "Leadership & Strategic Management",
                description:
                  "Develop leadership and strategic decision-making skills to drive growth and efficiency within aviation businesses.",
              },
              {
                id: "04",
                title: "Global Career in Aviation HR",
                description:
                  "Unlock career opportunities in airlines, airport authorities, ground handling companies, and aviation consultancies across the globe.",
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
                      MBA - HR & Aviation Management
                    </h3>
                    <p
                      className="mb-20"
                      style={{ fontSize: "1rem", lineHeight: "1.6" }}
                    >
                      The MBA in HR & Aviation Management is a specialized
                      postgraduate program that prepares students for managerial
                      and leadership roles in both human resource management and
                      the aviation industry. It focuses on equipping learners
                      with the knowledge and skills needed to navigate the
                      complex HR landscape while understanding the unique
                      operational challenges of the aviation sector.
                    </p>
                    <p
                      className="mb-20"
                      style={{ fontSize: "1rem", lineHeight: "1.6" }}
                    >
                      The curriculum emphasizes strategic HR practices, talent
                      acquisition, organizational behavior, airline and airport
                      operations, aviation safety, and regulatory compliance.
                      Students will gain practical insights through industry
                      exposure and case studies, preparing them to lead in HR
                      departments within airlines, airports, and other
                      aviation-related organizations.
                    </p>

                    <div style={{ marginTop: "30px" }}>
                      <div>
                        <h3
                          className="mb-3"
                          style={{ fontSize: "1.75rem", fontWeight: "bold" }}
                        >
                          How To Succeed in MBA - HR & Aviation Management
                        </h3>
                        <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                          To excel in the MBA - HR & Aviation Management
                          program, students should focus on both HR fundamentals
                          and aviation sector dynamics. Here are some tips for
                          success:
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
                          Master HR concepts such as talent management, employee
                          relations, and workforce planning.
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
                          Understand aviation-specific practices like airport
                          management, airline operations, and aviation safety
                          regulations.
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
                          Develop strong communication, leadership, and conflict
                          resolution skills to manage diverse teams effectively.
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
                          Stay updated with trends in aviation technology and
                          global HR practices to stay competitive in the job
                          market.
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
                          Participate in internships and industry projects to
                          gain practical experience and build a strong
                          professional network.
                        </li>
                      </ul>
                    </div>

                    <div className="my-4">
                      <h3
                        className="mb-3"
                        style={{ fontSize: "1.75rem", fontWeight: "bold" }}
                      >
                        Admission in MBA - HR & Aviation Management
                      </h3>
                      <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                        Admission to the MBA - HR & Aviation Management program
                        typically involves an entrance exam and/or personal
                        interview. Candidates should have a Bachelor’s degree in
                        any discipline from a recognized university. Preference
                        may be given to applicants with experience or academic
                        background in management, human resources, or aviation.
                        Strong communication skills, analytical thinking, and a
                        passion for the aviation sector will enhance your
                        selection prospects.
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
                      <span style={{ color: "#d89e37" }}>How To Apply</span> MBA
                      - HR & Aviation Management
                    </h2>
                  </div>
                  <p
                    className="content-text"
                    style={{ fontSize: "1rem", lineHeight: "1.6" }}
                  >
                    Applying for the MBA in HR & Aviation Management is a
                    streamlined process aimed at identifying aspiring
                    professionals with a strong interest in leadership, HR
                    strategy, and the aviation industry. Candidates are
                    evaluated on their academic background, communication
                    skills, and management potential. Follow the steps below to
                    apply confidently and efficiently.
                  </p>

                  <p
                    className="content-text mt-2"
                    style={{ fontSize: "1rem", lineHeight: "1.6" }}
                  >
                    This program provides a powerful blend of HR management
                    practices and aviation-specific training, including topics
                    like talent acquisition, employee relations, airline
                    operations, airport management, and regulatory frameworks.
                    Graduates are well-positioned for careers in aviation HR,
                    airport administration, ground handling services, and
                    airline corporate offices. Here's how to begin your
                    admission journey.
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
                  alt="HR & Aviation Management Application"
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
                      Career Prospects and Future Scope for MBA - HR & Aviation
                      Management
                    </h3>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      An MBA in HR & Aviation Management opens up diverse career
                      opportunities in the rapidly growing aviation industry.
                      Graduates are equipped with dual expertise in human
                      resource management and aviation operations, making them
                      valuable assets for aviation companies and related
                      sectors.
                    </p>
                    <ul
                      style={{
                        paddingLeft: "20px",
                        fontSize: "1rem",
                        lineHeight: "1.6",
                      }}
                    >
                      <li style={{ marginBottom: "10px" }}>
                        HR Manager in Airlines or Airport Services
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Talent Acquisition Specialist for Aviation Firms
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Training and Development Officer in Ground Handling
                        Services
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Airline Operations Executive
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Aviation Compliance and Safety Coordinator
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Airport HR Administrator or Personnel Manager
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        HR Consultant for Aviation Startups or Agencies
                      </li>
                    </ul>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      The aviation sector continues to grow globally with rising
                      demand for skilled professionals. With this degree,
                      graduates can pursue leadership roles in both domestic and
                      international aviation markets where HR practices are key
                      to organizational success.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="details-right">
                    <h3
                      className="mb-3"
                      style={{ fontSize: "1.75rem", fontWeight: "600" }}
                    >
                      Application Requirements and Support for MBA - HR &
                      Aviation Management
                    </h3>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      To apply for the MBA in HR & Aviation Management, please
                      ensure you meet the following eligibility criteria and
                      have the required documents:
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      <span style={{ fontWeight: "bold" }}>
                        1. Bachelor's Degree:
                      </span>{" "}
                      From a recognized university in any discipline. A
                      background in business, management, or aviation is
                      preferred but not mandatory.
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      <span style={{ fontWeight: "bold" }}>
                        2. Entrance Exam Score (If Required):
                      </span>{" "}
                      Some institutions may require a valid score in exams like
                      CAT, MAT, or institution-specific tests.
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      <span style={{ fontWeight: "bold" }}>
                        3. Identification Proof:
                      </span>{" "}
                      A valid government-issued ID such as Aadhar Card,
                      Passport, or PAN Card.
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      <span style={{ fontWeight: "bold" }}>
                        4. Statement of Purpose (SOP):
                      </span>{" "}
                      Explaining your interest in HR and aviation, career goals,
                      and reasons for choosing this program.
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      <span style={{ fontWeight: "bold" }}>
                        5. Financial Support:
                      </span>{" "}
                      Scholarships, educational loans, and merit-based financial
                      aid may be available for eligible students. Some
                      institutions also offer industry-sponsored programs or
                      internships.
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      Prepare and submit your documents before the application
                      deadline. Seek guidance from admissions counselors if
                      needed and explore financial aid options to support your
                      academic journey in the aviation management field.
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
              Our MBA in HR & Aviation Management program connects students with
              seasoned professionals from the HR and aviation industries.
              Through our Mentor and Guest Speaker Program, students gain
              exposure to real-world challenges in talent management, aviation
              operations, and organizational leadership, while building valuable
              industry connections.
            </p>
          </div>

          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ marginBottom: "30px" }}>Our Program Highlights</h3>
            <div className="row">
              <div className="col-lg-4">
                <div className="scholarship-item">
                  <h4>Industry Mentors</h4>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    Learn from experienced HR leaders and aviation managers who
                    guide students on career development, leadership strategies,
                    and navigating the corporate aviation environment.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="scholarship-item">
                  <h4>Guest Lectures & Workshops</h4>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    Participate in sessions hosted by professionals from leading
                    airlines, airport authorities, and HR consulting firms to
                    gain first-hand insights into industry trends and
                    expectations.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="scholarship-item">
                  <h4>Live Projects & Simulations</h4>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    Engage in live HR and aviation management projects including
                    case studies, mock airline simulations, airport HR audits,
                    and talent acquisition campaigns to build real-world skills.
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
                      The MBA in HR & Aviation Management program offers
                      personalized mentoring, career counseling, and academic
                      guidance. Students benefit from networking opportunities,
                      mock interviews, and access to internship and placement
                      support tailored to HR and aviation industry demands.
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
                        <i className="fas fa-check-circle" /> Bachelor’s degree
                        in any discipline from a recognized university.
                      </li>
                      <li style={{ fontSize: "16px" }}>
                        <i className="fas fa-check-circle" /> Valid score in
                        entrance exams like CAT, MAT, or equivalent (if
                        required).
                      </li>
                      <li style={{ fontSize: "16px" }}>
                        <i className="fas fa-check-circle" /> Statement of
                        Purpose (SOP) explaining your goals in HR and aviation
                        management.
                      </li>
                      <li style={{ fontSize: "16px" }}>
                        <i className="fas fa-check-circle" /> Government-issued
                        ID proof (Aadhar, Passport, etc.).
                      </li>
                      <li style={{ fontSize: "16px" }}>
                        <i className="fas fa-check-circle" /> Updated resume and
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
                  The MBA in HR & Aviation Management program blends core HR
                  skills with specialized knowledge in aviation industry
                  operations. It prepares students to lead and manage human
                  capital in aviation and allied sectors.
                </p>
                <p className="programfaq-faq-description">
                  This program is ideal for individuals seeking managerial roles
                  in airlines, airports, ground handling, and aviation
                  consultancy firms. You'll gain insights into workforce
                  planning, labor laws, recruitment, and training specific to
                  the aviation domain.
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
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="programfaq-faq-header">
                      <span>
                        <i
                          className="fas fa-user-tie"
                          style={{ color: "#d89e37" }}
                        />
                      </span>
                      What Career Opportunities Are Available After the Program?
                    </Accordion.Header>
                    <Accordion.Body className="programfaq-faq-body">
                      Graduates can work in HR roles within airlines, airports,
                      aviation MRO companies, recruitment firms, and aviation
                      training organizations. Roles include HR Manager, Training
                      & Development Officer, Talent Acquisition Specialist, and
                      Aviation HR Consultant.
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>

                <Card className="programfaq-faq-card">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="programfaq-faq-header">
                      <span>
                        <i
                          className="fas fa-plane-departure"
                          style={{ color: "#d89e37" }}
                        />
                      </span>
                      How Can I Apply for the MBA in HR & Aviation Management?
                    </Accordion.Header>
                    <Accordion.Body className="programfaq-faq-body">
                      You can apply online via our official website. The
                      application requires academic transcripts, a resume, and a
                      Statement of Purpose outlining your interest in HR and the
                      aviation industry.
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>

                <Card className="programfaq-faq-card">
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className="programfaq-faq-header">
                      <span>
                        <i
                          className="fas fa-hourglass-half"
                          style={{ color: "#d89e37" }}
                        />
                      </span>
                      What is the Duration of the MBA Program?
                    </Accordion.Header>
                    <Accordion.Body className="programfaq-faq-body">
                      The MBA in HR & Aviation Management is a 2-year full-time
                      program that includes classroom training, industry
                      projects, workshops, and internships in HR and aviation
                      sectors.
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>

                <Card className="programfaq-faq-card">
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className="programfaq-faq-header">
                      <span>
                        <i
                          className="fas fa-briefcase"
                          style={{ color: "#d89e37" }}
                        />
                      </span>
                      Are Internships Part of the Program?
                    </Accordion.Header>
                    <Accordion.Body className="programfaq-faq-body">
                      Yes, internships are a key component of the program.
                      Students get the opportunity to intern at airlines, HR
                      consultancies, airport HR departments, and aviation
                      service firms to gain real-world industry exposure.
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
