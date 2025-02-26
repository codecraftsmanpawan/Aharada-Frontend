import React from "react";
import ReactPlayer from "react-player";
import "./VideoTestimonials.css"; // Custom styles for the component

const VideoTestimonials = () => {
  // Array of testimonials with video URLs
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Example video URL
    },
    {
      id: 2,
      name: "Jane Smith",
      videoUrl: "https://www.youtube.com/watch?v=V-_O7nl0Ii0", // Example video URL
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="video-testimonials-container">
      <h2 className="section-title">Student Parent Feedback</h2>
      <div className="testimonials-grid">
        {testimonials.length > 0 ? (
          testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`testimonial-card ${testimonial.name
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
            >
              <h3 className="name">{testimonial.name}</h3>
              {/* <p className="testimonial-text">{testimonial.testimonial}</p> */}
              <div className="video-container">
                <ReactPlayer
                  url={testimonial.videoUrl}
                  controls={true}
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          ))
        ) : (
          <p>No testimonials available</p>
        )}
      </div>
    </div>
  );
};

export default VideoTestimonials;
