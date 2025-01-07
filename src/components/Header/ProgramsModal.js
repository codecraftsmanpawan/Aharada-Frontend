import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import axios from "axios";
import "./ProgramsModal.css";
import config from "../../config";
Modal.setAppElement("#root");

const ProgramsModal = ({ isOpen, closeModal }) => {
  const [activeUniversityId, setActiveUniversityId] = useState(null);
  const [universities, setUniversities] = useState([]);

  // Fetch universities and programs data from API
  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await axios.get(
          `${config.apiBaseUrl}/api/universities/with-programs`
        ); // Replace with your API URL
        setUniversities(response.data.data);
      } catch (error) {
        console.error("Error fetching universities:", error);
      }
    };

    fetchUniversities();
  }, []);

  // Handle university click to toggle the programs list
  const togglePrograms = (universityId) => {
    setActiveUniversityId(
      activeUniversityId === universityId ? null : universityId
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Programs"
      className="programs-modal"
      overlayClassName="programs-modal-overlay"
      shouldCloseOnOverlayClick={true}
    >
      <button
        className="modal-close-button"
        onClick={closeModal}
        aria-label="Close Modal"
      >
        &times;
      </button>
      <div className="modal-content-container">
        {/* Left side - Image */}
        <div className="modal-left">
          <img
            src="https://img.freepik.com/free-psd/school-admission-post-design-template_505751-3442.jpg?t=st=1735728055~exp=1735731655~hmac=bf24672cc74175d9210c6922486f80869b265639be303639679e811361e9028f&w=740"
            alt="Program Image"
            className="modal-image"
          />
        </div>

        {/* Right side - University & Program List */}
        <div className="modal-right">
          <h4>Programs</h4>
          {universities.map((university) => (
            <div key={university.id} className="program-section">
              <div className="header-programs-modal">
                <h2
                  onClick={() => togglePrograms(university.id)}
                  style={{ cursor: "pointer" }}
                >
                  {university.name}
                  {/* Icon for toggling */}
                  {activeUniversityId === university.id ? (
                    <FaChevronUp
                      className="toggle-icon"
                      style={{ marginLeft: "5px" }}
                    />
                  ) : (
                    <FaChevronDown
                      className="toggle-icon"
                      style={{ marginLeft: "5px" }}
                    />
                  )}
                </h2>
              </div>

              {/* Show programs list if the university is active */}
              <div
                className={`courses-list-container ${
                  activeUniversityId === university.id ? "show" : ""
                }`}
              >
                {activeUniversityId === university.id && (
                  <ul>
                    {university.programs.length > 0 ? (
                      university.programs.map((program) => (
                        <li key={program.id}>
                          <a href="#">
                            {program.shortname} - {program.name}
                          </a>
                        </li>
                      ))
                    ) : (
                      <li>No programs available</li>
                    )}
                  </ul>
                )}
              </div>
            </div>
          ))}

          {/* Apply Now Button at the Bottom */}
          <div className="apply-now-container">
            <button className="apply-now-button">Apply Now</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProgramsModal;
