// SocialIcon.jsx
import React, { useState } from "react";

const SocialIcon = ({
  href,
  iconClass,
  hoverColor,
  label,
  defaultColor = "#ffffff",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const currentColor = isHovered ? hoverColor : defaultColor;

  const iconStyle = {
    color: currentColor,
    transition: "color 0.3s ease",
    fontSize: "1rem",
  };

  return (
    <a
      href={href}
      aria-label={label}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        color: currentColor,
        transition: "color 0.3s ease",
        marginRight: "1rem",
        cursor: "pointer",
        textDecoration: "none",
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={iconClass} style={iconStyle}></i>
    </a>
  );
};

export default SocialIcon;
