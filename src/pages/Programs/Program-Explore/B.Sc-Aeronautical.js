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
  FaWrench,
  FaRocket,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import Testimonials from "../../../components/Testimonials/Testimonials";
import Feedback from "../../Home/component/Feedback";
import Course from "../../Home/component/CouseOffer";

const offerings = [
  {
    text: "Practical training in aircraft design, aerodynamics, and avionics",
    icon: <FaWrench />,
  },
  {
    text: "Career opportunities in aerospace engineering, aviation, and defense",
    icon: <FaRocket />,
  },
  {
    text: "Internships with aerospace companies and aviation firms",
    icon: <FaBriefcase />,
  },
  {
    text: "Exposure to the latest innovations in aeronautical technology",
    icon: <FaLightbulb />,
  },
  {
    text: "Industry-focused curriculum with hands-on lab sessions and projects",
    icon: <FaBookOpen />,
  },
  {
    text: "Certifications in Aircraft Maintenance Engineering (AME) and DGCA-approved courses",
    icon: <FaCertificate />,
  },
  {
    text: "Soft skills and leadership training for aeronautical professionals",
    icon: <FaUsers />,
  },
];

const whoCanDoMCA = [
  {
    text: "Passed class 12th with Physics, Chemistry, and Mathematics (PCM) from a recognized board",
    icon: "⭐",
  },
  {
    text: "Aspirants passionate about aircraft design, aerodynamics, and aviation technology",
    icon: "⭐",
  },
  {
    text: "Minimum 50% marks in class 12th (may vary by institution)",
    icon: "⭐",
  },
  {
    text: "Students aiming for careers in aerospace engineering, aircraft maintenance, and defense technology",
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
    text: "The full form of B.Sc - Aeronautical is Bachelor of Science in Aeronautical Engineering, a specialized undergraduate course in aerospace and aviation technology.",
  },
  {
    icon: <FaUniversity />,
    text: "This course is ideal for students passionate about aircraft design, aerodynamics, propulsion, and aviation technology.",
  },
  {
    icon: <FaCheckCircle />,
    text: "A regular B.Sc - Aeronautical course duration is 3-4 years, divided into multiple semesters, with hands-on training and research opportunities.",
  },
  {
    icon: <FaDollarSign />,
    text: "The average starting salary for graduates in this field ranges from 4-8 Lakhs per year, depending on job roles, expertise, and industry demand.",
  },
  {
    icon: <FaLightbulb />,
    text: "Career opportunities include roles in aircraft manufacturing, maintenance engineering, aerodynamics research, defense, and space technology.",
  },
  {
    icon: <FaBuilding />,
    text: "Top recruiters in this field include ISRO, DRDO, HAL, Boeing, Airbus, and leading aerospace research organizations.",
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

const BScAeronautical = () => {
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
        <h1 className="mca-title">B.Sc - Aeronautical Highlights</h1>
        <p className="mca-description">
          Explore the dynamic world of aviation and travel management with a
          curriculum designed to equip you with industry-relevant skills.
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
              style={{ marginTop: "-120px" }}
              to="assets/img/Aharada Brochure.pdf"
              className="th-btn style3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-long-arrow-down ms-2" />
              Download Brochure
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
          <h1 className="who-can-do-title">Who can do B.Sc - Aeronautical?</h1>
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
          <h1 className="offerings-title">B.Sc - Aeronautical Summary</h1>
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
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(0)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>What is B.Sc - Aeronautical?</p>
              </div>
              {activeIndex === 0 && (
                <div className="accordion-body">
                  B.Sc - Aeronautical is an undergraduate program focused on
                  aircraft design, development, maintenance, and aviation
                  technology.
                </div>
              )}
            </div>

            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(1)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>Why should I choose B.Sc - Aeronautical?</p>
              </div>
              {activeIndex === 1 && (
                <div className="accordion-body">
                  This program provides in-depth knowledge of aerodynamics,
                  propulsion, avionics, and aerospace engineering, leading to
                  careers in the aviation and aerospace industries.
                </div>
              )}
            </div>

            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(2)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>
                  What career opportunities are available after this course?
                </p>
              </div>
              {activeIndex === 2 && (
                <div className="accordion-body">
                  Graduates can work as aerospace engineers, aircraft
                  maintenance engineers, avionics specialists, flight safety
                  officers, and researchers in the aviation and defense sectors.
                </div>
              )}
            </div>

            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(3)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>Does this program include practical training?</p>
              </div>
              {activeIndex === 3 && (
                <div className="accordion-body">
                  Yes, students get hands-on experience through lab work,
                  simulation training, industrial visits, and internships in
                  aerospace companies.
                </div>
              )}
            </div>

            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(4)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>What are the key skills gained from this course?</p>
              </div>
              {activeIndex === 4 && (
                <div className="accordion-body">
                  The program enhances skills in aircraft mechanics, structural
                  analysis, aerodynamics, avionics systems, and problem-solving
                  in aeronautical engineering.
                </div>
              )}
            </div>

            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(5)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>What certifications can I earn during this program?</p>
              </div>
              {activeIndex === 5 && (
                <div className="accordion-body">
                  Students can obtain certifications in Aircraft Maintenance
                  Engineering (AME), DGCA-approved courses, and specialized
                  aeronautical training programs.
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

export default BScAeronautical;
