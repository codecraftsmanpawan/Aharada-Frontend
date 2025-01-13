import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Head from "../../components/Head/Head";
import "./eventdescription.css";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

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

  return (
    <>
      <Head />
      <Breadcrumbs />
      <div
        className="event-details-container"
        style={{
          background: "linear-gradient(to bottom, #fdfbf9, #f4ebdd)",
        }}
      >
        <h1>{event.title}</h1>
        <p>
          <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
        </p>
        <p>
          <strong>Time:</strong> {event.time}
        </p>
        <p>
          <strong>Location:</strong> {event.location}
        </p>
        <div className="event-description">
          <h3>Description:</h3>
          <div dangerouslySetInnerHTML={{ __html: event.description }} />
        </div>
        <div className="event-image">
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
      </div>
    </>
  );
}

export default EventDetails;
