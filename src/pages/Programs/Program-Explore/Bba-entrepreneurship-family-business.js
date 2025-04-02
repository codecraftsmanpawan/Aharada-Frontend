import React, { useState } from "react";
import "./ai.css";
import { useNavigate } from "react-router-dom";

import {
  FaGraduationCap,
  FaRegCheckCircle,
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

// Key Offerings for BBA - Entrepreneurship & Family Business
const offerings = [
  {
    text: "In-depth study of entrepreneurship, innovation, and business strategy",
    icon: <FaBookOpen />,
  },
  {
    text: "Practical training in business planning, startup management, and venture capital",
    icon: <FaRocket />,
  },
  {
    text: "Hands-on projects and case studies focusing on family business dynamics",
    icon: <FaBriefcase />,
  },
  {
    text: "Exposure to real-world entrepreneurial challenges and business simulations",
    icon: <FaGlobeAmericas />,
  },
  {
    text: "Industry-aligned curriculum with expert mentorship and networking opportunities",
    icon: <FaCertificate />,
  },
  {
    text: "Development of leadership, strategic thinking, and management skills",
    icon: <FaUserTie />,
  },
  {
    text: "Preparation for launching new ventures or managing family businesses",
    icon: <FaUniversity />,
  },
];

// Who can pursue BBA in Entrepreneurship & Family Business?
const whoCanDo = [
  {
    text: "Students with a background in commerce, business studies, or management",
    icon: "📊",
  },
  {
    text: "Aspirants with an entrepreneurial spirit and innovative mindset",
    icon: "💡",
  },
  {
    text: "Individuals aspiring to manage or start family-run businesses",
    icon: "🏠",
  },
  {
    text: "Candidates with strong leadership, communication, and problem-solving skills",
    icon: "🗣️",
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

const summary = [
  {
    icon: <FaBookOpen />,
    text: "BBA in Entrepreneurship & Family Business integrates robust business management principles with hands-on entrepreneurial skills.",
  },
  {
    icon: <FaUniversity />,
    text: "The program blends academic theory with practical training, preparing graduates for leadership roles in startups and family enterprises.",
  },
  {
    icon: <FaCheckCircle />,
    text: "A comprehensive 3-year full-time program featuring interactive projects, internships, and live case studies.",
  },
  {
    icon: <FaDollarSign />,
    text: "Graduates can expect competitive salaries and diverse career opportunities in the business world.",
  },
  {
    icon: <FaLightbulb />,
    text: "Career roles include Business Strategist, Entrepreneur, Family Business Consultant, and Operations Manager.",
  },
  {
    icon: <FaBuilding />,
    text: "Top recruiters include major corporate houses, venture capital firms, startup incubators, and family business conglomerates.",
  },
];

const campuses = [
  {
    name: "Vidya University, Meerut",
    program: "BBA Program | UGC recognised",
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

const Bbaentrepreneurshipfamilybusiness = () => {
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
      {/* Highlights Section */}
      <div className="mca-highlights-container">
        <h1 className="mca-title">
          BBA - Entrepreneurship & Family Business Highlights
        </h1>
        <p className="mca-description">
          Empower your business acumen and entrepreneurial spirit with our
          comprehensive BBA program, designed to nurture innovative leaders in
          both startup ventures and family-run enterprises.
        </p>
        <div className="highlight-cards">
          <div className="highlight-card">
            <p className="highlight-number">3</p>
            <p className="highlight-text">YEAR FULL-TIME PROGRAM</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">35+</p>
            <p className="highlight-text">INDUSTRY PARTNERS</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">10+</p>
            <p className="highlight-text">SPECIALIZED CERTIFICATIONS</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">7</p>
            <p className="highlight-text">INTERNSHIPS & LIVE PROJECTS</p>
          </div>
        </div>
      </div>

      {/* Course Overview Section */}
      <div className="course-Overview-container">
        <h1 className="mca-title">Course Overview</h1>
        <p className="mca-description">
          The BBA in Entrepreneurship & Family Business is designed to blend
          rigorous academic theory with practical insights, equipping students
          with the skills to launch new ventures or manage and grow existing
          family businesses.
        </p>
      </div>

      {/* Our Promise Section */}
      <div className="our-promise-container">
        <div className="our-promise-content">
          <div className="our-promise-text">
            <p className="promise-title">OUR PROMISE</p>
            <h2 className="main-heading">
              Transform your future with{" "}
              <span className="highlight">innovative business strategies</span>
            </h2>
            <div className="graduate-img" style={{ marginTop: "60px" }}>
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
              <strong>50+</strong>
              <p>Business cases solved</p>
            </div>
            <div className="stat-box">
              <strong>1500+</strong>
              <p>Career opportunities</p>
            </div>
            <div className="stat-box">
              <strong>40%</strong>
              <p>Students with entrepreneurial offers</p>
            </div>
            <Link
              style={{ marginLeft: "40px" }}
              to="../../assets/img/ENTREPRENEURSHIP.pdf"
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

      {/* Key Offerings & Who Can Pursue Sections */}
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
            Who can pursue BBA in Entrepreneurship & Family Business?
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

      {/* Course Curriculum Section */}
      <div className="course-curriculum-container">
        <h1 className="mca-title">Course Curriculum</h1>

        <div className="curriculum-section">
          <h4>Year 1: Fundamentals of Business & Entrepreneurship</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Principles of Management & Organizational Behavior</li>
                <li>Business Communication & Soft Skills</li>
                <li>Financial Accounting & Business Mathematics</li>
                <li>Basics of Marketing & Economics</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Introduction to Entrepreneurship & Innovation</li>
                <li>Family Business Dynamics</li>
                <li>Business Law & Ethics</li>
                <li>Information Technology in Business</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 2: Core Business & Entrepreneurial Strategies</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Business Planning & Venture Creation</li>
                <li>Strategic Management & Leadership</li>
                <li>Financial Management & Investment Analysis</li>
                <li>Marketing Strategies for Startups</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Family Business Governance & Succession Planning</li>
                <li>Innovation Management & Product Development</li>
                <li>Operations Management & Supply Chain</li>
                <li>Digital Business & E-Commerce</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 3: Advanced Business Applications & Capstone Projects</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Advanced Entrepreneurship & Startup Ecosystems</li>
                <li>Family Business Strategy & International Business</li>
                <li>Business Analytics & Decision Making</li>
                <li>Risk Management & Corporate Governance</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>
                  Capstone Project: Launching a Startup or Transforming a Family
                  Business
                </li>
                <li>Industry Internship & Live Case Studies</li>
                <li>Advanced Topics in Innovation & Business Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Highlights Section */}
      <div className="key-highlights-container">
        <h1 className="mca-title">Key Highlights</h1>
        <ul>
          <li>Real-world case studies and entrepreneurial projects</li>
          <li>Internships with startups and established family businesses</li>
          <li>
            Mentorship programs and networking opportunities with industry
            leaders
          </li>
          <li>
            Expert faculty with hands-on experience in entrepreneurship and
            business management
          </li>
          <li>
            Focus on innovation, strategic thinking, and leadership development
          </li>
        </ul>
      </div>

      {/* Career Opportunities Section */}
      <div className="career-opportunities-container">
        <h1 className="mca-title">Career Opportunities</h1>
        <ul>
          <li>Entrepreneur / Startup Founder</li>
          <li>Business Strategist / Consultant</li>
          <li>Family Business Manager</li>
          <li>Operations Manager</li>
          <li>Marketing & Business Development Executive</li>
        </ul>
        <p>
          Top Recruiters: Leading corporate houses, startup incubators, venture
          capital firms, and family business conglomerates.
        </p>
      </div>

      {/* Placement Partners Section */}
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

      {/* Summary & FAQ Section */}
      <div className="mca-page">
        <div className="key-offerings">
          <h1 className="offerings-title">
            BBA - Entrepreneurship & Family Business Summary
          </h1>
          <div className="offerings-list">
            <div className="offerings-left">
              {summary.slice(0, 3).map((item, index) => (
                <div className="offering-item" key={index}>
                  <span className="offering-icon">{item.icon}</span>
                  <span className="offering-text">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="offerings-right">
              {summary.slice(3, 6).map((item, index) => (
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
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(0)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>
                  1. What is the scope of entrepreneurship and family business
                  studies?
                </p>
              </div>
              {activeIndex === 0 && (
                <div className="accordion-body">
                  The program prepares students for diverse roles in launching
                  startups and managing family-run enterprises, blending
                  theoretical insights with practical experience.
                </div>
              )}
            </div>
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(1)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>2. What are the key subjects covered in this course?</p>
              </div>
              {activeIndex === 1 && (
                <div className="accordion-body">
                  Key subjects include Business Management, Entrepreneurship,
                  Financial Accounting, Marketing, Family Business Governance,
                  and Innovation Management.
                </div>
              )}
            </div>
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(2)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>
                  3. Are there opportunities for practical training and
                  internships?
                </p>
              </div>
              {activeIndex === 2 && (
                <div className="accordion-body">
                  Yes, the program includes live projects, internships, and case
                  studies with leading businesses and family enterprises.
                </div>
              )}
            </div>
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(3)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>4. Which companies recruit graduates from this program?</p>
              </div>
              {activeIndex === 3 && (
                <div className="accordion-body">
                  Graduates are recruited by startups, established corporations,
                  venture capital firms, and family business conglomerates.
                </div>
              )}
            </div>
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(4)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>5. Does the course offer professional certifications?</p>
              </div>
              {activeIndex === 4 && (
                <div className="accordion-body">
                  Yes, the curriculum is designed to prepare students for
                  industry-recognized certifications in business management and
                  entrepreneurship.
                </div>
              )}
            </div>
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(5)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>
                  6. What career opportunities are available after graduation?
                </p>
              </div>
              {activeIndex === 5 && (
                <div className="accordion-body">
                  Graduates can pursue careers as entrepreneurs, business
                  consultants, family business managers, marketing executives,
                  and operations managers.
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

export default Bbaentrepreneurshipfamilybusiness;
