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
    text: "Comprehensive training in airline operations, airport management, and aviation logistics",
    icon: <FaPlane />,
  },
  {
    text: "Career opportunities in airline management, airport operations, and aviation consultancy",
    icon: <FaChartLine />,
  },
  {
    text: "Internships and live projects with leading airlines and aviation firms",
    icon: <FaBriefcase />,
  },
  {
    text: "Insights into the latest trends in aviation business and regulatory policies",
    icon: <FaLightbulb />,
  },
  {
    text: "Industry-focused curriculum with case studies and real-world simulations",
    icon: <FaBookOpen />,
  },
  {
    text: "Certifications in Airline Management, IATA courses, and Aviation Safety & Security",
    icon: <FaCertificate />,
  },
  {
    text: "Soft skills, leadership, and strategic decision-making training for aviation professionals",
    icon: <FaUsers />,
  },
];

const whoCanDoMCA = [
  {
    text: "Graduates from any discipline (preferably aviation, management, or engineering background)",
    icon: "⭐",
  },
  {
    text: "Aspirants interested in airline operations, airport management, and aviation business strategy",
    icon: "⭐",
  },
  {
    text: "Minimum 50% marks in graduation (may vary by institution)",
    icon: "⭐",
  },
  {
    text: "Professionals looking to advance their careers in aviation, logistics, and air transport management",
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
    text: "The full form of MBA - Aviation Management is Master of Business Administration in Aviation Management, a specialized postgraduate course focused on the business and management aspects of the aviation industry.",
  },
  {
    icon: <FaUniversity />,
    text: "This course is ideal for students and professionals interested in airline management, airport operations, aviation logistics, and air transport strategy.",
  },
  {
    icon: <FaCheckCircle />,
    text: "A regular MBA - Aviation Management course duration is 2 years, divided into 4 semesters, including industry training, case studies, and live projects.",
  },
  {
    icon: <FaDollarSign />,
    text: "The average starting salary for graduates in this field ranges from 6-12 Lakhs per year, depending on job roles, experience, and employer.",
  },
  {
    icon: <FaLightbulb />,
    text: "Career opportunities include roles in airport management, airline operations, aviation consultancy, cargo management, and aviation finance.",
  },
  {
    icon: <FaBuilding />,
    text: "Top recruiters in this field include airlines like Indigo, Air India, Emirates, global logistics companies, airport authorities, and aviation consulting firms.",
  },
];

