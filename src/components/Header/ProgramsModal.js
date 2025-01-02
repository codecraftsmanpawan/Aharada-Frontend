import React, { useState } from "react";
import Modal from "react-modal";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./ProgramsModal.css";

Modal.setAppElement("#root");

const ProgramsModal = ({ isOpen, closeModal }) => {
  const [activeProgramId, setActiveProgramId] = useState(null);
  const programs = [
    {
      id: 1,
      name: "School of Management",
      courses: ["MBA", "BBA"],
    },
    {
      id: 2,
      name: "School of Technology",
      courses: ["M.Tech", "B.Tech"],
    },
    {
      id: 3,
      name: "School of Science",
      courses: ["BSC"],
    },
    {
      id: 4,
      name: "School of Arts",
      courses: ["Arts"],
    },
  ];

  // Handle the program click
  const toggleCourses = (programId) => {
    setActiveProgramId(activeProgramId === programId ? null : programId);
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

        {/* Right side - Program List */}
        <div className="modal-right">
          <h4>Programs</h4>
          {programs.map((program) => (
            <div key={program.id} className="program-section">
              <div className="header-programs-modal">
                <h2
                  onClick={() => toggleCourses(program.id)}
                  style={{ cursor: "pointer" }}
                >
                  {program.name}
                  {/* Icon for toggling */}
                  {activeProgramId === program.id ? (
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

              {/* Show courses list if the program is active with animation */}
              <div
                className={`courses-list-container ${
                  activeProgramId === program.id ? "show" : ""
                }`}
              >
                {activeProgramId === program.id && (
                  <ul>
                    {program.courses.map((course, index) => (
                      <li key={index}>
                        <a href="#">{course}</a>
                      </li>
                    ))}
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
