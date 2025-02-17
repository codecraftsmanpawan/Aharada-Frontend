import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ProfessionalProgramsPage.css";
import Course from "../Home/component/CouseOffer";

const programs = [
  {
    id: 1,
    title: "BBA - Data Analytics and Artificial Intelligence",
    duration: "3 YEARS",
    type: "UG",
    image: "assets/course/ai.jpg",
    link: "/data-analytics-and-ai",
  },
  {
    id: 2,
    title: "BBA - Aviation & Travel",
    duration: "3 YEARS",
    type: "UG",
    image: "assets/course/aviation.jpg",
    link: "/aviation-and-travel",
  },
  {
    id: 3,
    title: "BBA - Entrepreneurship and Innovation",
    duration: "3 YEARS",
    type: "UG",
    image: "assets/course/Innovation.jpg",
    link: "/entrepreneurship-and-innovation",
  },
  {
    id: 5,
    title: "B.Sc - Aeronautical",
    duration: "3 YEARS",
    type: "UG",
    image: "assets/course/Aeronautical.jpg",
    link: "/bsc-aeronautical",
  },
  {
    id: 6,
    title: "MBA - Aviation Management",
    duration: "2 YEARS",
    type: "PG",
    image: "assets/course/AviationManagement.jpg",
    link: "/mba-aviation-management",
  },
  {
    id: 7,
    title: "BBA - Aviation & Airport Management",
    duration: "3 YEARS",
    type: "UG",
    image: "assets/course/Airport.jpg",
    link: "/aviation-and-airport-management",
  },
  {
    id: 8,
    title: "B.Tech - Aerospace Engineering",
    duration: "4 YEARS",
    type: "UG",
    image: "assets/course/Aeronautical.jpg",
    link: "/btech-aerospace-engineering",
  },
  {
    id: 9,
    title: "M.Tech - Defence Technology",
    duration: "2 YEARS",
    type: "PG",
    image: "assets/course/Technology.jpg",
    link: "/mtech-defence-technology",
  },
  {
    id: 10,
    title: "MBA - HR & Aviation",
    duration: "2 YEARS",
    type: "PG",
    image: "assets/course/hr.jpg",
    link: "/mba-hr-aviation",
  },
  {
    id: 11,
    title: "Drone Pilot Training",
    duration: "6 MONTHS",
    type: "UG",
    image: "assets/course/Drone.jpg",
    link: "/drone-pilot-training",
  },
  {
    id: 12,
    title: "BFD - Fashion Design",
    duration: "3 YEARS",
    type: "UG",
    image: "assets/course/Drone.jpg",
    link: "/fashion-design",
  },
  {
    id: 13,
    title: "BFA - Fine Arts",
    duration: "3 YEARS",
    type: "UG",
    image: "assets/course/Drone.jpg",
    link: "/fine-arts",
  },
];

function ProgramCard({ title, duration, image, onExploreClick }) {
  return (
    <div className="program-card">
      <div className="program-card-body">
        <h3>{title}</h3>
        <p>{duration}</p>
        <div className="explore-btn-container">
          <button className="explore-btn" onClick={onExploreClick}>
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

function ProgramPage() {
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  // Filter programs based on the selected filter
  const filteredPrograms =
    filter === "All"
      ? programs
      : programs.filter((program) => program.type === filter);

  const handleExploreClick = (link) => {
    // Navigate to the respective static page
    navigate(link);
  };

  return (
    <>
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

      <div className="program-page-container">
        <div className="program-page-filter">
          <h1 className="program-page-title">Explore Our Programs</h1>
          <div className="program-page-filter-btn">
            <button
              onClick={() => setFilter("All")}
              className={`program-page-filter-button ${
                filter === "All" ? "active" : ""
              }`}
            >
              ALL PROGRAMS
            </button>
            <button
              onClick={() => setFilter("UG")}
              className={`program-page-filter-button ${
                filter === "UG" ? "active" : ""
              }`}
            >
              UG PROGRAM
            </button>
            <button
              onClick={() => setFilter("PG")}
              className={`program-page-filter-button ${
                filter === "PG" ? "active" : ""
              }`}
            >
              PG PROGRAM
            </button>
          </div>
        </div>

        <div className="program-page-programs">
          {filteredPrograms.map((program) => (
            <ProgramCard
              key={program.id}
              title={program.title}
              duration={program.duration}
              image={program.image}
              onExploreClick={() => handleExploreClick(program.link)}
            />
          ))}
        </div>
      </div>

      <Course />
    </>
  );
}

export default ProgramPage;
