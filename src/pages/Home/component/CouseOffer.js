import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProgramsOffered = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeProgram, setActiveProgram] = useState("All Programs");
  const navigate = useNavigate();
  const programs = [
    "All Programs",
    "MBA",
    "BBA",
    "M.Tech",
    "BFA",
    "BFD",
    "B.Tech",
    "B.Com",
    "BCA",
    "B.Sc",
  ];

  const allPrograms = [
    {
      title: "Aviation Management",
      type: "MBA",
      description:
        "Specialized program focusing on aviation industry management, operations, and strategic planning.",
      duration: "2 Years",
      campus: "Main",
      seats: 60,
    },
    {
      title: "FinTech",
      type: "MBA",
      description:
        "Advanced program combining finance and technology to prepare leaders for the digital finance ecosystem.",
      duration: "2 Years",
      campus: "Main",
      seats: 45,
    },
    {
      title: "Data Analytics & Airtificial Intelligence",
      type: "BBA",
      description:
        "Program focusing on business applications of data science, analytics, and artificial intelligence.",
      duration: "2 Years",
      campus: "Tech",
      seats: 40,
    },
    {
      title: "Aviation Management",
      type: "BBA",
      description:
        "Specialized program focusing on aviation industry management, operations, and strategic planning.",
      duration: "2 Years",
      campus: "Main",
      seats: 60,
    },
    {
      title: "Aviation & Travel",
      type: "BBA",
      description:
        "Program designed to prepare students for careers in the aviation and travel industries.",
      duration: "3 Years",
      campus: "Main",
      seats: 80,
    },
    {
      title: "Entrepreneurship & Innovation",
      type: "BBA",
      description:
        "Program focusing on business innovation, entrepreneurship, and startup development.",
      duration: "3 Years",
      campus: "Main",
      seats: 60,
    },
    {
      title: "FinTech",
      type: "BBA",
      description:
        "Program focused on financial technologies and their applications in modern banking and finance.",
      duration: "3 Years",
      campus: "Main",
      seats: 50,
    },

    {
      title: "Aerospace Engineering",
      type: "B.Tech",
      description:
        "Program covering aerodynamics, propulsion, and aircraft systems design.",
      duration: "4 Years",
      campus: "Tech",
      seats: 100,
    },
    {
      title: "CS with AI & ML",
      type: "B.Tech",
      description:
        "Program focusing on artificial intelligence, machine learning, and data science applications.",
      duration: "4 Years",
      campus: "Tech",
      seats: 90,
    },
    {
      title: "Chartered Accountant",
      type: "B.Com",
      description:
        "Program designed for students pursuing a career in accountancy, auditing, and finance.",
      duration: "3 Years",
      campus: "Main",
      seats: 70,
    },
    {
      title: "Internet of Things (IoT)",
      type: "BCA",
      description:
        "Specialized program covering IoT technologies, networking, and smart system integration.",
      duration: "3 Years",
      campus: "Tech",
      seats: 60,
    },

    {
      title: "Fashion Designing",
      type: "BFD",
      description:
        "Program specializing in apparel design, textiles, and fashion industry trends.",
      duration: "3 Years",
      campus: "Main",
      seats: 55,
    },
    {
      title: "Fine Arts",
      type: "BFA",
      description:
        "Comprehensive program covering painting, sculpture, and artistic expression.",
      duration: "3 Years",
      campus: "Main",
      seats: 40,
    },

    {
      title: "Aviation & Airport Management",
      type: "BBA",
      description:
        "Program focused on aviation operations, airport management, and airline business strategies.",
      duration: "3 Years",
      campus: "Meerut",
      university: "Subharti University",
      seats: 60,
    },
    {
      title: "Aeronautical Science",
      type: "B.Sc",
      description:
        "Comprehensive program covering aerodynamics, aircraft structures, and flight mechanics.",
      duration: "3 Years",
      campus: "Meerut",
      university: "Subharti University",
      seats: 50,
    },
    {
      title: "Defence Technology",
      type: "M.Tech",
      description:
        "Specialized program in defense technologies, weapons systems, and military engineering.",
      duration: "2 Years",
      campus: "Meerut",
      university: "Subharti University",
      seats: 40,
    },
    {
      title: "HR & Aviation Management",
      type: "MBA",
      description:
        "Program focusing on human resource management and aviation industry leadership.",
      duration: "2 Years",
      campus: "Meerut",
      university: "Subharti University",
      seats: 45,
    },
  ];

  const handleExploreProgram = (programTitle, programType) => {
    // Convert the title and type to URL-friendly format
    const programSlug = programTitle
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

    const typeSlug = programType
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

    // Construct the final URL (slug format) and navigate to the details page
    const programUrl = `/${programSlug}-${typeSlug}-program`;

    // Use navigate to go to the program detail page
    navigate(programUrl);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter programs based on active program filter and search term
  const filteredPrograms = allPrograms.filter((program) => {
    const matchesProgram =
      activeProgram === "All Programs" || program.type === activeProgram;
    const matchesSearch =
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesProgram && matchesSearch;
  });

  return (
    <div className="ahrda-programs-container">
      <h1 className="ahrda-programs-title">Programs Offered</h1>
      <div className="ahrda-title-underline"></div>

      <div className="ahrda-search-container">
        <input
          type="text"
          placeholder="Search programs..."
          value={searchTerm}
          onChange={handleSearch}
          className="ahrda-search-input"
        />
      </div>

      <div className="ahrda-program-filters-wrapper">
        <div className="ahrda-program-filters">
          {programs.map((program) => (
            <button
              key={program}
              className={`ahrda-program-filter-btn ${
                activeProgram === program ? "ahrda-active" : ""
              }`}
              onClick={() => setActiveProgram(program)}
            >
              {program}
            </button>
          ))}
        </div>
      </div>

      <div className="ahrda-featured-programs">
        {filteredPrograms.length > 0 ? (
          filteredPrograms.map((program, index) => (
            <div key={index} className="ahrda-program-card">
              <div className="ahrda-program-header">
                <h2>{program.title}</h2>
                <span className="ahrda-program-type">{program.type}</span>
              </div>
              <p className="ahrda-program-description">{program.description}</p>
              {/* <div className="ahrda-program-details">
                <div className="ahrda-detail">
                  <h3>Duration</h3>
                  <p>{program.duration}</p>
                </div>
                <div className="ahrda-detail">
                  <h3>Campus</h3>
                  <p>{program.campus}</p>
                </div>
                <div className="ahrda-detail">
                  <h3>Seats</h3>
                  <p>{program.seats}</p>
                </div>
              </div> */}
              <button
                className="ahrda-explore-btn"
                onClick={() =>
                  handleExploreProgram(program.type, program.title)
                }
              >
                Explore Program
              </button>
            </div>
          ))
        ) : (
          <div className="ahrda-no-results">
            <p>No programs found matching your criteria.</p>
            <button
              className="ahrda-reset-btn"
              onClick={() => {
                setActiveProgram("All Programs");
                setSearchTerm("");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgramsOffered;
