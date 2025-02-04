import React, { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Link } from "react-router-dom";
import Head from "../../components/Head/Head";
import config from "../../config";

const GuestLectureList = () => {
  const [guestLecturers, setGuestLecturers] = useState([]);

  useEffect(() => {
    document.title = "Guest Lecturers - Aharada Education";

    const fetchGuestLecturers = async () => {
      try {
        const response = await axios.get(
          `https://backend.aharadaedu.in/api/guest-lecturers/guest-lecturers-or-both`
        );
        setGuestLecturers(response.data);
      } catch (error) {
        console.error("Error fetching guest lecturer data:", error);
      }
    };

    fetchGuestLecturers();
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
                {/* Iterate through the fetched guest lecturer data */}
                {guestLecturers.length > 0 ? (
                  guestLecturers.map((lecturer, index) => (
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
                                lecturer.photo
                                  ? `${config.apiBaseUrl}${lecturer.photo}`
                                  : "/path/to/placeholder-image.jpg" // Fallback image
                              }
                              alt="Guest Lecturer"
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
                                href={lecturer.linkedInProfile || "#"}
                              >
                                <i className="fab fa-linkedin-in" />
                              </a>
                              <a href={`mailto:${lecturer.emailAddress}`}>
                                <i className="fas fa-envelope" />
                              </a>
                            </div>
                          </div>
                          <div className="team-content">
                            <h3 className="team-title">
                              <Link
                                to={`/guestLecturerDetails/${encodeURIComponent(
                                  lecturer._id.toString()
                                )}`}
                              >
                                {lecturer.fullName}
                              </Link>
                            </h3>
                            <span className="team-desig">
                              {lecturer.designation}
                            </span>
                          </div>
                          <div className="team-info">
                            <span>
                              <i className="fal fa-file-check" />
                              {lecturer.yearsOfExperience} years Experience
                            </span>
                          </div>
                          <div className="team-info">
                            <span>
                              <i className="fa-light fa-chalkboard-teacher" />
                              {lecturer.workshopsConducted.length
                                ? lecturer.workshopsConducted.length
                                : "No workshops"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>No guest lecturers available.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GuestLectureList;
