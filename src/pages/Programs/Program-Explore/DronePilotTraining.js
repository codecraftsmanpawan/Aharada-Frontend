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
  FaBitcoin,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import Testimonials from "../../../components/Testimonials/Testimonials";
import Feedback from "../../Home/component/Feedback";
import Course from "../../Home/component/CouseOffer";

const offerings = [
  {
    text: "Comprehensive training in drone flight operations, including basic controls, advanced flight techniques, and aerial photography",
    icon: <FaBitcoin />,
  },
  {
    text: "Exciting career opportunities in commercial drone piloting, drone mapping, aerial photography, surveying, and inspection services across various industries",
    icon: <FaChartLine />,
  },
  {
    text: "Hands-on flight training and live projects with leading drone service providers, gaining real-world drone piloting experience",
    icon: <FaBriefcase />,
  },
  {
    text: "Exposure to the latest drone technology, flight safety protocols, airspace regulations, and industry-specific drone applications",
    icon: <FaLightbulb />,
  },
  {
    text: "Industry-aligned curriculum with practical flight simulations, case studies, and regulations to prepare students for effective drone operations",
    icon: <FaBookOpen />,
  },
  {
    text: "Recognized certifications in drone piloting, aerial photography, drone safety, and airspace regulations, including government-approved licenses for commercial drone operations",
    icon: <FaCertificate />,
  },
  {
    text: "Development of critical thinking, problem-solving, and strategic decision-making skills tailored for drone pilots working in diverse industries",
    icon: <FaUsers />,
  },
];

