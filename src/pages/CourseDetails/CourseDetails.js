import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick"; // Import Slider
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick Theme CSS
import "./CourseDetails.css";
import Head from "../../components/Head/Head";

function CourseDetails() {
  const { title } = useParams();

  useEffect(() => {
    document.title = `${title} - Course Details - Aharada Education`;
  }, [title]);

  const placementData = {
    highestSalary: "₹25 LPA",
    offers: "1350+ Offers",
    opportunities: "1100+ Opportunities across top sectors",
    roi: "71% Higher ROI",
    multipleOffers: "15 Students with 2+ Offers",
    companies: "7x More Companies",
  };

  const courseHighlights = [
    { label: "Year Full-Time Program", value: "2" },
    { label: "Specialisations Offered*", value: "6+" },
    { label: "Months of Internships*", value: "8+" },
    { label: "Capstone Projects", value: "4" },
  ];

  const additionalDetails = {
    eligibility: "Graduation with 50% marks (any stream)",
    admissionProcess:
      "Based on entrance exams like CAT, MAT, XAT followed by group discussion and personal interview.",
    careerOptions: [
      "Marketing Manager",
      "Financial Analyst",
      "Business Consultant",
      "Operations Manager",
      "Human Resource Manager",
    ],
  };

  const partnerCampuses = [
    {
      name: "Dev Bhoomi Uttarakhand University",
      program: "MBA Program | UGC recognised",
      specializations: "4 Specialisations Offered",
      certifications: "10 Advanced Certifications",
      fees: "₹3.80 Lacs",
      image: "../assets/img/university/dev.webp",
    },
    {
      name: "IIMT University, Meerut",
      program: "MBA Program | UGC recognised",
      specializations: "6 Specialisations Offered",
      certifications: "10 Advanced Certifications",
      fees: "₹5.70 Lacs",
      image: "../assets/img/university/iimtu.jpg",
    },
    {
      name: "SAGE University Indore",
      program: "MBA Program | UGC recognised",
      specializations: "10 Specialisations Offered",
      certifications: "10 Advanced Certifications",
      fees: "₹3.25 Lacs",
      image: "../assets/img/university/sage.jpg",
    },
    {
      name: "Subharti University, Meerut",
      program: "MBA Program | UGC recognised",
      specializations: "10 Specialisations Offered",
      certifications: "10 Advanced Certifications",
      fees: "₹4.20 Lacs",
      image: "../assets/img/university/subharti.jpg",
    },
  ];

  // Slider Settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Head />
      <div
        className="course-details"
        style={{
          background: "linear-gradient(to bottom, #fdfbf9, #f4ebdd)",
        }}
      >
        <main>
          {/* Placement Section */}
          <section className="course-details__placement">
            <div className="course-details__sidebar">
              <span>MBA/PGDM</span>
            </div>
            <div className="course-details__placement-content">
              <h2 className="maincourse-details__heading">
                Audited & Verified Placement Report
              </h2>
              <div className="course-details__placement-stats">
                <div>{placementData.highestSalary}</div>
                <div>{placementData.offers}</div>
                <div>{placementData.opportunities}</div>
                <div>{placementData.roi}</div>
                <div>{placementData.multipleOffers}</div>
                <div>{placementData.companies}</div>
              </div>
              <p className="course-details__note">
                These placement statistics are audited and verified by B2K
                Analytics.
              </p>
            </div>
          </section>

          {/* Course Highlights */}
          <section className="course-details__highlights">
            <h2 className="course-details__heading">
              {title} Course Highlights
            </h2>
            <p className="course-details__intro">
              Develop leadership and managerial skills with a holistic view of
              business in marketing, finance, or operations.
            </p>
            <div className="course-details__grid">
              {courseHighlights.map((highlight, index) => (
                <div key={index} className="course-details__highlight-card">
                  <h3>{highlight.value}</h3>
                  <p>{highlight.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Additional Details */}
          {/* <section className="course-details__additional">
          <h2 className="course-details__heading">Additional Information</h2>
          <div className="course-details__info">
            <div className="course-details__info-block">
              <h3>Eligibility</h3>
              <p>{additionalDetails.eligibility}</p>
            </div>
            <div className="course-details__info-block">
              <h3>Admission Process</h3>
              <p>{additionalDetails.admissionProcess}</p>
            </div>
            <div className="course-details__info-block">
              <h3>Career Options</h3>
              <ul>
                {additionalDetails.careerOptions.map((career, index) => (
                  <li key={index}>{career}</li>
                ))}
              </ul>
            </div>
          </div>
        </section> */}

          {/* Partner Campuses Section */}
          <section className="course-details__partner-campuses">
            <h2 className="course-details__heading">Partner Campuses</h2>
            <p className="course-details__intro">
              Choose from 5+ campuses across India for a world-class learning
              experience.
            </p>
            <Slider
              {...sliderSettings}
              className="course-details__campus-slider"
            >
              {partnerCampuses.map((campus, index) => (
                <div key={index} className="course-details__campus-card">
                  <div
                    className="course-details__campus-image"
                    style={{ backgroundImage: `url(${campus.image})` }}
                  ></div>
                  <div className="course-details__campus-content">
                    <h3>{campus.name}</h3>
                    <p>{campus.program}</p>
                    <p>{campus.specializations}</p>
                    <p>{campus.certifications}</p>
                    <p className="course-details__fees">{campus.fees}</p>
                    <button className="book-tour-button">
                      Book College Tour
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </section>
        </main>
      </div>
    </>
  );
}

export default CourseDetails;
