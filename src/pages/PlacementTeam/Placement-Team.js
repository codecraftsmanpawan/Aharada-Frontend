import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import axios from "axios";
import "./PlacementTeam.css";

function PlacementTeam() {
  const [placementTeam, setPlacementTeam] = useState([]);

  // Define your base URL for images
  const baseURL = "https://backend.aharadaedu.in";

  // Fetch placement team data from the API
  useEffect(() => {
    document.title = "Placement Team - Aharada Education";

    // Replace with the actual API endpoint
    axios
      .get("https://backend.aharadaedu.in/api/placement-team")
      .then((response) => {
        if (response.data && response.data.placementTeam) {
          setPlacementTeam(response.data.placementTeam);
        }
      })
      .catch((error) => {
        console.error("Error fetching placement team data:", error);
      });
  }, []);

  return (
    <div className="placement-team">
      <main>
        <Breadcrumbs />

        <section
          className="space"
          style={{
            background: "linear-gradient(to bottom, #f4ebdd, #fdfbf9)",
          }}
        >
          <div className="container">
            <div className="row">
              {placementTeam.map((member) => (
                <div key={member._id} className="col-md-6 col-lg-4 col-xxl-3">
                  <div className="team-card2">
                    <div
                      className="team-img"
                      style={{ height: "250px", overflow: "hidden" }}
                    >
                      <img
                        src={`${baseURL}${member.profileImage}`}
                        alt={member.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div
                      className="team-social"
                      style={{ marginBottom: "-80px" }}
                    >
                      <button className="icon-btn">
                        <i className="fa-solid fa-plus" />
                      </button>
                      <div className="th-social">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={member.linkedin}
                        >
                          <i className="fab fa-linkedin-in" />
                        </a>
                        <a href={`mailto:${member.email}`}>
                          <i className="fas fa-envelope" />
                        </a>
                      </div>
                    </div>
                    <div className="team-content">
                      <h3 className="team-title">{member.name}</h3>
                      <span className="team-desig">{member.designation}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          className="instructions-section py-5 bg-light"
          style={{ marginTop: "-80px" }}
        >
          <div className="container">
            <h2 className="mb-4">
              How to Connect with the Aharada Placement Department
            </h2>
            <p>
              Aharada Education's Placement Department is dedicated to helping
              you launch your dream career. Follow these steps to get started:
            </p>
            <ol>
              <li>
                <strong>Contact the Placement Team:</strong> Reach out to our
                Placement Officer, <strong>Dr. Neha Sharma</strong>, via email
                at{" "}
                <a href="mailto:placements@aharadaedu.in">
                  placements@aharadaedu.in
                </a>{" "}
                or call <a href="tel:+911234567890">+91 12345 67890</a>.
              </li>
              <li>
                <strong>Participate in Training Programs:</strong> Join our
                career workshops, interview preparation sessions, and
                resume-building webinars designed to enhance your employability
                skills.
              </li>
              <li>
                <strong>Submit Your Profile:</strong> Register on the{" "}
                <a href="/placement-portal">Aharada Placement Portal</a> and
                upload your latest resume, academic details, and other required
                documents.
              </li>
              <li>
                <strong>Attend Placement Drives:</strong> Take part in campus
                recruitment drives, interact with top recruiters, and seize job
                opportunities tailored to your skills and aspirations.
              </li>
            </ol>

            <h2 className="mt-5 mb-4">
              How to Apply for Placement Opportunities
            </h2>
            <p>
              Applying for placements at Aharada Education is simple and
              structured. Here’s how you can proceed:
            </p>
            <ul>
              <li>
                <strong>Update Your Student Profile:</strong> Log in to the
                Placement Portal and ensure your profile is complete with
                updated academic records, certifications, and contact details.
              </li>
              <li>
                <strong>Browse Opportunities:</strong> Explore job and
                internship openings posted by our trusted industry partners on
                the portal.
              </li>
              <li>
                <strong>Apply Directly:</strong> Click on the opportunity of
                your choice, review the job description, and submit your
                application through the portal.
              </li>
              <li>
                <strong>Track Your Progress:</strong> Monitor application
                statuses and stay informed about interview schedules and
                recruitment updates.
              </li>
              <li>
                <strong>Get Support:</strong> For any queries or assistance,
                connect with our Placement Coordinator,{" "}
                <strong>Mr. Rahul Verma</strong>, at{" "}
                <a href="mailto:support@aharadaedu.in">support@aharadaedu.in</a>{" "}
                or <a href="tel:+918765432109">+91 87654 32109</a>.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PlacementTeam;