const campuses = [
  {
    name: "IIMT University, Meerut",
    program: "MCA Program | UGC approved",
    specialisations: 6,
    certifications: 10,
    fees: "₹ 3.40 Lacs",
    images: [
      "assets/placement/iimt1.jpg",
      "assets/placement/iimt2.jpg",
      "assets/placement/iimt3.jpg",
    ],
  },
  {
    name: "SAGE University Indore",
    program: "MCA Program | UGC recognised",
    specialisations: 3,
    certifications: 10,
    fees: "₹ 3.88 Lacs",
    images: [
      "assets/placement/sage1.jpg",
      "assets/placement/sage2.jpg",
      "assets/placement/sage3.webp",
    ],
  },
  //   {
  //     name: "Subharti University, Meerut",
  //     program: "MCA Program | UGC recognised",
  //     specialisations: 6,
  //     certifications: 10,
  //     fees: "₹ 3.10 Lacs",
  //     images: [
  //       "assets/placement/Subharti1.webp",
  //       "assets/placement/Subharti1.webp",
  //       "assets/placement/Subharti3.png",
  //     ],
  //   },
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

const AviationManagement = () => {
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
        <h1 className="mca-title">MBA - Aviation Management Highlights</h1>
        <p className="mca-description">
          Gain expertise in aviation business operations, airport management,
          and airline strategies with a curriculum tailored for the evolving
          aviation industry.
        </p>
        <div className="highlight-cards">
          <div className="highlight-card">
            <p className="highlight-number">2</p>
            <p className="highlight-text">YEAR FULL-TIME PROGRAM</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">35+</p>
            <p className="highlight-text">RECRUITMENT PARTNERS</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">8+</p>
            <p className="highlight-text">INDUSTRY CERTIFICATIONS</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">2</p>
            <p className="highlight-text">INTERNSHIPS & LIVE PROJECTS</p>
          </div>
        </div>
      </div>
      <div className="course-Overview-container">
        <h1 className="mca-title">Course Overview</h1>
        <p className="mca-description">
          The MBA in Aviation Management is a specialized program designed to
          develop leadership, managerial, and operational skills required in the
          aviation and airline industry. This program equips students with
          knowledge of airline operations, airport management, aviation finance,
          logistics, and regulatory frameworks to prepare them for senior roles
          in the aviation sector.
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
            Who can do MBA - Aviation Management?
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
          <h4>Year 1: Core Business & Aviation Fundamentals</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Principles of Management & Leadership</li>
                <li>Financial & Managerial Accounting</li>
                <li>Marketing Strategies in Aviation</li>
                <li>Aviation Industry Overview & Economics</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Airport & Airline Operations Management</li>
                <li>Air Transport Safety & Security Regulations</li>
                <li>Human Resource Management in Aviation</li>
                <li>Business Analytics & Decision-Making</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 2: Advanced Aviation Strategies & Specialization</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Aviation Law & International Regulations</li>
                <li>Airline Revenue & Pricing Management</li>
                <li>Digital Transformation & AI in Aviation</li>
                <li>Airport Planning & Infrastructure Development</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Logistics & Supply Chain Management in Aviation</li>
                <li>Sustainability & Green Aviation Initiatives</li>
                <li>Crisis & Risk Management in Aviation Industry</li>
                <li>Final Year Project / Dissertation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Internship & Industry Training</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>
                  Real-world exposure through internships with leading airlines,
                  airports, and aviation firms
                </li>
                <li>
                  Case studies and hands-on learning from industry leaders
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="key-highlights-container">
        <h1 className="mca-title">Key Highlights</h1>
        <ul>
          <li>
            Industry-Centric Curriculum Tailored for Aviation Professionals ✈️
          </li>
          <li>Training on Aviation Management Software & Technologies</li>
          <li>Internship & Placement Assistance with Leading Airlines 🌍</li>
          <li>Expert Faculty & Aviation Industry Mentors 👨‍🏫</li>
          <li>Global Networking Opportunities & Industrial Visits</li>
        </ul>
      </div>

      <div className="career-opportunities-container">
        <h1 className="mca-title">Career Opportunities</h1>
        <ul>
          <li>Airline Operations Manager</li>
          <li>Airport Manager</li>
          <li>Aviation Safety & Compliance Officer</li>
          <li>Air Cargo & Freight Management Specialist</li>
          <li>Revenue & Pricing Analyst for Airlines</li>
          <li>Aviation Logistics & Supply Chain Manager</li>
        </ul>
        <p>
          Top Recruiters: Airlines, Airports, Aviation Consultancies, Logistics
          Firms, Government Aviation Authorities
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
          <h1 className="offerings-title">MBA - Aviation Management Summary</h1>
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
            {/* What career opportunities exist in aviation management? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(0)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>
                  1. What career opportunities exist in aviation management?
                </p>
              </div>
              {activeIndex === 0 && (
                <div className="accordion-body">
                  Graduates of an MBA in Aviation Management can pursue roles
                  such as:
                  <ul>
                    <li>
                      Airport Operations Manager (Managing daily airport
                      functions)
                    </li>
                    <li>
                      Airline Manager (Overseeing airline operations, customer
                      service)
                    </li>
                    <li>
                      Aviation Safety & Security Manager (Ensuring compliance
                      with regulations)
                    </li>
                    <li>
                      Cargo & Logistics Manager (Handling freight and supply
                      chain management)
                    </li>
                    <li>
                      Air Traffic Control Manager (Supervising air traffic
                      operations)
                    </li>
                    <li>
                      Aviation Consultant (Providing business strategies for
                      airlines & airports)
                    </li>
                    <li>
                      Revenue & Route Planning Analyst (Optimizing airline
                      profitability)
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* What are the key subjects covered in this MBA? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(1)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>2. What are the key subjects covered in this MBA?</p>
              </div>
              {activeIndex === 1 && (
                <div className="accordion-body">
                  The curriculum includes:
                  <ul>
                    <li>Aviation Operations & Safety Management</li>
                    <li>Airport & Airline Business Management</li>
                    <li>Aviation Law & Regulations</li>
                    <li>Financial Management in Aviation</li>
                    <li>Marketing & Branding in Aviation</li>
                    <li>Air Cargo & Logistics Management</li>
                    <li>Aircraft Maintenance & Fleet Management</li>
                    <li>Data Analytics & AI in Aviation</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Are internships mandatory in this course? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(2)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>3. Are internships mandatory in this course?</p>
              </div>
              {activeIndex === 2 && (
                <div className="accordion-body">
                  Yes, it requires an internship as part of the program.
                  Internships are typically offered with airlines, airports,
                  aviation authorities, and logistics firms. Some programs offer
                  industry projects instead of traditional internships.
                </div>
              )}
            </div>

            {/* What is the average salary package? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(3)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>4. What is the average salary package?</p>
              </div>
              {activeIndex === 3 && (
                <div className="accordion-body">
                  Entry-level salaries range from ₹6-10 LPA (INR) or $50,000 -
                  $80,000 (USD) internationally. Mid-level managers can earn
                  ₹12-20 LPA ($80,000 - $120,000 USD). Senior aviation
                  executives & consultants can earn ₹25+ LPA ($150,000+ USD).
                </div>
              )}
            </div>

            {/* What are the prerequisites for admission? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(4)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>5. What are the prerequisites for admission?</p>
              </div>
              {activeIndex === 4 && (
                <div className="accordion-body">
                  A bachelor’s degree in any discipline (preferably business,
                  engineering, or aviation). Minimum 50-60% marks (or equivalent
                  GPA) in undergraduate studies.
                </div>
              )}
            </div>

            {/* What are the future trends in aviation management? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(5)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>6. What are the future trends in aviation management?</p>
              </div>
              {activeIndex === 5 && (
                <div className="accordion-body">
                  The aviation industry is evolving with emerging trends such
                  as:
                  <ul>
                    <li>
                      Sustainable Aviation – Focus on eco-friendly fuels &
                      carbon neutrality.
                    </li>
                    <li>
                      AI & Automation – AI-driven air traffic control, smart
                      airports, and predictive maintenance.
                    </li>
                    <li>
                      Rise of Low-Cost Carriers (LCCs) – Expanding affordable
                      air travel worldwide.
                    </li>
                    <li>
                      Drones & Urban Air Mobility – Growth in drone logistics
                      and air taxis.
                    </li>
                    <li>
                      Enhanced Passenger Experience – Biometric check-ins,
                      AI-based customer service, and personalized travel.
                    </li>
                    <li>
                      Space Tourism & Advanced Air Mobility – Companies like
                      SpaceX and Blue Origin innovating the industry.
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

export default AviationManagement;
