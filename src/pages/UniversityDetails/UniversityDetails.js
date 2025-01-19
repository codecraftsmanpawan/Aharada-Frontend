import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./UniversityDetails.css";
import Head from "../../components/Head/Head";

const UniversityDetails = () => {
  const { name } = useParams(); // Get the university name from the URL parameter
  const [university, setUniversity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace hyphens with spaces to match the API format
    const formattedName = name.replace(/-/g, " ");

    axios
      .get(
        `https://backend.aharadaedu.in/api/universitiesDetails/${formattedName}`
      )
      .then((response) => {
        setUniversity(response.data.university);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, [name]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!university || Object.keys(university).length === 0) {
    return <div className="no-details">No details available</div>;
  }

  // Ensure courses is an array and has content before calling join
  const courses = Array.isArray(university.coursesOffered)
    ? university.coursesOffered.join(", ")
    : "No courses available";

  return (
    <>
      <Head />
      <div className="university-details">
        <div className="university-image">
          <img
            src={`https://backend.aharadaedu.in${university.image}`}
            alt={university.name}
          />
        </div>
        <h1 className="university-name">{university.name}</h1>
        <div className="university-info">
          <div className="university-description">
            <p>
              <strong>Location:</strong> {university.location}
            </p>

            <div
              className="university-description-text"
              dangerouslySetInnerHTML={{
                __html: university.description,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UniversityDetails;