const whoCanDoMCA = [
  {
    text: "Individuals who have completed at least 10+2 in any stream and are passionate about drone technology and flying",
    icon: "🎓",
  },
  {
    text: "Aspirants interested in pursuing careers in commercial drone piloting, aerial photography, drone mapping, and inspections across various industries",
    icon: "🚁",
  },
  {
    text: "No prior experience required, but a basic understanding of technology and aviation will be beneficial",
    icon: "📚",
  },
  {
    text: "Individuals aiming for certification and commercial roles as drone pilots in sectors such as agriculture, real estate, media, and surveying",
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
    text: "Drone Pilot Training is a specialized program designed to teach students the essential skills for flying drones safely and effectively, covering flight operations, aerial photography, mapping, and safety protocols.",
  },
  {
    icon: <FaUniversity />,
    text: "This course is ideal for individuals who want to become certified drone pilots and pursue careers in aerial photography, surveying, agriculture, real estate, and drone-based inspections.",
  },
  {
    icon: <FaCheckCircle />,
    text: "A regular Drone Pilot Training program lasts for 6-8 weeks, offering hands-on flight training, live projects, and industry-specific scenarios to ensure students are ready for real-world drone operations.",
  },
  {
    icon: <FaDollarSign />,
    text: "The average starting salary for certified drone pilots ranges from 4-8 Lakhs per year, depending on industry, location, and level of experience in drone operations.",
  },
  {
    icon: <FaLightbulb />,
    text: "Career opportunities include roles as commercial drone pilots, drone photographers, aerial surveyors, mapping specialists, and inspection pilots across various industries like agriculture, construction, and media.",
  },
  {
    icon: <FaBuilding />,
    text: "Top recruiters in this field include companies in agriculture, construction, real estate, media, and technology, as well as government agencies and specialized drone service providers.",
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

const DronePilotTraining = () => {
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
        <h1 className="mca-title">Drone Pilot Training Highlights</h1>
        <p className="mca-description">
          Gain hands-on expertise in drone operations, flight techniques, safety
          protocols, and the legal framework of drone usage, preparing you for
          professional roles in drone piloting across various industries.
        </p>
        <div className="highlight-cards">
          <div className="highlight-card">
            <p className="highlight-number">6</p>
            <p className="highlight-text">MONTHS FULL-TIME PROGRAM</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">20+</p>
            <p className="highlight-text">
              RECRUITMENT PARTNERS IN THE DRONE INDUSTRY
            </p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">3+</p>
            <p className="highlight-text">
              CERTIFICATIONS IN DRONE PILOTING AND OPERATIONS
            </p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">2</p>
            <p className="highlight-text">
              PRACTICAL FLIGHT SESSIONS & LIVE PROJECTS
            </p>
          </div>
        </div>
      </div>

      <div className="course-Overview-container">
        <h1 className="mca-title">Course Overview</h1>
        <p className="mca-description">
          The Drone Pilot Training Program is designed for individuals who want
          to become professional drone operators. This course covers the
          fundamental and advanced aspects of drone technology, regulations,
          flight operations, and aerial applications across industries like
          aerial photography, agriculture, defense, logistics, and surveying.
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
              <img src="../assets/img/g.PNG" alt="Graduate" />
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
          <h1 className="who-can-do-title">Who can do Drone Pilot Training?</h1>
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
          <h4>Module 1: Introduction to Drones & Regulations</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Basics of Drone Technology & Types of Drones</li>
                <li>Drone Laws & Regulations (DGCA, FAA, EASA Compliance)</li>
                <li>Drone Pilot Licensing & Certification Requirements</li>
                <li>Airspace Classification & Aviation Terminology</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Pre-Flight Planning & Safety Guidelines</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Module 2: Drone Hardware & Flight Mechanics</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>
                  Understanding Drone Components (Motors, Batteries, Sensors)
                </li>
                <li>Aerodynamics & Flight Control Principles</li>
                <li>GPS Navigation & Autonomous Flight Systems</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Troubleshooting & Drone Maintenance</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Module 3: Practical Flight Training</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Hands-On Training with Different Drone Models</li>
                <li>Manual & Autonomous Flying Techniques</li>
                <li>Takeoff, Hovering, Landing, and Maneuvers</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Emergency Procedures & Crash Recovery</li>
                <li>
                  Night Flying & Beyond Visual Line of Sight (BVLOS) Operations
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Module 4: Industry-Specific Drone Applications</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Aerial Photography & Videography Techniques</li>
                <li>Drone Mapping & Surveying (GIS & LiDAR)</li>
                <li>
                  Agricultural Drone Applications (Crop Monitoring, Spraying)
                </li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Drones in Logistics & Delivery Services</li>
                <li>Surveillance & Security Operations with Drones</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Module 5: Certification & Career Guidance</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>DGCA/FAA Certification Exam Preparation</li>
                <li>Career Opportunities as a Certified Drone Pilot</li>
                <li>Business Opportunities in the Drone Industry</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Starting a Drone-Based Service Business</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="key-highlights-container">
        <h1 className="mca-title">Key Highlights</h1>
        <ul>
          <li>Hands-On Flight Training with Latest Drone Models 🚁</li>
          <li>DGCA/FAA-Compliant Certification Training 📜</li>
          <li>Learn from Industry Experts & Experienced Drone Pilots</li>
          <li>
            Practical Projects in Aerial Photography, Mapping & Surveillance
          </li>
          <li>
            Internship & Placement Assistance in Drone-Based Companies &
            Startups
          </li>
        </ul>
      </div>

      <div className="career-opportunities-container">
        <h1 className="mca-title">Career Opportunities</h1>
        <ul>
          <li>Certified Drone Pilot (Commercial & Government)</li>
          <li>Aerial Survey & Mapping Specialist</li>
          <li>Drone Photographer & Videographer</li>
          <li>Agricultural Drone Operator</li>
          <li>Drone Inspector for Security & Infrastructure</li>
          <li>UAV Engineer & Drone Technician</li>
        </ul>
        <p>
          Top Recruiters: Film & Media, Agriculture, Surveying & Mapping
          Companies, Logistics Firms, Defense & Law Enforcement Agencies
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
          <h1 className="offerings-title">Drone Pilot Training Summary</h1>
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
            {/* What certifications are provided in this course? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(0)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>1. What certifications are provided in this course?</p>
              </div>
              {activeIndex === 0 && (
                <div className="accordion-body">
                  Most drone pilot training programs offer certifications such
                  as:
                  <ul>
                    <li>
                      DGCA (Directorate General of Civil Aviation) Certified
                      Drone Pilot License (India)
                    </li>
                    <li>FAA Part 107 Certification (USA)</li>
                    <li>EASA Drone Pilot Certification (Europe)</li>
                    <li>
                      Remote Pilot Certificate (RPC) for commercial drone
                      operations
                    </li>
                    <li>
                      BVLOS (Beyond Visual Line of Sight) Certification for
                      advanced drone operations
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* What types of drones are covered in training? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(1)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>2. What types of drones are covered in training?</p>
              </div>
              {activeIndex === 1 && (
                <div className="accordion-body">
                  The course typically covers various types of drones,
                  including:
                  <ul>
                    <li>
                      Multi-Rotor Drones (Quadcopters, Hexacopters, Octocopters)
                    </li>
                    <li>
                      Fixed-Wing Drones (Long-range surveillance and mapping)
                    </li>
                    <li>Hybrid VTOL Drones (Vertical Take-Off and Landing)</li>
                    <li>
                      FPV Racing Drones (Used in drone racing competitions)
                    </li>
                    <li>
                      Industrial & Agricultural Drones (Used for spraying,
                      surveying, and monitoring)
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Are there practical flying sessions? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(2)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>3. Are there practical flying sessions?</p>
              </div>
              {activeIndex === 2 && (
                <div className="accordion-body">
                  Yes, most programs include hands-on flight training, covering:
                  <ul>
                    <li>Basic and Advanced Flight Maneuvers</li>
                    <li>Emergency Handling & Safety Procedures</li>
                    <li>Autonomous Drone Programming & Navigation</li>
                    <li>Aerial Photography & Videography Techniques</li>
                    <li>Simulated and Real-World Flying Environments</li>
                  </ul>
                </div>
              )}
            </div>

            {/* What industries require drone pilots? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(3)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>4. What industries require drone pilots?</p>
              </div>
              {activeIndex === 3 && (
                <div className="accordion-body">
                  Drone pilots are in high demand across multiple industries,
                  including:
                  <ul>
                    <li>Aerial Photography & Cinematography (Film & TV)</li>
                    <li>Agriculture & Crop Monitoring</li>
                    <li>
                      Construction & Real Estate (Aerial Surveys, 3D Mapping)
                    </li>
                    <li>Disaster Management & Search & Rescue Operations</li>
                    <li>Defense & Security Surveillance</li>
                    <li>
                      Logistics & Delivery Services (Drone-based delivery
                      systems)
                    </li>
                    <li>Environmental & Wildlife Conservation Monitoring</li>
                    <li>Oil, Gas & Infrastructure Inspection</li>
                  </ul>
                </div>
              )}
            </div>

            {/* What is the duration of the training program? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(4)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>5. What is the duration of the training program?</p>
              </div>
              {activeIndex === 4 && (
                <div className="accordion-body">
                  The training duration varies:
                  <ul>
                    <li>Basic Drone Training: 5–7 days</li>
                    <li>Advanced Commercial Pilot Training: 2–4 weeks</li>
                    <li>
                      Specialized Training (BVLOS, AI-based Drone Operations,
                      etc.): 1–3 months
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* What are the job prospects after completing this training? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(5)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>
                  6. What are the job prospects after completing this training?
                </p>
              </div>
              {activeIndex === 5 && (
                <div className="accordion-body">
                  After completing drone pilot training, you can work as:
                  <ul>
                    <li>Certified Drone Operator for Commercial Projects</li>
                    <li>Aerial Surveyor & Mapping Specialist</li>
                    <li>Cinematographer & Drone Photographer</li>
                    <li>Agricultural Drone Operator</li>
                    <li>Security & Surveillance Drone Pilot</li>
                    <li>Drone Instructor or Consultant</li>
                    <li>
                      Drone Fleet Manager in Delivery & Logistics Companies
                    </li>
                    <li>
                      Entrepreneur (Starting a Drone-Based Service Business)
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

export default DronePilotTraining;
