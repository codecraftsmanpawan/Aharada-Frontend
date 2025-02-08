import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import axios from "axios";

const StudentAmbassador = () => {
  const [studentAmbassadors, setStudentAmbassadors] = useState([]);

  useEffect(() => {
    document.title = "Student Ambassadors - Aharada Education";

    const fetchStudentAmbassadors = async () => {
      try {
        const response = await axios.get(
          "https://backend.aharadaedu.in/api/student-ambassadors"
        );
        setStudentAmbassadors(response.data);
      } catch (error) {
        console.error("Error fetching student ambassadors:", error);
      }
    };

    fetchStudentAmbassadors();
  }, []);

  return (
    <div>
      <Breadcrumbs />
      <section
        className="space"
        style={{
          background: "linear-gradient(to bottom, #f4ebdd, #fdfbf9)",
          minHeight: "50vh",
        }}
      >
        <div className="container">
          <div className="row">
            {studentAmbassadors.length === 0 ? (
              <div
                style={{ fontSize: "24px", color: "#555", textAlign: "center" }}
              >
                No student ambassadors available.
              </div>
            ) : (
              studentAmbassadors.map((ambassador) => (
                <div
                  className="col-md-6 col-lg-4 col-xxl-3"
                  key={ambassador._id}
                  style={{ marginBottom: "30px" }}
                >
                  <div className="team-card2">
                    <div className="team-img">
                      <img
                        src={`https://backend.aharadaedu.in${ambassador.profileImage}`}
                        alt={ambassador.name}
                        style={{
                          width: "100%",
                          height: "250px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    </div>

                    <div className="team-content">
                      <h3 className="team-title">
                        <a href={`mailto:${ambassador.email}`}>
                          {ambassador.name}
                        </a>
                      </h3>
                      <span className="team-desig">
                        {ambassador.university} | {ambassador.major}
                      </span>
                    </div>

                    <div className="team-social">
                      <button className="icon-btn">
                        <i className="fa-solid fa-plus" />
                      </button>

                      <div className="th-social">
                        <a target="_blank" href={ambassador.facebook}>
                          <i className="fab fa-facebook" />
                        </a>
                        <a target="_blank" href={`mailto:${ambassador.email}`}>
                          <i className="fa-solid fa-envelope" />
                        </a>
                        {ambassador.socialMediaLinks.facebook && (
                          <a
                            target="_blank"
                            href={ambassador.socialMediaLinks.facebook}
                          >
                            <i className="fab fa-facebook" />
                          </a>
                        )}
                        {ambassador.socialMediaLinks.twitter && (
                          <a
                            target="_blank"
                            href={ambassador.socialMediaLinks.twitter}
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        )}
                        {ambassador.socialMediaLinks.instagram && (
                          <a
                            target="_blank"
                            href={ambassador.socialMediaLinks.instagram}
                          >
                            <i className="fab fa-instagram" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="team-info">
                      <span>
                        <i className="fa-light fa-phone" />
                        Phone: {ambassador.phoneNumber}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentAmbassador;
