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

// Key Offerings for BCA - IoT
const offerings = [
  {
    text: "Comprehensive understanding of IoT fundamentals, sensor networks, and embedded systems",
    icon: <FaBookOpen />,
  },
  {
    text: "Hands-on training with IoT devices, microcontrollers, and programming",
    icon: <FaRocket />,
  },
  {
    text: "Practical projects integrating hardware, software, and cloud platforms",
    icon: <FaCogs />,
  },
  {
    text: "Exposure to IoT communication protocols and network security",
    icon: <FaGlobeAmericas />,
  },
  {
    text: "Industry-aligned curriculum with the latest IoT tools and technologies",
    icon: <FaCertificate />,
  },
  {
    text: "Development of problem-solving, analytical, and project management skills",
    icon: <FaUserTie />,
  },
  {
    text: "Preparation for industry-recognized IoT certifications",
    icon: <FaUniversity />,
  },
];

// Who can pursue BCA in IoT?
const whoCanDo = [
  {
    text: "Students with a passion for technology, computing, and electronics",
    icon: "💻",
  },
  {
    text: "Aspirants interested in developing smart, connected devices and systems",
    icon: "🔗",
  },
  {
    text: "Individuals with strong problem-solving and programming skills",
    icon: "🖥️",
  },
  {
    text: "Candidates eager to explore emerging technologies in IoT and automation",
    icon: "🤖",
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

// Program Summary for BCA - IoT
const iotSummary = [
  {
    icon: <FaBookOpen />,
    text: "BCA in IoT provides a strong foundation in computer applications with a specialized focus on IoT systems and network integration.",
  },
  {
    icon: <FaUniversity />,
    text: "The program integrates core computer science with advanced IoT training, preparing students for modern tech challenges.",
  },
  {
    icon: <FaCheckCircle />,
    text: "A 3-year full-time program featuring hands-on projects, internships, and live case studies in IoT.",
  },
  {
    icon: <FaDollarSign />,
    text: "Graduates can expect competitive starting salaries in tech industries and IoT-focused roles.",
  },
  {
    icon: <FaLightbulb />,
    text: "Career roles include IoT Developer, Systems Analyst, Network Engineer, and Smart Device Manager.",
  },
  {
    icon: <FaBuilding />,
    text: "Top recruiters include leading tech companies, startups, and organizations investing in smart technology solutions.",
  },
];

// Campus Details for BCA - IoT
const campuses = [
  {
    name: "Vidya University, Meerut",
    program: "BCA Program | UGC recognised",
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

const BcaIot = () => {
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
        <h1 className="mca-title">BCA - IoT Highlights</h1>
        <p className="mca-description">
          Build a robust foundation in computer applications with a specialized
          focus on the Internet of Things, smart systems, and network
          integration.
        </p>
        <div className="highlight-cards">
          <div className="highlight-card">
            <p className="highlight-number">3</p>
            <p className="highlight-text">YEAR FULL-TIME PROGRAM</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">30+</p>
            <p className="highlight-text">INDUSTRY PARTNERS</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">5+</p>
            <p className="highlight-text">SPECIALIZED CERTIFICATIONS</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">8</p>
            <p className="highlight-text">INTERNSHIPS & LIVE PROJECTS</p>
          </div>
        </div>
      </div>

      {/* Course Overview Section */}
      <div className="course-Overview-container">
        <h1 className="mca-title">Course Overview</h1>
        <p className="mca-description">
          The BCA in IoT is designed to provide students with a deep
          understanding of computer applications combined with the latest trends
          in Internet of Things technology, including sensor networks, cloud
          integration, and smart device management.
        </p>
      </div>

      {/* Our Promise Section */}
      <div className="our-promise-container">
        <div className="our-promise-content">
          <div className="our-promise-text">
            <p className="promise-title">OUR PROMISE</p>
            <h2 className="main-heading">
              Launch your tech career with{" "}
              <span className="highlight">innovative IoT solutions</span>
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
              <strong>45+</strong>
              <p>Innovative projects</p>
            </div>
            <div className="stat-box">
              <strong>1200+</strong>
              <p>Job opportunities</p>
            </div>
            <div className="stat-box">
              <strong>40%</strong>
              <p>Students with multiple offers</p>
            </div>
            <Link
              style={{ marginLeft: "40px" }}
              to="../../assets/img/IOT.pdf"
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

      {/* Key Offerings & Who Can Do Sections */}
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
          <h1 className="who-can-do-title">Who can pursue BCA in IoT?</h1>
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
          <h4>Year 1: Fundamentals of Computer Applications & IoT Basics</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Introduction to Computer Science</li>
                <li>Programming Fundamentals (C/C++/Python)</li>
                <li>Basics of Web Development</li>
                <li>Mathematics for Computing</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Introduction to IoT and Embedded Systems</li>
                <li>Fundamentals of Networking</li>
                <li>Digital Electronics</li>
                <li>Data Structures & Algorithms</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 2: Intermediate IoT Technologies & Applications</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>IoT Communication Protocols (MQTT, CoAP)</li>
                <li>Sensor Networks & Data Acquisition</li>
                <li>Embedded System Programming</li>
                <li>Database Management Systems</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Cloud Computing for IoT</li>
                <li>Mobile Application Development</li>
                <li>Data Analytics & Visualization</li>
                <li>Cybersecurity in IoT</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 3: Advanced IoT Solutions & Industry Applications</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Advanced IoT System Design</li>
                <li>Machine Learning & AI for IoT</li>
                <li>Edge Computing & Real-Time Analytics</li>
                <li>IoT Project Management</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Capstone Project: End-to-End IoT Solution</li>
                <li>Industry Internship & Live Projects</li>
                <li>Advanced Topics in Network Security</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Highlights Section */}
      <div className="key-highlights-container">
        <h1 className="mca-title">Key Highlights</h1>
        <ul>
          <li>Hands-on training with the latest IoT devices and platforms</li>
          <li>Live projects integrating hardware and software solutions</li>
          <li>Internships with leading tech companies and startups</li>
          <li>
            Expert faculty with industry experience in IoT and emerging
            technologies
          </li>
          <li>Focus on practical learning and real-world applications</li>
        </ul>
      </div>

      {/* Career Opportunities Section */}
      <div className="career-opportunities-container">
        <h1 className="mca-title">Career Opportunities</h1>
        <ul>
          <li>IoT Developer</li>
          <li>Embedded Systems Engineer</li>
          <li>Network Administrator</li>
          <li>Data Analyst</li>
          <li>Smart Device Manager</li>
        </ul>
        <p>
          Top Recruiters: Leading tech companies, startups, and organizations
          investing in IoT solutions.
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
          <h1 className="offerings-title">BCA - IoT Summary</h1>
          <div className="offerings-list">
            <div className="offerings-left">
              {iotSummary.slice(0, 3).map((item, index) => (
                <div className="offering-item" key={index}>
                  <span className="offering-icon">{item.icon}</span>
                  <span className="offering-text">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="offerings-right">
              {iotSummary.slice(3, 6).map((item, index) => (
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
            {/* FAQ 1 */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(0)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>1. What is the scope of IoT in BCA?</p>
              </div>
              {activeIndex === 0 && (
                <div className="accordion-body">
                  The BCA in IoT opens up diverse career paths in software
                  development, network management, and smart device innovation
                  by integrating core computing with emerging IoT technologies.
                </div>
              )}
            </div>

            {/* FAQ 2 */}
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
                  Key subjects include Programming, IoT Architecture, Embedded
                  Systems, Network Security, and Cloud Integration.
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(2)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>
                  3. Are there opportunities for hands-on training and
                  internships?
                </p>
              </div>
              {activeIndex === 2 && (
                <div className="accordion-body">
                  Yes, the program includes extensive hands-on projects,
                  laboratory sessions, and internships with tech companies
                  specializing in IoT.
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(3)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>4. Which companies recruit BCA - IoT graduates?</p>
              </div>
              {activeIndex === 3 && (
                <div className="accordion-body">
                  Top recruiters include leading tech firms, startups, and
                  multinational corporations focused on smart technology and IoT
                  solutions.
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(4)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>
                  5. Does the course offer certifications or industry
                  recognition?
                </p>
              </div>
              {activeIndex === 4 && (
                <div className="accordion-body">
                  Yes, the curriculum is designed to prepare students for
                  industry-recognized IoT certifications and professional
                  credentials.
                </div>
              )}
            </div>

            {/* FAQ 6 */}
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
                  Graduates can pursue roles as IoT Developers, Embedded Systems
                  Engineers, Network Administrators, Data Analysts, and Smart
                  Solutions Architects.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Partner Campuses Section */}
      <div className="campus-section">
        <h2 className="main-title">Partner Campuses</h2>
        <h3 className="main-subtitle">
          Choose from 3+ premier tech campuses nationally
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

export default BcaIot;
