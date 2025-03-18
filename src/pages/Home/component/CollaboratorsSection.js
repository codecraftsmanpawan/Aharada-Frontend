import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import config from "../../../config";

function CollaboratorsSection() {
  const [collaborators, setCollaborators] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    axios
      .get(`${config.apiBaseUrl}/api/collaborators`)
      .then((response) => {
        setCollaborators(response.data);
      })
      .catch((error) => {
        console.error("Error fetching collaborators:", error);
      });
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      className="space-top mb-16"
      style={{
        paddingBottom: "50px",
        background: "linear-gradient(to right, #f5f6fa, #eaf2fd)",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
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
          <div className="col-lg-6">
            <div className="client-wrap text-lg-end text-center">
              <Slider {...sliderSettings}>
                {collaborators.map((collaborator, index) => (
                  <div
                    className="p-2"
                    key={collaborator._id}
                    style={{ marginRight: "15px" }}
                  >
                    <a
                      className="client-thumb"
                      rel="noopener noreferrer"
                      style={{
                        display: "block",
                        transition: "color 0.3s ease",
                      }}
                    >
                      <img
                        src={`${config.apiBaseUrl}${collaborator.logo}`}
                        alt={collaborator.name}
                        style={{
                          width: "100%",
                          height: "150px",
                          objectFit: "contain",
                          transition: "opacity 0.3s ease",
                        }}
                      />
                    </a>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollaboratorsSection;
