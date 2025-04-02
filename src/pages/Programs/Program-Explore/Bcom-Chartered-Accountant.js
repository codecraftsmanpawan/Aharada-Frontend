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
  FaRocket,
  FaCogs,
  FaSatellite,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import Testimonials from "../../../components/Testimonials/Testimonials";
import Feedback from "../../Home/component/Feedback";
import Course from "../../Home/component/CouseOffer";

const offerings = [
  {
    text: "Comprehensive understanding of accounting principles, auditing, and taxation",
    icon: <FaBookOpen />,
  },
  {
    text: "Practical training with real-world financial reporting and analysis",
    icon: <FaDollarSign />,
  },
  {
    text: "Hands-on internships at reputed accounting and finance firms",
    icon: <FaBriefcase />,
  },
  {
    text: "Exposure to regulatory frameworks and compliance standards",
    icon: <FaGlobeAmericas />,
  },
  {
    text: "Industry-aligned curriculum with recognized professional certifications",
    icon: <FaCertificate />,
  },
  {
    text: "Development of analytical, problem-solving, and leadership skills",
    icon: <FaUserTie />,
  },
  {
    text: "Preparation for professional exams in chartered accountancy",
    icon: <FaUniversity />,
  },
];

const whoCanDo = [
  {
    text: "Students with a background in commerce, economics, or business studies",
    icon: "📊",
  },
  {
    text: "Aspirants with strong numerical, analytical, and communication skills",
    icon: "💡",
  },
  {
    text: "Individuals aiming for careers in auditing, taxation, and financial management",
    icon: "📈",
  },
  {
    text: "Candidates committed to pursuing professional certification in chartered accountancy",
    icon: "🏆",
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
    icon: <FaBookOpen />,
    text: "BCom in Chartered Accountancy equips students with a robust foundation in accounting, auditing, and taxation.",
  },
  {
    icon: <FaUniversity />,
    text: "The program integrates academic excellence with professional training, preparing graduates for chartered accountancy exams.",
  },
  {
    icon: <FaCheckCircle />,
    text: "Typically a 3-year program featuring live projects, internships, and rigorous training sessions.",
  },
  {
    icon: <FaDollarSign />,
    text: "Graduates can expect competitive salaries and diverse career opportunities in top accounting firms.",
  },
  {
    icon: <FaLightbulb />,
    text: "Career roles include Auditor, Tax Consultant, Financial Analyst, and Management Accountant.",
  },
  {
    icon: <FaBuilding />,
    text: "Top recruiters include multinational accounting firms and corporate finance departments.",
  },
];

