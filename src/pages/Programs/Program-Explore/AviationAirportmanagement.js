import React, { useState } from "react";
import "./ai.css";
import { useNavigate } from "react-router-dom";

import {
  FaGraduationCap,
  FaRegCheckCircle,
  FaPlane,
  FaBriefcase,
  FaGlobe,
  FaGlobeAmericas,
  FaMoneyBillWave,
  FaUserTie,
  FaBuilding,
  FaQuestionCircle,
  FaInfoCircle,
  FaLightbulb,
  FaCheckCircle,
  FaUniversity,
  FaDollarSign,
  FaCertificate,
  FaBookOpen,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import Testimonials from "../../../components/Testimonials/Testimonials";
import Feedback from "../../Home/component/Feedback";
import Course from "../../Home/component/CouseOffer";

const offerings = [
  {
    text: "In-depth training in airport management, airline operations, and aviation logistics",
    icon: <FaPlane />,
  },
  {
    text: "Exciting career paths in airport operations, airline management, air cargo, and aviation consultancy",
    icon: <FaChartLine />,
  },
  {
    text: "Hands-on internships and live projects with top airlines, airports, and aviation firms",
    icon: <FaBriefcase />,
  },
  {
    text: "Exposure to the latest aviation industry trends, safety protocols, and regulatory policies",
    icon: <FaLightbulb />,
  },
  {
    text: "Industry-aligned curriculum with real-world case studies and practical simulations",
    icon: <FaBookOpen />,
  },
  {
    text: "Recognized certifications in Airline Management, IATA programs, and Aviation Safety & Security",
    icon: <FaCertificate />,
  },
  {
    text: "Enhancement of leadership, soft skills, and strategic decision-making for aviation professionals",
    icon: <FaUsers />,
  },
];

const whoCanDoMCA = [
  {
    text: "Students who have completed 10+2 (any stream) with a passion for aviation and airport management",
    icon: "⭐",
  },
  {
    text: "Aspirants interested in careers in airline operations, airport management, and aviation business strategy",
    icon: "⭐",
  },
  {
    text: "Minimum 50% marks in 10+2 (eligibility criteria may vary by institution)",
    icon: "⭐",
  },
  {
    text: "Individuals aiming for roles in aviation logistics, air transport management, and airline customer service",
    icon: "⭐",
  },
];

const companyPartners = [
  {
    id: 1,
    logo: "assets/placement/American - Logo.png",
    name: "American",
  },
  { id: 2, logo: "assets/placement/AISATS - logo.png", name: "AISATS" },
  {
    id: 3,
    logo: "assets/placement/Arabian Vibes Logo.jpeg",
    name: "Arabian Vibes",
  },
  { id: 4, logo: "assets/placement/Celebi- Logo.jpeg", name: "Celebi" },
  {
    id: 5,
    logo: "assets/placement/Delhi Duty Free - Logo.png",
    name: "Delhi Duty",
  },
  {
    id: 6,
    logo: "assets/placement/Drone Stark Logo.png",
    name: "American",
  },
  { id: 7, logo: "assets/placement/Eniva Logo.svg", name: "AISATS" },
  {
    id: 8,
    logo: "assets/placement/GMR- logo.png",
    name: "Arabian Vibes",
  },
  { id: 9, logo: "assets/placement/Indigo - Logo.png", name: "Celebi" },
  {
    id: 10,
    logo: "assets/placement/IRSLogo.png",
    name: "IRS Logo ",
  },
  {
    id: 11,
    logo: "assets/placement/Leela Travels Logo.png",
    name: "American",
  },
  { id: 12, logo: "assets/placement/Ocube Logo.jpeg", name: "AISATS" },
  {
    id: 13,
    logo: "assets/placement/OH! Puhleeez Logo.jpeg",
    name: "Arabian Vibes",
  },
  { id: 14, logo: "assets/placement/Omullane - Logo.png", name: "Celebi" },
  {
    id: 15,
    logo: "assets/placement/phs logo.png",
    name: "Delhi Duty",
  },
  {
    id: 16,
    logo: "assets/placement/Qatar- Logo.jpeg",
    name: "American",
  },
  {
    id: 17,
    logo: "assets/placement/Teleperformance Logo.png",
    name: "AISATS",
  },
  {
    id: 18,
    logo: "assets/placement/Vimaana - Logo.jpeg",
    name: "Arabian Vibes",
  },
];

const mcaSummary = [
  {
    icon: <FaGraduationCap />,
    text: "The full form of BBA - Aviation & Airport Management is Bachelor of Business Administration in Aviation & Airport Management, an undergraduate program focused on airport operations, airline management, and aviation business strategies.",
  },
  {
    icon: <FaUniversity />,
    text: "This course is ideal for students aspiring to build careers in airport management, airline operations, aviation logistics, and ground handling services.",
  },
  {
    icon: <FaCheckCircle />,
    text: "A regular BBA - Aviation & Airport Management course duration is 3 years, divided into 6 semesters, including internships, industry projects, and case studies.",
  },
  {
    icon: <FaDollarSign />,
    text: "The average starting salary for graduates in this field ranges from 3-8 Lakhs per year, depending on job roles, skills, and employer.",
  },
  {
    icon: <FaLightbulb />,
    text: "Career opportunities include roles in airport management, airline customer service, air cargo operations, ground staff management, and aviation safety compliance.",
  },
  {
    icon: <FaBuilding />,
    text: "Top recruiters in this field include airlines like Indigo, Air India, SpiceJet, global airport operators, logistics companies, and aviation consultancy firms.",
  },
];

const campuses = [
  //   {
  //     name: "IIMT University, Meerut",
  //     program: "MCA Program | UGC approved",
  //     specialisations: 6,
  //     certifications: 10,
  //     fees: "₹ 3.40 Lacs",
  //     images: [
  //       "assets/placement/iimt1.jpg",
  //       "assets/placement/iimt2.jpg",
  //       "assets/placement/iimt3.jpg",
  //     ],
  //   },
  //   {
  //     name: "SAGE University Indore",
  //     program: "MCA Program | UGC recognised",
  //     specialisations: 3,
  //     certifications: 10,
  //     fees: "₹ 3.88 Lacs",
  //     images: [
  //       "assets/placement/sage1.jpg",
  //       "assets/placement/sage2.jpg",
  //       "assets/placement/sage3.webp",
  //     ],
  //   },
  {
    name: "Subharti University, Meerut",
    program: "BBA Program | UGC recognised",
    specialisations: 6,
    certifications: 10,
    fees: "₹ 3.10 Lacs",
    images: [
      "assets/placement/Subharti1.webp",
      "assets/placement/Subharti1.webp",
      "assets/placement/Subharti3.png",
    ],
  },
  {
    name: "Dev Bhoomi Uttarakhand University",
    program: "BBA Program | AICTE approved",
    specialisations: 4,
    certifications: 8,
    fees: "₹ 4.00 Lacs",
    images: [
      "assets/placement/dev1.jpeg",
      "assets/placement/dev1.jpeg",
      "assets/placement/dev3.jpg",
    ],
  },
];

const campusSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const imageSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  arrows: false,
};

