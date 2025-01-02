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
    {
      id: 3,
      name: "Mike Johnson",
      videoUrl: "https://www.example.com/video3.mp4", // Replace with your video URL
      testimonial: "I use this app every day. It’s fantastic!",
    },
  ];

  return (
    <div className="video-testimonials-container">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="testimonial">
          <h3 className="name">{testimonial.name}</h3>
          <p className="testimonial-text">{testimonial.testimonial}</p>
          <ReactPlayer
            url={testimonial.videoUrl} // Video URL for each testimonial
            controls={true} // Display video controls
            width="100%" // Full width of the container
            height="300px" // You can adjust the height as needed
          />
        </div>
      ))}
    </div>
  );
};

export default VideoTestimonials;
