import React from "react";
import ReactPlayer from "react-player";
import "./VideoTestimonials.css"; // Custom styles for the component

const VideoTestimonials = () => {
  // Array of testimonials with video URLs
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      videoUrl: "https://www.example.com/video1.mp4", // Replace with your video URL
      testimonial: "This app has changed my life! I highly recommend it.",
    },
    {
      id: 2,
      name: "Jane Smith",
      videoUrl: "https://www.example.com/video2.mp4", // Replace with your video URL
      testimonial: "The experience is seamless and the service is excellent.",
    },
  ];

  return (
    <div className="video-testimonials-container">
      <h2 className="section-title">Student Parent Feedback</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`testimonial-card ${testimonial.name
              .replace(/\s+/g, "-")
              .toLowerCase()}`}
          >
            <h3 className="name">{testimonial.name}</h3>
            <p className="testimonial-text">{testimonial.testimonial}</p>
            <div className="video-container">
              <ReactPlayer
                url={testimonial.videoUrl}
                controls={true}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoTestimonials;
