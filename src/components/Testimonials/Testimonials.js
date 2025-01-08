import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";
import axios from "axios";
import config from "../../config";
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <i className="fa-solid fa-chevron-right"></i>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <i className="fa-solid fa-chevron-left"></i>
    </div>
  );
};

const Testimonials = () => {
  const [testimonialsData, setTestimonialsData] = useState([]);

  // Fetch data from API when the component is mounted
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          `${config.apiBaseUrl}/api/testimonials`
        );
        setTestimonialsData(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []); // Empty dependency array ensures it only runs once on component mount

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <button>{/* You can add custom content here, such as an icon */}</button>
    ),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      className="overflow-hidden bg-white space"
      style={{
        background: "linear-gradient(to bottom, #fff, #ccc)",
      }}
    >
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">Our Students Testimonials</span>
          <h2 className="sec-title fw-medium">People Who Already Love Us</h2>
        </div>
        <Slider {...sliderSettings}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="px-3">
              <div className="testi-box bg-smoke shadow-none">
                <div className="testi-box_content">
                  <div className="testi-box_img">
                    <img
                      src={`${config.apiBaseUrl}/uploads/${testimonial.img}`}
                      alt="Avatar"
                      width={100}
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <p className="testi-box_text">{testimonial.text}</p>
                </div>
                <div className="testi-box_bottom d-flex justify-content-between align-items-center">
                  <div>
                    <h3 className="testi-box_name">{testimonial.name}</h3>
                    <span className="testi-box_desig">
                      {testimonial.designation}
                    </span>
                  </div>
                  <div className="testi-box_review">
                    {[...Array(5)].map((_, idx) => (
                      <i
                        key={idx}
                        className={`fa-solid fa-star-sharp ${
                          idx < testimonial.rating ? "text-warning" : ""
                        }`}
                      ></i>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
