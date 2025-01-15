import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdmissionCard.css";

const AdmissionCard = () => {
  const [showCard, setShowCard] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setShowCard(false);
  };

  const handleVideoClick = () => {
    navigate("/apply-now");
    handleClose();
  };

  return (
    <div className={`admission-overlay ${showCard ? "show" : ""}`}>
      <div className={`admission-open-card ${showCard ? "show" : ""}`}>
        <button className="admission-open-card-close" onClick={handleClose}>
          &times; {/* Close icon */}
        </button>

        {/* Video section */}
        <div className="admission-video-container">
          <video
            className="admission-video"
            autoPlay
            loop
            muted
            playsInline
            onClick={handleVideoClick}
          >
            <source src="assets/add.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default AdmissionCard;
