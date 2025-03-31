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
              M.Tech - Defence Technology
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
                  Defence Technology
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
                  Our M.Tech in Defence Technology is designed to provide
                  students with an in-depth understanding of advanced
                  technologies used in the defense sector. The program covers
                  areas such as defense systems engineering, military
                  technology, cybersecurity, unmanned systems, missile
                  technology, and strategic defense management. This program
                  prepares graduates to take on critical roles in defense
                  research, development, and innovation.
                </p>

                <p className="text">
                  <strong>Duration of the Course:</strong> The M.Tech in Defence
                  Technology is a 2-year full-time program that combines
                  advanced theoretical knowledge with practical applications in
                  the defense and security sectors. It is tailored to equip
                  students with the skills needed for engineering, designing,
                  and managing state-of-the-art defense technologies.
                </p>

                <p className="text">
                  <strong>Eligibility Requirements:</strong> To apply for this
                  program, candidates must have a Bachelor’s degree in
                  Engineering or Technology (B.Tech/B.E.) from a recognized
                  university. Candidates with prior experience or specialization
                  in defense, electronics, mechanical engineering, or related
                  fields will have an added advantage.
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
                    M.Tech - Defence Technology
                  </span>
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#555",
                  }}
                >
                  Gain advanced knowledge in defence systems, cybersecurity, and
                  military technology. This program prepares you for leadership
                  roles in defense research, development, and innovation.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {[
              {
                id: "01",
                title: "Advanced Defence Systems Engineering",
                description:
                  "Master the design and operation of state-of-the-art defence systems including military technologies, unmanned systems, and missile technologies.",
              },
              {
                id: "02",
                title: "Cybersecurity and Strategic Defence",
                description:
                  "Learn cutting-edge strategies to secure defence networks, systems, and critical infrastructures from cyber threats and attacks.",
              },
              {
                id: "03",
                title: "Research & Development Focus",
                description:
                  "Engage in defense technology research, development, and practical projects that address the latest challenges in the defense sector.",
              },
              {
                id: "04",
                title: "Global Career Opportunities in Defence Technology",
                description:
                  "Open doors to high-impact careers in government defense agencies, military contractors, and technology companies involved in national security.",
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
                      M.Tech - Defence Technology
                    </h3>
                    <p
                      className="mb-20"
                      style={{ fontSize: "1rem", lineHeight: "1.6" }}
                    >
                      The M.Tech in Defence Technology offers a specialized
                      education focused on advanced technologies and systems
                      used in national defense and security. This program covers
                      military engineering, weapon systems, cybersecurity,
                      defence electronics, and defence manufacturing
                      technologies. Graduates will be equipped to contribute to
                      defense research and development, national security, and
                      innovation in military technologies.
                    </p>
                    <p
                      className="mb-20"
                      style={{ fontSize: "1rem", lineHeight: "1.6" }}
                    >
                      The program focuses on enhancing technical expertise in
                      areas like aerospace engineering, weaponry, cybersecurity
                      protocols, and autonomous defense systems. Students will
                      gain practical knowledge about military applications of
                      cutting-edge technologies, and will also develop critical
                      problem-solving and research skills applicable to defense
                      sectors.
                    </p>

                    <div style={{ marginTop: "30px" }}>
                      <div>
                        <h3
                          className="mb-3"
                          style={{ fontSize: "1.75rem", fontWeight: "bold" }}
                        >
                          How To Succeed in M.Tech - Defence Technology
                        </h3>
                        <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                          To excel in the M.Tech - Defence Technology program,
                          focus on mastering defense-specific technologies and
                          innovations. Here are some tips to guide your
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
                          Study the fundamentals of defense technologies
                          including military engineering, weaponry, and
                          aerospace systems.
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
                          Understand the latest developments in cybersecurity,
                          defense electronics, and autonomous defense systems.
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
                          Gain expertise in defense manufacturing processes and
                          the integration of advanced technologies in defense
                          systems.
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
                          Develop skills in project management, research, and
                          development to contribute effectively to defense
                          innovations.
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
                          Stay updated with advancements in military
                          technologies and the global defense landscape.
                        </li>
                      </ul>
                    </div>
                    <div className="my-4">
                      <h3
                        className="mb-3"
                        style={{ fontSize: "1.75rem", fontWeight: "bold" }}
                      >
                        Admission in M.Tech - Defence Technology
                      </h3>
                      <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                        The admission process for the M.Tech - Defence
                        Technology program involves a written entrance
                        examination followed by an interview. Be prepared to
                        demonstrate your passion for defense technologies, your
                        academic background, and your interest in contributing
                        to the defense sector. Ensure that you meet the
                        eligibility criteria and present your academic
                        credentials, technical skills, and any related
                        experience.
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
                      M.Tech - Defence Technology
                    </h2>
                  </div>
                  <p
                    className="content-text"
                    style={{ fontSize: "1rem", lineHeight: "1.6" }}
                  >
                    Applying for the M.Tech in Defence Technology is a
                    systematic process designed to assess your academic
                    background, technical skills, and passion for contributing
                    to national defense innovation. Follow the steps outlined
                    below to complete your application successfully.
                  </p>

                  <p
                    className="content-text mt-2"
                    style={{ fontSize: "1rem", lineHeight: "1.6" }}
                  >
                    The program offers in-depth knowledge in areas such as
                    defense systems design, military vehicle technology,
                    aerospace engineering, radar and communication systems, and
                    weapon systems development. It prepares you for impactful
                    roles in defense research organizations, public sector
                    undertakings, and defense manufacturing industries. Here are
                    the steps to apply and ensure a seamless admission process.
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
                  alt="Defence Technology Application"
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
                      Career Prospects and Future Scope for M.Tech - Defence
                      Technology
                    </h3>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      Completing an M.Tech in Defence Technology opens up a
                      diverse range of career opportunities in India’s strategic
                      and defense sectors. Graduates are equipped with the
                      skills and technical expertise required for innovation in
                      the design, development, and implementation of advanced
                      defense systems and technologies.
                    </p>
                    <ul
                      style={{
                        paddingLeft: "20px",
                        fontSize: "1rem",
                        lineHeight: "1.6",
                      }}
                    >
                      <li style={{ marginBottom: "10px" }}>
                        Defence Research and Development Scientist
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Systems Engineer in Defence Manufacturing
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Missile and Weapon Systems Specialist
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Aerospace and Avionics Engineer
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Radar and Communication Systems Expert
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Technical Officer in DRDO or ISRO
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Defence Consultant for Public/Private Sector
                      </li>
                    </ul>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      The defense industry is rapidly evolving with advancements
                      in AI-driven warfare, unmanned systems, smart ammunition,
                      and space technologies. M.Tech graduates will play a
                      pivotal role in shaping the future of national defense and
                      security infrastructure.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="details-right">
                    <h3
                      className="mb-3"
                      style={{ fontSize: "1.75rem", fontWeight: "600" }}
                    >
                      Application Requirements and Support for M.Tech - Defence
                      Technology
                    </h3>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      To apply for the M.Tech in Defence Technology, please
                      ensure that the following documents and prerequisites are
                      met:
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      <span style={{ fontWeight: "bold" }}>
                        1. Bachelor's Degree in Engineering/Technology:
                      </span>{" "}
                      From a recognized university in disciplines such as
                      Mechanical, Electrical, Electronics, Aerospace, or related
                      fields.
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      <span style={{ fontWeight: "bold" }}>
                        2. GATE Score (Preferred):
                      </span>{" "}
                      A valid GATE score in relevant subjects may be required
                      depending on the institution.
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
                      Outlining your interest in defence technology and your
                      career aspirations in the field.
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      <span style={{ fontWeight: "bold" }}>
                        5. Financial Support:
                      </span>{" "}
                      Scholarships, fellowships, and government aid may be
                      available for eligible candidates. Institutions may also
                      offer fee waivers or assistantship programs.
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      Ensure all documents are accurate and submitted before the
                      deadline to avoid processing delays. Explore available
                      financial aid options to support your academic journey in
                      defense innovation.
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
              Our M.Tech in Defence Technology program offers students a chance
              to interact directly with experts from the defence and research
              sectors. Through our Mentor and Guest Speaker Program, students
              gain insights into cutting-edge defence technologies, national
              security challenges, and R&D practices, while building connections
              with leading professionals in the field.
            </p>
          </div>
          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ marginBottom: "30px" }}>Our Program Highlights</h3>
            <div className="row">
              <div className="col-lg-4">
                <div className="scholarship-item">
                  <h4>Defence Sector Mentors</h4>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    Our mentors include senior scientists, engineers, and
                    officers from organizations like DRDO, ISRO, and defence
                    PSUs who offer valuable guidance to shape your career in
                    defence technology.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="scholarship-item">
                  <h4>Guest Lecturers</h4>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    Learn from real-world experts through guest lectures,
                    technical webinars, and workshops led by professionals
                    involved in defence R&D, systems engineering, and strategic
                    planning.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="scholarship-item">
                  <h4>Innovation & R&D Hub</h4>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    Participate in the Defence Innovation Hub, where students
                    work on practical research projects in smart weapons,
                    missile systems, UAVs, AI in defence, and modern warfare
                    simulations.
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
                      The M.Tech in Defence Technology program provides students
                      with personalized career mentoring, exposure to defence
                      labs and simulations, and academic support. Our faculty
                      and mentors help you explore specializations and research
                      pathways, enabling success in both industry and government
                      R&D roles.
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
                        <i className="fas fa-check-circle" /> Bachelor's degree
                        in Engineering/Technology (BE/B.Tech) from a recognized
                        university.
                      </li>
                      <li style={{ fontSize: "16px" }}>
                        <i className="fas fa-check-circle" /> Valid GATE score
                        in relevant engineering disciplines (preferred).
                      </li>
                      <li style={{ fontSize: "16px" }}>
                        <i className="fas fa-check-circle" /> Statement of
                        Purpose (SOP) describing your interest in defence
                        technology and research goals.
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
                  The M.Tech in Defence Technology program equips students with
                  the advanced technical skills and strategic knowledge required
                  in the field of defense innovation and R&D. Learn everything
                  you need to know about the application process, eligibility,
                  and program structure here.
                </p>
                <p className="programfaq-faq-description">
                  Our goal is to prepare future technocrats and researchers to
                  contribute effectively to India’s defense ecosystem, with
                  expertise in areas like weapon systems, electronics, naval
                  systems, and combat vehicle engineering.
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
                          className="fas fa-shield-alt"
                          style={{ color: "#d89e37" }}
                        />
                      </span>
                      What Career Opportunities After Completing the Program?
                    </Accordion.Header>
                    <Accordion.Body className="programfaq-faq-body">
                      Graduates of the M.Tech in Defence Technology program can
                      pursue roles in DRDO labs, defense PSUs, private defense
                      companies, R&D institutions, and the armed forces as
                      defense technologists, researchers, and systems engineers.
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
                      How Can I Apply for the M.Tech in Defence Technology
                      Program?
                    </Accordion.Header>
                    <Accordion.Body className="programfaq-faq-body">
                      You can apply online through our official website. Submit
                      your GATE scorecard, academic transcripts, resume, and a
                      Statement of Purpose highlighting your interest in defense
                      technologies and national security.
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
                      What is the Duration of the M.Tech in Defence Technology
                      Program?
                    </Accordion.Header>
                    <Accordion.Body className="programfaq-faq-body">
                      The M.Tech in Defence Technology is a 2-year full-time
                      program that includes theoretical coursework, lab work,
                      project research, and industry exposure through defense
                      internships and live projects.
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
                      Yes, students will have opportunities to intern with
                      organizations like DRDO, HAL, BEL, and other defense
                      research or production units. These internships are
                      essential for hands-on training in defense tech
                      development.
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
