import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Import useParams
import Head from "../../components/Head/Head";
import config from "../../config";
function FacultyDetails() {
  const { facultyId } = useParams(); // Get the faculty ID from the URL parameter
  const [facultyData, setFacultyData] = useState(null); // State to store faculty data

  useEffect(() => {
    document.title = "Faculty Details - Aharada Education";

    // Fetch faculty details based on the ID from the URL
    const fetchFacultyDetails = async () => {
      try {
        const response = await axios.get(
          `${config.apiBaseUrl}/api/faculty/${facultyId}`
        );
        setFacultyData(response.data);
      } catch (error) {
        console.error("Error fetching faculty details:", error);
      }
    };

    if (facultyId) {
      fetchFacultyDetails();
    }
  }, [facultyId]); // Add `id` to the dependency array to refetch if the ID changes

  // Display loading message or error if data is not loaded
  if (!facultyData) return <p>Loading faculty details...</p>;

  return (
    <div>
      <Head />
      <main>
        <section className="space">
          <div className="container">
            <div className="team-details-about-info">
              <div className="row gx-40">
                <div className="col-lg-4 position-relative">
                  <div className="team-details-thumb">
                    <img
                      src={`${config.apiBaseUrl}${facultyData.imageUrl}`}
                      alt="team image"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-box">
                    <div className="about-info">
                      <h2 className="title">{facultyData.facultyName}</h2>
                      <p className="desig">{facultyData.designation}</p>
                    </div>
                    <div className="th-social style2">
                      <a
                        target="_blank"
                        href={facultyData.socialLinks.linkedin}
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a
                        href={`mailto:${facultyData.socialLinks.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-envelope" />
                      </a>
                    </div>
                  </div>
                  <p>{facultyData.aboutResearchInterests}</p>

                  <div className="about-contact-wrap">
                    <div className="about-contact">
                      <div className="about-contact-icon">
                        <i className="fas fa-envelope" />
                      </div>
                      <div className="about-contact-details">
                        <span className="about-contact-subtitle">
                          Mail Any Time:
                        </span>
                        <h6 className="about-contact-title">
                          {facultyData.email}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="row">
                <div className="col-lg-8">
                  <h3 className="title h4 fw-semibold mt-n1">
                    Education Qualification
                  </h3>
                  <p>{facultyData.aboutResearchInterests}</p>

                  <h3 className="title h4 fw-semibold mt-n1">Courses Taught</h3>
                  <ul>
                    {facultyData.coursesTaught.map((course) => (
                      <li key={course._id}>
                        {course.courseName} ({course.semester} {course.year})
                      </li>
                    ))}
                  </ul>

                  <h3 className="title h4 fw-semibold mt-n1">Publications</h3>
                  <ul>
                    {facultyData.publications.map((pub) => (
                      <li key={pub._id}>
                        <a href={pub.link || "#"}>{pub.title}</a> ({pub.journal}
                        , {pub.year})
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default FacultyDetails;
