import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import html2pdf from "html2pdf.js";
import "./GuestLecturerDetails.css";
import config from "../../config";
const GuestLecturerDetails = () => {
  const { id } = useParams(); // Extract the dynamic 'id' from URL
  const [lecturer, setLecturer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLecturer = async () => {
      try {
        const response = await axios.get(
          `${config.apiBaseUrl}/api/guest-lecturers/${id}`
        );
        setLecturer(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching lecturer:", err);
        setError("Failed to fetch Guest Lecturer details.");
        setLoading(false);
      }
    };

    fetchLecturer();
  }, [id]);

  const handleDownloadPDF = () => {
    const element = document.getElementById("guest-lecturer-details-pdf");
    const options = {
      filename: `${lecturer.fullName}_profile.pdf`,
      html2canvas: {
        scale: 4,
        useCORS: true,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
    };

    html2pdf().from(element).set(options).save();
  };

  if (loading) {
    return <div className="guest-lecturer-details-loading">Loading...</div>;
  }

  if (error) {
    return <div className="guest-lecturer-details-error-message">{error}</div>;
  }

  return (
    <div className="guest-lecturer-details-container">
      <div id="guest-lecturer-details-pdf">
        <h2 className="guest-lecturer-details-header">
          Guest Lecturer Profile
        </h2>
        <div className="guest-lecturer-details-resume-container">
          <div className="guest-lecturer-details-header-section">
            <div className="guest-lecturer-details-profile-photo">
              {lecturer && lecturer.photo ? (
                <img
                  src={`${config.apiBaseUrl}${lecturer.photo}`}
                  alt={lecturer.fullName}
                  className="guest-lecturer-details-img"
                />
              ) : (
                <div className="guest-lecturer-details-no-photo">No Photo</div>
              )}
            </div>
            <div className="guest-lecturer-details-profile-info">
              <h3 className="guest-lecturer-details-name">
                {lecturer.fullName}
              </h3>
              <p className="guest-lecturer-details-contact-info">
                <span>{lecturer.contactNumber}</span> |{" "}
                <span>{lecturer.emailAddress}</span>
              </p>
              <p className="guest-lecturer-details-location">
                {lecturer.address}
              </p>
              <p className="guest-lecturer-details-linkedin">
                <a
                  href={lecturer.linkedInProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="guest-lecturer-details-linkedin-link"
                >
                  LinkedIn Profile
                </a>
              </p>
            </div>
          </div>

          <div className="guest-lecturer-details-section">
            <h4 className="guest-lecturer-details-subheading">
              Professional Summary
            </h4>
            <p className="guest-lecturer-details-summary">
              Experienced {lecturer.designation} with{" "}
              {lecturer.yearsOfExperience} years of expertise in{" "}
              {lecturer.specializationAreas[0]?.area}. Passionate about{" "}
              {lecturer.specializationAreas[0]?.description}.
            </p>
          </div>

          <div className="guest-lecturer-details-section">
            <h4 className="guest-lecturer-details-subheading">Education</h4>
            <p className="guest-lecturer-details-education">
              <strong>{lecturer.highestQualification}</strong>,{" "}
              {lecturer.universityName} ({lecturer.yearOfGraduation})
            </p>
          </div>

          <div className="guest-lecturer-details-section">
            <h4 className="guest-lecturer-details-subheading">
              Professional Experience
            </h4>
            <p className="guest-lecturer-details-experience">
              <strong>Current Organization:</strong>{" "}
              {lecturer.currentOrganization}
            </p>
            <p className="guest-lecturer-details-experience">
              <strong>Designation:</strong> {lecturer.designation}
            </p>
            <p className="guest-lecturer-details-experience">
              <strong>Industry Exposure:</strong> {lecturer.industryExposure}
            </p>
          </div>

          <div className="guest-lecturer-details-section">
            <h4 className="guest-lecturer-details-subheading">
              Specializations & Skills
            </h4>
            <ul className="guest-lecturer-details-specializations">
              {lecturer.specializationAreas.map((area) => (
                <li
                  key={area.area}
                  className="guest-lecturer-details-specialization-item"
                >
                  {area.area} - {area.description}
                </li>
              ))}
            </ul>
            <h5 className="guest-lecturer-details-subheading">
              Subjects Taught:
            </h5>
            <ul className="guest-lecturer-details-subjects">
              {lecturer.subjectsTaught.map((subject) => (
                <li
                  key={subject.subject}
                  className="guest-lecturer-details-subject-item"
                >
                  {subject.subject} ({subject.level})
                </li>
              ))}
            </ul>
          </div>

          <div className="guest-lecturer-details-section">
            <h4 className="guest-lecturer-details-subheading">Publications</h4>
            <ul className="guest-lecturer-details-publications">
              {lecturer.publishedResearchPapers.map((paper) => (
                <li
                  key={paper.paper}
                  className="guest-lecturer-details-publication-item"
                >
                  {paper.paper} ({paper.year})
                </li>
              ))}
            </ul>
          </div>

          <div className="guest-lecturer-details-section">
            <h4 className="guest-lecturer-details-subheading">Patents</h4>
            <ul className="guest-lecturer-details-patents">
              {lecturer.patents.map((patent) => (
                <li
                  key={patent.patent}
                  className="guest-lecturer-details-patent-item"
                >
                  {patent.patent} ({patent.year})
                </li>
              ))}
            </ul>
          </div>

          <div className="guest-lecturer-details-section">
            <h4 className="guest-lecturer-details-subheading">
              Certifications
            </h4>
            <ul className="guest-lecturer-details-certifications">
              {lecturer.additionalCertifications.map((cert) => (
                <li
                  key={cert.certification}
                  className="guest-lecturer-details-certification-item"
                >
                  {cert.certification} ({cert.year})
                </li>
              ))}
            </ul>
          </div>

          <div className="guest-lecturer-details-section">
            <h4 className="guest-lecturer-details-subheading">
              Workshops Conducted
            </h4>
            <ul className="guest-lecturer-details-workshops">
              {lecturer.workshopsConducted.map((workshop) => (
                <li
                  key={workshop.workshop}
                  className="guest-lecturer-details-workshop-item"
                >
                  {workshop.workshop} ({workshop.year})
                </li>
              ))}
            </ul>
          </div>

          <div className="guest-lecturer-details-section">
            <h4 className="guest-lecturer-details-subheading">
              Travel Availability
            </h4>
            <p className="guest-lecturer-details-travel-availability">
              {lecturer.travelAvailability
                ? "Available for travel"
                : "Not Available for travel"}
            </p>
          </div>

          <Link
            to="/guestLecturer"
            className="guest-lecturer-details-back-link"
          >
            Back to Form
          </Link>
        </div>
      </div>

      <button
        onClick={handleDownloadPDF}
        className="guest-lecturer-details-pdf-download"
      >
        Download PDF
      </button>
    </div>
  );
};

export default GuestLecturerDetails;
