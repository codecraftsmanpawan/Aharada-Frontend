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
} from "react-icons/fa";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import Testimonials from "../../../components/Testimonials/Testimonials";
import Feedback from "../../Home/component/Feedback";
import Course from "../../Home/component/CouseOffer";

const offerings = [
  {
    text: "Hands-on training in entrepreneurship and business innovation",
    icon: <FaLightbulb />,
  },
  {
    text: "Opportunities to launch and scale your own startup",
    icon: <FaRocket />,
  },
  {
    text: "Internships with startups, incubators, and venture capital firms",
    icon: <FaBriefcase />,
  },
  {
    text: "Global exposure to startup ecosystems and business networking",
    icon: <FaGlobeAmericas />,
  },
  {
    text: "Industry-focused curriculum with real-world case studies",
    icon: <FaBookOpen />,
  },
  {
    text: "Certifications in business strategy, financial planning, and digital marketing",
    icon: <FaCertificate />,
  },
  {
    text: "Soft skills and leadership training for future business leaders",
    icon: <FaUsers />,
  },
];

const whoCanDoMCA = [
  { text: "Passed class 12th from a recognized board", icon: "⭐" },
  {
    text: "Aspiring entrepreneurs and business enthusiasts interested in startups and innovation",
    icon: "⭐",
  },
  {
    text: "Minimum 50% marks in class 12th (may vary by institution)",
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
    text: "The full form of BBA - Entrepreneurship & Innovation is Bachelor of Business Administration in Entrepreneurship & Innovation, a specialized undergraduate course.",
  },
  {
    icon: <FaUniversity />,
    text: "This course is designed for aspiring entrepreneurs, business leaders, and innovators who want to start their own ventures or drive innovation in organizations.",
  },
  {
    icon: <FaCheckCircle />,
    text: "A regular BBA - Entrepreneurship & Innovation course duration is 3 years, divided into 6 semesters, including startup incubation and hands-on projects.",
  },
  {
    icon: <FaDollarSign />,
    text: "The earning potential varies widely, with startup founders and business professionals earning based on their venture's success and market demand.",
  },
  {
    icon: <FaLightbulb />,
    text: "Career opportunities include startup founder, business consultant, innovation manager, venture capitalist, and roles in business development.",
  },
  {
    icon: <FaBuilding />,
    text: "Graduates may start their own ventures or work with top firms like Deloitte, EY, McKinsey, and startup incubators that support innovative businesses.",
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

const EntrepreneurshipInnovation = () => {
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
          BBA - Entrepreneurship & Innovation Highlights
        </h1>
        <p className="mca-description">
          Unlock your entrepreneurial potential with a curriculum designed to
          foster innovation, business acumen, and leadership skills.
        </p>
        <div className="highlight-cards">
          <div className="highlight-card">
            <p className="highlight-number">3</p>
            <p className="highlight-text">YEAR FULL-TIME PROGRAM</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">50+</p>
            <p className="highlight-text">STARTUP INCUBATION SUPPORT</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">10+</p>
            <p className="highlight-text">BUSINESS & LEADERSHIP WORKSHOPS</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">₹10 Cr</p>
            <p className="highlight-text">SEED FUNDING OPPORTUNITIES</p>
          </div>
        </div>
      </div>
      <div className="course-Overview-container">
        <h1 className="mca-title">Course Overview</h1>
        <p className="mca-description">
          The BBA in Entrepreneurship & Innovation is a dynamic program designed
          to develop entrepreneurial mindset, business acumen, and leadership
          skills. This course equips students with the knowledge of startup
          development, business strategy, innovation, and financial management,
          preparing them to launch and manage successful businesses.
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
            Who can do BBA - Entrepreneurship & Innovation?
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
          <h4>Year 1: Business Fundamentals & Entrepreneurial Mindset</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Introduction to Business & Management</li>
                <li>Principles of Marketing & Sales Strategies</li>
                <li>Business Communication & Negotiation Skills</li>
                <li>Basics of Accounting & Financial Management</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Entrepreneurship & Startup Ecosystem</li>
                <li>Microeconomics & Business Environment</li>
                <li>Legal Aspects of Business & Company Laws</li>
                <li>Digital & Social Media Marketing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 2: Startup Development & Business Growth</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Business Model Development & Lean Startup Methodology</li>
                <li>Design Thinking & Innovation Management</li>
                <li>Human Resource Management for Startups</li>
                <li>E-Commerce & Online Business Strategies</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Venture Capital & Funding Strategies</li>
                <li>Risk Management & Business Ethics</li>
                <li>Operations & Supply Chain Management</li>
                <li>Market Research & Consumer Behavior</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 3: Scaling & Leadership in Business</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Growth Hacking & Scaling Strategies</li>
                <li>Leadership & Team Management</li>
                <li>Financial Planning & Investment Strategies</li>
                <li>Global Entrepreneurship & International Business</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Technology & AI in Business Innovation</li>
                <li>Sustainability & Social Entrepreneurship</li>
                <li>Final Year Project: Business Plan Development</li>
                <li>Internship / Industry Training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="key-highlights-container">
        <h1 className="mca-title">Key Highlights</h1>
        <ul>
          <li>Hands-on Learning with Startup Case Studies 🚀</li>
          <li>Business Plan Development & Pitching Sessions</li>
          <li>Industry Experts & Entrepreneur Mentors 🎓</li>
          <li>Internship & Funding Assistance 💰</li>
          <li>Access to Startup Incubators & Accelerators</li>
        </ul>
      </div>

      <div className="career-opportunities-container">
        <h1 className="mca-title">Career Opportunities</h1>
        <ul>
          <li>Startup Founder / Entrepreneur</li>
          <li>Business Consultant / Growth Strategist</li>
          <li>Digital Marketing & E-Commerce Specialist</li>
          <li>Innovation Manager in Corporates</li>
          <li>Product Manager & Business Analyst</li>
          <li>Venture Capital & Investment Consultant</li>
        </ul>
        <p>
          Top Recruiters: Startups, Venture Capital Firms, Incubators, Business
          Consultancies
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
            BBA - Entrepreneurship & Innovation Summary
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
            {/* What skills will I gain from this course? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(0)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>1. What skills will I gain from this course?</p>
              </div>
              {activeIndex === 0 && (
                <div className="accordion-body">
                  This program equips students with essential business and
                  innovation skills, including:
                  <ul>
                    <li>Business Strategy & Planning</li>
                    <li>Financial Management & Budgeting</li>
                    <li>Market Research & Competitive Analysis</li>
                    <li>Leadership & Team Management</li>
                    <li>Creative Thinking & Problem-Solving</li>
                    <li>Digital Marketing & Branding</li>
                    <li>Negotiation & Networking Skills</li>
                    <li>Innovation & Product Development</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Can I start my own business after completing this course? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(1)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>
                  2. Can I start my own business after completing this course?
                </p>
              </div>
              {activeIndex === 1 && (
                <div className="accordion-body">
                  Yes! The program is designed to prepare students for
                  entrepreneurship by providing:
                  <ul>
                    <li>
                      Knowledge on how to start, fund, and grow a business
                    </li>
                    <li>
                      Exposure to real-world case studies of successful startups
                    </li>
                    <li>Guidance on business model creation and execution</li>
                    <li>Support for building a minimum viable product (MVP)</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Are there networking opportunities with entrepreneurs? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(2)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>3. Are there networking opportunities with entrepreneurs?</p>
              </div>
              {activeIndex === 2 && (
                <div className="accordion-body">
                  Absolutely! Most universities offer:
                  <ul>
                    <li>
                      Guest lectures & panel discussions with successful
                      entrepreneurs
                    </li>
                    <li>Startup incubators & accelerator programs</li>
                    <li>Mentorship programs with business leaders</li>
                    <li>
                      Entrepreneurial networking events & pitch competitions
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Does the course include real-world projects? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(3)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>4. Does the course include real-world projects?</p>
              </div>
              {activeIndex === 3 && (
                <div className="accordion-body">
                  Yes, practical learning is a key part of the curriculum,
                  including:
                  <ul>
                    <li>Live business projects & case studies</li>
                    <li>Developing & pitching a startup idea</li>
                    <li>Internships in startups & venture capital firms</li>
                    <li>
                      Hands-on experience in digital marketing, sales, and
                      branding
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* What industries hire graduates from this program? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(4)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>5. What industries hire graduates from this program?</p>
              </div>
              {activeIndex === 4 && (
                <div className="accordion-body">
                  Graduates can work in multiple industries, including:
                  <ul>
                    <li>
                      Startups & New Ventures (Founder, Business Development
                      Manager)
                    </li>
                    <li>
                      E-commerce & Digital Marketing (Product Manager, Growth
                      Strategist)
                    </li>
                    <li>
                      Finance & Investment (Venture Capital Analyst, Business
                      Consultant)
                    </li>
                    <li>
                      Tech & Innovation (Startup Consultant, Innovation
                      Strategist)
                    </li>
                    <li>
                      Corporate Business Strategy (Management Analyst, Business
                      Operations)
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* What support is available for startups? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(5)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>6. What support is available for startups?</p>
              </div>
              {activeIndex === 5 && (
                <div className="accordion-body">
                  We provide:
                  <ul>
                    <li>Startup incubators & seed funding opportunities</li>
                    <li>
                      Mentorship from experienced entrepreneurs & investors
                    </li>
                    <li>Co-working spaces & networking events</li>
                    <li>Access to venture capital & angel investors</li>
                    <li>Legal & financial advisory for startups</li>
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

export default EntrepreneurshipInnovation;
