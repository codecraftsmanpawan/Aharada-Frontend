import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaLinkedin } from "react-icons/fa";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import "./TeamMember.css";

const TeamMember = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend.aharadaedu.in/api/team-members")
      .then((response) => {
        setTeamMembers(response.data.teamMembers);
      })
      .catch((error) => console.error("Error fetching team members:", error));
  }, []);

  return (
    <>
      <Breadcrumbs />
      <div
        className="team-member-section"
        style={{
          paddingTop: "40px",
          background: "linear-gradient(to bottom, #fdfbf9, #f4ebdd)",
        }}
      >
        <div className="team-section-title">
          <h2>Our Team</h2>
          <p className="team-section-description">
            Constituting the heart of Aharada Education, the core team
            facilitates efficient multidisciplinary actions for the functioning
            of all teams while upholding the ethos of Aharada. From operations,
            academics, product, HR, and tech ideation to their seamless
            execution, they ensure one thing: doing what is right for the
            student.
          </p>
        </div>
        <div className="team-member-grid">
          {teamMembers.map((member) => (
            <div className="team-member-card" key={member._id}>
              <img
                src={`https://backend.aharadaedu.in${member.profileImage}`}
                alt={member.name}
                className="team-member-profile-image"
              />
              <div className="team-member-info">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-designation">{member.designation}</p>
                <p className="team-member-about">{member.about}</p>
                <div className="team-member-links">
                  <a
                    href={`mailto:${member.email}`}
                    className="team-member-email"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
              {/* LinkedIn icon in the bottom right */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="team-member-linkedin-icon"
              >
                <FaLinkedin size={30} color="#0073b1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamMember;
