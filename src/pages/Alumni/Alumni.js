import React, { useEffect, useState } from "react";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

import "./Alumni.css";

function Alumni() {
  const [alumniData, setAlumniData] = useState([]);

  const fetchAlumniData = () => {
    const data = [
      {
        name: "John Doe",
        year: " 2018 - 2001",
        course: "Computer Science",
        email: "john.doe@example.com",
        profilePhoto: "assets/img/team/team_1_2.jpg",
        placementCompany: "Google",
        jobTitle: "Software Engineer",
      },
      {
        name: "Jane Smith",
        year: " 2018 - 2001",
        course: "Mechanical Engineering",
        email: "jane.smith@example.com",
        profilePhoto: "assets/img/team/team_1_2.jpg",
        placementCompany: "Tesla",
        jobTitle: "Mechanical Engineer",
      },
      {
        name: "Sarah Lee",
        year: " 2018 - 2001",
        course: "Electrical Engineering",
        email: "sarah.lee@example.com",
        profilePhoto: "assets/img/team/team_1_2.jpg",
        placementCompany: "Microsoft",
        jobTitle: "Electrical Engineer",
      },
      {
        name: "Sarah Lee",
        year: " 2018 - 2001",
        course: "Electrical Engineering",
        email: "sarah.lee@example.com",
        profilePhoto: "assets/img/team/team_1_2.jpg",
        placementCompany: "Microsoft",
        jobTitle: "Electrical Engineer",
      },
      {
        name: "Sarah Lee",
        year: " 2018 - 2001",
        course: "Electrical Engineering",
        email: "sarah.lee@example.com",
        profilePhoto: "assets/img/team/team_1_2.jpg",
        placementCompany: "Microsoft",
        jobTitle: "Electrical Engineer",
      },
      {
        name: "Sarah Lee",
        year: " 2018 - 2001",
        course: "Electrical Engineering",
        email: "sarah.lee@example.com",
        profilePhoto: "assets/img/team/team_1_2.jpg",
        placementCompany: "Microsoft",
        jobTitle: "Electrical Engineer",
      },
      {
        name: "Sarah Lee",
        year: " 2018 - 2001",
        course: "Electrical Engineering",
        email: "sarah.lee@example.com",
        profilePhoto: "assets/img/team/team_1_2.jpg",
        placementCompany: "Microsoft",
        jobTitle: "Electrical Engineer",
      },
      {
        name: "Sarah Lee",
        year: " 2018 - 2001",
        course: "Electrical Engineering",
        email: "sarah.lee@example.com",
        profilePhoto: "assets/img/team/team_1_2.jpg",
        placementCompany: "Microsoft",
        jobTitle: "Electrical Engineer",
      },
    ];
    setAlumniData(data);
  };

  useEffect(() => {
    document.title = "Alumni - Aharada Education";
    fetchAlumniData(); // Fetch data on page load
  }, []);

  return (
    <div className="alumni-container">
      {/* <Preloader /> */}
      <div className="alumni-header" />
      <main>
        <Breadcrumbs />
        <div>
          <div
            className="team-area overflow-hidden space"
            style={{
              background: "linear-gradient(to bottom, #f4ebdd, #fdfbf9)",
              marginTop: "-50px",
            }}
          >
            <div className="container">
              <div className="row align-items-center gy-4">
                {alumniData.map((alumni, index) => (
                  <div key={index} className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="team-card style3">
                      <div className="team-img-wrap">
                        <div className="team-img">
                          <img src={alumni.profilePhoto} alt={alumni.name} />
                        </div>
                      </div>
                      <div className="team-hover-wrap">
                        <div className="team-social">
                          <a href="#" className="icon-btn">
                            <i className="far fa-plus"></i>
                          </a>
                          <div className="th-social">
                            <a
                              target="_blank"
                              href="https://vimeo.com/"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-vimeo-v"></i>
                            </a>
                            <a
                              target="_blank"
                              href="https://linkedin.com/"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a
                              target="_blank"
                              href="https://twitter.com/"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-twitter"></i>
                            </a>
                            <a
                              target="_blank"
                              href="https://facebook.com/"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </div>
                        </div>
                        <div className="team-content">
                          <h3 className="team-title">
                            <a href="/facultyDetails">{alumni.name}</a>
                          </h3>
                          <span className="team-desig">{alumni.jobTitle}</span>
                        </div>
                        <div className="team-info">
                          <span>
                            <i className="fal fa-file-check" />
                            {alumni.year} Batch
                          </span>
                        </div>
                        <div className="team-info">
                          <span>
                            <i className="fa-light fa-chalkboard-teacher" />
                            {alumni.course}
                          </span>
                        </div>
                        <div className="team-info">
                          <span>
                            <i className="fab fa-linkedin-in" />
                            <a href={`mailto:${alumni.email}`}>
                              {alumni.email}
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Alumni;
