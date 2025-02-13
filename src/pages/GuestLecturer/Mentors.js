import React, { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Head from "../../components/Head/Head";
import { Link } from "react-router-dom";

const Mentors = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    document.title = "Mentors - Aharada Education";

    const fetchMentors = async () => {
      try {
        const response = await axios.get(
          "https://backend.aharadaedu.in/api/guest-lecturers/mentors-or-both"
        );
        setMentors(response.data);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    };

    fetchMentors();
  }, []);

  return (
    <div>
      <Head />
      <Breadcrumbs />
      <main>
        <div
          style={{ background: "linear-gradient(to bottom, #fdfbf9, #f4ebdd)" }}
        >
          <div className="team-area overflow-hidden space">
            <div className="container">
              <div className="row align-items-center gy-4">
                {mentors.length > 0 ? (
                  mentors.map((mentor, index) => (
                    <div key={index} className="col-sm-6 col-lg-4 col-xl-3">
                      <div className="team-card style3">
                        <div
                          className="team-img-wrap"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            paddingTop: "15px",
                          }}
                        >
                          <div
                            className="team-img"
                            style={{
                              width: "130px",
                              height: "130px",
                              borderRadius: "50%",
                              overflow: "hidden",
                            }}
                          >
                            <img
                              src={
                                mentor.photo
                                  ? `https://backend.aharadaedu.in${mentor.photo}`
                                  : "/path/to/placeholder-image.jpg"
                              }
                              alt="Mentor"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        </div>

                        <div className="team-hover-wrap">
                          <div className="team-social">
                            <a href="#" className="icon-btn">
                              <i className="far fa-plus" />
                            </a>
                            <div className="th-social">
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={mentor.linkedInProfile || "#"}
                              >
                                <i className="fab fa-linkedin-in" />
                              </a>
                              <a href={`mailto:${mentor.emailAddress}`}>
                                <i className="fas fa-envelope" />
                              </a>
                            </div>
                          </div>
                          <div className="team-content">
                            <h3 className="team-title">
                              <Link
                              // to={`/guestLecturerDetails/${encodeURIComponent(
                              //   mentor._id.toString()
                              // )}`}
                              >
                                {mentor.fullName}
                              </Link>
                            </h3>
                            <span className="team-desig">
                              {mentor.designation}
                            </span>
                          </div>
                          <div className="team-info">
                            <span>
                              <i className="fal fa-file-check" />
                              {mentor.yearsOfExperience} years Experience
                            </span>
                          </div>
                          <div className="team-info">
                            <span>
                              <i className="fa-light fa-chalkboard-teacher" />
                              {mentor.workshopsConducted &&
                              mentor.workshopsConducted.length > 0
                                ? mentor.workshopsConducted.length
                                : "No workshops"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>No mentors available.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Mentors;
