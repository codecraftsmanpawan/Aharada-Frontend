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
} from "react-icons/fa";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import Testimonials from "../../../components/Testimonials/Testimonials";
import Feedback from "../../Home/component/Feedback";
import Course from "../../Home/component/CouseOffer";

const offerings = [
  {
    text: "Hands-on training in aviation and travel management",
    icon: <FaPlane />,
  },
  {
    text: "Global career opportunities in airlines, airports, and tourism",
    icon: <FaGlobe />,
  },
  {
    text: "Internships with leading airlines and travel agencies",
    icon: <FaBriefcase />,
  },
  {
    text: "Global aviation & travel industry exposure ",
    icon: <FaGlobeAmericas />,
  },
  {
    text: "Industry-focused curriculum with real-world case studies",
    icon: <FaBookOpen />,
  },
  {
    text: "Certifications in airline management, IATA, and travel consultancy",
    icon: <FaCertificate />,
  },
  {
    text: "Soft skills and leadership training for aviation professionals",
    icon: <FaUsers />,
  },
];

const whoCanDoMCA = [
  { text: "Passed class 12th from a recognized board", icon: "⭐" },
  {
    text: "Aspirants interested in aviation, travel, and tourism management",
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
    text: "The full form of BBA - Aviation & Travel is Bachelor of Business Administration in Aviation & Travel Management, a specialized undergraduate course.",
  },
  {
    icon: <FaUniversity />,
    text: "This course is ideal for students interested in aviation, airlines, tourism, and hospitality management.",
  },
  {
    icon: <FaCheckCircle />,
    text: "A regular BBA - Aviation & Travel course duration is 3 years, divided into 6 semesters, with practical training and industry exposure.",
  },
  {
    icon: <FaDollarSign />,
    text: "The average starting salary for graduates in this field ranges from 3-5 Lakhs per year, depending on job roles and experience.",
  },
  {
    icon: <FaLightbulb />,
    text: "Career opportunities include roles in airline management, airport operations, travel agencies, tourism boards, and hospitality firms.",
  },
  {
    icon: <FaBuilding />,
    text: "Top recruiters in this field include airlines like Indigo, Air India, SpiceJet, and global travel companies like Thomas Cook and MakeMyTrip.",
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

const AviationTravel = () => {
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
        <h1 className="mca-title">BBA in Aviation & Travel Highlights</h1>
        <p className="mca-description">
          Transform Your Career in the Aviation & Travel Industry
        </p>
        <div className="highlight-cards">
          <div className="highlight-card">
            <p className="highlight-number">3</p>
            <p className="highlight-text">YEAR FULL-TIME PROGRAM</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">30+</p>
            <p className="highlight-text">RECRUITMENT PARTNERS</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">6+</p>
            <p className="highlight-text">INDUSTRY CERTIFICATIONS</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">4</p>
            <p className="highlight-text">
              INTERNSHIP & TRAINING OPPORTUNITIES
            </p>
          </div>
        </div>
      </div>

      <div className="course-Overview-container">
        <h1 className="mca-title">Course Overview</h1>
        <p className="mca-description">
          The BBA in Aviation & Travel is a dynamic undergraduate program
          designed to equip students with in-depth knowledge of airline
          management, airport operations, travel & tourism , and business
          administration. This program blends academic knowledge with practical
          industry exposure , preparing students for high-demand careers in
          aviation, hospitality, and tourism sectors.
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
            <div className="graduate-img hide-on-mobile">
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
              <p>Verifed job profiles</p>
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
              to="../../assets/img/bbaab.pdf"
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
            Who can do BBA - Aviation & Travel?
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
          <h4>Year 1: Fundamentals of Business & Aviation</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Introduction to Business Management</li>
                <li>Principles of Marketing</li>
                <li>Business Communication & Soft Skills</li>
                <li>Basics of Accounting & Finance</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Introduction to Aviation Industry</li>
                <li>Travel & Tourism Industry Overview</li>
                <li>Airport & Airline Operations</li>
                <li>Business Mathematics & Statistics</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 2: Advanced Aviation & Travel Management</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Airline & Airport Management</li>
                <li>Travel Agency & Tour Operations</li>
                <li>Aviation Safety & Security Management</li>
                <li>Hospitality & Customer Service Excellence</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Digital Marketing in Aviation & Tourism</li>
                <li>Air Ticketing & Reservation System</li>
                <li>Aviation Logistics & Supply Chain Management</li>
                <li>Global Travel & Tourism Trends</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 3: Specialization & Career Development</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Aviation Law & Regulations</li>
                <li>Entrepreneurship in Aviation & Travel</li>
                <li>Sustainable Tourism & Eco-Travel</li>
                <li>Revenue & Pricing Strategies in Airlines</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Risk & Crisis Management in Aviation</li>
                <li>Internship / Industry Training</li>
                <li>Final Year Project / Research</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="key-highlights-container">
        <h1 className="mca-title">Key Highlights</h1>
        <ul>
          <li>Hands-on Training with Airlines & Airports ✈️</li>
          <li>Industry-Recognized Certifications (IATA, Amadeus, Galileo)</li>
          <li>Internship & Placement Assistance 🎯</li>
          <li>Expert Faculty & Industry Mentors 👨‍🏫</li>
          <li>Study Tours & Industrial Visits 🏝️</li>
        </ul>
      </div>

      <div className="career-opportunities-container">
        <h1 className="mca-title">Career Opportunities</h1>
        <ul>
          <li>Airline & Airport Management</li>
          <li>Travel & Tourism Industry (Tour Operators, Travel Agencies)</li>
          <li>Hospitality & Hotel Management</li>
          <li>Air Cargo & Freight Services</li>
          <li>Digital Marketing & E-Tourism</li>
          <li>Entrepreneurship in Aviation & Travel</li>
        </ul>
        <p>
          Top Recruiters: Airlines, Airports, Travel Agencies, Hotels,
          Hospitality Chains
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
          <h1 className="offerings-title">BBA - Aviation & Travel Summary</h1>
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
            {/* Career Opportunities Accordion Item */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(0)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>
                  1. What career opportunities are available after completing
                  this course?
                </p>
              </div>
              {activeIndex === 0 && (
                <div className="accordion-body">
                  After completing a BBA in Aviation & Travel, graduates can
                  pursue careers in:
                  <ul>
                    <li>
                      Airline Management (Airport Operations Manager, Airline
                      Customer Service Manager)
                    </li>
                    <li>
                      Airport Operations (Airport Ground Staff, Security
                      Manager)
                    </li>
                    <li>
                      Travel & Tourism Management (Travel Consultant, Tour
                      Operator, Hospitality Manager)
                    </li>
                    <li>
                      Air Cargo & Logistics (Cargo Supervisor, Logistics
                      Coordinator)
                    </li>
                    <li>
                      Aviation Safety & Compliance (Aviation Safety Officer,
                      Flight Operations Manager)
                    </li>
                    <li>
                      Airline Ticketing & Reservations (Ticketing Executive,
                      Reservations Manager)
                    </li>
                    <li>
                      Sales & Marketing in Aviation (Sales Manager for
                      Airlines/Travel Agencies)
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Eligibility Criteria Accordion Item */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(1)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>2. What are the eligibility criteria for admission?</p>
              </div>
              {activeIndex === 1 && (
                <div className="accordion-body">
                  <p>
                    Must have completed 10+2 (high school) from a recognized
                    board.
                  </p>
                  <p>Minimum required marks: 50% or higher.</p>
                </div>
              )}
            </div>

            {/* Practical Training Accordion Item */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(2)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>3. Does the course include practical training?</p>
              </div>
              {activeIndex === 2 && (
                <div className="accordion-body">
                  Yes, it includes:
                  <ul>
                    <li>Airport & Airline Simulations</li>
                    <li>Guest Lectures & Industry Visits</li>
                    <li>Workshops on Airline Management & Travel Operations</li>
                    <li>
                      Software Training (Amadeus, Galileo, Sabre for ticketing &
                      reservations)
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Program Duration Accordion Item */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(3)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>4. What is the duration of the program?</p>
              </div>
              {activeIndex === 3 && (
                <div className="accordion-body">
                  The program typically lasts 3 years (6 semesters). We also
                  offer 4-year programs with additional industry training.
                </div>
              )}
            </div>

            {/* Internship Opportunities Accordion Item */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(4)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>5. Are there internship opportunities?</p>
              </div>
              {activeIndex === 4 && (
                <div className="accordion-body">
                  Yes, internships are commonly included in the final year.
                  Students can intern at airports, airlines, travel agencies,
                  hotels, and logistics firms. Many universities have tie-ups
                  with aviation companies to provide hands-on experience.
                </div>
              )}
            </div>

            {/* Average Salary Accordion Item */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(5)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>6. What is the average salary after graduation?</p>
              </div>
              {activeIndex === 5 && (
                <div className="accordion-body">
                  The starting salary varies based on job role and location:
                  <ul>
                    <li>Airline Ground Staff: ₹3-5 LPA (INR)</li>
                    <li>Airport Operations Manager: ₹5-8 LPA</li>
                    <li>Travel Consultant: ₹3-6 LPA</li>
                    <li>Air Cargo Executive: ₹4-7 LPA</li>
                    <li>Flight Operations Manager: ₹6-10 LPA</li>
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

export default AviationTravel;
