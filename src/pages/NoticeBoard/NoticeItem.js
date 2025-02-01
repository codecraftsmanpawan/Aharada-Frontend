// src/components/NoticeItem.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import "./NoticeBoard.css";
import { encodeId } from "../../utils/encodeDecode";

const NoticeItem = ({ notice }) => {
  const navigate = useNavigate();

  const BASE_URL = "https://backend.aharadaedu.in";
  const formattedDate = new Date(notice.date).toLocaleDateString();
  const fileUrl = `${BASE_URL}${notice.content}`;

  const handleTitleClick = () => {
    const encodedId = encodeId(notice._id); // Encode the ID
    navigate(`/notice/${encodedId}`); // Navigate using the encoded ID
  };

  return (
    <div className="notice-card mb-4">
      <div className="card-body">
        <h5
          className="card-title clickable-title"
          onClick={handleTitleClick}
          style={{ cursor: "pointer" }}
        >
          {notice.title}
        </h5>
        <h6 className="card-subtitle mb-2">{formattedDate}</h6>
        <p className="card-text">{notice.description}</p>
        <a href={fileUrl} download className="btn btn-download-notice">
          Download Notice <i className="fas fa-download ms-2"></i>
        </a>
      </div>
    </div>
  );
};

export default NoticeItem;
