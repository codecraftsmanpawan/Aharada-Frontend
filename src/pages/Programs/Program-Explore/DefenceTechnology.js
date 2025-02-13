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
  FaShieldAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import Testimonials from "../../../components/Testimonials/Testimonials";
import Feedback from "../../Home/component/Feedback";
import Course from "../../Home/component/CouseOffer";

const offerings = [
  {
    text: "Comprehensive training in military systems, missile technologies, cyber warfare, and defence communication",
    icon: <FaShieldAlt />,
  },
  {
    text: "Career opportunities in defence research, missile defence systems, cyber security, and strategic defence analysis",
    icon: <FaChartLine />,
  },
  {
    text: "Hands-on internships and live projects with defence agencies, military organizations, and research institutions",
    icon: <FaBriefcase />,
  },
  {
    text: "Exposure to the latest defence technologies, cybersecurity protocols, and national security strategies",
    icon: <FaLightbulb />,
  },
  {
    text: "Industry-aligned curriculum with practical simulations, defense R&D, and real-world case studies",
    icon: <FaBookOpen />,
  },
  {
    text: "Recognized certifications in Missile Technology, Cyber Warfare, Strategic Defence, and Defence Systems Engineering",
    icon: <FaCertificate />,
  },
  {
    text: "Development of leadership, analytical, and decision-making skills for defence professionals",
    icon: <FaUsers />,
  },
];

