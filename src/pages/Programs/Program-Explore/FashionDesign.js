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
    text: "Hands-on training in fashion design, pattern making, and garment construction",
    icon: <FaWrench />,
  },
  {
    text: "Career opportunities in fashion design, styling, and merchandising",
    icon: <FaLightbulb />,
  },
  {
    text: "Internships with leading fashion designers and apparel companies",
    icon: <FaBriefcase />,
  },
  {
    text: "Exposure to the latest trends, textiles, and fashion technologies",
    icon: <FaLightbulb />,
  },
  {
    text: "Industry-focused curriculum with creative workshops and live projects",
    icon: <FaBookOpen />,
  },
  {
    text: "Certifications in Fashion Design, Textile Technology, and Fashion Marketing",
    icon: <FaCertificate />,
  },
  {
    text: "Soft skills and leadership training for future fashion industry leaders",
    icon: <FaUsers />,
  },
];

const whoCanDoMCA = [
  {
    text: "Passed class 12th with a background in Arts, Commerce, or Science from a recognized board",
    icon: "⭐",
  },
  {
    text: "Aspirants passionate about fashion design, creativity, and garment styling",
    icon: "⭐",
  },
  {
    text: "Minimum 50% marks in class 12th (may vary by institution)",
    icon: "⭐",
  },
  {
    text: "Students aiming for careers in fashion design, styling, merchandising, and textile innovation",
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
    text: "The full form of B.Sc - Fashion Design is Bachelor of Science in Fashion Design, a specialized undergraduate course focusing on fashion, garment construction, and textile technology.",
  },
  {
    icon: <FaUniversity />,
    text: "This course is ideal for students passionate about creativity, fashion trends, garment styling, and fabric technology.",
  },
  {
    icon: <FaCheckCircle />,
    text: "A regular B.Sc - Fashion Design course duration is 3-4 years, divided into multiple semesters, with practical workshops, design projects, and industry internships.",
  },
  {
    icon: <FaDollarSign />,
    text: "The average starting salary for graduates in this field ranges from 3-6 Lakhs per year, depending on job roles, expertise, and industry demand.",
  },
  {
    icon: <FaLightbulb />,
    text: "Career opportunities include roles in fashion design, styling, merchandising, fashion marketing, textile research, and costume design.",
  },
  {
    icon: <FaBuilding />,
    text: "Top recruiters in this field include renowned fashion houses, apparel brands, retail chains, and textile manufacturers such as Zara, H&M, Louis Vuitton, and Calvin Klein.",
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

const FashionDesign = () => {
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
        <h1 className="mca-title">BFD - Fashion Design Highlights</h1>
        <p className="mca-description">
          Delve into the exciting realm of aviation and travel management, where
          a comprehensive curriculum is crafted to empower you with the skills
          and knowledge needed for success in this thriving industry.
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
          The Bachelor of Fashion Design (BFD) is a professional degree that
          equips students with the knowledge and skills required for the fashion
          industry. Covering everything from design principles to textile
          science, garment construction, fashion business, and digital fashion
          technology, this program prepares students for a dynamic career in
          fashion design and entrepreneurship.
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
          <h1 className="who-can-do-title">Who can do BFD - Fashion Design?</h1>
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
          <h4>Year 1: Foundation in Fashion & Design</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Introduction to Fashion Design & History</li>
                <li>Elements & Principles of Design</li>
                <li>Fashion Illustration & Sketching Techniques</li>
                <li>Textile Science & Fabric Studies</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Pattern Making & Garment Construction Basics</li>
                <li>Computer-Aided Fashion Design (CAD)</li>
                <li>Color Theory & Fashion Aesthetics</li>
                <li>Fashion Communication & Presentation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 2: Core Fashion Design & Development</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Advanced Fashion Illustration & Digital Design</li>
                <li>Draping Techniques & Advanced Pattern Making</li>
                <li>Surface Ornamentation & Embroidery Techniques</li>
                <li>Sustainable & Eco-Friendly Fashion Design</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Fashion Styling & Trend Forecasting</li>
                <li>Retail Merchandising & Fashion Marketing</li>
                <li>Photography & Visual Communication in Fashion</li>
                <li>Fashion Sociology & Cultural Influences</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 3: Specialization & Industry Applications</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Haute Couture & Luxury Fashion Design</li>
                <li>Knitwear & Sportswear Design</li>
                <li>Costume & Ethnic Wear Designing</li>
                <li>Fashion Accessories & Footwear Design</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Fashion Entrepreneurship & Brand Management</li>
                <li>Digital Fashion & 3D Modeling</li>
                <li>Fashion Show Production & Event Management</li>
                <li>Internship with Fashion Brands / Designers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 4: Professional Development & Portfolio Building</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Portfolio Development & Collection Design</li>
                <li>Fashion Business & E-commerce Strategies</li>
                <li>Advanced Textile Manipulation & Dyeing Techniques</li>
                <li>Celebrity & Editorial Styling</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Fashion Technology & Smart Wearables</li>
                <li>Final Capstone Project – Fashion Showcase</li>
                <li>Internship & Industry Networking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="key-highlights-container">
        <h1 className="mca-title">Key Highlights</h1>
        <ul>
          <li>Hands-on Training with Fashion Studios & Workshops 👗</li>
          <li>Exposure to Fashion Weeks & Industry Events</li>
          <li>
            Mastering Digital Tools (Adobe Illustrator, CLO 3D, Procreate)
          </li>
          <li>Internship & Collaboration with Leading Fashion Brands 🌍</li>
          <li>Expert-Led Workshops on Fashion Forecasting & Design Trends</li>
        </ul>
      </div>

      <div className="career-opportunities-container">
        <h1 className="mca-title">Career Opportunities</h1>
        <ul>
          <li>Certified Fashion Designer</li>
          <li>Aerial Survey & Mapping Specialist</li>
          <li>Fashion Stylist & Consultant</li>
          <li>Fashion Marketing Manager</li>
          <li>Textile Designer & Consultant</li>
          <li>Fashion Entrepreneur & Brand Manager</li>
        </ul>
        <p>
          Top Recruiters: Fashion Brands, Retail Chains, Media & Entertainment,
          Textile Companies, E-commerce Firms
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
          <h1 className="offerings-title">BFD - Fashion Design Summary</h1>
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
            {/* What are the career opportunities in fashion design? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(0)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>1. What are the career opportunities in fashion design?</p>
              </div>
              {activeIndex === 0 && (
                <div className="accordion-body">
                  Graduates can pursue careers in:
                  <ul>
                    <li>Fashion Designer (Apparel, Accessories, Footwear)</li>
                    <li>Textile Designer (Prints, Fabrics, Patterns)</li>
                    <li>Fashion Stylist (Personal, Celebrity, Editorial)</li>
                    <li>Costume Designer (Film, TV, Theatre)</li>
                    <li>Fashion Illustrator / Visual Merchandiser</li>
                    <li>Trend Forecaster / Fashion Consultant</li>
                    <li>Entrepreneur (Own Fashion Brand or Boutique)</li>
                    <li>E-commerce & Retail (Fashion Buyer, Merchandiser)</li>
                  </ul>
                </div>
              )}
            </div>

            {/* What are the key subjects covered in this course? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(1)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>2. What are the key subjects covered in this course?</p>
              </div>
              {activeIndex === 1 && (
                <div className="accordion-body">
                  The key subjects covered in this course include:
                  <ul>
                    <li>Fashion Illustration & Sketching</li>
                    <li>Pattern Making & Draping</li>
                    <li>Textile Science & Fabric Studies</li>
                    <li>Garment Construction & Sewing Techniques</li>
                    <li>Fashion History & Trends Analysis</li>
                    <li>Computer-Aided Design (CAD) for Fashion</li>
                    <li>Sustainable & Ethical Fashion</li>
                    <li>Fashion Marketing & Business Management</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Are there internship opportunities? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(2)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>3. Are there internship opportunities?</p>
              </div>
              {activeIndex === 2 && (
                <div className="accordion-body">
                  Yes, we offer internships with fashion brands, designers, or
                  textile companies. Internships provide hands-on industry
                  exposure and networking opportunities.
                </div>
              )}
            </div>

            {/* What software is taught in fashion designing? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(3)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>4. What software is taught in fashion designing?</p>
              </div>
              {activeIndex === 3 && (
                <div className="accordion-body">
                  Students learn industry-standard tools such as:
                  <ul>
                    <li>
                      Adobe Illustrator & Photoshop (Fashion Illustration &
                      Digital Design)
                    </li>
                    <li>CorelDRAW (Pattern Making & Textile Design)</li>
                    <li>CLO 3D & Browzwear (3D Garment Simulation)</li>
                    <li>
                      AutoCAD & TUKAcad (Technical Drawings & Pattern Drafting)
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Are there fashion shows or industry collaborations? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(4)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>5. Are there fashion shows or industry collaborations?</p>
              </div>
              {activeIndex === 4 && (
                <div className="accordion-body">
                  Yes! We organize annual fashion shows where students showcase
                  their designs. We also have industry collaborations with
                  designers, brands, and fashion weeks. Opportunities to
                  participate in design contests and global fashion competitions
                  are also available.
                </div>
              )}
            </div>

            {/* What skills will I develop in this program? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(5)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>6. What skills will I develop in this program?</p>
              </div>
              {activeIndex === 5 && (
                <div className="accordion-body">
                  In this program, you will develop:
                  <ul>
                    <li>
                      Creative & Artistic Skills (Sketching, Illustration, Color
                      Theory)
                    </li>
                    <li>
                      Technical & Practical Knowledge (Pattern Making, Garment
                      Construction)
                    </li>
                    <li>
                      Digital & CAD Skills (Design Software, 3D Visualization)
                    </li>
                    <li>
                      Business & Marketing Skills (Branding, Merchandising,
                      Entrepreneurship)
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

export default FashionDesign;
