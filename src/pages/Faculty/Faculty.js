import React, { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Link } from "react-router-dom";
import Head from "../../components/Head/Head";
import config from "../../config";
function Faculty() {
  const [facultyData, setFacultyData] = useState([]);

  // Fetch data when the component mounts
  useEffect(() => {
    document.title = "Faculty - Aharada Education";

    const fetchFaculty = async () => {
      try {
        const response = await axios.get(
          `${config.apiBaseUrl}/api/faculty/main`
        );
        setFacultyData(response.data);
      } catch (error) {
        console.error("Error fetching faculty data:", error);
      }
    };

    fetchFaculty();
  }, []);

  return (
    <div>
      <Head />
      <Breadcrumbs />
      <main>
        <div>
          <div className="team-area overflow-hidden space">
            <div className="container">
              <div className="row align-items-center gy-4">
                {/* Iterate through the fetched faculty data */}
                {facultyData.map((faculty, index) => (
                  <div key={index} className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="team-card style3">
                      <div className="team-img-wrap">
                        <div className="team-img">
                          <img
                            src={`${config.apiBaseUrl}${faculty.imageUrl}`}
                            alt="Faculty"
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
                              href={faculty.socialLinks.linkedin}
                            >
                              <i className="fab fa-linkedin-in" />
                            </a>
                            <a href={`mailto:${faculty.socialLinks.email}`}>
                              <i className="fas fa-envelope" />
                            </a>
                          </div>
                        </div>
                        <div className="team-content">
                          <h3 className="team-title">
                            <Link
                              to={`/facultyDetails/${encodeURIComponent(
                                faculty._id.toString()
                              )}`}
                            >
                              {faculty.facultyName}
                            </Link>
                          </h3>

                          <span className="team-desig">
                            {faculty.designation}
                          </span>
                        </div>
                        <div className="team-info">
                          <span>
                            <i className="fal fa-file-check" />
                            {faculty.yearsOfExperience} years Experience
                          </span>
                        </div>
                        <div className="team-info">
                          <span>
                            <i className="fa-light fa-chalkboard-teacher" />
                            {faculty.workshopsConducted}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden position-relative space bg-smoke"
            id="team-sec"
          >
            <div
              className="shape-mockup instructor-bg-shape1 jump d-lg-block d-none"
              data-left="3%"
              data-bottom="30%"
            >
              <img src="assets/img/normal/blog-3-bg-shape.png" alt="img" />
            </div>
            <div
              className="instructor_bg_shape2 shape-mockup d-xl-block d-none"
              data-left="-15%"
              data-top="3%"
            >
              <img src="assets/img/normal/instructor_1_shape1.png" alt="img" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-6 order-xl-2">
                  <div className="become-instructor-img mb-5 mb-xl-0 ms-xl-5">
                    <img
                      src="assets/img/normal/become-instructor-thumb.png"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-xl-6 order-xl-1">
                  <div className="title-area mb-30">
                    <span className="sub-title">
                      <i className="fal fa-chalkboard-teacher me-1" />
                      College Instructor
                    </span>
                    <h2 className="sec-title">Become an College Instructor.</h2>
                  </div>
                  <div className="row gy-4">
                    <div className="col-sm-6">
                      <div className="become-instructor-wrap">
                        <i className="fa-solid fa-book-open-reader" />
                        <h4 className="box-title">
                          Design Your Course Syllabus
                        </h4>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="become-instructor-wrap">
                        <i className="fa-solid fa-chalkboard" />
                        <h4 className="box-title">
                          Prepare Classroom Materials
                        </h4>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="become-instructor-wrap">
                        <i className="fa-solid fa-users" />
                        <h4 className="box-title">Engage with Students</h4>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="become-instructor-wrap">
                        <i className="fa-solid fa-clipboard-check" />
                        <h4 className="box-title">
                          Evaluate and Grade Assignments
                        </h4>
                      </div>
                    </div>
                  </div>
                  <Link to="/joinasInstructor" className="th-btn mt-40">
                    Join as Instructor
                    <i className="fa-regular fa-arrow-right ms-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Faculty;
