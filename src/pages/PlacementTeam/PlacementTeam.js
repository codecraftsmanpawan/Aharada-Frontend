import React, { useEffect } from "react";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

import "./PlacementTeam.css";

function PlacementTeam() {
  useEffect(() => {
    document.title = "Placement Team - Aharada Education";
  }, []);

  const teamMembers = [
    {
      name: "Jennifer Tilly",
      role: "Placement Officer",
      imgSrc:
        "https://i.postimg.cc/zG5c7T02/168-1685371-corporate-headshot-pic-png-transparent-png.png",
    },
    {
      name: "John Doe",
      role: "Coordinator",
      imgSrc:
        "http://gocheckers.com/images/roster/josh_wesley_headshot_1718.png",
    },
    {
      name: "Sara Khan",
      role: "UI Designer",
      imgSrc:
        "https://i.postimg.cc/50n49xjb/888-8883444-headshot-no-background-scarf.png",
    },
  ];

  return (
    <div className="placement-team">
      <main>
        <Breadcrumbs />
        {/* <section className="team-section py-5">
          <div className="container">
            <div className="row">
              {teamMembers.map((member, index) => (
                <div key={index} className="col-md-6 mb-4">
                  <div className="card shadow-sm">
                    <img
                      src={member.imgSrc}
                      className="card-img-top"
                      alt={`${member.name} - ${member.role}`}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{member.name}</h5>
                      <p className="card-text">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
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
                    <img
                      src="assets/img/update1/team/team_2_1.jpg"
                      alt="Team"
                    />
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
                    <span className="team-desig">BBA - 3nd Year</span>
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
                    <img
                      src="assets/img/update1/team/team_2_2.jpg"
                      alt="Team"
                    />
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
                    <span className="team-desig">BBA - 2nd Year</span>
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
                    <img
                      src="assets/img/update1/team/team_2_3.jpg"
                      alt="Team"
                    />
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
                    <span className="team-desig">BBA - 2nd Year</span>
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
                    <img
                      src="assets/img/update1/team/team_2_4.jpg"
                      alt="Team"
                    />
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

                    <span className="team-desig">BBA - 2nd Year</span>
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

        <section className="instructions-section py-5 bg-light">
          <div className="container">
            <h2 className="mb-4">
              How to Connect with the Placement Department
            </h2>
            <p>
              If you're looking to enhance your career prospects and connect
              with top employers, our Placement Department is here to assist
              you. Follow the steps below to get started:
            </p>
            <ol>
              <li>
                <strong>Contact the Placement Officer:</strong> Reach out to our
                Placement Officer, Jennifer Tilly, via email at{" "}
                <a href="mailto:jennifer.tilly@aharadaedu.com">
                  jennifer.tilly@aharadaedu.com
                </a>{" "}
                or call at <a href="tel:+1234567890">+1 (234) 567-890</a>.
              </li>
              <li>
                <strong>Attend Placement Workshops:</strong> Participate in our
                scheduled workshops and seminars to prepare for interviews and
                resume building.
              </li>
              <li>
                <strong>Submit Your Application:</strong> Fill out the placement
                application form available on our{" "}
                <a href="/placement-application">Placement Portal</a> and submit
                it by the deadline.
              </li>
              <li>
                <strong>Prepare for Interviews:</strong> Utilize the resources
                and mock interviews provided by the department to sharpen your
                skills.
              </li>
            </ol>

            <h2 className="mt-5 mb-4">How to Apply for Placements</h2>
            <p>
              Applying for placements is a straightforward process. Follow these
              steps to ensure your application is considered:
            </p>
            <ul>
              <li>
                <strong>Complete Your Profile:</strong> Ensure your student
                profile on the Placement Portal is up-to-date with your latest
                resume, academic records, and other relevant documents.
              </li>
              <li>
                <strong>Search for Opportunities:</strong> Browse through the
                list of available job and internship opportunities posted by our
                partner companies.
              </li>
              <li>
                <strong>Submit Applications:</strong> Apply directly through the
                Placement Portal by clicking on the desired opportunity and
                submitting your application.
              </li>
              <li>
                <strong>Track Your Applications:</strong> Monitor the status of
                your applications and receive updates on interview schedules and
                offers.
              </li>
              <li>
                <strong>Seek Assistance:</strong> If you encounter any issues or
                have questions, contact our Placement Coordinator, John Doe, at{" "}
                <a href="mailto:john.doe@aharadaedu.com">
                  john.doe@aharadaedu.com
                </a>{" "}
                or <a href="tel:+1987654321">+1 (987) 654-321</a>.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PlacementTeam;