const AviationAirportmanagement = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();
  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  const handleBookingClick = () => {
    navigate("/contact");
  };

  return (
    <>
      <div className="mca-highlights-container">
        <h1 className="mca-title">
          BBA - Aviation & Airport Management Highlights
        </h1>
        <p className="mca-description">
          Gain in-depth knowledge of aviation business operations, airport
          management, airline logistics, and customer service, preparing you for
          leadership roles in the global aviation industry.
        </p>
        <div className="highlight-cards">
          <div className="highlight-card">
            <p className="highlight-number">3</p>
            <p className="highlight-text">YEAR FULL-TIME PROGRAM</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">40+</p>
            <p className="highlight-text">RECRUITMENT PARTNERS</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">7+</p>
            <p className="highlight-text">INDUSTRY CERTIFICATIONS</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">3</p>
            <p className="highlight-text">INTERNSHIPS & LIVE PROJECTS</p>
          </div>
        </div>
      </div>

      <div className="course-Overview-container">
        <h1 className="mca-title">Course Overview</h1>
        <p className="mca-description">
          The BBA in Aviation & Airport Management is a professional degree
          designed for students aiming to build a career in the aviation and
          airline industry. The program focuses on airport operations, airline
          management, aviation safety, customer service, and regulatory
          compliance. It prepares students for managerial and operational roles
          in airports, airlines, and aviation service providers.
        </p>
      </div>

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
              to="../../assets/img/Aharada Brochure.pdf"
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

      <div className="key-offerings-container">
        <div className="key-offerings">
          <h1 className="offerings-title">Key Offerings</h1>
          <div className="offerings-list">
            <div className="offerings-left">
              {offerings.slice(0, 3).map((offering, index) => (
                <div className="offering-item" key={index}>
                  <span className="offering-icon">{offering.icon}</span>
                  <span className="offering-text">{offering.text}</span>
                </div>
              ))}
            </div>
            <div className="offerings-right">
              {offerings.slice(3, 6).map((offering, index) => (
                <div className="offering-item" key={index + 3}>
                  <span className="offering-icon">{offering.icon}</span>
                  <span className="offering-text">{offering.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="who-can-do-mca">
          <h1 className="who-can-do-title">
            Who can do BBA - Aviation & Airport Management?
          </h1>
          <div className="mca-criteria">
            <div className="criteria-left">
              {whoCanDoMCA.slice(0, 4).map((criteria, index) => (
                <div className="criteria-item" key={index}>
                  <span className="criteria-icon">{criteria.icon}</span>
                  <span className="criteria-text">{criteria.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="course-curriculum-container">
        <h1 className="mca-title">Course Curriculum</h1>

        <div className="curriculum-section">
          <h4>Year 1: Fundamentals of Aviation & Management</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Introduction to Aviation Industry</li>
                <li>Principles of Management & Organizational Behavior</li>
                <li>Basics of Airport & Airline Operations</li>
                <li>Aviation Safety & Security Regulations</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Business Communication & Soft Skills</li>
                <li>Fundamentals of Accounting & Economics</li>
                <li>Customer Service in Aviation</li>
                <li>Air Traffic Control & Navigation Systems</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 2: Core Aviation & Airport Operations</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Airport Terminal & Ground Handling Management</li>
                <li>Airline Operations & Revenue Management</li>
                <li>Aviation Law & Regulatory Compliance (DGCA, IATA, ICAO)</li>
                <li>Aircraft Maintenance & Safety Procedures</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Logistics & Cargo Management in Aviation</li>
                <li>Airport Security & Risk Management</li>
                <li>Marketing & Branding in Aviation</li>
                <li>Practical Training at Airports / Airlines</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 3: Advanced Aviation Management & Strategy</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Strategic Airline & Airport Management</li>
                <li>Human Resource Management in Aviation</li>
                <li>Crisis Management & Emergency Planning in Airports</li>
                <li>Airport Planning & Infrastructure Management</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Aviation IT & Digital Transformation</li>
                <li>Environmental Sustainability in Aviation</li>
                <li>Research Project / Capstone Project</li>
                <li>Internship & Industrial Training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="key-highlights-container">
        <h1 className="mca-title">Key Highlights</h1>
        <ul>
          <li>Practical Training at Airports & Airlines ✈️</li>
          <li>Industry Exposure through Aviation Experts & Seminars</li>
          <li>Hands-on Experience in Aviation Management Software</li>
          <li>Internship Opportunities with Leading Airlines & Airports 🌍</li>
          <li>Placement Assistance with Aviation Companies</li>
        </ul>
      </div>

      <div className="career-opportunities-container">
        <h1 className="mca-title">Career Opportunities</h1>
        <ul>
          <li>Airline & Airport Manager</li>
          <li>Air Traffic Controller</li>
          <li>Flight Operations Manager</li>
          <li>Airport Ground Services & Cargo Manager</li>
          <li>Aviation Safety & Security Officer</li>
          <li>Aviation Consultant & Airline Customer Service Manager</li>
        </ul>
        <p>
          Top Recruiters: Airports, Airlines, Cargo Companies, Aviation
          Consulting Firms, Ground Handling Agencies, Government Aviation
          Departments
        </p>
      </div>

      <section className="partners-section py-5">
        <div className="container">
          <h3 className="text-left">Our Placement Partners</h3>
          <div className="row">
            {companyPartners.map((partner) => (
              <div key={partner.id} className="col-md-2 col-4 mb-4">
                <div className="partner-logo">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="img-fluid"
                    style={{
                      height: "150px",
                      objectFit: "contain",
                      margin: "0 5px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mca-page">
        <div className="key-offerings">
          <h1 className="offerings-title">
            BBA - Aviation & Airport Management Summary
          </h1>
          <div className="offerings-list">
            <div className="offerings-left">
              {mcaSummary.slice(0, 3).map((mcaSummary, index) => (
                <div className="offering-item" key={index}>
                  <span className="offering-icon">{mcaSummary.icon}</span>
                  <span className="offering-text">{mcaSummary.text}</span>
                </div>
              ))}
            </div>
            <div className="offerings-right">
              {mcaSummary.slice(3, 6).map((mcaSummary, index) => (
                <div className="offering-item" key={index + 3}>
                  <span className="offering-icon">{mcaSummary.icon}</span>
                  <span className="offering-text">{mcaSummary.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="faq-section">
          <h1 className="offerings-title">Frequently Asked Questions</h1>

          <div className="accordion">
            {/* What are the career opportunities in airport management? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(0)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>
                  1. What are the career opportunities in airport management?
                </p>
              </div>
              {activeIndex === 0 && (
                <div className="accordion-body">
                  Graduates can explore career opportunities in:
                  <ul>
                    <li>Airport Operations & Management</li>
                    <li>Airline Customer Service & Ground Handling</li>
                    <li>Cargo & Logistics Management</li>
                    <li>Air Traffic Control Coordination</li>
                    <li>Aviation Safety & Security Management</li>
                    <li>Airline Revenue & Ticketing Management</li>
                    <li>Airport Retail & Hospitality Management</li>
                    <li>Entrepreneurship in Aviation Services</li>
                  </ul>
                </div>
              )}
            </div>

            {/* What are the subjects covered in this course? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(1)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>2. What are the subjects covered in this course?</p>
              </div>
              {activeIndex === 1 && (
                <div className="accordion-body">
                  The key subjects covered in this program include:
                  <ul>
                    <li>Aviation Industry Overview & Regulations</li>
                    <li>Airport & Airline Operations Management</li>
                    <li>Airline Marketing & Revenue Management</li>
                    <li>Ground Handling & Passenger Services</li>
                    <li>Logistics & Cargo Management</li>
                    <li>Air Traffic Control & Safety Regulations</li>
                    <li>Customer Service & Communication in Aviation</li>
                    <li>Business & Financial Management in Aviation</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Are there practical training sessions? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(2)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>3. Are there practical training sessions?</p>
              </div>
              {activeIndex === 2 && (
                <div className="accordion-body">
                  Yes! Many programs include airport visits, simulations, and
                  hands-on training. Students may also participate in case
                  studies and aviation management workshops. Some universities
                  have tie-ups with airlines, airports, and aviation service
                  providers for practical exposure.
                </div>
              )}
            </div>

            {/* What skills will I gain from this program? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(3)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>4. What skills will I gain from this program?</p>
              </div>
              {activeIndex === 3 && (
                <div className="accordion-body">
                  This program develops essential skills such as:
                  <ul>
                    <li>
                      Leadership & Decision-Making Skills (Airport Operations,
                      Team Management)
                    </li>
                    <li>
                      Customer Service & Communication Skills (Passenger
                      Handling, Conflict Resolution)
                    </li>
                    <li>
                      Technical Knowledge of Aviation Operations (Safety
                      Regulations, Ground Handling)
                    </li>
                    <li>
                      Logistics & Resource Management (Cargo & Baggage Handling)
                    </li>
                    <li>
                      Crisis & Emergency Management (Security & Safety
                      Procedures)
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* What job roles can I pursue after graduation? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(4)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>5. What job roles can I pursue after graduation?</p>
              </div>
              {activeIndex === 4 && (
                <div className="accordion-body">
                  Graduates can pursue the following job roles:
                  <ul>
                    <li>Airport Manager / Operations Manager</li>
                    <li>Airline Customer Service Manager</li>
                    <li>Ground Handling & Passenger Service Agent</li>
                    <li>Cargo & Logistics Coordinator</li>
                    <li>Airline Revenue & Ticketing Officer</li>
                    <li>Aviation Safety & Security Officer</li>
                    <li>Air Traffic Control Assistant</li>
                  </ul>
                </div>
              )}
            </div>

            {/* What is the salary range after completing this course? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(5)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>6. What is the salary range after completing this course?</p>
              </div>
              {activeIndex === 5 && (
                <div className="accordion-body">
                  The starting salary varies based on job role and location:
                  <ul>
                    <li>
                      Entry-level positions: ₹3-6 LPA (India) / $35,000-$50,000
                      per year (International)
                    </li>
                    <li>
                      Mid-level positions: ₹8-15 LPA (India) / $60,000-$80,000
                      per year (International)
                    </li>
                    <li>
                      With experience, professionals can earn higher salaries in
                      managerial roles
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="campus-section">
        <h2 className="main-title">Partner Campuses</h2>
        <h3 className="main-subtitle">Choose from 4+ campuses across India</h3>
        <Slider {...campusSettings} className="campus-sliders">
          {campuses.map((campus, index) => (
            <div key={index} className={`campus-card campus-card-${index}`}>
              <div className="image-slider-container">
                <Slider {...imageSettings} className={`image-slider-${index}`}>
                  {campus.images.map((image, idx) => (
                    <div key={idx} className="image-slide">
                      <img
                        src={image}
                        alt={`${campus.name} image ${idx + 1}`}
                        className={`campus-image-${index}-${idx}`}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="campus-info">
                <h4 className="campus-name">{campus.name}</h4>
                <p className="main-program">{campus.program}</p>

                <button className="th-btn style3" onClick={handleBookingClick}>
                  Book College Tour{" "}
                  <i className="fas fa-long-arrow-right ms-2" />
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Course />
      <div style={{ marginTop: "50px" }}>
        <Feedback />
      </div>

      <Testimonials />
    </>
  );
};

export default AviationAirportmanagement;
