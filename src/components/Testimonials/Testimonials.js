import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

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
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

  const testimonialsData = [
    {
      img: "assets/img/update1/testimonial/testi_2_1.jpg",
      text: "“As a B.Tech Aerospace student, I’ve had an amazing experience with supportive teachers and a good mix of theory and practical learning. If you want a strong start in aerospace engineering, this is the right choice!”",
      name: "Isha Verma",
      designation: "B.Tech Student",
    },
    {
      img: "assets/img/update1/testimonial/testi_2_2.jpg",
      text: "“There is no other university like it on the planet. The undergrad experience is fantastic--Aharada Education really makes sure to integrate first year students into campus life. And the plus point is that they provide us a proper practical training , because practical training is very much important in now a days”",
      name: "Naman Panchal",
      designation: "B.Tech Student",
    },
    {
      img: "assets/img/update1/testimonial/testi_2_3.jpg",
      text: "“Aharada is an excellent institute.They provide good atmosphere, practical  training and facilities to learn good experience. Avation field is the best field to fulfill your dreams.”",
      name: "Chetna Kumari",
      designation: "MBA Student",
    },
    // Add more testimonials as needed
  ];

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
                      src={testimonial.img}
                      alt="Avatar"
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
                    <i className="fa-solid fa-star-sharp text-warning"></i>
                    <i className="fa-solid fa-star-sharp text-warning"></i>
                    <i className="fa-solid fa-star-sharp text-warning"></i>
                    <i className="fa-solid fa-star-sharp text-warning"></i>
                    <i className="fa-solid fa-star-sharp text-warning"></i>
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
