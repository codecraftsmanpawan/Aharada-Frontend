import React, { useEffect } from "react";
import Slider from "react-slick";
import HeroSection from "./component/HeroSection";
import AboutSection from "./component/AboutSection";
import CollaboratorsSection from "./component/CollaboratorsSection";
import WhyChooseSection from "./component/WhyChooseSection";
import FetauredEventsSection from "./component/FetauredEventsSection";
import AwardsSection from "./component/AwardsSection";
import TestimonialsSection from "../../components/Testimonials/Testimonials";
import CouseOffer from "./component/CouseOffer";
import Feedback from "./component/Feedback";
import RecentBlog from "./component/RecentBlog";
import ApplyNowButton from "../../components/ApplyNowButton/ApplyNowButton";
import Head from "../../components/Head/Head";
import NewsMediaSection from "./component/NewMedia";
import BirthdayCard from "./component/Universities";
import { useNavigate } from "react-router-dom";
function Home() {
  useEffect(() => {
    document.title = "Home - Aharada Education";
  }, []);
  const campuses = [
    {
      name: "IIMT University, Meerut",
      program: "MBA Program | UGC approved",
      specialisations: 6,
      certifications: 10,
      fees: "₹ 3.40 Lacs",
      images: [
        "assets/placement/iimt1.jpg",
        "assets/placement/iimt2.jpg",
        "assets/placement/iimt3.jpg",
      ],
    },
    {
      name: "SAGE University Indore",
      program: "MBA Program | UGC recognised",
      specialisations: 3,
      certifications: 10,
      fees: "₹ 3.88 Lacs",
      images: [
        "assets/placement/sage1.jpg",
        "assets/placement/sage2.jpg",
        "assets/placement/sage3.webp",
      ],
    },
    {
      name: "Subharti University, Meerut",
      program: "MCA Program | UGC recognised",
      specialisations: 6,
      certifications: 10,
      fees: "₹ 3.10 Lacs",
      images: [
        "assets/placement/Subharti1.webp",
        "assets/placement/Subharti1.webp",
        "assets/placement/Subharti3.png",
      ],
    },
    {
      name: "Vidya Knowledge Park",
      program: "BBA Program | UGC recognised",
      specialisations: 3,
      certifications: 10,
      fees: "₹ 3.88 Lacs",
      images: [
        "assets/placement/vidya1.jpg",
        "assets/placement/vidya1.jpg",
        "assets/placement/vidya1.jpg",
      ],
    },
  ];
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
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
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
  const navigate = useNavigate();
  const handleBookingClick = () => {
    navigate("/contact");
  };

  return (
    <div>
      <Head />
      <main>
        <HeroSection />
        {/* <WhyChooseSection /> */}
        <CouseOffer />

        {/* <AboutSection /> */}
        <BirthdayCard />
        <CollaboratorsSection />
        <FetauredEventsSection />
        <div className="campus-section">
          <h2 className="main-title">Partner Campuses</h2>
          <h3 className="main-subtitle">
            Choose from 4+ campuses across India
          </h3>
          <Slider
            {...campusSettings}
            className="campus-sliders"
            style={{ paddingBottom: "50px" }}
          >
            {campuses.map((campus, index) => (
              <div key={index} className={`campus-card campus-card-${index}`}>
                <div className="image-slider-container">
                  <Slider
                    {...imageSettings}
                    className={`image-slider-${index}`}
                  >
                    {campus.images.map((image, idx) => (
                      <div key={idx} className="image-slide">
                        <img
                          src={image}
                          alt={`${campus.name} image ${idx + 1}`}
                          className={`campus-image-${index}-${idx}`}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="campus-info">
                  <h4 className="campus-name">{campus.name}</h4>
                  <p className="main-program">{campus.program}</p>

                  <button
                    className="th-btn style3"
                    onClick={handleBookingClick}
                  >
                    Book College Tour{" "}
                    <i className="fas fa-long-arrow-right ms-2" />
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <AwardsSection />

        <RecentBlog />
        <NewsMediaSection />
        <Feedback />
        <TestimonialsSection />
      </main>
    </div>
  );
}

export default Home;
