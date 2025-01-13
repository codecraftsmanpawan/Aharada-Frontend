import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Head from "../../components/Head/Head";

function Event() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    document.title = "Event - Aharada Education";

    // Fetch events data from the API
    axios
      .get("https://backend.aharadaedu.in/api/events")
      .then((response) => {
        // Set the events data to state
        setEvents(response.data.events);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  const handleEventClick = (title) => {
    navigate(`/event-details/${title}`);
  };

  const handleViewEventClick = (title) => {
    navigate(`/event-details/${title}`);
  };

  return (
    <div>
      <Head />
      <main>
        <Breadcrumbs />
        <section
          className="space"
          data-bg-src="assets/img/bg/event-bg_2.png"
          style={{
            background: "linear-gradient(to bottom, #fdfbf9, #f4ebdd)",
          }}
        >
          <div
            className="shape-mockup event-shape1 jump"
            data-top="3%"
            data-left="-3%"
          >
            <img src="assets/img/team/team-shape_1_1.png" alt="img" />
          </div>
          <div className="container">
            <div className="title-area text-left">
              <span className="sub-title">
                <i className="fal fa-book me-2" /> Featured Events
              </span>
              <h2 className="sec-title">2025 Events</h2>
            </div>

            {/* Map through the fetched events */}
            {events.map((event) => (
              <div className="event-grid" key={event.title}>
                <div
                  className="event-img"
                  style={{
                    width: "500px",
                    height: "250px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={`https://backend.aharadaedu.in${event.image}`}
                    alt={event.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="event-content">
                  <div
                    className="event-bg-shape"
                    data-mask-src="assets/img/event/event_shape2.png"
                  />
                  <div className="media-left">
                    <h3
                      className="event-title"
                      onClick={() => handleEventClick(event.title)}
                    >
                      {event.title}
                    </h3>
                    <div className="event-meta">
                      <p>
                        <i className="fal fa-calendar" />
                        {new Date(event.date).toLocaleDateString()}
                      </p>
                      <p>
                        <i className="far fa-clock" />
                        {event.time}
                      </p>
                      <p>
                        <i className="far fa-location-dot" />
                        {event.location}
                      </p>
                    </div>
                  </div>
                  <div className="media-body">
                    <a
                      style={{ cursor: "pointer" }}
                      className="th-btn"
                      onClick={() => handleViewEventClick(event.title)}
                    >
                      VIEW EVENT <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Event;