const campuses = [
  {
    name: "Vidya University, Meerut",
    program: "B.Com - CA | UGC recognised",
    specialisations: 3,
    certifications: 10,
    fees: "₹ 3.88 Lacs",
    images: [
      "assets/placement/vidya1.jpg",
      "assets/placement/vidya1.jpg",
      "assets/placement/vidya1.jpg",
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

const BcomCharteredAccountant = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleBookingClick = () => {
    navigate("/contact");
  };

  return (
    <>
      <div className="mca-highlights-container">
        <h1 className="mca-title">B.Com Chartered Accountant Highlights</h1>
        <p className="mca-description">
          Gain a comprehensive understanding of accounting, auditing, taxation,
          and financial management with our integrated B.Com Chartered
          Accountant program.
        </p>
        <div className="highlight-cards">
          <div className="highlight-card">
            <p className="highlight-number">3</p>
            <p className="highlight-text">YEAR FULL-TIME PROGRAM</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">50+</p>
            <p className="highlight-text">INDUSTRY PARTNERS</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">8+</p>
            <p className="highlight-text">SPECIALIZED CERTIFICATIONS</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">10</p>
            <p className="highlight-text">INTERNSHIPS & LIVE PROJECTS</p>
          </div>
        </div>
      </div>

      <div className="course-Overview-container">
        <h1 className="mca-title">Course Overview</h1>
        <p className="mca-description">
          The B.Com Chartered Accountant program is designed for students
          aspiring to excel in the fields of accounting, auditing, and taxation.
          It combines academic rigor with practical training to prepare you for
          professional certification and a successful career in finance.
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
              <strong>120+</strong>
              <p>Varied job profiles</p>
            </div>
            <div className="stat-box">
              <strong>1000+</strong>
              <p>Unique job opportunities</p>
            </div>
            <div className="stat-box">
              <strong>35%</strong>
              <p>Students with multiple job offers</p>
            </div>
            <Link
              style={{ marginLeft: "40px" }}
              to="../../assets/img/CA.pdf"
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
            Who can pursue B.Com in Chartered Accountancy?
          </h1>
          <div className="mca-criteria">
            <div className="criteria-left">
              {whoCanDo.slice(0, 4).map((criteria, index) => (
                <div className="criteria-item" key={index}>
                  <span className="criteria-icon">{criteria.icon}</span>
                  <span className="criteria-text">{criteria.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Course Curriculum for BCom Chartered Accountant */}
      <div className="course-curriculum-container">
        <h1 className="mca-title">Course Curriculum</h1>

        <div className="curriculum-section">
          <h4>Year 1: Fundamentals of Accounting & Business</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Principles of Financial Accounting</li>
                <li>Business Mathematics & Statistics</li>
                <li>Introduction to Business Law</li>
                <li>Economics for Commerce</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Fundamentals of Management</li>
                <li>Business Communication</li>
                <li>Computer Applications in Accounting</li>
                <li>Basics of Taxation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 2: Core Chartered Accountancy Subjects</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Advanced Financial Accounting</li>
                <li>Auditing and Assurance</li>
                <li>Cost Accounting & Management</li>
                <li>Corporate Law & Governance</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Taxation Laws & Practice</li>
                <li>Financial Management</li>
                <li>Business Ethics & Corporate Social Responsibility</li>
                <li>Information Systems in Accounting</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 3: Advanced Applications & Professional Practice</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Advanced Auditing Techniques</li>
                <li>Strategic Financial Management</li>
                <li>Forensic Accounting</li>
                <li>International Accounting Standards</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Integrated Case Studies & Live Projects</li>
                <li>Professional Ethics & Risk Management</li>
                <li>Preparation for CA Certification Exams</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="key-highlights-container">
        <h1 className="mca-title">Key Highlights</h1>
        <ul>
          <li>Practical training with industry-standard accounting software</li>
          <li>Internships at top accounting and finance firms</li>
          <li>Live projects and case studies to bridge theory and practice</li>
          <li>Expert faculty with extensive industry experience</li>
          <li>Focus on professional certification and career readiness</li>
        </ul>
      </div>

      <div className="career-opportunities-container">
        <h1 className="mca-title">Career Opportunities</h1>
        <ul>
          <li>Auditor</li>
          <li>Tax Consultant</li>
          <li>Financial Analyst</li>
          <li>Management Accountant</li>
          <li>Corporate Finance Advisor</li>
        </ul>
        <p>
          Top Recruiters: Deloitte, KPMG, EY, PwC, Grant Thornton, and leading
          corporate finance departments.
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
            B.Com Chartered Accountant Summary
          </h1>
          <div className="offerings-list">
            <div className="offerings-left">
              {mcaSummary.slice(0, 3).map((item, index) => (
                <div className="offering-item" key={index}>
                  <span className="offering-icon">{item.icon}</span>
                  <span className="offering-text">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="offerings-right">
              {mcaSummary.slice(3, 6).map((item, index) => (
                <div className="offering-item" key={index + 3}>
                  <span className="offering-icon">{item.icon}</span>
                  <span className="offering-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="faq-section">
          <h1 className="offerings-title">Frequently Asked Questions</h1>

          <div className="accordion">
            {/* 1. What is the scope of chartered accountancy? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(0)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>1. What is the scope of chartered accountancy?</p>
              </div>
              {activeIndex === 0 && (
                <div className="accordion-body">
                  Chartered Accountancy offers diverse opportunities in
                  auditing, taxation, financial analysis, and consultancy.
                  Professionals can work in public practice, corporate sectors,
                  or government roles.
                </div>
              )}
            </div>

            {/* 2. What are the key subjects in this course? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(1)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>2. What are the key subjects in this course?</p>
              </div>
              {activeIndex === 1 && (
                <div className="accordion-body">
                  Key subjects include Financial Accounting, Auditing, Taxation,
                  Business Law, and Management Accounting.
                </div>
              )}
            </div>

            {/* 3. Are there opportunities for internships and practical training? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(2)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>
                  3. Are there opportunities for internships and practical
                  training?
                </p>
              </div>
              {activeIndex === 2 && (
                <div className="accordion-body">
                  Yes, the program offers internships with reputed accounting
                  firms and practical workshops on financial reporting and
                  analysis.
                </div>
              )}
            </div>

            {/* 4. Which companies hire Chartered Accountants? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(3)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>4. Which companies hire Chartered Accountants?</p>
              </div>
              {activeIndex === 3 && (
                <div className="accordion-body">
                  Top employers include Deloitte, KPMG, EY, PwC, and major
                  corporations across various industries.
                </div>
              )}
            </div>

            {/* 5. Does the course prepare students for professional certification? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(4)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>
                  5. Does the course prepare students for professional
                  certification?
                </p>
              </div>
              {activeIndex === 4 && (
                <div className="accordion-body">
                  Yes, the curriculum is designed to align with the requirements
                  of professional certification in chartered accountancy.
                </div>
              )}
            </div>

            {/* 6. What are the career prospects after graduation? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(5)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>6. What are the career prospects after graduation?</p>
              </div>
              {activeIndex === 5 && (
                <div className="accordion-body">
                  Graduates can pursue careers as Auditors, Tax Consultants,
                  Financial Analysts, Management Accountants, and Corporate
                  Finance Advisors.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="campus-section">
        <h2 className="main-title">Partner Campuses</h2>
        <h3 className="main-subtitle">
          Choose from 3+ premier campuses nationally
        </h3>
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

export default BcomCharteredAccountant;
