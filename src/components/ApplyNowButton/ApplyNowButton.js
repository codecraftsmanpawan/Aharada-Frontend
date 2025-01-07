import React, { useState } from "react";
import ApplyForm from "../ApplyForm/ApplyForm";
import "./ApplyNowButton.css";

const ApplyNowButton = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible((prev) => !prev);
  };

  const closeApplyForm = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="apply-now-container">
      {/* Conditionally Render the Apply Now Button */}
      {!isFormVisible && (
        <button className="apply-now-button red" onClick={toggleFormVisibility}>
          Apply Now
        </button>
      )}

      {/* Conditionally Render the Form */}
      {isFormVisible && <ApplyForm closeApplyForm={closeApplyForm} />}
    </div>
  );
};

export default ApplyNowButton;
