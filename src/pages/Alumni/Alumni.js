import React, { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import "./Alumni.css";

function Alumni() {
  const [alumniData, setAlumniData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAlumniData = () => {
    axios
      .get("https://backend.aharadaedu.in/api/alumni")
      .then((response) => {
        setAlumniData(response.data.alumni);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching alumni data");
        setLoading(false);
      });
  };

  useEffect(() => {
    document.title = "Alumni - Aharada Education";
    fetchAlumniData(); // Fetch data on page load
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="alumni-container">
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
                            src={`https://backend.aharadaedu.in${alumni.profilePhoto}`}
                            alt={alumni.name || "Alumni Profile"}
                            style={{
                              width: "100%",
                              height: "250px",
                              objectFit: "cover",
                            }}
                            onError={(e) =>
                              (e.target.src = "fallback_image_url.jpg")
                            } // Fallback in case the image is broken
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
                            >
                              <i className="fa-solid fa-envelope" />
                            </a>
                            <a
                              target="_blank"
                              href={alumni.linkedin}
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </div>
                        </div>
                        <div className="team-content">
                          <h3 className="team-title">{alumni.name}</h3>
                          <span className="team-desig">
                            {alumni.jobTitle}, {alumni.placementCompany}
                          </span>
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
