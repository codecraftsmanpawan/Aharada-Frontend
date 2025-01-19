import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Head from "../../components/Head/Head";
import "./eventdescription.css";

import DOMPurify from "dompurify";
function EventDetails() {
  const { title } = useParams(); // Access the event title from the URL params
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track any errors

  useEffect(() => {
    // Fetch event details from the API using the event title (in the URL)
    axios
      .get(`https://backend.aharadaedu.in/api/events/${title}`)
      .then((response) => {
        setEvent(response.data.event); // Set event data in state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching event details:", error);
        setError("Failed to load event details."); // Handle error
        setLoading(false); // Stop loading in case of error
      });
  }, [title]);

  if (loading) {
    return <div>Loading event details...</div>; // Show loading indicator
  }

  if (error) {
    return <div>{error}</div>; // Show error message if there's an issue
  }

  if (!event) {
    return <div>Event not found!</div>; // If event data is not available
  }

  // Format the event date and time for the calendar link
  const eventDate = new Date(event.date);
  const formattedDate = `${eventDate.getFullYear()}-${(eventDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${eventDate.getDate().toString().padStart(2, "0")}T${
    event.time
  }`;

  const calendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    event.title
  )}&dates=${formattedDate}%2F${formattedDate}&details=${encodeURIComponent(
    event.description
  )}&location=${encodeURIComponent(event.location)}`;

  return (
    <>
      <Head />
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
        <div className="container text-center">
          <div className="title-area text-center mb-40">
            <h2 className="sec-title text-white">{title}</h2>
          </div>
        </div>
      </section>

      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-lg-8">
              <div className="event-details-wrap">
                <div className="event-img">
                  <img
                    src={`https://backend.aharadaedu.in${event.image}`}
                    alt={event.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h3 className="h3 mt-n2">{event.title}</h3>
                <p
                  className="mb-30"
                  dangerouslySetInnerHTML={{ __html: event.description }}
                />

                <div className="checklist">
                  <ul>
                    {event.learningOutcomes?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4">
              <aside className="sidebar-area">
                <div className="widget widget_info">
                  <a href={calendarLink} className="th-btn">
                    Add To Calendar
                  </a>

                  <h3 className="widget_title">Event Information</h3>
                  <div className="info-list">
                    <ul>
                      <li>
                        <i className="fa-light fa-calendar-days" />{" "}
                        <strong>Date: </strong>
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </li>
                      <li>
                        <i className="fa-light fa-clock" />{" "}
                        <strong>Time: </strong>
                        <span>{event.time}</span>
                      </li>
                      <li>
                        <i className="fa-light fa-location-dot" />{" "}
                        <strong>Venue: </strong>
                        <span>{event.location}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EventDetails;
