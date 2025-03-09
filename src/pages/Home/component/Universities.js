import React, { useState } from "react";
import "./University.css";

const PlacementsCareer = () => {
  const [activeTab, setActiveTab] = useState("placements");

  const placementStats = [
    {
      year: "2024",
      placementRate: "92%",
      avgPackage: "₹8.7 LPA",
      topPackage: "₹18 LPA",
      companies: 60,
    },
    {
      year: "2023",
      placementRate: "89%",
      avgPackage: "₹6.2 LPA",
      topPackage: "₹12 LPA",
      companies: 45,
    },
    {
      year: "2022",
      placementRate: "85%",
      avgPackage: "₹5.5 LPA",
      topPackage: "₹10 LPA",
      companies: 40,
    },
  ];

  const topRecruiters = [
    {
      name: "Microsoft",
      logo: "assets/placement/American - Logo.png",
      openings: 12,
    },
    {
      name: "Google",
      logo: "assets/placement/AISATS - logo.png",
      openings: 8,
    },
    {
      name: "Amazon",
      logo: "assets/placement/Arabian Vibes Logo.jpeg",
      openings: 15,
    },
    {
      name: "Infosys",
      logo: "assets/placement/Celebi- Logo.jpeg",
      openings: 25,
    },
    {
      name: "TCS",
      logo: "assets/placement/Delhi Duty Free - Logo.png",
      openings: 30,
    },
    {
      name: "Tesla",
      logo: "assets/placement/Drone Stark Logo.png",
      openings: 10,
    },
    {
      name: "Meta",
      logo: "assets/placement/Eniva Logo.svg",
      openings: 18,
    },
    {
      name: "Apple",
      logo: "assets/placement/GMR- logo.png",
      openings: 22,
    },
    {
      name: "IBM",
      logo: "assets/placement/Indigo - Logo.png",
      openings: 14,
    },
    {
      name: "Oracle",
      logo: "assets/placement/IRSLogo.png",
      openings: 11,
    },
    {
      name: "Accenture",
      logo: "assets/placement/Leela Travels Logo.png",
      openings: 20,
    },
    {
      name: "Capgemini",
      logo: "assets/placement/Ocube Logo.jpeg",
      openings: 17,
    },
    {
      name: "Deloitte",
      logo: "assets/placement/OH! Puhleeez Logo.jpeg",
      openings: 13,
    },
    {
      name: "Cognizant",
      logo: "assets/placement/Omullane - Logo.png",
      openings: 21,
    },
    {
      name: "Wipro",
      logo: "assets/placement/phs logo.png",
      openings: 26,
    },
    {
      name: "Qatar Airways",
      logo: "assets/placement/Qatar- Logo.jpeg",
      openings: 9,
    },
    {
      name: "Teleperformance",
      logo: "assets/placement/Teleperformance Logo.png",
      openings: 16,
    },
    {
      name: "Vimaana",
      logo: "assets/placement/Vimaana - Logo.jpeg",
      openings: 19,
    },
  ];

  return (
    <div className="ardaeplacement-container">
      <h1 className="ahrda-programs-title">
        {" "}
        Placements & Career Opportunities
      </h1>
      <div className="ahrda-title-underline"></div>
      <div className="ardaeplacement-tabs">
        <button
          className={`ardaeplacement-tab-button ${
            activeTab === "placements" ? "ardaeplacement-active" : ""
          }`}
          onClick={() => setActiveTab("placements")}
        >
          Placement Statistics
        </button>
        <button
          className={`ardaeplacement-tab-button ${
            activeTab === "recruiters" ? "ardaeplacement-active" : ""
          }`}
          onClick={() => setActiveTab("recruiters")}
        >
          Top Recruiters
        </button>

        <button
          className={`ardaeplacement-tab-button ${
            activeTab === "resources" ? "ardaeplacement-active" : ""
          }`}
          onClick={() => setActiveTab("resources")}
        >
          Career Resources
        </button>
      </div>

      <div className="ardaeplacement-tab-content">
        {activeTab === "placements" && (
          <div className="ardaeplacement-placements-stats">
            <h2>Placement Statistics</h2>
            <div className="ardaeplacement-highlight-box">
              <div className="ardaeplacement-highlight-item">
                <span className="ardaeplacement-highlight-number">
                  {placementStats[0].placementRate}
                </span>
                <span className="ardaeplacement-highlight-label">
                  Placement Rate (2024)
                </span>
              </div>
              <div className="ardaeplacement-highlight-item">
                <span className="ardaeplacement-highlight-number">
                  {placementStats[0].avgPackage}
                </span>
                <span className="ardaeplacement-highlight-label">
                  Average Package
                </span>
              </div>
              <div className="ardaeplacement-highlight-item">
                <span className="ardaeplacement-highlight-number">
                  {placementStats[0].topPackage}
                </span>
                <span className="ardaeplacement-highlight-label">
                  Highest Package
                </span>
              </div>
              <div className="ardaeplacement-highlight-item">
                <span className="ardaeplacement-highlight-number">
                  {placementStats[0].companies}
                </span>
                <span className="ardaeplacement-highlight-label">
                  Companies Visited
                </span>
              </div>
            </div>

            <div className="ardaeplacement-stats-table">
              <h3>Year-wise Placement Statistics</h3>
              <table>
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Placement Rate</th>
                    <th>Average Package</th>
                    <th>Highest Package</th>
                    <th>Companies Visited</th>
                  </tr>
                </thead>
                <tbody>
                  {placementStats.map((stat) => (
                    <tr key={stat.year}>
                      <td>{stat.year}</td>
                      <td>{stat.placementRate}</td>
                      <td>{stat.avgPackage}</td>
                      <td>{stat.topPackage}</td>
                      <td>{stat.companies}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="ardaeplacement-department-stats">
              <h3>Department-wise Placement Statistics (2024)</h3>
              <div className="ardaeplacement-stat-bars">
                <div className="ardaeplacement-stat-bar">
                  <div className="ardaeplacement-bar-label">
                    Aviation Management
                  </div>
                  <div className="ardaeplacement-bar-container">
                    <div
                      className="ardaeplacement-bar-fill"
                      style={{ width: "95%" }}
                    >
                      95%
                    </div>
                  </div>
                </div>
                <div className="ardaeplacement-stat-bar">
                  <div className="ardaeplacement-bar-label">Fine Arts</div>
                  <div className="ardaeplacement-bar-container">
                    <div
                      className="ardaeplacement-bar-fill"
                      style={{ width: "90%" }}
                    >
                      90%
                    </div>
                  </div>
                </div>
                <div className="ardaeplacement-stat-bar">
                  <div className="ardaeplacement-bar-label">
                    Aviation & Travel
                  </div>
                  <div className="ardaeplacement-bar-container">
                    <div
                      className="ardaeplacement-bar-fill"
                      style={{ width: "85%" }}
                    >
                      85%
                    </div>
                  </div>
                </div>
                <div className="ardaeplacement-stat-bar">
                  <div className="ardaeplacement-bar-label">
                    Aerospace Engineering
                  </div>
                  <div className="ardaeplacement-bar-container">
                    <div
                      className="ardaeplacement-bar-fill"
                      style={{ width: "88%" }}
                    >
                      88%
                    </div>
                  </div>
                </div>
                <div className="ardaeplacement-stat-bar">
                  <div className="ardaeplacement-bar-label">
                    Fashion Designing
                  </div>
                  <div className="ardaeplacement-bar-container">
                    <div
                      className="ardaeplacement-bar-fill"
                      style={{ width: "82%" }}
                    >
                      82%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "recruiters" && (
          <div className="ardaeplacement-recruiters-section">
            <h2>Top Recruiters</h2>
            <p>
              Our college maintains strong industry connections with leading
              companies across various sectors.
            </p>

            <div className="ardaeplacement-recruiters-grid">
              {topRecruiters.map((recruiter) => (
                <div
                  className="ardaeplacement-recruiter-card"
                  key={recruiter.name}
                >
                  <div className="ardaeplacement-recruiter-logo">
                    <img src={recruiter.logo} alt={recruiter.name} />
                  </div>
                  {/* <h3>{recruiter.name}</h3> */}
                  {/* <p>{recruiter.openings} current openings</p>
                  <button className="ardaeplacement-view-details-btn">
                    View Details
                  </button> */}
                </div>
              ))}
            </div>

            <div className="ardaeplacement-industry-sectors">
              <h3>Industry Sectors</h3>
              <div className="ardaeplacement-sector-tags">
                <span className="ardaeplacement-sector-tag">IT & Software</span>
                <span className="ardaeplacement-sector-tag">Manufacturing</span>
                <span className="ardaeplacement-sector-tag">Consulting</span>
                <span className="ardaeplacement-sector-tag">Finance</span>
                <span className="ardaeplacement-sector-tag">E-Commerce</span>
                <span className="ardaeplacement-sector-tag">Healthcare</span>
                <span className="ardaeplacement-sector-tag">Automotive</span>
                <span className="ardaeplacement-sector-tag">Energy</span>
                <span className="ardaeplacement-sector-tag">Aviation</span>
                <span className="ardaeplacement-sector-tag">Defense</span>
                <span className="ardaeplacement-sector-tag">
                  Media & Entertainment
                </span>
                <span className="ardaeplacement-sector-tag">
                  Fashion & Lifestyle
                </span>
              </div>
            </div>

            <div className="ardaeplacement-become-recruiter">
              <h3>Become a Recruiting Partner</h3>
              <p>
                Interested in recruiting from our talented pool of students?
                Connect with our placement cell.
              </p>
              <button
                className="ardaeplacement-contact-btn"
                onClick={() => (window.location.href = "tel:+9105344408")}
              >
                Contact Placement Cell
              </button>
            </div>
          </div>
        )}

        {activeTab === "resources" && (
          <div className="ardaeplacement-resources-section">
            <h2>Career Resources</h2>

            <div className="ardaeplacement-resource-categories">
              <div className="ardaeplacement-resource-category">
                <h3>Learn from Experienced Instructors</h3>
                <p>
                  Gain insights from industry experts and professionals guiding
                  your career journey.
                </p>
                {/* <button className="ardaeplacement-alumni-network-btn">
                  Access Instructor Network
                </button> */}
              </div>
              <div className="ardaeplacement-resource-category">
                <h3>Inspiring Guest Lectures</h3>
                <p>
                  Engage with guest speakers who bring real-world industry
                  experience to the table.
                </p>
                {/* <button className="ardaeplacement-alumni-network-btn">
                  Access Guest Lectures
                </button> */}
              </div>
              <div className="ardaeplacement-resource-category">
                <h3>Guidance from Mentors</h3>
                <p>
                  Connect with experienced mentors who can provide valuable
                  career advice and insights.
                </p>
                {/* <button className="ardaeplacement-alumni-network-btn">
                  Find a Mentor
                </button> */}
              </div>
              <div className="ardaeplacement-resource-category">
                <h3>Join Professional Clubs</h3>
                <p>
                  Become part of exclusive clubs to network and collaborate with
                  like-minded peers.
                </p>
                {/* <button className="ardaeplacement-alumni-network-btn">
                  Explore Clubs
                </button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlacementsCareer;
