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

// Updated Offerings for BBA-FinTech
const offerings = [
  {
    text: "In-depth knowledge of financial markets, digital banking, and investment strategies",
    icon: <FaMoneyBillWave />,
  },
  {
    text: "Understanding of blockchain, cryptocurrency, and emerging fintech innovations",
    icon: <FaLightbulb />,
  },
  {
    text: "Hands-on experience with financial modeling, data analytics, and risk management",
    icon: <FaBookOpen />,
  },
  {
    text: "Exposure to global financial regulations and compliance standards",
    icon: <FaGlobeAmericas />,
  },
  {
    text: "Industry-aligned curriculum focused on fintech trends and digital transformation",
    icon: <FaCogs />,
  },
  {
    text: "Recognized certifications in financial technology and digital finance",
    icon: <FaCertificate />,
  },
  {
    text: "Development of strategic management, analytical, and leadership skills",
    icon: <FaUserTie />,
  },
];

// Updated criteria for who can pursue BBA-FinTech
const whoCanDoMCA = [
  {
    text: "Students with a background in commerce, economics, or related fields with an interest in finance",
    icon: "💰",
  },
  {
    text: "Aspirants aiming for careers in digital banking, fintech startups, or financial consulting",
    icon: "📈",
  },
  {
    text: "Individuals with strong analytical, quantitative, and problem-solving skills",
    icon: "🧮",
  },
  {
    text: "Candidates eager to embrace emerging technologies in finance",
    icon: "💡",
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
    icon: <FaMoneyBillWave />,
    text: "BBA in Financial Technology equips students with skills in digital finance, fintech innovations, and data-driven decision making.",
  },
  {
    icon: <FaUniversity />,
    text: "The program blends business acumen with technology, preparing graduates for roles in digital banking, financial analytics, and fintech startups.",
  },
  {
    icon: <FaCheckCircle />,
    text: "Typically a 3-year program, it includes practical sessions, live projects, internships, and exposure to global fintech trends.",
  },
  {
    icon: <FaDollarSign />,
    text: "Graduates can expect competitive starting salaries with opportunities in both traditional finance and disruptive fintech sectors.",
  },
  {
    icon: <FaLightbulb />,
    text: "Career opportunities span roles such as digital banking strategist, fintech analyst, blockchain specialist, and financial consultant.",
  },
  {
    icon: <FaBuilding />,
    text: "Top recruiters include major banks, fintech startups, consulting firms, and technology companies driving financial innovation.",
  },
];

