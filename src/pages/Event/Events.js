import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Head from "../../components/Head/Head";

function Event() {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(8);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Event - Aharada Education";

    // Fetch events data from the API
    axios
      .get("https://backend.aharadaedu.in/api/events")
      .then((response) => {
        // Get the fetched events
        const fetchedEvents = response.data.events;

        // Sort events by date in descending order
        const sortedEvents = fetchedEvents.sort((a, b) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();

          // Compare the events by their date
          return dateB - dateA;
        });

        // Set the sorted events to state
        setEvents(sortedEvents);
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

  // Get the index of the first and last event on the current page
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;

  // Get the events for the current page
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle previous page
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  // Handle next page
  const nextPage = () =>
    setCurrentPage((prev) =>
      Math.min(prev + 1, Math.ceil(events.length / eventsPerPage))
    );

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

            {/* Map through the events for the current page */}
            {currentEvents.map((event) => (
              <div className="event-grid" key={event.title}>
                <div
                  className="event-img"
                  style={{
                    width: "650px",
                    height: "250px",
                  }}
                >
                  <img
                    src={`https://backend.aharadaedu.in${event.image}`}
                    alt={event.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
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

            {/* Pagination controls */}
            <div
              className="pagination-controls"
              style={{ textAlign: "center", marginTop: "100px" }}
            >
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="th-btn style1 cursor-pointer"
              >
                Previous Page
              </button>
              <span
                style={{
                  fontSize: "16px",
                  margin: "0 30px",
                  fontWeight: "bold",
                }}
              >
                Page {currentPage} of {Math.ceil(events.length / eventsPerPage)}
              </span>
              <button
                className="th-btn style1 cursor-pointer"
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(events.length / eventsPerPage)
                }
              >
                Next Page
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Event;
