import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios for data fetching
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

function PlacedStudents() {
  const [alumniData, setAlumniData] = useState([]);
  const BASE_URL = "https://backend.aharadaedu.in";

  // Function to fetch alumni data
  const fetchAlumniData = async () => {
    try {
      // Fetching alumni data from the backend
      const response = await axios.get(`${BASE_URL}/api/placed-students`);
      const data = response.data.placedStudents;
      setAlumniData(data); // Set the fetched alumni data
    } catch (error) {
      console.error("Error fetching alumni data:", error);
    }
  };

  useEffect(() => {
    document.title = "Placed Students - Aharada Education";
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
                          <img
                            src={
                              alumni.profileImage
                                ? `${BASE_URL}${alumni.profileImage}`
                                : "defaultImage.jpg"
                            }
                            alt={alumni.name}
                            className="profile-img"
                            style={{
                              height: "250px",
                              width: "100%",
                              objectFit: "cover",
                            }}
                          />
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
                              href={`mailto:${alumni.email}`}
                              rel="noopener noreferrer"
                              className="email-icon"
                              style={{
                                fontSize: "18px",
                                color: "#0077b5",
                                marginRight: "10px",
                              }}
                            >
                              <i className="fa-solid fa-envelope" />
                              {/* Correct email icon */}
                            </a>
                            <a
                              target="_blank"
                              href={alumni.linkedinProfile}
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </div>
                        </div>
                        <div className="team-content">
                          <h3 className="team-title">
                            <a style={{ fontSize: "18px" }}>{alumni.name}</a>
                          </h3>
                          <span className="team-desig">{alumni.jobTitle}</span>
                        </div>
                        <div className="team-info">
                          <span>
                            <i className="fa fa-file-check" />
                            {alumni.batch} Batch
                          </span>
                        </div>
                        <div className="team-info">
                          <span>
                            <i className="fa fa-chalkboard-teacher" />
                            {alumni.department}
                          </span>
                        </div>
                        <div className="team-info">
                          <span>
                            <i className="fa fa-home" />

                            {alumni.placementCompany}
                          </span>
                        </div>
                        {/* <div className="team-info">
                          <span>
                            <i className="fab fa-linkedin-in" />
                            <a
                              href={alumni.linkedinProfile}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              LinkedIn Profile
                            </a>
                          </span>
                        </div> */}
                        {/* <div className="team-info">
                          <span>
                            <i className="fa fa-envelope" />
                            <a
                              href={`mailto:${alumni.email}`}
                              style={{ color: "#333" }}
                            >
                              {alumni.email}
                            </a>
                          </span>
                        </div> */}
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

export default PlacedStudents;
