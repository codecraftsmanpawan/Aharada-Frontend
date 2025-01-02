// src/components/NoticeItem.jsx

import React from "react";
import "./NoticeBoard.css";
const NoticeItem = ({ notice, onSelect }) => {
  const formattedDate = new Date(notice.date).toLocaleDateString();

  return (
    <div className="notice-card mb-4">
      <div className="card-body">
        <h5 className="card-title">{notice.title}</h5>
        <h6 className="card-subtitle mb-2">{formattedDate}</h6>
        <p className="card-text">{notice.description}</p>
        <button
          className="btn btn-view-details"
          onClick={() => onSelect(notice)}
        >
          View Details <i className="fas fa-eye ms-2"></i>
        </button>
      </div>
    </div>
  );
};

export default NoticeItem;
