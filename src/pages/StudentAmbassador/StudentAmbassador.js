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
      <main
        style={{
          minHeight: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          {studentAmbassadors.length === 0 ? (
            <div style={{ fontSize: "24px", color: "#555" }}>
              No student ambassadors available.
            </div>
          ) : (
            studentAmbassadors.map((ambassador, index) => (
              <div key={index} className="col-sm-6 col-lg-4 col-xl-3">
                <div className="team-card style3">
                  <div className="team-content">
                    <h3 className="team-title">{ambassador.name}</h3>
                    <span className="team-desig">{ambassador.designation}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default StudentAmbassador;
