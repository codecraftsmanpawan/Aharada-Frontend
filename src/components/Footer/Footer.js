import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer
        className="footer-wrapper footer-layout1"
        data-bg-src="../assets/img/bg/footer-bg.png"
      >
        <div className="footer-top">
          <div className="container">
            <div className="footer-contact-wrap">
              <div className="footer-contact">
                <div className="footer-contact_icon icon-btn">
                  <i className="fal fa-phone" />
                </div>
                <div className="media-body">
                  <p className="footer-contact_text">Call us any time:</p>
                  <a href="tel%2b11234567890" className="footer-contact_link">
                    +91-7303381359
                  </a>
                </div>
              </div>
              <div className="divider" />
              <div className="footer-contact">
                <div className="footer-contact_icon icon-btn">
                  <i className="fal fa-envelope" />
                </div>
                <div className="media-body">
                  <p className="footer-contact_text">Email us 24/7 hours:</p>
                  <a
                    href="mailto:info@aharadaedu.in"
                    className="footer-contact_link"
                  >
                    info@aharadaedu.in
                  </a>
                </div>
              </div>
              <div className="divider" />
              <div className="footer-contact">
                <div className="footer-contact_icon icon-btn">
                  <i className="fal fa-location-dot" />
                </div>
                <div className="media-body">
                  <p className="footer-contact_text">
                    Our university location:
                  </p>
                  <a
                    href="https://www.google.com/maps"
                    className="footer-contact_link"
                  >
                    Mawana-Kithaur-Hapur Marg, Atrara, Uttar Pradesh 245206
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-wrap" data-bg-src="assets/img/bg/jiji.png">
          <div className="widget-area">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-md-6 col-xxl-3 col-xl-3">
                  <div className="widget footer-widget">
                    <div className="th-widget-about">
                      <div className="about-logo">
                        <a href="index.html">
                          <img src="assets/WHITE-LOGO-1.png" alt="Aharadaedu" />
                        </a>
                      </div>
                      <p className="about-text">
                        Continually optimize backward manufactured products
                        whereas communities negotiate life compelling alignments
                      </p>
                      <div className="th-social">
                        <h6 className="title text-white">FOLLOW US ON:</h6>
                        <a href="https://www.facebook.com/aharadaeducation/">
                          <i className="fab fa-facebook-f" />
                        </a>{" "}
                        <a href="https://www.instagram.com/aharadaeducation/">
                          <i className="fab fa-instagram" />
                        </a>
                        <a href="https://www.twitter.com/">
                          <i className="fab fa-twitter" />
                        </a>{" "}
                        <a href="https://www.linkedin.com/in/aharadaeducation/">
                          <i className="fab fa-linkedin-in" />
                        </a>{" "}
                        <a href="https://www.youtube.com/@aharadaeducation498">
                          <i className="fab fa-youtube" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-auto">
                  <div className="widget widget_nav_menu footer-widget">
                    <h3 className="widget_title">Our Campus</h3>
                    <div className="menu-all-pages-container">
                      <ul className="menu">
                        <li>
                          <a href="#">IIMT University, Meerut</a>
                        </li>
                        <li>
                          <a href="#">SAGE University Indore</a>
                        </li>

                        <li>
                          <a href="#">Subharti University, Meerut</a>
                        </li>
                        <li>
                          <a href="#">Dev Bhoomi Uttarakhand University</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-auto">
                  <div className="widget widget_nav_menu footer-widget">
                    <h3 className="widget_title">Academics</h3>
                    <div className="menu-all-pages-container">
                      <ul className="menu">
                        <li>
                          <a href="#">Our Campus</a>
                        </li>
                        <li>
                          <a href="#">Library</a>
                        </li>
                        <li>
                          <a href="#">Time Schedule</a>
                        </li>
                        <li>
                          <a href="#">Apply For Admissions</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xxl-3 col-xl-3">
                  <div className="widget newsletter-widget footer-widget">
                    <h3 className="widget_title">Get in touch!</h3>
                    <p className="footer-text">
                      Subscribe our newsletter to get our latest Update &amp;
                      news
                    </p>
                    <form className="newsletter-form form-group">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email Email"
                        required
                      />{" "}
                      <i className="far fa-envelope" />{" "}
                      <button type="submit" className="th-btn style3">
                        Subscribe Now <i className="far fa-arrow-right ms-1" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright-wrap">
              <div className="row justify-content-between align-items-center">
                <div className="col-md-6">
                  <p className="copyright-text">
                    Copyright © 2025{" "}
                    <a style={{ color: "#ccc" }} href="/">
                      Aharada Education
                    </a>{" "}
                    All Rights Reserved.
                  </p>
                </div>
                <div className="col-md-6 text-end d-none d-md-block">
                  <div className="footer-links">
                    <ul>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Terms &amp; Condition</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Icon with Pulse Animation */}
      <a
        href="https://wa.me/917303381359"
        className="pulse"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp my-float" />
        <div className="whatsapp-text">Talk to us?</div>
      </a>

      <div className="scroll-top">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: "307.919",
            }}
          ></path>
        </svg>
      </div>

      <style>
        {`
          .pulse {
            position: fixed;
            cursor: pointer;
            display: block;
            width: 60px !important;
            height: 60px;
            bottom: 40px;
            right: 40px;
            background-color: rgba(0, 200, 0, 1);
            color: white;
            border-radius: 50px;
            text-align: center;
            transition-duration: 0.5s;
            animation: pulse-btn 3s infinite;
            z-index: 9000;
          }

          .pulse:hover {
            background-color: rgba(0, 150, 0, 1);
            color: white;
          }

          .my-float {
            margin-top: 15px;
            font-size: 30px;
            position: relative;
            z-index: 20;
          }

          .whatsapp-text {
            margin-top: 10px;
            font-size: 12px;
            color: #0f2239;
            font-weight: bold;
          }

          @-webkit-keyframes pulse-btn {
            0% {
              -webkit-box-shadow: 0 0 0 0 rgba(0, 200, 0, 1);
            }
            70% {
              -webkit-box-shadow: 0 0 0 20px rgba(0, 200, 0, 0);
            }
            100% {
              -webkit-box-shadow: 0 0 0 0 rgba(0, 200, 0, 0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Footer;
