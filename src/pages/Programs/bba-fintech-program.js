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
      name: "Vidya University, Meerut",
      program: "BBA - FinTech | UGC recognised",
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
              BBA - FinTech
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
                  FinTech
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
                  Our BBA in FinTech is designed to provide students with a
                  comprehensive understanding of financial technologies, digital
                  finance, blockchain, and the necessary skills to innovate and
                  manage financial services in a rapidly evolving industry. This
                  program equips graduates with the expertise to lead and drive
                  innovation in the global financial sector.
                </p>

                <p className="text">
                  <strong>Duration of the Course:</strong> The BBA in FinTech is
                  a 3-year full-time program that combines theoretical learning
                  with practical experience. Students will gain hands-on
                  exposure to digital banking, blockchain technologies,
                  financial data analytics, and investment management, preparing
                  them for key roles in financial services, tech-driven finance,
                  and digital banking.
                </p>

                <p className="text">
                  <strong>Eligibility Requirements:</strong> Applicants must
                  have completed higher secondary education (12th grade) from a
                  recognized board. While prior experience in finance,
                  technology, or business is beneficial, it is not a mandatory
                  requirement.
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
                  <span style={{ color: "#d89e37" }}>BBA - FinTech</span>
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#555",
                  }}
                >
                  Gain specialized knowledge and leadership skills in the
                  fast-growing field of financial technologies. This program
                  prepares you for key roles in digital finance, blockchain
                  technology, financial data analytics, and fintech
                  entrepreneurship.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {[
              {
                id: "01",
                title: "Comprehensive FinTech Curriculum",
                description:
                  "Develop a strong foundation in digital banking, blockchain technologies, financial data analytics, and the management of fintech ventures.",
              },
              {
                id: "02",
                title: "Industry Expert Faculty",
                description:
                  "Learn from leading professionals in the fintech and financial sectors who have a wealth of experience in digital finance, blockchain, and financial innovation.",
              },
              {
                id: "03",
                title: "Internship & Practical Experience",
                description:
                  "Participate in internships with top fintech companies, banks, and digital finance startups to gain hands-on experience in the rapidly evolving financial services industry.",
              },
              {
                id: "04",
                title: "Global Career Opportunities in FinTech",
                description:
                  "Unlock career opportunities with global fintech startups, financial institutions, and innovative tech companies that are transforming the finance industry.",
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
                      alt="Entrepreneurship & Innovation"
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
                      BBA - FinTech
                    </h3>
                    <p
                      className="mb-20"
                      style={{ fontSize: "1rem", lineHeight: "1.6" }}
                    >
                      The BBA in FinTech is designed to provide students with a
                      deep understanding of financial technologies, digital
                      finance, and innovation in the financial sector. The
                      program covers blockchain technology, financial data
                      analytics, digital banking, and the role of FinTech in
                      transforming global financial services. Graduates will be
                      well-equipped to take on leadership roles and drive change
                      in the rapidly growing FinTech industry.
                    </p>
                    <p
                      className="mb-20"
                      style={{ fontSize: "1rem", lineHeight: "1.6" }}
                    >
                      The program focuses on developing critical financial
                      technologies skills, fostering innovation in financial
                      services, and preparing students to navigate the
                      intersection of finance and technology. Students will gain
                      hands-on experience in digital finance, blockchain
                      technologies, and fintech entrepreneurship.
                    </p>

                    <div style={{ marginTop: "30px" }}>
                      <div>
                        <h3
                          className="mb-3"
                          style={{ fontSize: "1.75rem", fontWeight: "bold" }}
                        >
                          How To Succeed in BBA - FinTech
                        </h3>
                        <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                          To excel in the BBA - FinTech program, focus on
                          developing a strong understanding of digital finance,
                          blockchain technologies, and financial data analytics.
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
                          Study the fundamentals of digital banking, blockchain,
                          and financial technologies.
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
                          Understand the process of financial data analytics,
                          investment management, and the role of AI in finance.
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
                          Gain knowledge of venture capital, fintech funding
                          strategies, and investor relations.
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
                          Develop problem-solving and critical thinking skills
                          for identifying gaps and opportunities in the FinTech
                          space.
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
                          Stay informed about the latest trends, technologies,
                          and innovations in the FinTech and digital finance
                          industries.
                        </li>
                      </ul>
                    </div>
                    <div className="my-4">
                      <h3
                        className="mb-3"
                        style={{ fontSize: "1.75rem", fontWeight: "bold" }}
                      >
                        Admission in BBA - FinTech
                      </h3>
                      <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                        The admission process for the BBA - FinTech program
                        includes an entrance exam followed by a personal
                        interview. Be prepared to showcase your passion for
                        digital finance and financial technologies, and
                        demonstrate your academic potential and leadership
                        abilities. Ensure you meet the eligibility requirements
                        and present your academic and extracurricular
                        achievements.
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
                      - FinTech
                    </h2>
                  </div>
                  <p
                    className="content-text"
                    style={{ fontSize: "1rem", lineHeight: "1.6" }}
                  >
                    Applying for the BBA in FinTech is a structured process
                    designed to ensure you are equipped with the necessary
                    skills and qualifications to thrive in the world of
                    financial technologies, digital finance, and innovation in
                    the finance sector. Follow the steps below to submit your
                    application correctly and on time.
                  </p>

                  <p
                    className="content-text mt-2"
                    style={{ fontSize: "1rem", lineHeight: "1.6" }}
                  >
                    The program covers digital banking, blockchain technologies,
                    financial data analytics, investment management, and the
                    role of FinTech in transforming the global financial
                    landscape. It prepares you for leadership roles in financial
                    services, digital finance, and tech-driven financial
                    companies. Below are the steps you need to follow to apply
                    and ensure a seamless application process.
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
                      Career Prospects and Future Scope for BBA - FinTech
                    </h3>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      Completing a BBA in FinTech opens doors to a wide range of
                      career opportunities in the dynamic world of digital
                      finance, blockchain technologies, and financial
                      innovation. Graduates can work in various roles across
                      FinTech startups, financial institutions, technology
                      companies, and more. Below are some potential career
                      paths:
                    </p>
                    <ul
                      style={{
                        paddingLeft: "20px",
                        fontSize: "1rem",
                        lineHeight: "1.6",
                      }}
                    >
                      <li style={{ marginBottom: "10px" }}>
                        FinTech Startup Founder/Co-founder
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Digital Banking Manager
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Blockchain Developer
                      </li>
                      <li style={{ marginBottom: "10px" }}>Product Manager</li>
                      <li style={{ marginBottom: "10px" }}>
                        Financial Data Analyst
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Venture Capital Analyst (FinTech)
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Cryptocurrency Consultant
                      </li>
                    </ul>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      The FinTech sector is expanding rapidly, with increasing
                      opportunities in areas such as digital banking, blockchain
                      applications, financial services innovation, and the
                      integration of technology in finance. Graduates with a BBA
                      in FinTech will be prepared to drive change, innovate
                      financial products, and lead organizations in the evolving
                      financial ecosystem.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="details-right">
                    <h3
                      className="mb-3"
                      style={{ fontSize: "1.75rem", fontWeight: "600" }}
                    >
                      Application Requirements and Support for BBA - FinTech
                    </h3>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      To successfully apply for the BBA in FinTech, ensure that
                      you have the following documents:
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      <span style={{ fontWeight: "bold" }}>
                        1. Higher Secondary Education (12th):
                      </span>
                      From a recognized board, preferably with a background in
                      mathematics, business, economics, or related fields.
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      <span style={{ fontWeight: "bold" }}>
                        2. Work Experience (Optional):
                      </span>
                      Experience in digital finance, blockchain, or a related
                      field is preferred but not mandatory.
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
                      Explaining your motivation for pursuing the BBA in FinTech
                      program and your long-term career goals in the finance and
                      technology sectors.
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
              Our BBA in FinTech program offers unique opportunities for
              students to interact with industry experts. Through the Mentor and
              Guest Speaker program, students gain valuable insights into the
              FinTech ecosystem, network with successful fintech entrepreneurs
              and professionals, and receive guidance on their journey in
              digital finance, blockchain technologies, and innovation in
              financial services.
            </p>
          </div>
          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ marginBottom: "30px" }}>Our Program Highlights</h3>
            <div className="row">
              <div className="col-lg-4">
                <div className="scholarship-item">
                  <h4>Industry Mentors</h4>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    Our mentors include leading experts in FinTech, digital
                    banking, and blockchain technologies, offering one-on-one
                    guidance to help shape your career in the rapidly evolving
                    FinTech industry.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="scholarship-item">
                  <h4>Guest Lecturers</h4>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    Learn from industry leaders through guest lectures,
                    workshops, and webinars, where professionals in FinTech,
                    blockchain, and digital finance share their knowledge,
                    insights, and experiences.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="scholarship-item">
                  <h4>FinTech & Innovation Hub</h4>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    Join our FinTech & Innovation Hub, where students
                    collaborate on projects focused on emerging technologies in
                    digital finance, blockchain applications, and investment
                    management, developing innovative solutions to transform the
                    financial services industry.
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
                      The BBA in FinTech provides students with personalized
                      career guidance, mentorship from experienced professionals
                      in digital finance and blockchain, and hands-on learning
                      opportunities. Our team of mentors helps you identify the
                      best career paths in the evolving FinTech space and
                      assists you with networking in the digital finance and
                      financial technology industries.
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
                        (12th) education from a recognized board.
                      </li>
                      <li style={{ fontSize: "16px" }}>
                        <i className="fas fa-check-circle" /> Experience in
                        finance, technology, or a related field (preferred but
                        not mandatory).
                      </li>
                      <li style={{ fontSize: "16px" }}>
                        <i className="fas fa-check-circle" /> Statement of
                        Purpose (SOP) explaining your motivation for pursuing
                        the BBA in FinTech and your long-term career goals in
                        digital finance and financial technologies.
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
                  The BBA in FinTech program equips students with the necessary
                  skills to excel in the world of digital finance, blockchain
                  technologies, and financial services innovation. Learn
                  everything you need to know about the application process,
                  eligibility, and program details here.
                </p>
                <p className="programfaq-faq-description">
                  Our goal is to provide future financial leaders with the
                  skills to innovate, manage, and scale digital financial
                  services while adapting to emerging technologies and trends in
                  the FinTech space.
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
                          className="fas fa-graduation-cap"
                          style={{ color: "#d89e37" }}
                        />
                      </span>
                      What Career Opportunities After Completing the Program?
                    </Accordion.Header>
                    <Accordion.Body className="programfaq-faq-body">
                      Graduates of the BBA in FinTech program can pursue careers
                      in roles such as blockchain developer, digital banking
                      manager, FinTech startup founder, product manager,
                      financial data analyst, venture capital analyst in
                      FinTech, and more. You may also explore opportunities in
                      digital finance consulting, cryptocurrency, and payment
                      technology.
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
                      How Can I Apply for the BBA in FinTech Program?
                    </Accordion.Header>
                    <Accordion.Body className="programfaq-faq-body">
                      You can apply online by filling out the application form
                      available on our website. Ensure that you submit all the
                      required documents, including your academic transcripts,
                      resume, and Statement of Purpose (SOP), which should
                      outline your interest in digital finance, blockchain
                      technologies, and your long-term career goals in the
                      FinTech industry.
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
                      What is the Duration of the BBA in FinTech Program?
                    </Accordion.Header>
                    <Accordion.Body className="programfaq-faq-body">
                      The BBA in FinTech is a 3-year full-time program designed
                      to provide both theoretical knowledge and practical
                      experience in digital finance, blockchain technologies,
                      financial data analytics, and the role of FinTech in
                      reshaping global financial services.
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
                      leading FinTech companies, digital banks, and financial
                      institutions. These internships provide hands-on
                      experience in digital finance, blockchain, investment
                      management, and the evolving financial technology sector.
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
