import React from "react";
import "./NoticeBoard.css";

const NoticeItem = ({ notice, onSelect }) => {
  // Define the base URL for the notices
  const BASE_URL = "https://backend.aharadaedu.in"; // Replace this with your actual base URL
  const formattedDate = new Date(notice.date).toLocaleDateString();

  // Ensure the file URL is correctly formed by appending the base URL
  const fileUrl = `${BASE_URL}${notice.content}`;

  return (
    <div className="notice-card mb-4">
      <div className="card-body">
        <h5 className="card-title">{notice.title}</h5>
        <h6 className="card-subtitle mb-2">{formattedDate}</h6>
        <p className="card-text">{notice.description}</p>
        {/* Replaced View Details button with Download button */}
        <a
          href={fileUrl} // Now using the correct file URL with base URL prepended
          download // Triggers the download action
          className="btn btn-download-notice"
        >
          Download Notice <i className="fas fa-download ms-2"></i>
        </a>
      </div>
    </div>
  );
};

export default NoticeItem;
