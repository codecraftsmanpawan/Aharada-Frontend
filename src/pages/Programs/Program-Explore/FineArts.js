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
    program: "BFA Program | UGC approved",
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
    program: "BFA Program | UGC recognised",
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

const FineArts = () => {
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
        <h1 className="mca-title">BFA - Fine Arts Highlights</h1>
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
      <div className="course-Overview-container">
        <h1 className="mca-title">Course Overview</h1>
        <p className="mca-description">
          The Bachelor of Fine Arts (BFA) is a specialized program designed for
          students passionate about visual arts, design, and creative
          expression. The course provides hands-on training in painting,
          sculpture, digital art, photography, and more, allowing students to
          develop artistic skills and a strong portfolio.
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
          <h1 className="who-can-do-title">Who can do BFA - Fine Arts?</h1>
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
          <h4>Year 1: Foundation in Fine Arts</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Introduction to Fine Arts & Art History</li>
                <li>Fundamentals of Drawing & Sketching</li>
                <li>Color Theory & Composition</li>
                <li>Basics of Painting (Oil, Watercolor, Acrylic)</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Sculpture & 3D Art Techniques</li>
                <li>Digital Art & Graphic Design Basics</li>
                <li>Visual Communication & Aesthetics</li>
                <li>Perspective & Anatomy Drawing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 2: Core Artistic Techniques</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Advanced Drawing & Illustration</li>
                <li>Portrait & Figure Painting</li>
                <li>Printmaking & Mixed Media Art</li>
                <li>Calligraphy & Typography</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Introduction to Photography & Cinematography</li>
                <li>Digital Painting & Animation Basics</li>
                <li>Art Criticism & Aesthetic Theories</li>
                <li>Murals & Installation Art</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 3: Specialization & Experimental Art</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Abstract & Contemporary Art Forms</li>
                <li>Conceptual Art & Storytelling through Visuals</li>
                <li>Digital Media & Motion Graphics</li>
                <li>Fashion Illustration & Textile Art</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Film & Video Art Direction</li>
                <li>Environmental & Public Art Projects</li>
                <li>Art Therapy & Psychology of Art</li>
                <li>Internship & Art Exhibitions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <h4>Year 4: Professional Development & Portfolio Building</h4>
          <div className="curriculum-row">
            <div className="curriculum-col">
              <ul>
                <li>Advanced Digital & 3D Art</li>
                <li>Photography & Cinematic Composition</li>
                <li>Art Business & Marketing Strategies</li>
                <li>Visual Identity & Branding Design</li>
              </ul>
            </div>
            <div className="curriculum-col">
              <ul>
                <li>Freelancing & Entrepreneurship in Art</li>
                <li>Major Art Project / Thesis</li>
                <li>Internship & Live Industry Projects</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="key-highlights-container">
        <h1 className="mca-title">Key Highlights</h1>
        <ul>
          <li>Hands-on Studio Work & Digital Art Training 🎨</li>
          <li>Exposure to National & International Art Exhibitions</li>
          <li>
            Industry-Standard Tools: Adobe Suite, Procreate, Blender, etc.
          </li>
          <li>Internships & Live Projects with Creative Agencies 🌍</li>
          <li>Expert-Led Workshops on Art, Design, & Aesthetic Trends</li>
        </ul>
      </div>

      <div className="career-opportunities-container">
        <h1 className="mca-title">Career Opportunities</h1>
        <ul>
          <li>Professional Artist / Painter</li>
          <li>Graphic Designer / Digital Illustrator</li>
          <li>Animator & Concept Artist</li>
          <li>Art Director in Media & Advertising</li>
          <li>Fashion & Textile Designer</li>
          <li>Curator in Art Galleries & Museums</li>
          <li>Photographer & Cinematic Artist</li>
        </ul>
        <p>
          Top Recruiters: Design Studios, Art Galleries, Fashion Brands, Film &
          Animation Studios, Publishing Houses, Advertising Agencies
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
          <h1 className="offerings-title">BFA - Fine Arts Summary</h1>
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
            {/* What are the career opportunities in fine arts? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(0)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>1. What are the career opportunities in fine arts?</p>
              </div>
              {activeIndex === 0 && (
                <div className="accordion-body">
                  Graduates can work in various creative industries, such as:
                  <ul>
                    <li>
                      Graphic Design & Digital Art (Advertising, Branding, UI/UX
                      Design)
                    </li>
                    <li>
                      Illustration & Concept Art (Comics, Animation, Gaming)
                    </li>
                    <li>
                      Fine Arts & Painting (Galleries, Museums, Freelancing)
                    </li>
                    <li>Sculpting & Installation Art</li>
                    <li>Photography & Visual Storytelling</li>
                    <li>Art Direction & Creative Consulting</li>
                    <li>Film & Theatre Set Design</li>
                    <li>Teaching & Academia (Art Schools, Universities)</li>
                  </ul>
                </div>
              )}
            </div>

            {/* What specializations are available in this course? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(1)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>2. What specializations are available in this course?</p>
              </div>
              {activeIndex === 1 && (
                <div className="accordion-body">
                  BFA programs offer various specializations, including:
                  <ul>
                    <li>Painting & Drawing</li>
                    <li>Sculpture & Ceramics</li>
                    <li>Graphic Design & Digital Arts</li>
                    <li>Animation & Visual Effects (VFX)</li>
                    <li>Photography & Cinematography</li>
                    <li>Fashion & Textile Design</li>
                    <li>Printmaking & Calligraphy</li>
                    <li>Performing Arts (Dance, Theatre, Music)</li>
                  </ul>
                </div>
              )}
            </div>

            {/* What qualifications are required for admission? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(2)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>3. What qualifications are required for admission?</p>
              </div>
              {activeIndex === 2 && (
                <div className="accordion-body">
                  A BFA program typically requires a completion of 10+2 from a
                  recognized board.
                </div>
              )}
            </div>

            {/* What are the job opportunities after graduation? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-1"
                onClick={() => toggleAccordion(3)}
              >
                <FaQuestionCircle className="accordion-icon icon-1" />
                <p>4. What are the job opportunities after graduation?</p>
              </div>
              {activeIndex === 3 && (
                <div className="accordion-body">
                  A BFA degree opens doors to careers such as:
                  <ul>
                    <li>
                      Professional Artist (Painter, Sculptor, Illustrator)
                    </li>
                    <li>Graphic Designer / UX Designer</li>
                    <li>Art Director in Advertising & Media</li>
                    <li>Animator & Visual Effects (VFX) Artist</li>
                    <li>Photographer / Cinematographer</li>
                    <li>Fashion or Textile Designer</li>
                    <li>Tattoo Artist / Muralist</li>
                    <li>Gallery Curator / Museum Coordinator</li>
                    <li>Freelance or Commissioned Artist</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Are students encouraged to participate in art competitions? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-2"
                onClick={() => toggleAccordion(4)}
              >
                <FaInfoCircle className="accordion-icon icon-2" />
                <p>
                  5. Are students encouraged to participate in art competitions?
                </p>
              </div>
              {activeIndex === 4 && (
                <div className="accordion-body">
                  Yes! Many universities encourage students to participate in
                  national and international art competitions. Students also get
                  opportunities to display their work in galleries, online art
                  platforms, and exhibitions.
                </div>
              )}
            </div>

            {/* What software or tools are taught in this program? */}
            <div className="accordion-item">
              <div
                className="accordion-header accordion-header-3"
                onClick={() => toggleAccordion(5)}
              >
                <FaLightbulb className="accordion-icon icon-3" />
                <p>6. What software or tools are taught in this program?</p>
              </div>
              {activeIndex === 5 && (
                <div className="accordion-body">
                  Students learn industry-standard tools, such as:
                  <ul>
                    <li>Adobe Suite (Photoshop, Illustrator, InDesign)</li>
                    <li>CorelDRAW & Procreate (Digital Art & Illustration)</li>
                    <li>Blender & Maya (3D Modeling & Animation)</li>
                    <li>AutoCAD & Rhino (Sculpture & Product Design)</li>
                    <li>
                      Final Cut Pro & Premiere Pro (Video Editing &
                      Cinematography)
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

export default FineArts;