const whoCanDoMCA = [
  {
    text: "Students who have completed a B.Tech or equivalent in Engineering, preferably with a background in Electronics, Mechanical, or Computer Science, and a passion for defence technology",
    icon: "🚀",
  },
  {
    text: "Aspirants interested in careers in military systems, missile technologies, cyber security, and defence R&D",
    icon: "🛡️",
  },
  {
    text: "Minimum 60% marks in B.Tech (eligibility criteria may vary by institution)",
    icon: "📚",
  },
  {
    text: "Individuals aiming for roles in defence research, missile defence systems, strategic defence analysis, and military technology development",
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
    icon: <FaGraduationCap />,
    text: "M.Tech in Defence Technology is a postgraduate program focused on advanced defence technologies, military systems, missile systems, cyber security, and strategic defence.",
  },
  {
    icon: <FaUniversity />,
    text: "This course is ideal for students aspiring to build careers in defence research, military systems, cyber warfare, missile defence, and national security.",
  },
  {
    icon: <FaCheckCircle />,
    text: "The regular M.Tech in Defence Technology course duration is 2 years, divided into 4 semesters, including research work, live defence projects, and internships with defence agencies.",
  },
  {
    icon: <FaDollarSign />,
    text: "The average starting salary for graduates in this field ranges from 8-15 Lakhs per year, depending on job roles, experience, and employer.",
  },
  {
    icon: <FaLightbulb />,
    text: "Career opportunities include roles in defence technology research, missile systems engineering, cyber security, strategic defence analysis, and defence consulting.",
  },
  {
    icon: <FaBuilding />,
    text: "Top recruiters in this field include defence organizations like DRDO, ISRO, Indian Army, Indian Navy, private defence companies, and international military contractors.",
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

const DefenceTechnology = () => {
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
        <h1 className="mca-title">M.Tech - Defence Technology Highlights</h1>
        <p className="mca-description">
          Gain advanced knowledge in military systems, defence technologies,
          cyber warfare, missile systems, and strategic defense, preparing you
          for leadership roles in the defense sector.
        </p>
        <div className="highlight-cards">
          <div className="highlight-card">
            <p className="highlight-number">2</p>
            <p className="highlight-text">YEAR FULL-TIME PROGRAM</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">25+</p>
            <p className="highlight-text">DEFENCE INDUSTRY PARTNERS</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">10+</p>
            <p className="highlight-text">SPECIALIZED CERTIFICATIONS</p>
          </div>
          <div className="highlight-card">
            <p className="highlight-number">4</p>
            <p className="highlight-text">
              INTERNSHIPS & LIVE PROJECTS WITH DEFENCE AGENCIES
            </p>
          </div>
        </div>
      </div>

      <div className="course-Overview-container">
        <h1 className="mca-title">Course Overview</h1>
        <p className="mca-description">
          The M.Tech in Defence Technology is a specialized program that focuses
          on the research, development, and implementation of advanced defence
          systems and military technology. The curriculum integrates mechanical,
          electronics, computer science, and strategic defence management to
          prepare professionals for careers in defence research, military
          engineering, and government defence projects.
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
          <h1 className="who-can-do-title">
            Who can do M.Tech - Defence Technology?
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
          <h4>Year 1: Core Defence & Technology Fundamentals</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Fundamentals of Defence Science & Technology</li>
                <li>Military Weapon Systems & Ammunition Technology</li>
                <li>Radar, Sonar & Electronic Warfare Systems</li>
                <li>Robotics & Artificial Intelligence in Defence</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Cybersecurity & Information Warfare</li>
                <li>Guided Missile Technology & Ballistics</li>
                <li>Advanced Materials & Composite Structures</li>
                <li>Research Methodology & Defence Data Analysis</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 2: Advanced Defence Engineering & Applications</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>UAVs, Drones & Autonomous Defence Systems</li>
                <li>Defence Communication & Satellite Technology</li>
                <li>Thermal & Fluid Dynamics in Defence Applications</li>
                <li>Military Vehicles & Aerospace Propulsion Systems</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Defence Strategy, Policy & National Security</li>
                <li>Simulation & Virtual Reality for Defence Training</li>
                <li>Dissertation/Thesis in Defence Research</li>
                <li>
                  Industrial Training / Internship with Defence Organizations
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 3: Advanced Defence Technologies</h4>
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
          <li>Hands-on Training in Defence R&D Labs & Facilities ⚙️</li>
          <li>Exposure to DRDO, ISRO, and Government Defence Agencies 🚀</li>
          <li>Practical Learning on Military Weapon Systems & AI in Defence</li>
          <li>
            Live Projects with Defence Manufacturing & Cybersecurity Firms
          </li>
          <li>
            Internship & Placement Assistance in Defence & Aerospace Sectors
          </li>
        </ul>
      </div>

      <div className="career-opportunities-container">
        <h1 className="mca-title">Career Opportunities</h1>
        <ul>
          <li>Defence Research Scientist (DRDO, ISRO, BARC)</li>
          <li>Aerospace Engineer (Military Aviation & Space)</li>
          <li>Cybersecurity & Warfare Specialist</li>
          <li>Ballistics & Missile Technology Engineer</li>
          <li>Military Vehicle & Naval System Engineer</li>
          <li>Robotics & AI Specialist in Defence</li>
        </ul>
        <p>
          Top Recruiters: DRDO, ISRO, HAL, BEL, BARC, Indian Armed Forces,
          Private Defence Contractors, Space & Aviation Companies
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
            M.Tech - Defence Technology Summary
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
            {/* What career opportunities exist in defense technology? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(0)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>1. What career opportunities exist in defense technology?</p>
              </div>
              {activeIndex === 0 && (
                <div className="accordion-body">
                  Graduates can work in various defense-related fields,
                  including:
                  <ul>
                    <li>
                      Defense Research & Development (DRDO, ISRO, BDL, HAL,
                      etc.)
                    </li>
                    <li>Aerospace & Missile Systems Engineering</li>
                    <li>Cybersecurity & Defense Intelligence</li>
                    <li>Military Equipment Design & Manufacturing</li>
                    <li>Artificial Intelligence & Robotics in Defense</li>
                    <li>Naval, Land, and Air Weaponry Development</li>
                    <li>Electronic Warfare & Communication Systems</li>
                    <li>Private Defense & Aerospace Companies</li>
                  </ul>
                </div>
              )}
            </div>

            {/* What are the core subjects covered? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(1)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>2. What are the core subjects covered?</p>
              </div>
              {activeIndex === 1 && (
                <div className="accordion-body">
                  The key subjects covered in this program include:
                  <ul>
                    <li>Advanced Weapon Systems & Missile Technology</li>
                    <li>Combat Vehicle Technology & Armament Engineering</li>
                    <li>Radar & Electronic Warfare Systems</li>
                    <li>
                      Unmanned Aerial Vehicles (UAVs) & Robotics in Defense
                    </li>
                    <li>Cybersecurity & Military Communication Networks</li>
                    <li>Aerospace Propulsion & Ballistic Science</li>
                    <li>
                      Artificial Intelligence & Machine Learning in Defense
                    </li>
                    <li>
                      Materials Science & Composite Technologies for Defense
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Are there research opportunities in defense projects? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(2)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>3. Are there research opportunities in defense projects?</p>
              </div>
              {activeIndex === 2 && (
                <div className="accordion-body">
                  Yes! Many universities collaborate with government defense
                  organizations like DRDO, ISRO, and BARC for research projects.
                  Students can work on classified and high-tech defense research
                  initiatives. Some programs also offer funded research
                  fellowships and internships in defense R&D labs.
                </div>
              )}
            </div>

            {/* Does the program include collaboration with defense organizations? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(3)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>
                  4. Does the program include collaboration with defense
                  organizations?
                </p>
              </div>
              {activeIndex === 3 && (
                <div className="accordion-body">
                  We partner with organizations like:
                  <ul>
                    <li>Defense Research & Development Organization (DRDO)</li>
                    <li>Indian Space Research Organization (ISRO)</li>
                    <li>Hindustan Aeronautics Limited (HAL)</li>
                    <li>Bharat Dynamics Limited (BDL)</li>
                    <li>Ordnance Factories Board (OFB)</li>
                    <li>Indian Armed Forces (Army, Navy, Air Force)</li>
                  </ul>
                  Collaborations may include internships, research projects, and
                  guest lectures from defense experts.
                </div>
              )}
            </div>

            {/* What are the job opportunities after graduation? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(4)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>5. What are the job opportunities after graduation?</p>
              </div>
              {activeIndex === 4 && (
                <div className="accordion-body">
                  Graduates can pursue roles such as:
                  <ul>
                    <li>Defense Research Scientist (DRDO, ISRO, BARC)</li>
                    <li>Weapons & Missile Systems Engineer</li>
                    <li>Aerospace Engineer (Aircraft, UAVs, and Drones)</li>
                    <li>
                      Cybersecurity & Network Security Specialist (Defense IT
                      Systems)
                    </li>
                    <li>Naval & Marine Technology Specialist</li>
                    <li>Military Communication & Electronics Engineer</li>
                    <li>Project Manager in Defense Manufacturing</li>
                    <li>
                      Private Aerospace & Defense Firms (Tata Advanced Systems,
                      L&T Defence, BEL, etc.)
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* What is the future scope of this field? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(5)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>6. What is the future scope of this field?</p>
              </div>
              {activeIndex === 5 && (
                <div className="accordion-body">
                  Rapid advancements in defense technology, including AI,
                  quantum computing, and drone warfare, have increased demand
                  for skilled engineers. Government investments in defense R&D
                  create job opportunities in both public and private sectors.
                  Global defense collaborations open doors for international
                  careers in aerospace and military technology. Startups in
                  defense innovation provide opportunities for entrepreneurship
                  and research-based careers.
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

export default DefenceTechnology;
