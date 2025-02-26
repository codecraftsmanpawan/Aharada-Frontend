import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import axios from "axios";
import "./Feedback.css";
import config from "../../../config";

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div className="slick-arrow slick-next" onClick={onClick}>
    <i className="fa-solid fa-chevron-right"></i>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="slick-arrow slick-prev" onClick={onClick}>
    <i className="fa-solid fa-chevron-left"></i>
  </div>
);

const VideoTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          `${config.apiBaseUrl}/api/videofeedbacks`
        );
        setTestimonials(response.data);
      } catch (error) {
        setError("Error fetching testimonials. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin === "https://www.youtube.com") {
        requestIdleCallback(() => {
          // Optimize processing of messages
          console.log("Received message:", event.data);
        });
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: testimonials.length < 3 ? testimonials.length : 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: testimonials.length < 2 ? testimonials.length : 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Adding passive event listener for scroll
  useEffect(() => {
    const handleTouchStart = (e) => {
      console.log("Touch started");
    };

    document.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  return (
    <div className="video-testimonials-container">
      {loading ? (
        <p>Loading testimonials...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : testimonials.length > 0 ? (
        <>
          <h2 className="section-title">Student Parent Feedback</h2>
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial._id}
                className={`testimonial-card ${testimonial.name
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
              >
                <h3 className="name">{testimonial.name}</h3>
                <div className="video-container">
                  <ReactPlayer
                    url={testimonial.videoUrl}
                    controls={true}
                    width="100%"
                    height="250px"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </>
      ) : (
        <p>No testimonials available.</p>
      )}
    </div>
  );
};

export default VideoTestimonials;
