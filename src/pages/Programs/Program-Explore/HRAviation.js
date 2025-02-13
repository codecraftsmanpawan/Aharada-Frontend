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
    text: "In-depth training in human resource management within the aviation industry, focusing on recruitment, talent management, and organizational development",
    icon: <FaUsers />,
  },
  {
    text: "Exciting career paths in aviation HR management, airline staff recruitment, aviation consultancy, and strategic HR leadership",
    icon: <FaChartLine />,
  },
  {
    text: "Hands-on internships and live projects with top airlines, airports, and aviation firms, gaining real-world HR experience",
    icon: <FaBriefcase />,
  },
  {
    text: "Exposure to the latest HR trends in aviation, employee relations, labor laws, and leadership development programs in the aviation sector",
    icon: <FaLightbulb />,
  },
  {
    text: "Industry-aligned curriculum with case studies and simulations, preparing students for effective HR decision-making in aviation organizations",
    icon: <FaBookOpen />,
  },
  {
    text: "Recognized certifications in HR management, airline HR processes, and aviation-specific HR programs, including IATA-certified courses",
    icon: <FaCertificate />,
  },
  {
    text: "Development of leadership, negotiation, and strategic decision-making skills tailored for HR professionals in the aviation industry",
    icon: <FaUsers />,
  },
];

