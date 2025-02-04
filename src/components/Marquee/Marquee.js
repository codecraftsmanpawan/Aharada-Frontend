import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios
import "./Marquee.css";

const Marquee = () => {
  const [marqueeMessages, setMarqueeMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch marquee messages from API
    axios
      .get("https://backend.aharadaedu.in/api/marquee")
      .then((response) => {
        // Store the fetched data in state
        setMarqueeMessages(response.data);
      })
      .catch((error) => {
        // console.error(
        //   "There was an error fetching the marquee messages:",
        //   error
        // );
      });
  }, []);

  const handleApplyClick = (actionLeft) => {
    navigate(actionLeft);
  };

  const handleCallClick = (actionRight) => {
    window.location.href = actionRight;
  };

  return (
    <div className="marquee-container">
      <div className="marquee">
        {marqueeMessages.map((message) => (
          <span key={message._id} className="marquee-text">
            <span
              className="clickable"
              onClick={() => handleApplyClick(message.actionLeft)}
            >
              {message.textLeft}
            </span>{" "}
            <span
              className="clickable"
              onClick={() => handleCallClick(message.actionRight)}
            >
              {message.textRight}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
