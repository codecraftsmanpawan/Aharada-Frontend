// src/components/NoticeDetail.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./NoticeBoard.css";
import { decodeId } from "../../utils/encodeDecode";

const NoticeDetail = () => {
  const { id } = useParams();
  const [notice, setNotice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BASE_URL = "https://backend.aharadaedu.in";

  useEffect(() => {
    const fetchNotice = async () => {
      const decodedId = decodeId(id); // Decode the ID
      if (!decodedId) {
        setError("Invalid Notice ID.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${BASE_URL}/api/notices/${decodedId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch the notice.");
        }
        const data = await response.json();
        setNotice(data.notice);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchNotice();
  }, [id, BASE_URL]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!notice) return <div>No Notice Found.</div>;

  const formattedDate = new Date(notice.date).toLocaleDateString();
  const fileUrl = `${BASE_URL}${notice.content}`;

  return (
    <>
      <section className="space position-relative">
        <div
          className="bg-img"
          style={{
            backgroundImage: "url('../assets/img/update1/bg/bg_overlay_1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img src="../assets/img/update1/bg/bg_overlay_1.png" alt="overlay" />
        </div>
        <div className="container text-center" style={{ height: "40px" }}>
          <div className="title-area text-center">
            <span className="sub-title text-white">
              <i className="fal fa-book me-2" />
              Notice <strong>Date :</strong> {formattedDate}
            </span>
            <h2 className="sec-title text-white">{notice.title}</h2>
          </div>
        </div>
      </section>
      <div className="notice-detail-container" style={{ padding: "30px" }}>
        <p className="notice-description">{notice.description}</p>
        <a href={fileUrl} download className="btn btn-download-notice">
          Download Notice <i className="fas fa-download ms-2"></i>
        </a>
      </div>
    </>
  );
};

export default NoticeDetail;
