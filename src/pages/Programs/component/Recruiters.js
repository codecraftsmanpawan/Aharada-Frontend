import React, { useState } from "react";

const PlacementsCareer = () => {
  const topRecruiters = [
    {
      name: "Microsoft",
      logo: "../assets/placement/American - Logo.png",
      openings: 12,
    },
    {
      name: "Google",
      logo: "../assets/placement/AISATS - logo.png",
      openings: 8,
    },
    {
      name: "Amazon",
      logo: "../assets/placement/Arabian Vibes Logo.jpeg",
      openings: 15,
    },
    {
      name: "Infosys",
      logo: "../assets/placement/Celebi- Logo.jpeg",
      openings: 25,
    },
    {
      name: "TCS",
      logo: "../assets/placement/Delhi Duty Free - Logo.png",
      openings: 30,
    },
    {
      name: "Tesla",
      logo: "../assets/placement/Drone Stark Logo.png",
      openings: 10,
    },
    {
      name: "Meta",
      logo: "../assets/placement/Eniva Logo.svg",
      openings: 18,
    },
    {
      name: "Apple",
      logo: "../assets/placement/GMR- logo.png",
      openings: 22,
    },
    {
      name: "IBM",
      logo: "../assets/placement/Indigo - Logo.png",
      openings: 14,
    },
    {
      name: "Oracle",
      logo: "../assets/placement/IRSLogo.png",
      openings: 11,
    },
    {
      name: "Accenture",
      logo: "../assets/placement/Leela Travels Logo.png",
      openings: 20,
    },
    {
      name: "Capgemini",
      logo: "../assets/placement/Ocube Logo.jpeg",
      openings: 17,
    },
    {
      name: "Deloitte",
      logo: "../assets/placement/OH! Puhleeez Logo.jpeg",
      openings: 13,
    },
    {
      name: "Cognizant",
      logo: "../assets/placement/Omullane - Logo.png",
      openings: 21,
    },
    {
      name: "Wipro",
      logo: "../assets/placement/phs logo.png",
      openings: 26,
    },
    {
      name: "Qatar Airways",
      logo: "../assets/placement/Qatar- Logo.jpeg",
      openings: 9,
    },
    {
      name: "Teleperformance",
      logo: "../assets/placement/Teleperformance Logo.png",
      openings: 16,
    },
    {
      name: "Vimaana",
      logo: "../assets/placement/Vimaana - Logo.jpeg",
      openings: 19,
    },
  ];

  return (
    <div className="ardaeplacement-recruiters-section">
      <h2>Top Recruiters</h2>
      <p>
        Our college maintains strong industry connections with leading companies
        across various sectors.
      </p>

      <div className="ardaeplacement-recruiters-grid">
        {topRecruiters.map((recruiter) => (
          <div className="ardaeplacement-recruiter-card" key={recruiter.name}>
            <div className="ardaeplacement-recruiter-logo">
              <img src={recruiter.logo} alt={recruiter.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacementsCareer;