const whoCanDoMCA = [
  {
    text: "Graduates who have completed a Bachelor's degree in any field and have an interest in human resource management within the aviation industry",
    icon: "🎓",
  },
  {
    text: "Aspirants interested in pursuing careers in HR management, recruitment, employee relations, and talent development in the aviation sector",
    icon: "🚀",
  },
  {
    text: "Minimum 50% marks in undergraduate studies (eligibility criteria may vary by institution)",
    icon: "📚",
  },
  {
    text: "Individuals aiming for leadership roles in HR departments of airlines, airports, aviation consulting firms, or aviation-related organizations",
    icon: "👥",
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
    text: "MBA in HR & Aviation is a postgraduate program that focuses on human resource management, organizational development, and leadership skills within the aviation industry, equipping students with the tools to manage HR functions in aviation firms.",
  },
  {
    icon: <FaUniversity />,
    text: "This course is ideal for students aspiring to work in HR leadership roles within the aviation sector, including airlines, airports, aviation consultancy firms, and aviation-related organizations.",
  },
  {
    icon: <FaCheckCircle />,
    text: "A regular MBA - HR & Aviation course duration is 2 years, divided into 4 semesters, including case studies, industry projects, and internships with leading aviation firms.",
  },
  {
    icon: <FaDollarSign />,
    text: "The average starting salary for graduates in this field ranges from 6-12 Lakhs per year, depending on job roles, skills, and employer within the aviation industry.",
  },
  {
    icon: <FaLightbulb />,
    text: "Career opportunities include roles in HR management, recruitment, talent development, employee relations, and HR consultancy within the aviation industry.",
  },
  {
    icon: <FaBuilding />,
    text: "Top recruiters in this field include major airlines like Air India, Emirates, Lufthansa, airport operators, aviation consulting firms, and aviation-related HR firms.",
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
    program: "MCA Program | UGC recognised",
    specialisations: 6,
    certifications: 10,
    fees: "₹ 3.10 Lacs",
    images: [
      "assets/placement/Subharti1.webp",
      "assets/placement/Subharti1.webp",
      "assets/placement/Subharti3.png",
    ],
  },
  //   {
  //     name: "Dev Bhoomi Uttarakhand University",
  //     program: "MCA Program | AICTE approved",
  //     specialisations: 4,
  //     certifications: 8,
  //     fees: "₹ 4.00 Lacs",
  //     images: [
  //       "assets/placement/dev1.jpeg",
  //       "assets/placement/dev1.jpeg",
  //       "assets/placement/dev3.jpg",
  //     ],
  //   },
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

const HRAviation = () => {
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
        <h1 className="mca-title">MBA - HR & Aviation Highlights</h1>
        <p className="mca-description">
          Gain specialized knowledge in human resource management within the
          aviation sector, focusing on recruitment, talent management,
          organizational development, and leadership in the aviation industry.
        </p>
        <div className="highlight-cards">
          <div className="highlight-card">
            <p className="highlight-number">2</p>
            <p className="highlight-text">YEAR FULL-TIME PROGRAM</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">30+</p>
            <p className="highlight-text">RECRUITMENT PARTNERS IN AVIATION</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">5+</p>
            <p className="highlight-text">SPECIALIZED CERTIFICATIONS</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">4</p>
            <p className="highlight-text">
              INTERNSHIPS & LIVE PROJECTS WITH AVIATION FIRMS
            </p>
          </div>
        </div>
      </div>

      <div className="course-Overview-container">
        <h1 className="mca-title">Course Overview</h1>
        <p className="mca-description">
          The MBA in HR & Aviation Management is a specialized program designed
          for students aspiring to take leadership roles in the aviation
          industry with a strong focus on human resource management. This
          program combines aviation operations, airline business management, and
          strategic HR skills to prepare professionals for dynamic careers in
          airline and airport management.
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
              <img
                src="https://png.pngtree.com/png-vector/20240414/ourmid/pngtree-3d-boy-graduate-student-png-image_12286971.png"
                alt="Graduate"
              />
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
          <h1 className="who-can-do-title">Who can do MBA - HR & Aviation?</h1>
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
          <h4>Year 1: Core Business & Aviation Management</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Principles of Aviation Management & Airline Operations</li>
                <li>Business Communication & Leadership Skills</li>
                <li>Organizational Behavior & HR Management Fundamentals</li>
                <li>Aviation Safety & Security Regulations</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Airport Operations & Infrastructure Management</li>
                <li>Financial Management in Aviation Industry</li>
                <li>Human Resource Planning & Talent Acquisition</li>
                <li>Airline Marketing & Customer Relationship Management</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 2: Advanced HR & Strategic Aviation Management</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Compensation & Performance Management in Aviation</li>
                <li>Employee Relations & Labor Laws (Aviation Sector)</li>
                <li>Strategic Airport & Airline Management</li>
                <li>Crisis Management & Emergency Planning in Aviation</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Aviation Law & Regulatory Compliance (DGCA, IATA, ICAO)</li>
                <li>Corporate Social Responsibility & Ethics in Aviation</li>
                <li>Research Project / Thesis in Aviation & HR Management</li>
                <li>Internship & Industry Exposure with Airlines / Airports</li>
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
          <li>Training on Aviation Management & HR Leadership ✈️</li>
          <li>Industry Exposure with Leading Airlines & Airports</li>
          <li>HR & Aviation-Specific Case Studies & Workshops</li>
          <li>Practical Learning with Aviation Management Software</li>
          <li>Internship & Placement Assistance with Top Aviation Companies</li>
        </ul>
      </div>

      <div className="career-opportunities-container">
        <h1 className="mca-title">Career Opportunities</h1>
        <ul>
          <li>HR Manager in Airlines & Airports</li>
          <li>Aviation Operations Manager</li>
          <li>Recruitment & Training Manager (Aviation Sector)</li>
          <li>Airline Business Development Manager</li>
          <li>Talent Acquisition & Workforce Planning Specialist</li>
          <li>Aviation Safety & Compliance Officer</li>
        </ul>
        <p>
          Top Recruiters: Airlines, Airports, Ground Handling Companies,
          Aviation HR Consulting Firms, Government Aviation Departments
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
          <h1 className="offerings-title">MBA - HR & Aviation Summary</h1>
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
            {/* What job roles are available in HR & Aviation Management? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(0)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>
                  1. What job roles are available in HR & Aviation Management?
                </p>
              </div>
              {activeIndex === 0 && (
                <div className="accordion-body">
                  Graduates can pursue careers in both the aviation and human
                  resources sectors, including:
                  <ul>
                    <li>Aviation HR Manager</li>
                    <li>
                      Recruitment & Talent Acquisition Specialist (Airlines &
                      Airports)
                    </li>
                    <li>Training & Development Manager</li>
                    <li>Airport Operations & HR Coordinator</li>
                    <li>
                      Employee Relations Manager (Airlines & Aviation Companies)
                    </li>
                    <li>Compensation & Benefits Specialist</li>
                    <li>Crew Resource Manager</li>
                    <li>
                      Organizational Development Consultant (Aviation Sector)
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* What industries hire graduates from this program? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(1)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>2. What industries hire graduates from this program?</p>
              </div>
              {activeIndex === 1 && (
                <div className="accordion-body">
                  Graduates from this program are in demand in the following
                  industries:
                  <ul>
                    <li>Airlines (Domestic & International)</li>
                    <li>Airports (Public & Private)</li>
                    <li>Aviation Consulting Firms</li>
                    <li>Ground Handling & Cargo Companies</li>
                    <li>Aerospace & Aviation Technology Firms</li>
                    <li>Hospitality & Travel Industry</li>
                    <li>Government Aviation Authorities</li>
                    <li>HR Consultancy Firms specializing in Aviation</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Are there internship opportunities? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(2)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>3. Are there internship opportunities?</p>
              </div>
              {activeIndex === 2 && (
                <div className="accordion-body">
                  Yes, most universities include internship programs with
                  aviation companies, airlines, and airports. Students may work
                  with HR departments of airlines to gain hands-on experience in
                  aviation workforce management. Internships provide exposure to
                  talent acquisition, employee training, and labor regulations
                  in the aviation industry.
                </div>
              )}
            </div>

            {/* What is the course duration? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(3)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>4. What is the course duration?</p>
              </div>
              {activeIndex === 3 && (
                <div className="accordion-body">
                  The program typically lasts 2 years (4 semesters).
                </div>
              )}
            </div>

            {/* What are the eligibility criteria? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(4)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>5. What are the eligibility criteria?</p>
              </div>
              {activeIndex === 4 && (
                <div className="accordion-body">
                  To be eligible for this program, you must have:
                  <ul>
                    <li>
                      A bachelor’s degree in any discipline from a recognized
                      university
                    </li>
                    <li>
                      A minimum percentage (usually 50%) in undergraduate
                      studies
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Does this program include leadership training? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(5)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>6. Does this program include leadership training?</p>
              </div>
              {activeIndex === 5 && (
                <div className="accordion-body">
                  Yes! The program focuses on developing leadership and
                  managerial skills for aviation HR professionals. Courses cover
                  strategic HR management, conflict resolution, workforce
                  planning, and employee engagement. Leadership training often
                  includes case studies, workshops, and industry mentorship
                  programs.
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

export default HRAviation;
