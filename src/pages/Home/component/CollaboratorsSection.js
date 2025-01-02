import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CollaboratorsSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className="space-top mb-16"
      style={{
        marginTop: "-50px",
        paddingBottom: "50px",
        background: "linear-gradient(to right, #f5f6fa, #eaf2fd)",
      }}
      data-aos="fade-up"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
            <div className="title-area mb-lg-0 text-lg-start text-center">
              <span className="sub-title">
                <i className="fal fa-book me-2" /> Our Esteemed Collaborators
              </span>
              <h2 className="sec-title mb-0">
                We Have Collaborated With{" "}
                <span className="text-theme">
                  <span className="counter-number">4+</span> Leading Educational
                  Institutions
                </span>{" "}
                Globally
              </h2>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="400">
            <div className="client-wrap text-lg-end text-center">
              <div className="row gy-40">
                <div className="col-3">
                  <a href="#" className="client-thumb">
                    <img
                      src="assets/img/client/iimtlogo.png"
                      alt="IIMT University"
                      data-aos="zoom-in"
                      data-aos-delay="100"
                    />
                  </a>
                </div>
                <div className="col-3">
                  <a href="#" className="client-thumb">
                    <img
                      src="assets/img/client/Dev-Bhoomi-Logo.png"
                      alt="Dev Bhoomi University"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    />
                  </a>
                </div>
                <div className="col-3">
                  <a href="#" className="client-thumb">
                    <img
                      src="assets/img/client/subharti.jpg"
                      alt="Subharti University"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    />
                  </a>
                </div>
                <div className="col-3">
                  <a href="#" className="client-thumb">
                    <img
                      src="assets/img/client/sagelogo.png"
                      alt="Sage University"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                    />
                  </a>
                </div>
                <div className="col-3">
                  <a href="#" className="client-thumb">
                    <img
                      src="assets/img/client/sagelogo.png"
                      alt="Sage University"
                      data-aos="zoom-in"
                      data-aos-delay="500"
                    />
                  </a>
                </div>
                <div className="col-3">
                  <a href="#" className="client-thumb">
                    <img
                      src="assets/img/client/subharti.jpg"
                      alt="Subharti University"
                      data-aos="zoom-in"
                      data-aos-delay="600"
                    />
                  </a>
                </div>
                <div className="col-3">
                  <a href="#" className="client-thumb">
                    <img
                      src="assets/img/client/Dev-Bhoomi-Logo.png"
                      alt="Dev Bhoomi University"
                      data-aos="zoom-in"
                      data-aos-delay="700"
                    />
                  </a>
                </div>
                <div className="col-3">
                  <a href="#" className="client-thumb">
                    <img
                      src="assets/img/client/iimtlogo.png"
                      alt="IIMT University"
                      data-aos="zoom-in"
                      data-aos-delay="800"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollaboratorsSection;
