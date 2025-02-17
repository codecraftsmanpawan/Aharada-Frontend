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
    text: "Comprehensive understanding of aerodynamics, propulsion, avionics, and aerospace materials",
    icon: <FaRocket />,
  },
  {
    text: "Career opportunities in aerospace design, flight testing, aeronautical engineering, and space systems",
    icon: <FaCogs />,
  },
  {
    text: "Hands-on experience through internships and live projects with leading aerospace companies and research organizations",
    icon: <FaBriefcase />,
  },
  {
    text: "Exposure to cutting-edge aerospace technologies, space exploration, and advanced flight systems",
    icon: <FaSatellite />,
  },
  {
    text: "Industry-aligned curriculum focused on aircraft and spacecraft design, propulsion systems, and control engineering",
    icon: <FaBookOpen />,
  },
  {
    text: "Recognized certifications in Aerospace Engineering, CAD modeling, and UAV (Unmanned Aerial Vehicle) systems",
    icon: <FaCertificate />,
  },
  {
    text: "Development of problem-solving, critical thinking, and project management skills for aerospace professionals",
    icon: <FaUsers />,
  },
];
const whoCanDoMCA = [
  {
    text: "Students who have completed 10+2 with Physics, Mathematics, and Chemistry as core subjects and have a passion for aerospace technology",
    icon: "🚀",
  },
  {
    text: "Aspirants interested in careers in aerospace design, propulsion engineering, avionics, and space exploration",
    icon: "🛩️",
  },
  {
    text: "Minimum 50% marks in 10+2 with Mathematics and Physics (eligibility criteria may vary by institution)",
    icon: "📚",
  },
  {
    text: "Individuals aiming for roles in aircraft design, space systems, flight testing, and aerospace research and development",
    icon: "🛠️",
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
    icon: <FaRocket />,
    text: "B.Tech in Aerospace Engineering is an undergraduate program that focuses on aerodynamics, propulsion, avionics, flight mechanics, and aerospace materials.",
  },
  {
    icon: <FaUniversity />,
    text: "This course is ideal for students aspiring to work in aerospace design, aircraft manufacturing, space systems, flight testing, and propulsion engineering.",
  },
  {
    icon: <FaCheckCircle />,
    text: "The B.Tech Aerospace Engineering program typically lasts for 4 years, divided into 8 semesters, including practical sessions, live projects, internships, and hands-on training with leading aerospace firms.",
  },
  {
    icon: <FaDollarSign />,
    text: "The average starting salary for aerospace engineering graduates ranges from 6-12 Lakhs per year, depending on the role, industry, and skills.",
  },
  {
    icon: <FaLightbulb />,
    text: "Career opportunities include roles in aircraft design, propulsion systems, aerospace research, avionics engineering, and space exploration technologies.",
  },
  {
    icon: <FaBuilding />,
    text: "Top recruiters for aerospace engineering graduates include companies like Boeing, Airbus, ISRO, NASA, Lockheed Martin, and other leading aerospace firms.",
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
  {
    name: "Dev Bhoomi Uttarakhand University",
    program: "MCA Program | AICTE approved",
    specialisations: 4,
    certifications: 8,
    fees: "₹ 4.00 Lacs",
    images: [
      "assets/placement/dev1.jpeg",
      "assets/placement/dev1.jpeg",
      "assets/placement/dev3.jpg",
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

const AerospaceEngineering = () => {
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
        <h1 className="mca-title">B.Tech - Aerospace Engineering Highlights</h1>
        <p className="mca-description">
          Equip yourself with specialized knowledge in aerodynamics, propulsion,
          avionics, and space systems, preparing you for a successful career in
          the rapidly advancing field of aerospace engineering.
        </p>
        <div className="highlight-cards">
          <div className="highlight-card">
            <p className="highlight-number">4</p>
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
            <p className="highlight-number">5</p>
            <p className="highlight-text">INTERNSHIPS & LIVE PROJECTS</p>
          </div>
        </div>
      </div>

      <div className="course-Overview-container">
        <h1 className="mca-title">Course Overview</h1>
        <p className="mca-description">
          The BBA in Aviation & Airport Management is a professional degree
          designed for students aiming to build a career in the aviation and
          airline industry. The program focuses on airport operations, airline
          management, aviation safety, customer service, and regulatory
          compliance. It prepares students for managerial and operational roles
          in airports, airlines, and aviation service providers.
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
              to="../../assets/img/AEROSPACE.pdf"
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
            Who can do B.Tech - Aerospace Engineering?
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
          <h4>Year 1: Foundation in Engineering & Physics</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Engineering Mathematics & Physics</li>
                <li>Introduction to Aerospace Engineering</li>
                <li>Chemistry & Environmental Science</li>
                <li>Engineering Mechanics</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Basic Electrical & Electronics Engineering</li>
                <li>Computer Programming & CAD</li>
                <li>Communication & Soft Skills</li>
                <li>Workshop & Manufacturing Processes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 2: Core Aerospace Subjects</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Aerodynamics & Fluid Mechanics</li>
                <li>Thermodynamics & Propulsion Systems</li>
                <li>Aircraft Structures & Materials Science</li>
                <li>Avionics & Aircraft Electrical Systems</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Strength of Materials & Structural Analysis</li>
                <li>Numerical Methods & Simulation</li>
                <li>Instrumentation & Control Engineering</li>
                <li>Flight Mechanics & Performance</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 3: Advanced Aerospace Technologies</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Rocket & Spacecraft Propulsion</li>
                <li>Computational Fluid Dynamics (CFD)</li>
                <li>Aircraft & Spacecraft Design</li>
                <li>Aerospace Vehicle Dynamics & Control</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Aerospace Manufacturing & Robotics</li>
                <li>UAV (Unmanned Aerial Vehicle) Design & Applications</li>
                <li>Aerospace Materials & Composites</li>
                <li>Research Methodology & Technical Writing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 4: Specialization & Industry Exposure</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Satellite Technology & Space Systems</li>
                <li>Hypersonic & Supersonic Aerodynamics</li>
                <li>AI & Machine Learning in Aerospace</li>
                <li>Aerospace Safety & Quality Management</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Aircraft Maintenance, Repair & Overhaul (MRO)</li>
                <li>Capstone Project & Research Work</li>
                <li>Industrial Training / Internship</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="key-highlights-container">
        <h1 className="mca-title">Key Highlights</h1>
        <ul>
          <li>
            Hands-on Training with Aerospace Software (ANSYS, MATLAB, CATIA) ✈️
          </li>
          <li>Flight Simulations & Wind Tunnel Testing</li>
          <li>Industrial Exposure with ISRO, DRDO, NASA Internships 🌍</li>
          <li>Expert Faculty from Aerospace & Defense Industries</li>
          <li>Focus on Space Exploration & Advanced Propulsion Systems</li>
        </ul>
      </div>

      <div className="career-opportunities-container">
        <h1 className="mca-title">Career Opportunities</h1>
        <ul>
          <li>Aerospace Engineer (Aircraft & Spacecraft Design)</li>
          <li>Avionics & Control Systems Engineer</li>
          <li>Satellite & Space Systems Engineer</li>
          <li>Research Scientist in Aerodynamics & Propulsion</li>
          <li>UAV & Drone Technology Specialist</li>
          <li>Maintenance & Quality Control Engineer</li>
        </ul>
        <p>
          Top Recruiters: ISRO, DRDO, NASA, Boeing, Airbus, HAL, SpaceX, Private
          Aerospace Firms
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
            B.Tech - Aerospace Engineering Summary
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
            {/* What is the scope of aerospace engineering? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(0)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>1. What is the scope of aerospace engineering?</p>
              </div>
              {activeIndex === 0 && (
                <div className="accordion-body">
                  Aerospace engineering has a vast scope in both aviation and
                  space exploration, covering areas like:
                  <ul>
                    <li>
                      Aircraft Design & Development (Commercial & Military
                      Aircraft)
                    </li>
                    <li>
                      Spacecraft & Satellite Engineering (ISRO, NASA, SpaceX)
                    </li>
                    <li>
                      Drone & UAV Technology (Surveillance, Delivery Systems)
                    </li>
                    <li>Aviation Safety & Maintenance</li>
                    <li>Propulsion Systems & Rocket Technology</li>
                    <li>Aerodynamics & Computational Fluid Dynamics (CFD)</li>
                  </ul>
                </div>
              )}
            </div>

            {/* What are the major subjects in this course? */}
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
                  The key subjects include:
                  <ul>
                    <li>Aerodynamics & Fluid Mechanics</li>
                    <li>Aircraft & Spacecraft Structures</li>
                    <li>Propulsion & Jet Engine Technology</li>
                    <li>Avionics & Control Systems</li>
                    <li>Flight Mechanics & Navigation</li>
                    <li>Satellite & Rocketry Engineering</li>
                    <li>Computational Methods & AI in Aerospace</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Are there any research opportunities? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(2)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>3. Are there any research opportunities?</p>
              </div>
              {activeIndex === 2 && (
                <div className="accordion-body">
                  Yes! Many universities offer research projects in
                  collaboration with ISRO, NASA, DRDO, and private aerospace
                  firms. Areas of research include:
                  <ul>
                    <li>Hypersonic & Supersonic Aircraft Development</li>
                    <li>Advanced Materials for Spacecraft</li>
                    <li>AI & Machine Learning in Aerospace</li>
                    <li>Autonomous Drones & UAVs</li>
                    <li>Electric & Hybrid Propulsion Systems</li>
                  </ul>
                </div>
              )}
            </div>

            {/* What companies hire aerospace engineers? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(3)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>4. What companies hire aerospace engineers?</p>
              </div>
              {activeIndex === 3 && (
                <div className="accordion-body">
                  Top recruiters include:
                  <ul>
                    <li>
                      Government Space & Defense Agencies: ISRO, DRDO, NASA,
                      ESA, HAL
                    </li>
                    <li>
                      Aerospace Manufacturers: Boeing, Airbus, Lockheed Martin,
                      Dassault Aviation
                    </li>
                    <li>
                      Private Space Companies: SpaceX, Blue Origin, Rocket Lab
                    </li>
                    <li>
                      Airlines & MRO Companies: Indigo, Emirates, Lufthansa, GE
                      Aviation
                    </li>
                    <li>Drone & UAV Companies: DJI, Aerodyne, AeroVironment</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Does the course include practical training? */}
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
                  Yes, aerospace engineering programs include:
                  <ul>
                    <li>Wind Tunnel Testing & Aerodynamics Labs</li>
                    <li>Flight Simulators & Avionics Training</li>
                    <li>Aircraft & Rocket Engine Design Projects</li>
                    <li>Internships at Aerospace Companies & Space Agencies</li>
                  </ul>
                </div>
              )}
            </div>

            {/* What are the career options after graduation? */}
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
                  Aerospace engineering graduates can work as:
                  <ul>
                    <li>Aerospace Engineer (Aircraft & Spacecraft Design)</li>
                    <li>
                      Avionics Engineer (Navigation & Communication Systems)
                    </li>
                    <li>
                      Flight Dynamics Analyst (Aircraft Stability & Performance)
                    </li>
                    <li>
                      Rocket Propulsion Engineer (Missile & Space Launch
                      Vehicles)
                    </li>
                    <li>Drone & UAV Engineer (Autonomous Aerial Systems)</li>
                    <li>
                      Aircraft Maintenance Engineer (MRO & Airline Operations)
                    </li>
                    <li>Research Scientist (Space & Defense Research)</li>
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

export default AerospaceEngineering;
