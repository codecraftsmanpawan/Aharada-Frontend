import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import axios from "axios";
import "./Feedback.css";
import config from "../../../config";
const VideoTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch testimonials from the API
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          `${config.apiBaseUrl}/api/videofeedbacks`
        );
        setTestimonials(response.data);
      } catch (error) {
        // console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  // Slider settings
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: testimonials.length < 3 ? testimonials.length : 3,
    slidesToScroll: 1,
    nextArrow: <div className="slick-arrow slick-next" />,
    prevArrow: <div className="slick-arrow slick-prev" />,
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

  return (
    <div className="video-testimonials-container">
      {testimonials.length > 0 && (
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
                    height="250px" // Fixed height for videos
                  />
                </div>
              </div>
            ))}
          </Slider>
        </>
      )}
    </div>
  );
};

export default VideoTestimonials;
