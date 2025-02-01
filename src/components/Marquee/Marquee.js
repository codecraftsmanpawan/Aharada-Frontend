import React from "react";
import { useNavigate } from "react-router-dom";
import "./Marquee.css";

const Marquee = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/apply-now");
  };

  const handleCallClick = () => {
    window.location.href = "tel:7303381360";
  };

  const textLeft = "🎓 Admission Open for 2025 | 🚀 Apply Now |";
  const textRight = "📞 Connect Us: +917303381360 🎉";

  return (
    <div className="marquee-container">
      <div className="marquee">
        <span className="marquee-text">
          <span className="clickable" onClick={handleApplyClick}>
            {textLeft}
          </span>{" "}
          <span className="clickable" onClick={handleCallClick}>
            {textRight}
          </span>
        </span>
        <span className="marquee-text">
          <span className="clickable" onClick={handleApplyClick}>
            {textLeft}
          </span>{" "}
          <span className="clickable" onClick={handleCallClick}>
            {textRight}
          </span>
        </span>
        <span className="marquee-text">
          <span className="clickable" onClick={handleApplyClick}>
            {textLeft}
          </span>{" "}
          <span className="clickable" onClick={handleCallClick}>
            {textRight}
          </span>
        </span>
        <span className="marquee-text">
          <span className="clickable" onClick={handleApplyClick}>
            {textLeft}
          </span>{" "}
          <span className="clickable" onClick={handleCallClick}>
            {textRight}
          </span>
        </span>
        <span className="marquee-text">
          <span className="clickable" onClick={handleApplyClick}>
            {textLeft}
          </span>{" "}
          <span className="clickable" onClick={handleCallClick}>
            {textRight}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Marquee;
