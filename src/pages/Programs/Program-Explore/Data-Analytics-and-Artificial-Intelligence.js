import React, { useState } from "react";
import "./ai.css";
import { useNavigate } from "react-router-dom";

import {
  FaRegCheckCircle,
  FaProjectDiagram,
  FaGraduationCap,
  FaCertificate,
  FaGlobe,
  FaMoneyBillWave,
  FaUserTie,
  FaBuilding,
  FaQuestionCircle,
  FaInfoCircle,
  FaLightbulb,
  FaCheckCircle,
  FaUniversity,
  FaDollarSign,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Testimonials from "../../../components/Testimonials/Testimonials";
import Feedback from "../../Home/component/Feedback";
import Course from "../../Home/component/CouseOffer";

const offerings = [
  {
    text: "40+ industry-led sessions and workshops by experts in Data Analytics, AI, and Machine Learning",
    icon: <FaUserTie />,
  },
  {
    text: "Develop a professional portfolio showcasing data analysis projects, machine learning models, and AI applications to enhance employability",
    icon: <FaProjectDiagram />,
  },
  {
    text: "Access to seed funding up to 5 Cr through collaboration with industry partners and incubators for AI-driven startups",
    icon: <FaMoneyBillWave />,
  },
  {
    text: "10 days of global immersion in top tech hubs like Silicon Valley or Bengaluru to experience cutting-edge data analytics and AI technologies",
    icon: <FaGlobe />,
  },
  {
    text: "Capstone projects every semester focused on real-world data analysis and AI problem-solving",
    icon: <FaProjectDiagram />,
  },
  {
    text: "Choose from 8 specialized certifications in areas like Data Science, Machine Learning, AI Algorithms, and Data Visualization",
    icon: <FaCertificate />,
  },
  {
    text: "14 days of student exchange programs with top global universities focused on Data Analytics and AI",
    icon: <FaGraduationCap />,
  },
];

const whoCanDoMCA = [
  {
    text: "Completed class 12th in any stream with a strong interest in data analytics and artificial intelligence",
    icon: "⭐",
  },
  {
    text: "Graduates with a background in IT, Computer Science, Mathematics, or related fields",
    icon: "⭐",
  },
  { text: "Minimum 50% marks in class 12th or equivalent", icon: "⭐" },
  {
    text: "Passion for working with data, machine learning models, and AI technologies",
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
    text: "BBA in Data Analytics and Artificial Intelligence is an undergraduate program focused on data analysis, machine learning, and AI technology, preparing students for roles in the rapidly growing data science and AI fields.",
  },
  {
    icon: <FaUniversity />,
    text: "This course is ideal for students who want to specialize in data analytics, artificial intelligence, and machine learning, regardless of their previous educational background.",
  },
  {
    icon: <FaCheckCircle />,
    text: "The duration of the BBA - Data Analytics and AI program is 3 years, divided into 6 semesters, providing a comprehensive understanding of both business and technology.",
  },
  {
    icon: <FaDollarSign />,
    text: "The average starting salary for graduates in this field ranges from 4-8 Lakhs per year, depending on roles, skills, and industry experience in data analytics and AI.",
  },
  {
    icon: <FaLightbulb />,
    text: "Graduates can pursue careers in data analysis, AI development, machine learning, business intelligence, and data-driven decision-making across various industries.",
  },
  {
    icon: <FaBuilding />,
    text: "Top companies hiring BBA - Data Analytics and AI graduates include tech giants like Google, Microsoft, Amazon, IBM, and various data-centric firms, offering excellent career prospects.",
  },
];

const campuses = [
  {
    name: "IIMT University, Meerut",
    program: "BBA Program | UGC approved",
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
    program: "BBA Program | UGC recognised",
    specialisations: 3,
    certifications: 10,
    fees: "₹ 3.88 Lacs",
    images: [
      "assets/placement/sage1.jpg",
      "assets/placement/sage2.jpg",
      "assets/placement/sage3.webp",
    ],
  },
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

const OurPromise = () => {
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
          BBA - Data Analytics and Artificial Intelligence Highlights
        </h1>
        <p className="mca-description">
          Dive deep into data-driven decision-making, machine learning, and AI
          technology, equipping yourself with the necessary tools and skills to
          excel in the fields of data analytics and artificial intelligence.
        </p>
        <div className="highlight-cards">
          <div className="highlight-card">
            <p className="highlight-number">3</p>
            <p className="highlight-text">YEAR FULL-TIME PROGRAM</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">5+</p>
            <p className="highlight-text">SPECIALISATIONS OFFERED*</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">6+</p>
            <p className="highlight-text">MONTHS OF INTERNSHIPS*</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">3</p>
            <p className="highlight-text">CAPSTONE PROJECTS</p>
          </div>
        </div>
      </div>
      <div className="course-Overview-container">
        <h1 className="mca-title">Course Overview</h1>
        <p className="mca-description">
          The BBA in Data Analytics & Artificial Intelligence is designed to
          equip students with cutting-edge skills in data-driven
          decision-making, AI-powered business solutions, and strategic
          analytics. This program integrates business management fundamentals
          with data science, machine learning, and artificial intelligence,
          preparing students for careers in tech-driven industries.
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
            Who can do BBA - Data Analytics and Artificial Intelligence?
          </h1>
          <div className="mca-criteria">
            <div className="criteria-left">
              {whoCanDoMCA.slice(0, 3).map((criteria, index) => (
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
          <h4>Year 1: Business & Analytics Fundamentals</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Introduction to Business & Management</li>
                <li>Principles of Marketing & Digital Strategies</li>
                <li>Financial Accounting & Business Mathematics</li>
                <li>Business Communication & Soft Skills</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Fundamentals of Data Analytics & Big Data</li>
                <li>
                  Introduction to Artificial Intelligence & Machine Learning
                </li>
                <li>Basics of Python & R for Business Analytics</li>
                <li>Statistics for Business Decision-Making</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 2: Advanced Data Science & AI Applications</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>
                  Data Visualization & Business Intelligence Tools (Power BI,
                  Tableau)
                </li>
                <li>Predictive Analytics & Machine Learning Algorithms</li>
                <li>AI in Business & Process Automation</li>
                <li>SQL & Database Management for Business Analytics</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>E-Commerce & AI-driven Consumer Behavior Analysis</li>
                <li>Operations & Supply Chain Analytics</li>
                <li>HR Analytics & Workforce Optimization</li>
                <li>Cloud Computing & AI Deployment</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 3: AI & Data-Driven Business Strategy</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Advanced AI Techniques (Deep Learning, NLP, Chatbots)</li>
                <li>Financial Analytics & Investment Strategies</li>
                <li>Cybersecurity & Ethical AI Practices</li>
                <li>Blockchain & AI Integration in Business</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Entrepreneurship & Innovation in Data-Driven Businesses</li>
                <li>
                  Capstone Project: AI & Data Analytics for Business Growth
                </li>
                <li>Internship / Industry Training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="key-highlights-container">
        <h1 className="mca-title">Key Highlights</h1>
        <ul>
          <li>Hands-on Learning with Real-World Data Sets 📊</li>
          <li>
            Training on AI & Analytics Tools (Python, R, SQL, Power BI, Tableau)
          </li>
          <li>Industry Mentorship & Expert-Led Workshops 🎓</li>
          <li>Internship & Placement Assistance 🚀</li>
          <li>Capstone Project on AI-driven Business Solutions</li>
        </ul>
      </div>

      <div className="career-opportunities-container">
        <h1 className="mca-title">Career Opportunities</h1>
        <ul>
          <li>Data Analyst / Business Intelligence Analyst</li>
          <li>AI Consultant / AI Product Manager</li>
          <li>Data Scientist & Machine Learning Engineer</li>
          <li>Financial & Risk Analyst</li>
          <li>Digital Marketing & Consumer Analytics Expert</li>
          <li>Operations & Supply Chain Data Strategist</li>
        </ul>
        <p>
          Top Recruiters: Tech Companies, Financial Institutions, Consulting
          Firms, E-Commerce Giants
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
            BBA - Data Analytics and Artificial Intelligence Summary
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
            {/* What programming languages are taught in this course? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(0)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>1. What programming languages are taught in this course?</p>
              </div>
              {activeIndex === 0 && (
                <div className="accordion-body">
                  Most BBA programs in Data Analytics & AI cover:
                  <ul>
                    <li>Python (for data analysis, machine learning)</li>
                    <li>R (for statistical computing and visualization)</li>
                    <li>SQL (for database management and querying)</li>
                    <li>
                      JavaScript (for data visualization and AI applications)
                    </li>
                    <li>Scala (for big data processing in Apache Spark)</li>
                  </ul>
                </div>
              )}
            </div>

            {/* What industries require data analytics professionals? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(1)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>2. What industries require data analytics professionals?</p>
              </div>
              {activeIndex === 1 && (
                <div className="accordion-body">
                  Data analytics and AI professionals are in high demand across
                  industries like:
                  <ul>
                    <li>Finance & Banking (Risk Analysis, Fraud Detection)</li>
                    <li>Healthcare (Medical Imaging, Predictive Analytics)</li>
                    <li>
                      E-commerce & Retail (Customer Behavior Analysis,
                      Recommendation Systems)
                    </li>
                    <li>
                      Marketing & Advertising (AI-driven Campaigns, Sentiment
                      Analysis)
                    </li>
                    <li>
                      Manufacturing & Supply Chain (Predictive Maintenance,
                      Demand Forecasting)
                    </li>
                    <li>
                      IT & Cybersecurity (Threat Detection, AI-based Automation)
                    </li>
                    <li>
                      Government & Policy Making (Public Data Analysis, Smart
                      City Development)
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Are there hands-on AI projects? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(2)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>3. Are there hands-on AI projects?</p>
              </div>
              {activeIndex === 2 && (
                <div className="accordion-body">
                  Yes, it includes practical AI projects, such as:
                  <ul>
                    <li>
                      Predictive Analytics Models (Stock Price Forecasting,
                      Customer Churn Prediction)
                    </li>
                    <li>
                      Machine Learning & Deep Learning Projects (Image
                      Recognition, Chatbots)
                    </li>
                    <li>
                      Big Data Processing (Handling large datasets with Hadoop &
                      Spark)
                    </li>
                    <li>
                      Business Intelligence Dashboards (Power BI, Tableau)
                    </li>
                    <li>AI-driven Marketing & Sales Analytics</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Is prior coding knowledge required? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(3)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>4. Is prior coding knowledge required?</p>
              </div>
              {activeIndex === 3 && (
                <div className="accordion-body">
                  Not always required! Most programs start with
                  beginner-friendly coding modules. However, having basic
                  programming knowledge (Python, SQL) can be helpful.
                </div>
              )}
            </div>

            {/* What tools and software will I learn? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(4)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>5. What tools and software will I learn?</p>
              </div>
              {activeIndex === 4 && (
                <div className="accordion-body">
                  Students will learn tools and software for:
                  <ul>
                    <li>
                      Data Analysis & Visualization: Python (Pandas,
                      Matplotlib), R, Power BI, Tableau
                    </li>
                    <li>
                      Machine Learning & AI: TensorFlow, Scikit-Learn, Keras
                    </li>
                    <li>
                      Big Data & Cloud Platforms: Hadoop, Apache Spark, AWS,
                      Google Cloud
                    </li>
                    <li>Database Management: MySQL, PostgreSQL, MongoDB</li>
                    <li>
                      Automation & AI Development: Chatbot Frameworks, NLP
                      Libraries
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* What job roles can I pursue after graduation? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(5)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>6. What job roles can I pursue after graduation?</p>
              </div>
              {activeIndex === 5 && (
                <div className="accordion-body">
                  Graduates can apply for roles such as:
                  <ul>
                    <li>
                      Data Analyst (Analyzing business data to provide insights)
                    </li>
                    <li>
                      Business Intelligence Analyst (Developing dashboards &
                      reports)
                    </li>
                    <li>
                      AI Specialist (Building AI-driven solutions for
                      businesses)
                    </li>
                    <li>
                      Machine Learning Engineer (Developing predictive models)
                    </li>
                    <li>
                      Big Data Analyst (Processing and analyzing large datasets)
                    </li>
                    <li>
                      Marketing Data Analyst (Optimizing campaigns using AI
                      insights)
                    </li>
                    <li>
                      Risk Analyst (Using AI to detect fraud & financial risks)
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

export default OurPromise;
