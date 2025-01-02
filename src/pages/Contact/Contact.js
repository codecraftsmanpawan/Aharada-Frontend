import React, { useEffect } from "react";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

function Contact() {
  useEffect(() => {
    document.title = "Contact - Aharada Education";
  }, []);
  return (
    <div>
      <main>
        <Breadcrumbs />
        <div className="space" id="contact-sec">
          <div className="container">
            <div className="map-sec">
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sthemeholy!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xl-5 mb-30 mb-xl-0">
                <div className="me-xxl-5 mt-60">
                  <div className="title-area mb-25">
                    <h2 className="border-title h3">Have Any Questions?</h2>
                  </div>
                  <p className="mt-n2 mb-25">
                    Have a inquiry or some feedback for us? Fill out the form
                    <br />
                    below to contact our team.
                  </p>
                  <div className="contact-feature">
                    <div className="contact-feature-icon">
                      <i className="fal fa-location-dot" />
                    </div>
                    <div className="media-body">
                      <p className="contact-feature_label">Our Address</p>
                      <a
                        href="https://www.google.com/maps"
                        className="contact-feature_link"
                      >
                        Mawana-Kithaur-Hapur Marg, Atrara,
                        <br />
                        Uttar Pradesh 245206
                      </a>
                    </div>
                  </div>
                  <div className="contact-feature">
                    <div className="contact-feature-icon">
                      <i className="fal fa-phone" />
                    </div>
                    <div className="media-body">
                      <p className="contact-feature_label">Phone Number</p>
                      <a
                        href="tel:+011456586986"
                        className="contact-feature_link"
                      >
                        Mobile:<span>+91-7303381359</span>
                      </a>{" "}
                      <a
                        href="tel:+011456586986"
                        className="contact-feature_link"
                      >
                        Phone: <span>+91-7303381359</span>
                      </a>
                    </div>
                  </div>
                  <div className="contact-feature">
                    <div className="contact-feature-icon">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="media-body">
                      <p className="contact-feature_label">
                        Hours of Operation
                      </p>
                      <span className="contact-feature_link">
                        Monday - Friday: 09:00 - 20:00
                      </span>{" "}
                      <span className="contact-feature_link">
                        Sunday &amp; Saturday: 10:30 - 22:00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7">
                <div
                  className="contact-form-wrap"
                  data-bg-src="assets/img/bg/contact_bg_1.png"
                >
                  <span className="sub-title">Contact With Us!</span>
                  <h2 className="border-title">Get in Touch</h2>
                  <p className="mt-n1 mb-30 sec-text">
                    Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod
                    tempor eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <form
                    action
                    method="POST"
                    className="contact-form ajax-contact"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control style-white"
                            name="name"
                            id="name"
                            placeholder="Your Name*"
                          />{" "}
                          <i className="fal fa-user" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control style-white"
                            name="email"
                            id="email"
                            placeholder="Email Address*"
                          />{" "}
                          <i className="fal fa-envelope" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <select
                            name="subject"
                            id="subject"
                            className="single-select nice-select form-select style-white"
                          >
                            <option
                              value
                              disabled="disabled"
                              selected="selected"
                              hidden
                            >
                              Select Campus*
                            </option>
                            <option value="Subharti University, Meerut">
                              Subharti University, Meerut
                            </option>
                            <option value="Sanskrit University, Mathura">
                              Sanskrit University, Mathura
                            </option>
                            <option value="SAGE University Indore">
                              SAGE University Indore
                            </option>
                            <option value="IIMT University, Meerut">
                              IIMT University, Meerut
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="tel"
                            className="form-control style-white"
                            name="number"
                            id="number"
                            placeholder="Phone Number*"
                          />{" "}
                          <i className="fal fa-phone" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            id="message"
                            cols={30}
                            rows={3}
                            className="form-control style-white"
                            placeholder="Write Your Message*"
                            defaultValue={""}
                          />{" "}
                          <i className="fal fa-pen" />
                        </div>
                      </div>
                      <div className="form-btn col-12 mt-10">
                        <button className="th-btn">
                          Send Message
                          <i className="fas fa-long-arrow-right ms-2" />
                        </button>
                      </div>
                    </div>
                    <p className="form-messages mb-0 mt-3" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
