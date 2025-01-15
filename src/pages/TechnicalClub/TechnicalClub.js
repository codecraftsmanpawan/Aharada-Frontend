import React from "react";
import "./TechnicalClub.css";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const TechnicalClub = () => {
  return (
    <>
      <Breadcrumbs />
      <div className="technical-club-container">
        <header className="club-header">
          <h1>Technical Club</h1>
          <p>Empowering Innovation and Excellence</p>
        </header>

        <section className="club-about">
          <h2>About Us</h2>
          <p>
            The Technical Club is a community of tech enthusiasts passionate
            about coding, hardware, design, and innovation. We aim to bridge the
            gap between academics and industry requirements by fostering
            hands-on learning, teamwork, and problem-solving.
          </p>
        </section>

        <section className="club-activities">
          <h2>What We Do</h2>
          <ul>
            <li>
              <strong>Workshops and Seminars:</strong>
              <ul>
                <li>Coding Bootcamps</li>
                <li>AI and Machine Learning Workshops</li>
                <li>IoT and Robotics Sessions</li>
                <li>Web and App Development Tutorials</li>
              </ul>
            </li>
            <li>
              <strong>Hackathons and Competitions:</strong>
              <ul>
                <li>Annual Tech Fest</li>
                <li>Code Sprints</li>
                <li>Hardware Challenges</li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default TechnicalClub;
