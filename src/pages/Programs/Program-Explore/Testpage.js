import React from "react";
import { Accordion, Button, Card } from "react-bootstrap";
import "./Test.css"; // Importing the external CSS
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Landingpage = () => {
  const [lead, setLead] = useState({
    name: "",
    number: "",
    email: "",
    state: "",
    city: "",
  });

  const handleChange = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lead Submitted:", lead);
    alert("Lead added successfully!");
  };

  return (
    <div>
      <section className="space position-relative">
        <div
          className="bg-img"
          style={{
            backgroundImage: "url('assets/img/update1/bg/bg_overlay_1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img src="assets/img/update1/bg/bg_overlay_1.png" alt="overlay" />
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
              BBA - Data Analytics and Artificial Intelligence
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
                  Data Analytics and Artificial Intelligence
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
                  <img src="assets/banner.png" alt="Scholarship Image" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <h3>Course Overview</h3>
              <div className="product-about">
                <p className="text">
                  Aharada Education is committed to empowering students with
                  opportunities that transform their future. Our scholarship
                  program provides financial support and guidance to help
                  learners achieve their academic goals and unlock their true
                  potential.
                </p>

                <div className="checklist">
                  <ul>
                    <li>50% scholarship for the first 50 students</li>
                    <li>Accessible for a wide range of courses</li>
                    <li>
                      Dedicated mentorship and support throughout the program
                    </li>
                    <li>50% scholarship for the first 50 students</li>
                    <li>50% scholarship for the first 50 students</li>
                  </ul>
                </div>
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
                  Our Awesome <span style={{ color: "#d89e37" }}>Features</span>
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#555",
                  }}
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div
                className="feature-item wow fadeInUp"
                data-wow-delay=".25s"
                style={{
                  padding: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
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
                  01
                </span>

                <div className="feature-content">
                  <h4
                    className="feature-title"
                    style={{ fontSize: "1.25rem", fontWeight: "600" }}
                  >
                    Scholarship Facility
                  </h4>
                  <p style={{ fontSize: "1rem" }}>
                    It is a long established fact that a reader will be
                    distracted.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div
                className="feature-item active wow fadeInDown"
                data-wow-delay=".25s"
                style={{
                  padding: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
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
                  02
                </span>

                <div className="feature-content">
                  <h4
                    className="feature-title"
                    style={{ fontSize: "1.25rem", fontWeight: "600" }}
                  >
                    Skilled Lecturers
                  </h4>
                  <p style={{ fontSize: "1rem" }}>
                    It is a long established fact that a reader will be
                    distracted.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div
                className="feature-item wow fadeInUp"
                data-wow-delay=".25s"
                style={{
                  padding: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
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
                  03
                </span>

                <div className="feature-content">
                  <h4
                    className="feature-title"
                    style={{ fontSize: "1.25rem", fontWeight: "600" }}
                  >
                    Book Library Facility
                  </h4>
                  <p style={{ fontSize: "1rem" }}>
                    It is a long established fact that a reader will be
                    distracted.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div
                className="feature-item wow fadeInUp"
                data-wow-delay=".25s"
                style={{
                  padding: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
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
                  04
                </span>

                <div className="feature-content">
                  <h4
                    className="feature-title"
                    style={{ fontSize: "1.25rem", fontWeight: "600" }}
                  >
                    Affordable Price
                  </h4>
                  <p style={{ fontSize: "1rem" }}>
                    It is a long established fact that a reader will be
                    distracted.
                  </p>
                </div>
              </div>
            </div>
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
                    <form
                      onSubmit={handleSubmit}
                      style={{ display: "grid", gap: "16px" }}
                    >
                      <input
                        type="text"
                        name="name"
                        value={lead.name}
                        onChange={handleChange}
                        placeholder="Enter Name"
                        style={{
                          border: "1px solid #ccc",
                          padding: "10px",
                          borderRadius: "8px",
                          fontSize: "16px",
                        }}
                      />
                      <input
                        type="tel"
                        name="number"
                        value={lead.number}
                        onChange={handleChange}
                        placeholder="Enter Number"
                        style={{
                          border: "1px solid #ccc",
                          padding: "10px",
                          borderRadius: "8px",
                          fontSize: "16px",
                        }}
                      />
                      <input
                        type="email"
                        name="email"
                        value={lead.email}
                        onChange={handleChange}
                        placeholder="Enter Email"
                        style={{
                          border: "1px solid #ccc",
                          padding: "10px",
                          borderRadius: "8px",
                          fontSize: "16px",
                        }}
                      />
                      <input
                        type="text"
                        name="state"
                        value={lead.state}
                        onChange={handleChange}
                        placeholder="Enter State"
                        style={{
                          border: "1px solid #ccc",
                          padding: "10px",
                          borderRadius: "8px",
                          fontSize: "16px",
                        }}
                      />
                      <input
                        type="text"
                        name="city"
                        value={lead.city}
                        onChange={handleChange}
                        placeholder="Enter City"
                        style={{
                          border: "1px solid #ccc",
                          padding: "10px",
                          borderRadius: "8px",
                          fontSize: "16px",
                        }}
                      />
                      <button
                        type="submit"
                        style={{
                          backgroundColor: "#d89e37",
                          color: "white",
                          padding: "10px",
                          borderRadius: "8px",
                          fontSize: "16px",
                          cursor: "pointer",
                          border: "none",
                        }}
                      >
                        Submit
                      </button>
                    </form>
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
                      src="assets/images/6.png"
                      alt="thumb"
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
                      Business And Finance
                    </h3>
                    <p
                      className="mb-20"
                      style={{ fontSize: "1rem", lineHeight: "1.6" }}
                    >
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt.
                    </p>
                    <p
                      className="mb-20"
                      style={{ fontSize: "1rem", lineHeight: "1.6" }}
                    >
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself, because it is
                      pleasure, but because those who do not know how to pursue
                      pleasure rationally encounter consequences that are
                      extremely painful.
                    </p>
                    <div className="row">
                      <div className="col-md-6 mb-20">
                        <img
                          src="assets/img/department/01.jpg"
                          alt=""
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                      <div className="col-md-6 mb-20">
                        <img
                          src="assets/img/department/02.jpg"
                          alt=""
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                    </div>

                    <div style={{ marginTop: "-30px" }}>
                      <div>
                        <h3
                          className="mb-3"
                          style={{ fontSize: "1.75rem", fontWeight: "bold" }}
                        >
                          How To Prepare For The Exam
                        </h3>
                        <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                          Aliquam facilisis rhoncus nunc, non vestibulum mauris
                          volutpat non. Vivamus tincidunt accumsan urna, vel
                          aliquet nunc commodo tristique. Nulla facilisi.
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
                          Fusce justo risus placerat in risus eget tincidunt
                          consequat elit.
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
                          Nunc fermentum sem sit amet dolor laoreet placerat.
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
                          Nullam rhoncus dictum diam quis ultrices.
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
                          Integer quis lorem est uspendisse eu augue porta
                          ullamcorper dictum.
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
                          Quisque tristique neque arcu ut venenatis felis
                          malesuada et.
                        </li>
                      </ul>
                    </div>
                    <div className="my-4">
                      <h3
                        className="mb-3"
                        style={{ fontSize: "1.75rem", fontWeight: "bold" }}
                      >
                        Admission In Business And Finance
                      </h3>
                      <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                        Quisque a nisl id sem sollicitudin volutpat. Cras et
                        commodo quam, vel congue ligula. Orci varius natoque
                        penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus.
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
              background: "linear-gradient(to bottom, #fdfbf9, #f4ebdd)",
            }}
          >
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="content-info wow fadeInUp"
                  data-wow-delay=".25s"
                  style={{
                    padding: "30px",
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
                      Aharada Education.
                    </h2>
                  </div>
                  <p
                    className="content-text"
                    style={{ fontSize: "1rem", lineHeight: "1.6" }}
                  >
                    There are many variations of passages available but the
                    majority have suffered alteration in some form by injected
                    humour randomised words which don't look even slightly
                    believable. If you are going to use passage you need sure
                    there anything embarrassing first true generator on the
                    Internet.
                  </p>

                  <p
                    className="content-text mt-2"
                    style={{ fontSize: "1rem", lineHeight: "1.6" }}
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium veritatis et quasi architecto beatae
                    vitae dicta sunt explicabo.
                  </p>

                  <div className="row my-3">
                    <div className="col-md-6">
                      <ul
                        className="content-list"
                        style={{ paddingLeft: "20px" }}
                      >
                        <li style={{ marginBottom: "10px", fontSize: "1rem" }}>
                          <i
                            className="fas fa-check-circle"
                            style={{ marginRight: "10px", color: "#28a745" }}
                          />
                          Start Online Submission
                        </li>
                        <li style={{ marginBottom: "10px", fontSize: "1rem" }}>
                          <i
                            className="fas fa-check-circle"
                            style={{ marginRight: "10px", color: "#28a745" }}
                          />
                          Submit The Form
                        </li>
                        <li style={{ marginBottom: "10px", fontSize: "1rem" }}>
                          <i
                            className="fas fa-check-circle"
                            style={{ marginRight: "10px", color: "#28a745" }}
                          />
                          Review The Submission
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul
                        className="content-list"
                        style={{ paddingLeft: "20px" }}
                      >
                        <li style={{ marginBottom: "10px", fontSize: "1rem" }}>
                          <i
                            className="fas fa-check-circle"
                            style={{ marginRight: "10px", color: "#28a745" }}
                          />
                          Gather Necessary Documents
                        </li>
                        <li style={{ marginBottom: "10px", fontSize: "1rem" }}>
                          <i
                            className="fas fa-check-circle"
                            style={{ marginRight: "10px", color: "#28a745" }}
                          />
                          Interviewing Process
                        </li>
                        <li style={{ marginBottom: "10px", fontSize: "1rem" }}>
                          <i
                            className="fas fa-check-circle"
                            style={{ marginRight: "10px", color: "#28a745" }}
                          />
                          Last Decision
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="content-btn">
                    <a
                      href="#"
                      className="theme-btn"
                      style={{
                        display: "inline-block",
                        padding: "12px 20px",
                        backgroundColor: "#d89e37",
                        color: "#fff",
                        borderRadius: "5px",
                        textDecoration: "none",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        transition: "background-color 0.3s",
                      }}
                    >
                      Apply Now
                      <i
                        className="fas fa-arrow-right-long"
                        style={{ marginLeft: "10px", fontSize: "1.2rem" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="content-img wow fadeInRight"
                  style={{
                    padding: "0px",
                    borderRadius: "8px",
                  }}
                >
                  <img
                    src="assets/images/1.png"
                    alt=""
                    style={{
                      width: "100%",
                      height: "500px",

                      borderRadius: "8px",
                    }}
                  />
                </div>
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
              <div className="row">
                <div className="col-lg-6">
                  <div className="details-left">
                    <h3
                      className="mb-3"
                      style={{ fontSize: "1.75rem", fontWeight: "600" }}
                    >
                      Things To Know First
                    </h3>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                    <p
                      className="mt-2"
                      style={{ fontSize: "1rem", lineHeight: "1.6" }}
                    >
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using Content here content here making it look
                      like readable English.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="details-right">
                    <h3
                      className="mb-3"
                      style={{ fontSize: "1.75rem", fontWeight: "600" }}
                    >
                      Documents And Financial Aid
                    </h3>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.
                    </p>
                    <ul
                      className="content-list mt-2"
                      style={{ paddingLeft: "20px" }}
                    >
                      <li style={{ marginBottom: "10px", fontSize: "1rem" }}>
                        <i
                          className="fas fa-check-circle"
                          style={{ marginRight: "10px", color: "#28a745" }}
                        />
                        Sed ut perspiciatis unde omnis iste natus error sit
                        doloremque laudantium.
                      </li>
                      <li style={{ marginBottom: "10px", fontSize: "1rem" }}>
                        <i
                          className="fas fa-check-circle"
                          style={{ marginRight: "10px", color: "#28a745" }}
                        />
                        Totam rem aperiam eaque ipsa quae ab illo inventore
                        veritatis.
                      </li>
                      <li style={{ marginBottom: "10px", fontSize: "1rem" }}>
                        <i
                          className="fas fa-check-circle"
                          style={{ marginRight: "10px", color: "#28a745" }}
                        />
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit.
                      </li>
                      <li style={{ marginBottom: "10px", fontSize: "1rem" }}>
                        <i
                          className="fas fa-check-circle"
                          style={{ marginRight: "10px", color: "#28a745" }}
                        />
                        Dolores eos qui ratione voluptatem sequi nesciunte porro
                        quisquam est.
                      </li>
                      <li style={{ marginBottom: "10px", fontSize: "1rem" }}>
                        <i
                          className="fas fa-check-circle"
                          style={{ marginRight: "10px", color: "#28a745" }}
                        />
                        Adipisci velit sed quia non numquam eius modi tempora
                        incidunt.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="tuition-wrap">
          <div style={{ marginBottom: "20px", marginTop: "40px" }}>
            <h3
              style={{
                marginBottom: "20px",
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              What Our Tuition Fees
            </h3>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                marginBottom: "30px",
              }}
            >
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat.
            </p>
          </div>
          <div className="tuition-fee-table">
            <h4
              style={{
                marginBottom: "15px",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              Faculty of Science and Information Technology
            </h4>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      Fees Type
                    </th>
                    <th
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      Credit
                    </th>
                    <th
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      Duration
                    </th>
                    <th
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      Semester
                    </th>
                    <th
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      Admission Fee
                    </th>
                    <th
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      Other Fees
                    </th>
                    <th
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      Total Fees
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      Domestic
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      60
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      4 Years
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      4 Months
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      $2,000
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      $5,000
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      $25,000
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      International
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      70
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      4 Years
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      4 Months
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      $5,000
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      $15,000
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      $50,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      Fees Type
                    </th>
                    <th
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      Credit
                    </th>
                    <th
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      Duration
                    </th>
                    <th
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      Semester
                    </th>
                    <th
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      Admission Fee
                    </th>
                    <th
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      Other Fees
                    </th>
                    <th
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      Total Fees
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      Domestic
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      60
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      1-2 Years
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      4 Months
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      $2,000
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      $5,000
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      $25,000
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      International
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      70
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      1-2 Years
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      4 Months
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      $5,000
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      $15,000
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        border: "1px solid #ddd",
                      }}
                    >
                      $50,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div style={{ marginTop: "30px", marginBottom: "20px" }}>
            <h3
              style={{
                marginBottom: "20px",
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              Download Our All Program Tuition Fees
            </h3>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                marginBottom: "30px",
              }}
            >
              Vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="scholarship-content">
          <div className="scholarship-img">
            <img
              src="assets/img/scholarship/01.jpg"
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ marginBottom: "15px" }}>Scholarships</h3>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                marginBottom: "30px",
              }}
            >
              We are the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain. These cases are perfectly simple and easy to distinguish. In
              a free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best, every
              pleasure is to be welcomed and every pain avoided. But in certain
              circumstances and owing to the claims of duty or the obligations
              of business it will frequently occur that pleasures have to be
              repudiated and annoyances accepted.
            </p>
          </div>
          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ marginBottom: "30px" }}>Scholarships Sources</h3>
            <div className="row">
              <div className="col-lg-4">
                <div className="scholarship-item">
                  <div className="scholarship-icon">
                    <img
                      src="assets/img/icon/scholarship.svg"
                      alt=""
                      style={{ width: "40px", height: "auto" }}
                    />
                  </div>
                  <h4>Aharada Scholarships</h4>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    There are many variations of passages available but the
                    majority have suffered alteration in some form by injected
                    humour randomised words which don't look even slightly
                    believable.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="scholarship-item">
                  <div className="scholarship-icon">
                    <img
                      src="assets/img/icon/scholarship-2.svg"
                      alt=""
                      style={{ width: "40px", height: "auto" }}
                    />
                  </div>
                  <h4>Talent Hunt Scholarship</h4>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    There are many variations of passages available but the
                    majority have suffered alteration in some form by injected
                    humour randomised words which don't look even slightly
                    believable.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="scholarship-item">
                  <div className="scholarship-icon">
                    <img
                      src="assets/img/icon/scholarship-3.svg"
                      alt=""
                      style={{ width: "40px", height: "auto" }}
                    />
                  </div>
                  <h4>State Scholarships</h4>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    There are many variations of passages available but the
                    majority have suffered alteration in some form by injected
                    humour randomised words which don't look even slightly
                    believable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scholarship Details */}
        <div style={{ paddingBottom: "80px" }}>
          <div className="container">
            <div className="details-wrapper">
              <div className="row">
                <div className="col-lg-6">
                  <div className="details-item">
                    <h3 style={{ marginBottom: "15px" }}>
                      Guidance and Advice
                    </h3>
                    <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered.
                    </p>
                    <a
                      href="#"
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
                      Apply For Scholarship{" "}
                      <i className="fas fa-arrow-right-long" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="details-item">
                    <h3 style={{ marginBottom: "15px" }}>
                      Scholarships Requirements
                    </h3>

                    <ul
                      style={{
                        marginTop: "10px",
                        listStyleType: "none",
                        paddingLeft: "0",
                      }}
                    >
                      <li style={{ fontSize: "16px" }}>
                        <i className="fas fa-check-circle" /> Sed ut
                        perspiciatis unde omnis iste natus error sit doloremque
                        laudantium.
                      </li>
                      <li style={{ fontSize: "16px" }}>
                        <i className="fas fa-check-circle" /> Totam rem aperiam
                        eaque ipsa quae ab illo inventore veritatis.
                      </li>
                      <li style={{ fontSize: "16px" }}>
                        <i className="fas fa-check-circle" /> Nemo enim ipsam
                        voluptatem quia voluptas sit aspernatur aut odit.
                      </li>
                      <li style={{ fontSize: "16px" }}>
                        <i className="fas fa-check-circle" /> Dolores eos qui
                        ratione voluptatem sequi nesciunte porro quisquam est.
                      </li>
                      <li style={{ fontSize: "16px" }}>
                        <i className="fas fa-check-circle" /> Etos qui ratione
                        voluptatem sequi nesciunte porro quisquam est.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even.
                </p>
                <p className="programfaq-faq-description">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit.
                </p>
                <Button
                  variant="warning"
                  className="mt-2 programfaq-faq-button"
                >
                  Have Any Question?
                </Button>
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
                        <i className="far fa-question" />
                      </span>
                      How Can I Apply?
                    </Accordion.Header>
                    <Accordion.Body className="programfaq-faq-body">
                      We denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment, so blinded by desire ante odio dignissim
                      quam vitae pulvinar turpis.
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <Card className="programfaq-faq-card">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="programfaq-faq-header">
                      <span>
                        <i className="far fa-question" />
                      </span>
                      How Can I Become A Member?
                    </Accordion.Header>
                    <Accordion.Body className="programfaq-faq-body">
                      We denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment, so blinded by desire ante odio dignissim
                      quam vitae pulvinar turpis.
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <Card className="programfaq-faq-card">
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className="programfaq-faq-header">
                      <span>
                        <i className="far fa-question" />
                      </span>
                      What Payment Gateway Do You Support?
                    </Accordion.Header>
                    <Accordion.Body className="programfaq-faq-body">
                      We denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment, so blinded by desire ante odio dignissim
                      quam vitae pulvinar turpis.
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <Card className="programfaq-faq-card">
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className="programfaq-faq-header">
                      <span>
                        <i className="far fa-question" />
                      </span>
                      How Can I Cancel My Request?
                    </Accordion.Header>
                    <Accordion.Body className="programfaq-faq-body">
                      We denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment, so blinded by desire ante odio dignissim
                      quam vitae pulvinar turpis.
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
