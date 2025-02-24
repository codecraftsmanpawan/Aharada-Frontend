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

// Key Offerings for B.Tech AI & ML
const offerings = [
  {
    text: "Comprehensive curriculum in Artificial Intelligence, Machine Learning, and Data Science",
    icon: <FaBookOpen />,
  },
  {
    text: "Hands-on training with real-world AI projects and algorithm development",
    icon: <FaRocket />,
  },
  {
    text: "Exposure to deep learning, neural networks, and natural language processing",
    icon: <FaCogs />,
  },
  {
    text: "Industry collaborations and internships with leading tech companies",
    icon: <FaGlobeAmericas />,
  },
  {
    text: "Accredited certifications and advanced research opportunities",
    icon: <FaCertificate />,
  },
  {
    text: "Development of analytical, problem-solving, and programming skills",
    icon: <FaUserTie />,
  },
  {
    text: "Preparation for global AI and ML certifications",
    icon: <FaUniversity />,
  },
];

// Who can pursue B.Tech in AI & ML?
const whoCanDo = [
  {
    text: "Students with a strong background in mathematics, programming, and statistics",
    icon: "📊",
  },
  {
    text: "Aspirants passionate about Artificial Intelligence and Data Science",
    icon: "🤖",
  },
  {
    text: "Individuals with a curiosity for solving complex problems using algorithms",
    icon: "🧠",
  },
  {
    text: "Candidates aiming for research or industry roles in AI/ML",
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

// Program Summary for B.Tech AI & ML
const summary = [
  {
    icon: <FaBookOpen />,
    text: "B.Tech in AI & ML offers a comprehensive education in artificial intelligence, machine learning, and data analytics.",
  },
  {
    icon: <FaUniversity />,
    text: "The program integrates theoretical knowledge with practical skills through advanced coursework and industry projects.",
  },
  {
    icon: <FaCheckCircle />,
    text: "A 4-year full-time program featuring live projects, internships, and research opportunities in AI and ML.",
  },
  {
    icon: <FaDollarSign />,
    text: "Graduates can expect competitive salaries in tech giants and innovative startups.",
  },
  {
    icon: <FaLightbulb />,
    text: "Career roles include AI Engineer, Machine Learning Specialist, Data Scientist, and Research Analyst.",
  },
  {
    icon: <FaBuilding />,
    text: "Top recruiters include leading technology companies and research institutions globally.",
  },
];

// Campus Details for B.Tech AI & ML
const campuses = [
  {
    name: "Tech Institute of AI, Silicon Valley",
    program: "B.Tech AI & ML Program | Accredited",
    specialisations: 6,
    certifications: 10,
    fees: "$40,000 per year",
    images: [
      "assets/placement/siliconvalley1.jpg",
      "assets/placement/siliconvalley2.jpg",
      "assets/placement/siliconvalley3.jpg",
    ],
  },
  {
    name: "Global University of Technology, Boston",
    program: "B.Tech AI & ML Program | Recognized",
    specialisations: 5,
    certifications: 8,
    fees: "$38,000 per year",
    images: [
      "assets/placement/boston1.jpg",
      "assets/placement/boston2.jpg",
      "assets/placement/boston3.jpg",
    ],
  },
  {
    name: "Innovation Tech College, Austin",
    program: "B.Tech AI & ML Program | National Accredited",
    specialisations: 7,
    certifications: 9,
    fees: "$35,000 per year",
    images: [
      "assets/placement/austin1.jpg",
      "assets/placement/austin2.jpg",
      "assets/placement/austin3.jpg",
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

const Btechaiml = () => {
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
        <h1 className="mca-title">B.Tech AI & ML Highlights</h1>
        <p className="mca-description">
          Master the fundamentals and advanced techniques of Artificial
          Intelligence and Machine Learning in our comprehensive B.Tech program.
        </p>
        <div className="highlight-cards">
          <div className="highlight-card">
            <p className="highlight-number">4</p>
            <p className="highlight-text">YEAR FULL-TIME PROGRAM</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">50+</p>
            <p className="highlight-text">INDUSTRY PARTNERS</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">12+</p>
            <p className="highlight-text">CERTIFICATIONS</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">10+</p>
            <p className="highlight-text">INTERNSHIPS & LIVE PROJECTS</p>
          </div>
        </div>
      </div>

      {/* Course Overview Section */}
      <div className="course-Overview-container">
        <h1 className="mca-title">Course Overview</h1>
        <p className="mca-description">
          The B.Tech in AI & ML program is designed to equip students with a
          deep understanding of artificial intelligence, machine learning, and
          data analytics through a blend of theoretical knowledge and practical
          application.
        </p>
      </div>

      {/* Our Promise Section */}
      <div className="our-promise-container">
        <div className="our-promise-content">
          <div className="our-promise-text">
            <p className="promise-title">OUR PROMISE</p>
            <h2 className="main-heading">
              Launch your tech career with{" "}
              <span className="highlight">cutting-edge AI solutions</span>
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
              <p>Advanced projects</p>
            </div>
            <div className="stat-box">
              <strong>1200+</strong>
              <p>Career opportunities</p>
            </div>
            <div className="stat-box">
              <strong>40%</strong>
              <p>Students with multiple offers</p>
            </div>
            <Link
              style={{ marginLeft: "40px" }}
              to="../../assets/img/AI_ML.pdf"
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
            Who can pursue B.Tech in AI & ML?
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
          <h4>Year 1: Fundamentals of Engineering & Computing</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Engineering Mathematics</li>
                <li>Programming Fundamentals (C/C++/Python)</li>
                <li>Data Structures & Algorithms</li>
                <li>Digital Electronics</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Computer Organization</li>
                <li>Introduction to AI Concepts</li>
                <li>Fundamentals of Data Science</li>
                <li>Communication Skills</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 2: Core Computer Science & Intro to AI</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Object-Oriented Programming & Java</li>
                <li>Discrete Mathematics</li>
                <li>Database Management Systems</li>
                <li>Probability & Statistics</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Advanced Data Structures & Algorithms</li>
                <li>Operating Systems</li>
                <li>Introduction to Machine Learning</li>
                <li>Numerical Methods</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 3: Advanced AI & ML Techniques</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Deep Learning & Neural Networks</li>
                <li>Natural Language Processing</li>
                <li>Computer Vision</li>
                <li>Big Data Analytics</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Machine Learning Algorithms</li>
                <li>Reinforcement Learning</li>
                <li>Advanced Data Analytics</li>
                <li>Cloud Computing for AI</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 4: Specialization & Research</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Capstone Project & Research Methodology</li>
                <li>Advanced Topics in AI</li>
                <li>AI Ethics & Governance</li>
                <li>Elective I (Robotics/IoT)</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Elective II (Advanced ML/Data Mining)</li>
                <li>Internship/Industry Project</li>
                <li>Seminar & Workshop in AI</li>
                <li>Innovation & Entrepreneurship in Tech</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Highlights Section */}
      <div className="key-highlights-container">
        <h1 className="mca-title">Key Highlights</h1>
        <ul>
          <li>Hands-on projects with cutting-edge AI tools and platforms</li>
          <li>Live projects and internships with tech giants and startups</li>
          <li>Expert faculty with industry experience in AI & ML</li>
          <li>State-of-the-art labs and research opportunities</li>
          <li>Focus on ethical AI and practical applications</li>
        </ul>
      </div>

      {/* Career Opportunities Section */}
      <div className="career-opportunities-container">
        <h1 className="mca-title">Career Opportunities</h1>
        <ul>
          <li>AI Engineer</li>
          <li>Machine Learning Specialist</li>
          <li>Data Scientist</li>
          <li>Research Scientist in AI</li>
          <li>Business Intelligence Analyst</li>
          <li>Software Developer (AI Focus)</li>
        </ul>
        <p>
          Top Recruiters: Google, Microsoft, IBM, Amazon, NVIDIA, and leading
          tech startups.
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
          <h1 className="offerings-title">B.Tech AI & ML Summary</h1>
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
            {/* FAQ 1 */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(0)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>1. What is the scope of AI & ML?</p>
              </div>
              {activeIndex === 0 && (
                <div className="accordion-body">
                  The field of AI & ML is rapidly expanding, offering diverse
                  career opportunities in technology, research, and data-driven
                  industries.
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
                  Key subjects include Programming, Data Structures, Machine
                  Learning, Deep Learning, Neural Networks, and Data Analytics.
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
                  3. Are there opportunities for hands-on projects and
                  internships?
                </p>
              </div>
              {activeIndex === 2 && (
                <div className="accordion-body">
                  Yes, the program includes extensive lab sessions, real-world
                  projects, and internships with leading tech companies.
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
                <p>4. Which companies recruit B.Tech AI & ML graduates?</p>
              </div>
              {activeIndex === 3 && (
                <div className="accordion-body">
                  Top recruiters include Google, Microsoft, IBM, Amazon, NVIDIA,
                  and other leading tech firms.
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
                  5. Does the course prepare students for global AI
                  certifications?
                </p>
              </div>
              {activeIndex === 4 && (
                <div className="accordion-body">
                  Yes, the curriculum is designed to prepare students for
                  internationally recognized certifications in AI and ML.
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
                <p>
                  6. What career opportunities are available after graduation?
                </p>
              </div>
              {activeIndex === 5 && (
                <div className="accordion-body">
                  Graduates can pursue roles such as AI Engineer, Machine
                  Learning Specialist, Data Scientist, and Research Analyst.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Course />
      <div style={{ marginTop: "50px" }}>
        <Feedback />
      </div>
      <Testimonials />
    </>
  );
};

export default Btechaiml;
