import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BirthdayCard.css";

const BirthdayCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [birthdayWishes, setBirthdayWishes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Base URL for profile image
  const baseUrl = "https://backend.aharadaedu.in";
  // Fetch birthday wishes from the API
  useEffect(() => {
    const fetchBirthdayWishes = async () => {
      try {
        const response = await axios.get(
          "https://backend.aharadaedu.in/api/birthday-wishes"
        );
        setBirthdayWishes(response.data.birthdayWishes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching birthday wishes:", error);
        setLoading(false); // Stop loading on error
      }
    };

    fetchBirthdayWishes();
  }, []);

  return (
    <>
      <div
        style={{
          background: "linear-gradient(to bottom, #fdfbf9, #f4ebdd)",
          paddingTop: "80px",
          marginTop: "-50px",
        }}
      >
        <div className="title-area mb-30" style={{ textAlign: "center" }}>
          <span className="sub-title">
            <i className="fal fa-gift me-2" /> Happy Birthday!
          </span>
          <h2 className="sec-title">
            Wishing you a day full of joy and blessings!
          </h2>
        </div>

        <div className="birthdaycard-container">
          {loading ? (
            <p>Loading...</p>
          ) : birthdayWishes.length > 0 ? (
            birthdayWishes.map((birthdayWish) => (
              <div
                key={birthdayWish._id}
                className={`birthdaycard-card ${
                  isHovered ? "birthdaycard-hovered" : ""
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="birthdaycard-card-inner">
                  <div className="birthdaycard-card-front">
                    {/* This is always visible and shows the default image */}
                    <div className="birthdaycard-imgset">
                      <img
                        src="https://1.bp.blogspot.com/-Mgj9-rbs65E/XfMoPSD5gtI/AAAAAAAAURk/NBokE2gSS2cTSJ2em5lZ5hJDuTtRN7UVwCLcBGAsYHQ/s1600/2713997.png"
                        alt="Birthday"
                        className="birthdaycard-card-image"
                      />
                    </div>
                  </div>
                  <div className="birthdaycard-card-back">
                    <div className="birthdaycard-text-container">
                      <img
                        src={baseUrl + birthdayWish.profileImage}
                        alt={`${birthdayWish.username}'s profile`}
                        className="profile-image"
                      />
                      <p className="birthdaycard-head">
                        Happy Birthday, {birthdayWish.username}!
                      </p>
                      <p>{birthdayWish.message}</p>
                      <p>Wishing you a great year ahead! 🎉</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No birthday wishes available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default BirthdayCard;
