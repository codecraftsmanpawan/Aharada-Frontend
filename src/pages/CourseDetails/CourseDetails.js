import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CourseDetails.css";
import Head from "../../components/Head/Head";
import axios from "axios";
import DOMPurify from "dompurify";
// Importing images at the top
import devImage from "../../assets/img/university/dev.webp";
import iimtuImage from "../../assets/img/university/iimtu.jpg";
import sageImage from "../../assets/img/university/sage.jpg";
import subhartiImage from "../../assets/img/university/subharti.jpg";
import Testimonials from "../../components/Testimonials/Testimonials";
function CourseDetails() {
  const { title } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `${title} - Course Details - Aharada Education`;

    // Fetch course data based on the title
    axios
      .get(`https://backend.aharadaedu.in/api/branches/${title}`)
      .then((response) => {
        setCourseData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching course data:", error);
        setLoading(false);
      });
  }, [title]);
  const companyPartners = [
    {
      id: 1,
      logo: "../assets/img/sch.jpg",
      name: "Company 1",
    },
    { id: 2, logo: "../assets/img/sch.jpg", name: "Company 2" },
    { id: 3, logo: "../assets/img/sch.jpg", name: "Company 3" },
    { id: 4, logo: "../assets/img/sch.jpg", name: "Company 4" },
    { id: 5, logo: "../assets/img/sch.jpg", name: "Company 5" },
  ];

  const courseHighlights = [
    {
      label: "Year Full-Time Program",
      value: courseData?.program?.yearFullTimeProgram || "N/A",
    },
    {
      label: "Specialisations Offered*",
      value: Array.isArray(courseData?.program?.specialisationsOffered)
        ? courseData?.program?.specialisationsOffered.length
        : "N/A",
    },
    {
      label: "Months of Internships*",
      value: courseData?.program?.monthsOfInternships || "N/A",
    },
    {
      label: "Capstone Projects",
      value: Array.isArray(courseData?.program?.capstoneProjects)
        ? courseData?.program?.capstoneProjects.length
        : "N/A",
    },
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
      image: devImage,
    },
    {
      name: "IIMT University, Meerut",
      program: "MBA Program | UGC recognised",
      specializations: "6 Specialisations Offered",
      certifications: "10 Advanced Certifications",
      fees: "₹5.70 Lacs",
      image: iimtuImage,
    },
    {
      name: "SAGE University Indore",
      program: "MBA Program | UGC recognised",
      specializations: "10 Specialisations Offered",
      certifications: "10 Advanced Certifications",
      fees: "₹3.25 Lacs",
      image: sageImage,
    },
    {
      name: "Subharti University, Meerut",
      program: "MBA Program | UGC recognised",
      specializations: "10 Specialisations Offered",
      certifications: "10 Advanced Certifications",
      fees: "₹4.20 Lacs",
      image: subhartiImage,
    },
  ];
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
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
    // Additional setting to control gap between slides
    centerMode: false,
    focusOnSelect: true,
    slidesToShow: 3,
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head />
      <section className="cta-area-4 position-relative overflow-hidden">
        <div
          className="cta-bg-img"
          style={{ backgroundImage: "url(../assets/img/bg/cta-bg4.png)" }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="cta-wrap4 space">
                <div className="title-area mb-35">
                  <h2 className="sec-title text-white">
                    Learn From the Best with In-Person Classes at Our Campus
                  </h2>
                  <p className="cta-text">
                    Immerse yourself in a hands-on learning experience with our
                    offline courses. Study <strong>{title}</strong> with top
                    faculty members and gain practical knowledge in
                    state-of-the-art facilities.
                  </p>
                </div>
                <Link to="/apply-now" className="th-btn style2">
                  Apply Now
                  <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 align-self-end d-lg-block d-none">
              <div className="cta-4-thumb">
                <img
                  src="../assets/img/normal/cta_4_1.png"
                  alt="Offline University Courses"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="course-details"
        style={{
          background: "linear-gradient(to bottom, #fdfbf9, #f4ebdd)",
        }}
      >
        <main>
          <section className="course-details__highlights">
            <h2>{courseData?.name} Course Highlights</h2>

            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(courseData?.description || ""),
              }}
            />
            <div className="course-details__grid">
              {courseHighlights.map((highlight, index) => (
                <div key={index} className="course-details__highlight-card">
                  <h3>{highlight.value}</h3>
                  <p>{highlight.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            class="space overflow-hidden"
            style={{ backgroundColor: "#fff", marginTop: "50px" }}
          >
            <div class="container">
              <div class="title-area text-center">
                <span class="sub-title">
                  <i class="fal fa-book me-1" /> WHAT WE OFFER
                </span>
                <h2 class="sec-title">Aharada Education Process</h2>
              </div>

              <div class="process-card-area">
                <div class="row gy-5 gy-md-50 justify-content-center">
                  <div class="col-md-6 col-lg-4 process-card-wrap">
                    <article class="process-card">
                      <figure class="process-card_img">
                        <img
                          src="../assets/img/process/process-1-1.png"
                          alt="Image illustrating course exploration"
                        />
                      </figure>
                      <div class="process-card_icon">
                        <img
                          src="../assets/img/icon/process-icon-1-1.svg"
                          alt="Explore Courses Icon"
                        />
                      </div>
                      <h2 class="box-title">Explore Courses</h2>
                      <p class="process-card_text">
                        We offer specialized courses in {title} to boost your
                        career.
                      </p>{" "}
                      <Link to="/apply-now" className="th-btn style4 mt-4">
                        Apply Now
                        <i className="fas fa-arrow-right ms-2" />
                      </Link>
                    </article>
                    <div class="process-arrow">
                      <img
                        src="../assets/img/icon/process-arrow.svg"
                        alt="Arrow pointing to next step"
                      />
                    </div>
                  </div>

                  <div class="col-md-6 col-lg-4 process-card-wrap">
                    <article class="process-card">
                      <figure class="process-card_img">
                        <img
                          src="../assets/img/process/process-1-2.png"
                          alt="Image illustrating easy enrollment"
                        />
                      </figure>
                      <div class="process-card_icon">
                        <img
                          src="../assets/img/icon/process-icon-1-2.svg"
                          alt="Easy Enrollment Icon"
                        />
                      </div>
                      <h2 class="box-title">Easy Enrollment</h2>
                      <p class="process-card_text">
                        Register online for your course and begin your learning
                        path with ease.{" "}
                      </p>
                      <Link to="/apply-now" className="th-btn style4 mt-4">
                        Apply Now
                        <i className="fas fa-arrow-right ms-2" />
                      </Link>
                    </article>
                    <div class="process-arrow">
                      <img
                        src="../assets/img/icon/process-arrow.svg"
                        alt="Arrow pointing to next step"
                      />
                    </div>
                  </div>

                  <div class="col-md-6 col-lg-4 process-card-wrap">
                    <article class="process-card">
                      <figure class="process-card_img">
                        <img
                          src="../assets/img/process/process-1-3.png"
                          alt="Image illustrating the start of learning"
                        />
                      </figure>
                      <div class="process-card_icon">
                        <img
                          src="../assets/img/icon/process-icon-1-3.svg"
                          alt="Start Learning Icon"
                        />
                      </div>
                      <h2 class="box-title">Visit Campus</h2>
                      <p class="process-card_text">
                        Start your educational journey with us and gain the
                        knowledge you need for success.
                      </p>
                      <Link to="/apply-now" className="th-btn style4 mt-4">
                        Apply Now
                        <i className="fas fa-arrow-right ms-2" />
                      </Link>
                    </article>
                    <div class="process-arrow">
                      <img
                        src="../assets/img/icon/process-arrow.svg"
                        alt="Arrow pointing to the next step"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Placement Company Partners Logos with Slider */}
          <section
            className="partners-section py-5"
            style={{
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div className="container">
              <h2
                className="text-center "
                style={{
                  marginBottom: "30px",
                  color: "#c88c32",
                }}
              >
                Our Placement Partners
              </h2>
              <Slider {...sliderSettings}>
                {companyPartners.map((partner) => (
                  <div key={partner.id} className="partner-logo">
                    <img
                      src={partner.logo} // Hardcoded image path
                      alt={partner.name}
                      style={{
                        height: "180px",
                        objectFit: "contain",
                        margin: "0 5px",
                        borderRadius: "15%",
                      }}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </section>
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
                <div
                  key={index}
                  className="course-details__campus-card"
                  style={{ margin: "100px" }}
                >
                  <div
                    className="course-details__campus-image"
                    style={{
                      backgroundImage: `url(${campus.image})`,
                      height: "200px",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div
                    className="course-details__campus-content"
                    style={{
                      padding: "15px",
                      height: "calc(100% - 200px)",
                      overflow: "hidden",
                    }}
                  >
                    <h3>{campus.name}</h3>
                    <p>{campus.program}</p>
                    <p>{campus.specializations}</p>
                    <p>{campus.certifications}</p>
                    {/* <p className="course-details__fees">{campus.fees}</p> */}

                    <Link to="/contact" className="th-btn style3">
                      Book College Tour
                      <i className="fas fa-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </section>
        </main>
      </div>

      <Testimonials />
    </>
  );
}

export default CourseDetails;
