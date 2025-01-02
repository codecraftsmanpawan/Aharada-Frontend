import React, { useEffect, useState } from "react";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import "./Internship.css";

function Internship() {
  const [internshipData, setInternshipData] = useState([]);

  const fetchInternshipData = () => {
    const data = [
      {
        name: "John Doe",
        company: "Google",
        position: "Software Engineering Intern",
        duration: "June 2023 - August 2023",
        location: "California, USA",
        description:
          "Developed features for Google Cloud services and worked closely with engineers to improve codebase efficiency.",
        profilePhoto: "assets/img/team/team_1_2.jpg",
      },
      {
        name: "Jane Smith",
        company: "Tesla",
        position: "Mechanical Engineering Intern",
        duration: "May 2023 - July 2023",
        location: "Palo Alto, USA",
        description:
          "Worked on the design and testing of electric vehicle systems, contributing to production models.",
        profilePhoto: "assets/img/team/team_1_2.jpg",
      },
      {
        name: "Sarah Lee",
        company: "Microsoft",
        position: "Product Management Intern",
        duration: "Summer 2023",
        location: "Redmond, USA",
        description:
          "Assisted with product strategy, market research, and product lifecycle management for cloud products.",
        profilePhoto: "assets/img/team/team_1_2.jpg",
      },
    ];
    setInternshipData(data);
  };

  useEffect(() => {
    document.title = "Internship - Aharada Education";
    fetchInternshipData();
  }, []);

  return (
    <div>
      <Breadcrumbs />
      <section
        className="space"
        style={{
          background: "linear-gradient(to bottom, #f4ebdd, #fdfbf9)",
        }}
      >
        <div className="container">
          <div className="row ">
            <div className="col-md-6 col-lg-4 col-xxl-3">
              <div className="team-card2">
                <div className="team-img">
                  <img src="assets/img/update1/team/team_2_1.jpg" alt="Team" />
                </div>
                <div className="team-social">
                  <button className="icon-btn">
                    <i className="fa-solid fa-plus" />
                  </button>
                  <div className="th-social">
                    <a target="_blank" href="https://facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </a>{" "}
                    <a target="_blank" href="https://twitter.com/">
                      <i className="fab fa-twitter" />
                    </a>{" "}
                    <a target="_blank" href="https://instagram.com/">
                      <i className="fab fa-instagram" />
                    </a>{" "}
                    <a target="_blank" href="https://linkedin.com/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="team-content">
                  <h3 className="team-title">
                    <a href="team-details.html">Lilar Dikeoa</a>
                  </h3>
                  <span className="team-desig">Web Developer intern</span>
                </div>
                <div className="team-info">
                  <span>
                    <i className="fa-light fa-file" />
                    Batch : 2021-2024
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-3">
              <div className="team-card2">
                <div className="team-img">
                  <img src="assets/img/update1/team/team_2_2.jpg" alt="Team" />
                </div>
                <div className="team-social">
                  <button className="icon-btn">
                    <i className="fa-solid fa-plus" />
                  </button>
                  <div className="th-social">
                    <a target="_blank" href="https://facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </a>{" "}
                    <a target="_blank" href="https://twitter.com/">
                      <i className="fab fa-twitter" />
                    </a>{" "}
                    <a target="_blank" href="https://instagram.com/">
                      <i className="fab fa-instagram" />
                    </a>{" "}
                    <a target="_blank" href="https://linkedin.com/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="team-content">
                  <h3 className="team-title">
                    <a href="team-details.html">David K. Smith</a>
                  </h3>
                  <span className="team-desig">Web Developer intern</span>
                </div>
                <div className="team-info">
                  <span>
                    <i className="fa-light fa-file" />
                    Batch : 2021-2024
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-3">
              <div className="team-card2">
                <div className="team-img">
                  <img src="assets/img/update1/team/team_2_3.jpg" alt="Team" />
                </div>
                <div className="team-social">
                  <button className="icon-btn">
                    <i className="fa-solid fa-plus" />
                  </button>
                  <div className="th-social">
                    <a target="_blank" href="https://facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </a>{" "}
                    <a target="_blank" href="https://twitter.com/">
                      <i className="fab fa-twitter" />
                    </a>{" "}
                    <a target="_blank" href="https://instagram.com/">
                      <i className="fab fa-instagram" />
                    </a>{" "}
                    <a target="_blank" href="https://linkedin.com/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="team-content">
                  <h3 className="team-title">
                    <a href="team-details.html">Mardle Smith</a>
                  </h3>
                  <span className="team-desig">Web Developer intern</span>
                </div>
                <div className="team-info">
                  <span>
                    <i className="fa-light fa-file" />
                    Batch : 2021-2024
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-3">
              <div className="team-card2">
                <div className="team-img">
                  <img src="assets/img/update1/team/team_2_4.jpg" alt="Team" />
                </div>
                <div className="team-social">
                  <button className="icon-btn">
                    <i className="fa-solid fa-plus" />
                  </button>
                  <div className="th-social">
                    <a target="_blank" href="https://facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </a>{" "}
                    <a target="_blank" href="https://twitter.com/">
                      <i className="fab fa-twitter" />
                    </a>{" "}
                    <a target="_blank" href="https://instagram.com/">
                      <i className="fab fa-instagram" />
                    </a>{" "}
                    <a target="_blank" href="https://linkedin.com/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="team-content">
                  <h3 className="team-title">
                    <a href="team-details.html">Hirmar Ubunti</a>
                  </h3>
                  <span className="team-desig">Web Developer intern</span>
                </div>
                <div className="team-info">
                  <span>
                    <i className="fa-light fa-file" />
                    Batch : 2021-2024
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Internship;
