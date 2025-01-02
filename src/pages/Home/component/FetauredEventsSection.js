import React from "react";

function FetauredEventsSection() {
  return (
    <section className="space">
      <div className="container z-index-common animate-fade-in">
        <div className="title-area text-center">
          <span className="sub-title animate-bounce">
            <i className="fal fa-book me-2" />
            Fetaured Events
          </span>
          <h2 className="sec-title">
            Upcoming <span className="text-theme fw-light">Events</span>
          </h2>
        </div>
        <div className="row">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              className="col-xl-6 animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
              key={index}
            >
              <div className="event-card2">
                <div className="event-card2_img">
                  <img
                    src={`assets/img/update1/event/event_1_${index + 1}.jpg`}
                    alt="event"
                  />
                </div>
                <div className="event-card2_content">
                  <div className="event-meta">
                    <p>
                      <i className="fal fa-location-dot" />
                      Location {index + 1}
                    </p>
                    <p>
                      <i className="fal fa-clock" />
                      08:00 am - 10:00 am
                    </p>
                  </div>
                  <h3 className="event-card2_title">
                    <a href="event-details.html">Event Title {index + 1}</a>
                  </h3>
                  <div className="event-card2_bottom">
                    <a href="event-details.html" className="th-btn">
                      View Event
                    </a>
                    <div className="event-author">
                      <div className="avater">
                        <img
                          src="assets/img/update1/event/avater.jpg"
                          alt="avater"
                        />
                      </div>
                      <span className="author-name">Vicky Kumar Singh</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-20 mt-xl-5">
          <a href="event.html" className="th-btn animate-pulse">
            View All Events
            <i className="fas fa-arrow-right ms-2" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default FetauredEventsSection;