const campuses = [
  {
    name: "Vidya Knowledge Park",
    program: "BBA - FinTech | UGC recognised",
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

const BBAFinTech = () => {
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
        <h1 className="mca-title">BBA-FinTech Highlights</h1>
        <p className="mca-description">
          Equip yourself with specialized knowledge in financial technology,
          digital banking, blockchain innovations, and data analytics –
          preparing you for a dynamic career in the fintech industry.
        </p>
        <div className="highlight-cards">
          <div className="highlight-card">
            <p className="highlight-number">3</p>
            <p className="highlight-text">YEAR FULL-TIME PROGRAM</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">40+</p>
            <p className="highlight-text">INDUSTRY PARTNERS</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">8+</p>
            <p className="highlight-text">SPECIALIZED CERTIFICATIONS</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">6</p>
            <p className="highlight-text">INTERNSHIPS & LIVE PROJECTS</p>
          </div>
        </div>
      </div>

      <div className="course-Overview-container">
        <h1 className="mca-title">Course Overview</h1>
        <p className="mca-description">
          The BBA in Financial Technology is a professional degree designed for
          students aiming to build a career at the intersection of business and
          technology. The program focuses on digital banking, blockchain, data
          analytics, and financial innovation – preparing you for a future in
          the rapidly evolving fintech landscape.
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
              <strong>180+</strong>
              <p>Varied job profiles</p>
            </div>
            <div className="stat-box">
              <strong>1300+</strong>
              <p>Unique job opportunities</p>
            </div>
            <div className="stat-box">
              <strong>32%</strong>
              <p>Students with multiple job offers</p>
            </div>
            <Link
              style={{ marginLeft: "40px" }}
              to="../../assets/img/FINTECH.pdf"
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
          <h1 className="who-can-do-title">Who can pursue BBA in FinTech?</h1>
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

      {/* Course Curriculum for BBA-FinTech */}
      <div className="course-curriculum-container">
        <h1 className="mca-title">Course Curriculum</h1>

        <div className="curriculum-section">
          <h4>Year 1: Fundamentals of Business & Finance</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Introduction to Business Management</li>
                <li>Principles of Finance</li>
                <li>Financial Accounting</li>
                <li>Business Communication</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Economics & Market Dynamics</li>
                <li>Introduction to Information Systems</li>
                <li>Statistics & Quantitative Methods</li>
                <li>Fundamentals of Digital Technology</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 2: Core FinTech Subjects</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Digital Banking & Financial Services</li>
                <li>Blockchain & Cryptocurrency Fundamentals</li>
                <li>Data Analytics for Finance</li>
                <li>Financial Markets & Investments</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Risk Management & Regulatory Compliance</li>
                <li>Financial Modeling & Forecasting</li>
                <li>Emerging Technologies in Finance</li>
                <li>Business Ethics & Corporate Governance</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 3: Advanced FinTech Technologies</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Advanced Financial Modeling & Analytics</li>
                <li>FinTech Innovations & Entrepreneurship</li>
                <li>Cybersecurity in Financial Systems</li>
                <li>Digital Transformation in Banking</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Capstone Project & Industry Internship</li>
                <li>Data-Driven Decision Making</li>
                <li>Advanced Topics in Blockchain</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="key-highlights-container">
        <h1 className="mca-title">Key Highlights</h1>
        <ul>
          <li>
            Hands-on training with financial software and advanced analytics
            tools
          </li>
          <li>Live projects with fintech startups and major banks</li>
          <li>Industry exposure through internships and consulting projects</li>
          <li>Expert faculty from finance and technology sectors</li>
          <li>Focus on digital transformation and disruptive innovation</li>
        </ul>
      </div>

      <div className="career-opportunities-container">
        <h1 className="mca-title">Career Opportunities</h1>
        <ul>
          <li>FinTech Analyst</li>
          <li>Digital Banking Specialist</li>
          <li>Blockchain Developer</li>
          <li>Financial Consultant</li>
          <li>Data Analyst</li>
          <li>Risk Manager</li>
          <li>FinTech Product Manager</li>
        </ul>
        <p>
          Top Recruiters: Major banks, fintech startups, consulting firms, and
          technology companies
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
          <h1 className="offerings-title">BBA-FinTech Summary</h1>
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
            {/* 1. What is the scope of financial technology? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(0)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>1. What is the scope of financial technology?</p>
              </div>
              {activeIndex === 0 && (
                <div className="accordion-body">
                  Financial technology is transforming the finance industry by
                  integrating:
                  <ul>
                    <li>Digital payments and online banking</li>
                    <li>Blockchain and cryptocurrency</li>
                    <li>Data analytics for smarter decision-making</li>
                    <li>Innovative investment and lending platforms</li>
                    <li>Automation and AI in financial services</li>
                  </ul>
                </div>
              )}
            </div>

            {/* 2. What are the major subjects in this course? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(1)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>2. What are the major subjects in this course?</p>
              </div>
              {activeIndex === 1 && (
                <div className="accordion-body">
                  Key subjects include:
                  <ul>
                    <li>Digital Banking & Financial Services</li>
                    <li>Blockchain & Cryptocurrency Fundamentals</li>
                    <li>Data Analytics for Finance</li>
                    <li>Financial Markets & Investments</li>
                    <li>Risk Management & Regulatory Compliance</li>
                    <li>Financial Modeling & Forecasting</li>
                  </ul>
                </div>
              )}
            </div>

            {/* 3. Are there any industry collaborations or internships? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(2)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>3. Are there any industry collaborations or internships?</p>
              </div>
              {activeIndex === 2 && (
                <div className="accordion-body">
                  Yes! Many institutions partner with fintech companies and
                  financial institutions to offer:
                  <ul>
                    <li>Live projects and case studies</li>
                    <li>
                      Internship opportunities with leading banks and startups
                    </li>
                    <li>Workshops and guest lectures by industry experts</li>
                  </ul>
                </div>
              )}
            </div>

            {/* 4. What companies hire FinTech graduates? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(3)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>4. What companies hire FinTech graduates?</p>
              </div>
              {activeIndex === 3 && (
                <div className="accordion-body">
                  Top recruiters include:
                  <ul>
                    <li>Major banks and financial institutions</li>
                    <li>FinTech startups and digital payment platforms</li>
                    <li>Consulting firms and technology companies</li>
                    <li>Investment and venture capital firms</li>
                  </ul>
                </div>
              )}
            </div>

            {/* 5. Does the course include practical training? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(4)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>5. Does the course include practical training?</p>
              </div>
              {activeIndex === 4 && (
                <div className="accordion-body">
                  Yes, the course emphasizes hands-on training through:
                  <ul>
                    <li>Live projects and simulations</li>
                    <li>Industry internships and workshops</li>
                    <li>Case studies and real-world financial challenges</li>
                  </ul>
                </div>
              )}
            </div>

            {/* 6. What are the career options after graduation? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(5)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>6. What are the career options after graduation?</p>
              </div>
              {activeIndex === 5 && (
                <div className="accordion-body">
                  FinTech graduates can work as:
                  <ul>
                    <li>FinTech Analyst or Consultant</li>
                    <li>Digital Banking Specialist</li>
                    <li>Blockchain Developer</li>
                    <li>Financial Data Analyst</li>
                    <li>Risk Management Expert</li>
                    <li>FinTech Product Manager</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="campus-section">
        <h2 className="main-title">Partner Campuses</h2>
        <h3 className="main-subtitle">
          Choose from 3+ premier campuses globally
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

export default BBAFinTech;
