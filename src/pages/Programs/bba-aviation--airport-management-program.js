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
      name: "Subharti University, Meerut",
      program: "BBA - Aviation & Airport Management | UGC recognised",
      specialisations: 6,
      certifications: 10,
      fees: "₹ 3.10 Lacs",
      images: [
        "assets/placement/Subharti1.webp",
        "assets/placement/Subharti1.webp",
        "assets/placement/Subharti3.png",
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
              BBA - Aviation & Airport Management
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
                  Aviation & Airport Management
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
            <div className="graduate-img hide-on-mobile">
              <img src="../assets/img/g.png" alt="Graduate" />
            </div>
            <Link
              style={{ marginTop: "-110px", marginLeft: "40px" }}
              to="/contact"
              className="th-btn style5 hide-on-mobile"
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
                  Our BBA in Aviation & Airport Management is designed to
                  provide students with a comprehensive understanding of airport
                  operations, aviation management, and the skills required to
                  excel in the dynamic aviation and travel industry. This
                  program equips graduates with the expertise to manage airport
                  functions, aviation logistics, and customer service, shaping
                  them into leaders in the aviation sector.
                </p>

                <p className="text">
                  <strong>Duration of the Course:</strong> The BBA in Aviation &
                  Airport Management is a 3-year full-time program that combines
                  theoretical learning with hands-on practical experience.
                  Students will gain exposure to airport operations, aviation
                  safety, customer service, aviation laws, and logistics,
                  preparing them for leadership roles in airports, airlines, and
                  the broader aviation industry.
                </p>

                <p className="text">
                  <strong>Eligibility Requirements:</strong> Applicants must
                  have completed higher secondary education (12th grade) from a
                  recognized board. While prior experience in aviation or
                  business is beneficial, it is not a mandatory requirement.
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
                    BBA - Aviation & Airport Management
                  </span>
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#555",
                  }}
                >
                  Discover a rewarding career in the aviation and airport
                  management industry. The BBA program equips you with the
                  skills to manage airport operations, aviation logistics,
                  customer service, and more, preparing you to lead in this
                  dynamic and fast-paced industry.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {[
              {
                id: "01",
                title: "Comprehensive Aviation Curriculum",
                description:
                  "Gain a solid foundation in aviation operations, airport management, aviation laws, and customer service, equipping you to handle various challenges in the aviation industry.",
              },
              {
                id: "02",
                title: "Industry Expert Faculty",
                description:
                  "Learn from experienced professionals and experts in the aviation and airport management industry, offering insights into the latest trends and best practices.",
              },
              {
                id: "03",
                title: "Internships & Practical Experience",
                description:
                  "Participate in internships at airports, airlines, and aviation-related organizations, providing hands-on experience in airport operations, safety protocols, and customer service.",
              },
              {
                id: "04",
                title: "Global Career Opportunities in Aviation",
                description:
                  "Access career opportunities with international airports, airlines, aviation regulators, and aviation service providers, shaping the future of global aviation and travel.",
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
                      BBA - Aviation & Airport Management
                    </h3>
                    <p
                      className="mb-20"
                      style={{ fontSize: "1rem", lineHeight: "1.6" }}
                    >
                      The BBA in Aviation & Airport Management program is
                      designed to equip students with the skills and knowledge
                      necessary to manage airport operations, aviation safety,
                      and customer service in the rapidly evolving aviation
                      industry. This program prepares you for a dynamic career
                      in airport management, aviation logistics, and airline
                      operations.
                    </p>
                    <p
                      className="mb-20"
                      style={{ fontSize: "1rem", lineHeight: "1.6" }}
                    >
                      The program covers various aspects of airport management,
                      including air traffic control, aviation regulations,
                      operations management, and customer service excellence.
                      Students will gain hands-on experience through
                      internships, industry visits, and interaction with
                      professionals in the field of aviation.
                    </p>

                    <div style={{ marginTop: "30px" }}>
                      <div>
                        <h3
                          className="mb-3"
                          style={{ fontSize: "1.75rem", fontWeight: "bold" }}
                        >
                          How To Succeed in BBA - Aviation & Airport Management
                        </h3>
                        <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                          To excel in the BBA - Aviation & Airport Management
                          program, focus on understanding aviation operations,
                          enhancing customer service skills, and staying
                          informed about the latest trends in the aviation
                          industry. Here are some tips to guide your
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
                          Gain a strong understanding of airport operations,
                          airline management, and aviation safety.
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
                          Develop customer service skills to provide exceptional
                          service to passengers and airport staff.
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
                          Participate in internships and practical training at
                          airports, airlines, and aviation-related organizations
                          to build real-world experience.
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
                          Stay updated with the latest aviation technologies,
                          airport management systems, and aviation regulations.
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
                          Collaborate with industry professionals and
                          participate in events that will enhance your learning
                          and networking opportunities.
                        </li>
                      </ul>
                    </div>
                    <div className="my-4">
                      <h3
                        className="mb-3"
                        style={{ fontSize: "1.75rem", fontWeight: "bold" }}
                      >
                        Admission in BBA - Aviation & Airport Management
                      </h3>
                      <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                        The admission process for the BBA in Aviation & Airport
                        Management includes an interview, an entrance exam, and
                        an evaluation of your interest in the aviation field.
                        Applicants should have completed higher secondary
                        education (12th grade) and demonstrate a passion for
                        aviation and airport management. During the selection
                        process, highlight any relevant experience or
                        internships in aviation or hospitality sectors.
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
                      <span style={{ color: "#d89e37" }}>How To Apply</span> BBA
                      - Aviation & Airport Management
                    </h2>
                  </div>
                  <p
                    className="content-text"
                    style={{ fontSize: "1rem", lineHeight: "1.6" }}
                  >
                    Applying for the BBA in Aviation & Airport Management
                    involves a straightforward process that ensures you are
                    well-prepared for a career in the dynamic aviation industry.
                    Follow the steps below to submit your application and get
                    ready for an exciting journey in airport management,
                    aviation operations, and customer service.
                  </p>

                  <p
                    className="content-text mt-2"
                    style={{ fontSize: "1rem", lineHeight: "1.6" }}
                  >
                    The program prepares you for key roles in airport
                    operations, aviation safety, logistics, and airline
                    management. Students will gain practical experience and
                    industry knowledge through internships and fieldwork. Below
                    are the steps to follow for applying to the BBA - Aviation &
                    Airport Management program.
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
                  alt="Aviation & Airport Management Application"
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
                      Career Prospects and Future Scope for BBA - Aviation &
                      Airport Management
                    </h3>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      Completing a BBA in Aviation & Airport Management opens
                      doors to various career opportunities in the aviation and
                      travel industry. Graduates can pursue roles in airport
                      operations, airline management, aviation safety,
                      logistics, and customer service. Below are some potential
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
                        Airport Operations Manager
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Aviation Safety Officer
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Airline Operations Manager
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Customer Service Manager (Airports)
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Aviation Logistics Coordinator
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Airport Security Manager
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Airline Customer Service Representative
                      </li>
                    </ul>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      The aviation industry continues to grow, offering
                      opportunities in airport management, aviation safety,
                      logistics, and more. Graduates of the BBA in Aviation &
                      Airport Management will be prepared to lead and innovate
                      in the aviation sector, ensuring smooth airport operations
                      and exceptional customer service.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="details-right">
                    <h3
                      className="mb-3"
                      style={{ fontSize: "1.75rem", fontWeight: "600" }}
                    >
                      Application Requirements and Support for BBA - Aviation &
                      Airport Management
                    </h3>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      To successfully apply for the BBA in Aviation & Airport
                      Management, ensure that you have the following documents:
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      <span style={{ fontWeight: "bold" }}>
                        1. Higher Secondary Education (12th):
                      </span>{" "}
                      From a recognized board, preferably with a background in
                      commerce, management, or hospitality.
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      <span style={{ fontWeight: "bold" }}>
                        2. Entrance Exam (if applicable):
                      </span>{" "}
                      Some institutions may require an entrance exam as part of
                      the admission process.
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
                        4. Statement of Purpose (SOP):
                      </span>{" "}
                      Explaining your motivation for pursuing the BBA in
                      Aviation & Airport Management and your long-term career
                      goals in the aviation industry.
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      <span style={{ fontWeight: "bold" }}>
                        5. Financial Support:
                      </span>{" "}
                      Financial assistance is available for eligible candidates,
                      including scholarships, loans, and need-based aid to
                      support tuition and related expenses.
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      Please ensure that all documents are in order to avoid any
                      delays in the application process. Explore the available
                      financial support options to assist with your tuition fees
                      and related costs.
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
              Our BBA in Aviation & Airport Management program offers students
              the opportunity to interact with industry experts through our
              Mentor and Guest Speaker program. Gain valuable insights into the
              aviation industry, learn from experienced professionals, and
              network with leaders in airport operations, aviation safety,
              logistics, and more. This program is designed to help you succeed
              in the dynamic world of aviation.
            </p>
          </div>
          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ marginBottom: "30px" }}>Our Program Highlights</h3>
            <div className="row">
              <div className="col-lg-4">
                <div className="scholarship-item">
                  <h4>Industry Mentors</h4>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    Our mentors include seasoned professionals from the aviation
                    and airport management industries, offering one-on-one
                    guidance to help shape your career and expertise in aviation
                    operations, safety, and logistics.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="scholarship-item">
                  <h4>Guest Lecturers</h4>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    Learn from leading experts in the aviation industry through
                    guest lectures, workshops, and webinars, where professionals
                    share their insights, experiences, and knowledge on the
                    future of aviation and airport management.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="scholarship-item">
                  <h4>Industry Collaboration</h4>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    Join our collaborative environment where students work on
                    real-world aviation and airport management projects, network
                    with industry leaders, and develop innovative solutions for
                    the aviation sector.
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
                      The BBA in Aviation & Airport Management provides students
                      with personalized career guidance, mentorship from
                      industry professionals, and hands-on learning
                      opportunities. Our mentors, including experienced aviation
                      professionals, help students identify the best career
                      paths in airport operations, airline management, and
                      aviation logistics. Students will also gain valuable
                      networking opportunities within the aviation industry.
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
                        with a background in commerce, management, or
                        hospitality.
                      </li>
                      <li style={{ fontSize: "16px" }}>
                        <i className="fas fa-check-circle" /> A strong interest
                        in aviation, airport management, airline operations, and
                        logistics.
                      </li>
                      <li style={{ fontSize: "16px" }}>
                        <i className="fas fa-check-circle" /> Statement of
                        Purpose (SOP) explaining your motivation for pursuing
                        the BBA in Aviation & Airport Management and your
                        long-term career goals in the aviation sector.
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
                  The BBA in Aviation & Airport Management program provides
                  students with the essential skills and knowledge to excel in
                  airport operations, aviation safety, logistics, and customer
                  service. Learn everything you need to know about the
                  application process, eligibility, and program details here.
                </p>
                <p className="programfaq-faq-description">
                  Our goal is to equip students with the necessary skills to
                  manage complex aviation operations and ensure smooth airport
                  management. The program encourages a practical, hands-on
                  approach to learning with internships and industry
                  collaborations.
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
                          className="fas fa-plane"
                          style={{ color: "#d89e37" }}
                        />
                      </span>
                      What Career Opportunities After Completing the Program?
                    </Accordion.Header>
                    <Accordion.Body className="programfaq-faq-body">
                      Graduates of the BBA in Aviation & Airport Management
                      program can pursue careers in roles such as airport
                      operations manager, aviation safety officer, airline
                      operations manager, logistics coordinator, and customer
                      service manager. You may also explore opportunities in
                      airport security, cargo handling, and aviation
                      consultancy.
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
                      How Can I Apply for the BBA in Aviation & Airport
                      Management?
                    </Accordion.Header>
                    <Accordion.Body className="programfaq-faq-body">
                      You can apply online by filling out the application form
                      available on our website. Ensure that you submit all the
                      required documents, including academic transcripts, a
                      Statement of Purpose (SOP) outlining your motivation for
                      pursuing the BBA in Aviation & Airport Management, and any
                      relevant work experience or internships.
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
                      What is the Duration of the BBA in Aviation & Airport
                      Management?
                    </Accordion.Header>
                    <Accordion.Body className="programfaq-faq-body">
                      The BBA in Aviation & Airport Management is a 3-year
                      full-time program designed to provide both theoretical and
                      practical knowledge in aviation operations, airport
                      management, logistics, and customer service.
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
                      leading airlines, airports, and aviation-related
                      organizations. These internships provide hands-on
                      experience in airport operations, aviation logistics,
                      customer service, and safety protocols.
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
