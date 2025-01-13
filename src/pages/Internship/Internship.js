import React, { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import "./Internship.css";

function Internship() {
  const [internshipData, setInternshipData] = useState([]);

  const fetchInternshipData = async () => {
    try {
      const response = await axios.get(
        "https://backend.aharadaedu.in/api/internships"
      );
      setInternshipData(response.data.internships);
    } catch (error) {
      console.log("Error fetching internship data:", error);
    }
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
          <div className="row">
            {internshipData.length > 0 ? (
              internshipData.map((internship) => (
                <div
                  className="col-md-6 col-lg-4 col-xxl-3"
                  key={internship._id}
                >
                  <div className="team-card2">
                    <div className="team-img">
                      <img
                        src={`https://backend.aharadaedu.in${internship.profileImage}`}
                        alt={internship.internName}
                        style={{
                          width: "100%",
                          height: "250px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    </div>

                    <div className="team-social">
                      <button className="icon-btn">
                        <i className="fa-solid fa-plus" />
                      </button>
                      <div className="th-social">
                        <a target="_blank" href={internship.linkedin}>
                          <i className="fab fa-linkedin-in" />
                        </a>
                        <a target="_blank" href={`mailto:${internship.email}`}>
                          <i className="fa-solid fa-envelope" />
                        </a>
                      </div>
                    </div>
                    <div className="team-content">
                      <h3 className="team-title">
                        <a href={`mailto:${internship.email}`}>
                          {internship.internName}
                        </a>
                      </h3>
                      <span className="team-desig">
                        {internship.jobTitle}, {internship.company} ,{" "}
                        {internship.internshipDuration}
                      </span>
                    </div>
                    <div className="team-info">
                      <span>
                        <i className="fa-light fa-file" />
                        Batch: {internship.batchYear}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No internship data available.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Internship;
