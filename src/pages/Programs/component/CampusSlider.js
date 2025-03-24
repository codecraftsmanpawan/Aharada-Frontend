import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const campusSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

const imageSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  arrows: false,
};

const CampusSlider = ({ campuses }) => {
  return (
    <div className="campus-section">
      <h2 className="main-title">Partner Campuses</h2>
      <h3 className="main-subtitle">Choose from our top campuses</h3>

      <Slider {...campusSettings} className="campus-sliders">
        {campuses.map((campus, index) => (
          <div key={index} className={`campus-card campus-card-${index}`}>
            <div className="image-slider-container">
              <Slider {...imageSettings} className={`image-slider-${index}`}>
                {campus.images.map((image, idx) => (
                  <div key={idx} className="image-slide">
                    <img src={image} alt={`${campus.name} image ${idx + 1}`} />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="campus-info">
              <h4 className="campus-name">{campus.name}</h4>
              <p className="main-program">{campus.program}</p>
              <button className="th-btn style3">Book College Tour</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CampusSlider;
