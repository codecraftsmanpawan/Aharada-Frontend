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
  },
  {
    id: 2,
    title: "BBA - Aviation & Travel",
    duration: "3 YEARS",
    type: "UG",
    image: "assets/course/aviation.jpg",
  },
  {
    id: 3,
    title: "BBA - Entrepreneurship and Innovation",
    duration: "3 YEARS",
    type: "UG",
    image: "assets/course/Innovation.jpg",
  },

  {
    id: 5,
    title: "B.Sc - Aeronautical",
    duration: "3 YEARS",
    type: "UG",
    image: "assets/course/Aeronautical.jpg",
  },
  {
    id: 6,
    title: "MBA - Aviation Management",
    duration: "2 YEARS",
    type: "PG",
    image: "assets/course/AviationManagement.jpg",
  },
  {
    id: 7,
    title: "BBA - Aviation & Airport Management",
    duration: "3 YEARS",
    type: "UG",
    image: "assets/course/Airport.jpg",
  },
  {
    id: 8,
    title: "B.Tech - Aerospace Engineering",
    duration: "4 YEARS",
    type: "UG",
    image: "assets/course/Aeronautical.jpg",
  },
  {
    id: 9,
    title: "M.Tech - Defence Technology",
    duration: "2 YEARS",
    type: "PG",
    image: "assets/course/Technology.jpg",
  },
  {
    id: 10,
    title: "MBA - HR & Aviation",
    duration: "2 YEARS",
    type: "PG",
    image: "assets/course/hr.jpg",
  },
  {
    id: 11,
    title: "Drone Pilot Training",
    duration: "6 MONTHS",
    type: "UG",
    image: "assets/course/Drone.jpg",
  },
];

function ProgramCard({ title, duration, type, image, onExploreClick }) {
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
      <img
        src={image}
        alt={title}
        className="program-card-image"
        style={{ height: "350px" }}
      />
    </div>
  );
}

function ProgramPage() {
  const [filter, setFilter] = useState("UG");
  const navigate = useNavigate(); // Hook to navigate

  // Filter programs based on the selected filter
  const filteredPrograms =
    filter === "All"
      ? programs
      : programs.filter((program) => program.type === filter);

  const handleExploreClick = () => {
    // Navigate to the Explore Page when clicked
    navigate("/Data-Analytics-and-Artificial-Intelligence");
  };

  return (
    <>
      <section
        className="bg-smoke-half"
        style={{
          background: "linear-gradient(to bottom, #fdfbf9, #f4ebdd)",
          padding: "50px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 mb-30 mb-xl-0">
              <div
                className="cta-box"
                style={{
                  backgroundImage: `url('assets/img/update1/bg/cta_bg_5.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h3 className="cta-title">Apply for admission in 2025</h3>
                <p className="cta-text">
                  Completely predominate impactful products for front-end data.
                  Distinctively reinvent high payoff value whereas one-to-one
                  mindshare. Seamlessly exploit extensible content after
                  market-driven.
                </p>
                <Link to="/apply-now" className="th-btn">
                  Apply Now
                  <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="cta-box"
                style={{
                  backgroundImage: `url('assets/img/update1/bg/cta_bg_6.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h3 className="cta-title">Apply for Scholarship</h3>
                <p className="cta-text">
                  Completely predominate impactful products for front-end data.
                  Distinctively reinvent high payoff value whereas one-to-one
                  mindshare. Seamlessly exploit extensible content after
                  market-driven.
                </p>
                <Link to="/apply-now" className="th-btn">
                  Apply Now
                  <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
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
              type={program.type}
              image={program.image}
              onExploreClick={handleExploreClick}
            />
          ))}
        </div>
      </div>

      <Course />
    </>
  );
}

export default ProgramPage;
