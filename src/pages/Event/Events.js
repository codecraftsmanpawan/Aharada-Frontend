import React, { useEffect } from "react";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

function Event() {
  useEffect(() => {
    document.title = "Event - Aharada Education";
  }, []);
  return (
    <div>
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
              {/* <span className="sub-title">
                <i className="fal fa-book me-2" /> Fetaured Events
              </span> */}
              <h2 className="sec-title">2025 Events</h2>
            </div>
            <div className="event-grid">
              <div className="event-img">
                <img src="assets/img/event/event_img-2-1.png" alt="course" />
              </div>
              <div className="event-content">
                <div
                  className="event-bg-shape"
                  data-mask-src="assets/img/event/event_shape2.png"
                />
                <div className="media-left">
                  <h3 className="event-title">
                    <a href="event-details.html">
                      What Soul Can Tech Us About Web Design
                    </a>
                  </h3>
                  <div className="event-meta">
                    <p>
                      <i className="fal fa-calendar" />
                      19th Jun, 2023
                    </p>
                    <p>
                      <i className="far fa-clock" />8 am - 10 am
                    </p>
                    <p>
                      <i className="far fa-location-dot" />
                      259 Hilton, NewYork,
                    </p>
                  </div>
                </div>
                <div className="media-body">
                  <a className="th-btn" href="event-details.html">
                    VIEW EVENTS <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="event-grid">
              <div className="event-img">
                <img src="assets/img/event/event_img-2-2.png" alt="course" />
              </div>
              <div className="event-content">
                <div
                  className="event-bg-shape"
                  data-mask-src="assets/img/event/event_shape2.png"
                />
                <div className="media-left">
                  <h3 className="event-title">
                    <a href="event-details.html">
                      Embrace the world of online education
                    </a>
                  </h3>
                  <div className="event-meta">
                    <p>
                      <i className="fal fa-calendar" />
                      20th Jun, 2023
                    </p>
                    <p>
                      <i className="far fa-clock" />
                      10 am - 11 am
                    </p>
                    <p>
                      <i className="far fa-location-dot" />
                      Hilton Street, NewYork,
                    </p>
                  </div>
                </div>
                <div className="media-body">
                  <a className="th-btn" href="event-details.html">
                    VIEW EVENTS <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="event-grid">
              <div className="event-img">
                <img src="assets/img/event/event_img-2-3.png" alt="course" />
              </div>
              <div className="event-content">
                <div
                  className="event-bg-shape"
                  data-mask-src="assets/img/event/event_shape2.png"
                />
                <div className="media-left">
                  <h3 className="event-title">
                    <a href="event-details.html">
                      Gain insights into how parents can support
                    </a>
                  </h3>
                  <div className="event-meta">
                    <p>
                      <i className="fal fa-calendar" />
                      22th Jul, 2023
                    </p>
                    <p>
                      <i className="far fa-clock" />
                      11 am - 12 pm
                    </p>
                    <p>
                      <i className="far fa-location-dot" />
                      259 Hilton, NewYork,
                    </p>
                  </div>
                </div>
                <div className="media-body">
                  <a className="th-btn" href="event-details.html">
                    VIEW EVENTS <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Event;
