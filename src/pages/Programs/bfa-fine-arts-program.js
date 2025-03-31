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
                  <span style={{ color: "#d89e37" }}>BFA - Fine Arts</span>
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#555",
                  }}
                >
                  Explore your passion for creativity and art in the BFA
                  program. This program prepares you for a successful career in
                  visual arts, design, art history, and more, empowering you to
                  express ideas and create innovative works that resonate
                  globally.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {[
              {
                id: "01",
                title: "Comprehensive Fine Arts Curriculum",
                description:
                  "Develop a strong foundation in visual arts, design, painting, sculpture, and digital arts, blending creativity with technical skills.",
              },
              {
                id: "02",
                title: "Industry Expert Faculty",
                description:
                  "Learn from leading artists and professionals in the art world who provide guidance in various disciplines, including contemporary art and design.",
              },
              {
                id: "03",
                title: "Internship & Practical Experience",
                description:
                  "Participate in internships and workshops with art galleries, museums, and design studios, gaining hands-on experience in the creative industry.",
              },
              {
                id: "04",
                title: "Global Career Opportunities in Fine Arts",
                description:
                  "Unlock career opportunities with art institutions, galleries, museums, design agencies, and creative tech companies shaping the global art scene.",
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
                      BFA - Fine Arts
                    </h3>
                    <p
                      className="mb-20"
                      style={{ fontSize: "1rem", lineHeight: "1.6" }}
                    >
                      The BFA in Fine Arts program is designed to nurture and
                      develop your creative talents, offering a deep dive into
                      various forms of visual arts including painting,
                      sculpture, digital arts, and design. The program prepares
                      you for a successful career in the arts, providing you
                      with the tools to excel in creative industries and
                      contribute to the evolving landscape of visual expression.
                    </p>
                    <p
                      className="mb-20"
                      style={{ fontSize: "1rem", lineHeight: "1.6" }}
                    >
                      This program focuses on cultivating artistic skills,
                      enhancing creativity, and helping you understand the
                      broader context of the art world. Students will gain
                      hands-on experience and learn from accomplished artists
                      and industry professionals in the field of Fine Arts.
                    </p>

                    <div style={{ marginTop: "30px" }}>
                      <div>
                        <h3
                          className="mb-3"
                          style={{ fontSize: "1.75rem", fontWeight: "bold" }}
                        >
                          How To Succeed in BFA - Fine Arts
                        </h3>
                        <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                          To excel in the BFA - Fine Arts program, focus on
                          developing your creative expression, technical skills,
                          and understanding of art history. Here are some tips
                          to guide your preparation:
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
                          Experiment with various forms of art like painting,
                          sculpture, digital art, and graphic design.
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
                          Develop a strong understanding of art history and
                          contemporary art movements.
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
                          Participate in art exhibitions, galleries, and
                          community art events to build your portfolio and
                          visibility.
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
                          Collaborate with fellow artists and mentors to refine
                          your craft.
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
                          Stay updated with the latest art trends, techniques,
                          and technologies in the Fine Arts industry.
                        </li>
                      </ul>
                    </div>
                    <div className="my-4">
                      <h3
                        className="mb-3"
                        style={{ fontSize: "1.75rem", fontWeight: "bold" }}
                      >
                        Admission in BFA - Fine Arts
                      </h3>
                      <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                        The admission process for the BFA - Fine Arts program
                        includes a portfolio review, an entrance exam, and an
                        interview. Showcase your artistic works, passion for
                        creativity, and academic potential. Be sure to meet the
                        eligibility requirements and present your artistic
                        achievements during the selection process.
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
                      <span style={{ color: "#d89e37" }}>How To Apply</span> BFA
                      - Fine Arts
                    </h2>
                  </div>
                  <p
                    className="content-text"
                    style={{ fontSize: "1rem", lineHeight: "1.6" }}
                  >
                    Applying for the BFA in Fine Arts is a creative and artistic
                    process that allows you to showcase your passion and skills
                    in visual arts, design, and artistic expression. Follow the
                    steps below to submit your application correctly and ensure
                    you’re prepared for an exciting journey in the world of Fine
                    Arts.
                  </p>

                  <p
                    className="content-text mt-2"
                    style={{ fontSize: "1rem", lineHeight: "1.6" }}
                  >
                    The program covers various artistic disciplines such as
                    painting, sculpture, digital arts, design, and art history.
                    It prepares you for creative roles in art galleries,
                    museums, design agencies, and other artistic industries.
                    Below are the steps you need to follow to apply and ensure a
                    seamless application process.
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
                      Career Prospects and Future Scope for BFA - Fine Arts
                    </h3>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      Completing a BFA in Fine Arts opens doors to a wide range
                      of career opportunities in the creative and artistic
                      industries. Graduates can pursue careers in visual arts,
                      design, art direction, curating, and more. Below are some
                      potential career paths:
                    </p>
                    <ul
                      style={{
                        paddingLeft: "20px",
                        fontSize: "1rem",
                        lineHeight: "1.6",
                      }}
                    >
                      <li style={{ marginBottom: "10px" }}>
                        Fine Artist (Painter, Sculptor)
                      </li>
                      <li style={{ marginBottom: "10px" }}>Art Director</li>
                      <li style={{ marginBottom: "10px" }}>Gallery Curator</li>
                      <li style={{ marginBottom: "10px" }}>Graphic Designer</li>
                      <li style={{ marginBottom: "10px" }}>Art Educator</li>
                      <li style={{ marginBottom: "10px" }}>
                        Museum/Gallery Assistant
                      </li>
                      <li style={{ marginBottom: "10px" }}>Art Therapist</li>
                    </ul>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      The Fine Arts sector continues to expand, with increasing
                      opportunities in fields such as graphic design, museum and
                      gallery management, art education, and more. Graduates
                      with a BFA in Fine Arts will be prepared to lead in the
                      creative sector, express ideas through art, and contribute
                      to the cultural and visual landscape.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="details-right">
                    <h3
                      className="mb-3"
                      style={{ fontSize: "1.75rem", fontWeight: "600" }}
                    >
                      Application Requirements and Support for BFA - Fine Arts
                    </h3>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      To successfully apply for the BFA in Fine Arts, ensure
                      that you have the following documents:
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      <span style={{ fontWeight: "bold" }}>
                        1. Higher Secondary Education (12th):
                      </span>{" "}
                      From a recognized board, preferably with a background in
                      arts, humanities, or design-related fields.
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      <span style={{ fontWeight: "bold" }}>
                        2. Portfolio (Essential):
                      </span>{" "}
                      A portfolio showcasing your creative works, such as
                      paintings, sculptures, digital art, or any other form of
                      artwork you have created.
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
                      Explaining your motivation for pursuing the BFA in Fine
                      Arts program and your long-term career goals in the
                      creative sector.
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
              Mentor and Guest Speaker Program
            </h3>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                marginBottom: "30px",
              }}
            >
              Our BFA in Fine Arts program offers unique opportunities for
              students to interact with industry experts. Through the Mentor and
              Guest Speaker program, students gain valuable insights into the
              art and creative industries, network with successful artists,
              curators, and professionals, and receive guidance on their journey
              in visual arts, design, art history, and innovation in creative
              industries.
            </p>
          </div>
          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ marginBottom: "30px" }}>Our Program Highlights</h3>
            <div className="row">
              <div className="col-lg-4">
                <div className="scholarship-item">
                  <h4>Industry Mentors</h4>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    Our mentors include leading artists, designers, and curators
                    who offer one-on-one guidance to help shape your creative
                    career in the rapidly evolving art and design industries.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="scholarship-item">
                  <h4>Guest Lecturers</h4>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    Learn from industry leaders through guest lectures,
                    workshops, and webinars, where professionals in Fine Arts,
                    design, and visual arts share their knowledge, insights, and
                    experiences.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="scholarship-item">
                  <h4>Creative Hub</h4>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    Join our Creative Hub, where students collaborate on art and
                    design projects, explore new artistic methods, and develop
                    innovative solutions to challenges in the creative
                    industries.
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
                      The BFA in Fine Arts provides students with personalized
                      career guidance, mentorship from experienced artists,
                      curators, and industry professionals, as well as hands-on
                      learning opportunities. Our team of mentors helps you
                      identify the best career paths in the evolving world of
                      art, design, and visual arts, and assists you with
                      networking in the creative industries.
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
                        with a background in arts, humanities, or design-related
                        fields.
                      </li>
                      <li style={{ fontSize: "16px" }}>
                        <i className="fas fa-check-circle" /> A portfolio
                        showcasing your creative works, such as paintings,
                        drawings, sculptures, or digital artwork.
                      </li>
                      <li style={{ fontSize: "16px" }}>
                        <i className="fas fa-check-circle" /> Statement of
                        Purpose (SOP) explaining your motivation for pursuing
                        the BFA in Fine Arts and your long-term career goals in
                        the creative sector.
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
                  The BFA in Fine Arts program prepares students to explore and
                  develop their creative skills in various artistic disciplines,
                  such as painting, sculpture, digital arts, and design. Learn
                  everything you need to know about the application process,
                  eligibility, and program details here.
                </p>
                <p className="programfaq-faq-description">
                  Our goal is to equip future artists with the knowledge,
                  techniques, and creativity needed to express ideas and
                  contribute to the evolving art world. The program encourages
                  artistic experimentation, critical thinking, and
                  collaboration.
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
                          className="fas fa-paint-brush"
                          style={{ color: "#d89e37" }}
                        />
                      </span>
                      What Career Opportunities After Completing the Program?
                    </Accordion.Header>
                    <Accordion.Body className="programfaq-faq-body">
                      Graduates of the BFA in Fine Arts program can pursue
                      careers in roles such as fine artist (painter, sculptor),
                      art director, gallery curator, graphic designer, museum
                      assistant, art educator, and more. You may also explore
                      opportunities in digital art, art therapy, and art
                      consulting.
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
                      How Can I Apply for the BFA in Fine Arts Program?
                    </Accordion.Header>
                    <Accordion.Body className="programfaq-faq-body">
                      You can apply online by filling out the application form
                      available on our website. Ensure that you submit all the
                      required documents, including your portfolio, academic
                      transcripts, and a Statement of Purpose (SOP), which
                      should outline your artistic journey and long-term career
                      goals in the art world.
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
                      What is the Duration of the BFA in Fine Arts Program?
                    </Accordion.Header>
                    <Accordion.Body className="programfaq-faq-body">
                      The BFA in Fine Arts is a 3-year full-time program
                      designed to provide both practical and theoretical
                      knowledge in the fields of painting, sculpture, digital
                      art, design, and art history.
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
                      leading art galleries, design agencies, museums, and
                      digital art studios. These internships provide hands-on
                      experience in the creative sector, including art curation,
                      design work, and digital arts.
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
