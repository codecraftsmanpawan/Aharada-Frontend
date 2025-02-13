import React from "react";
import { Link } from "react-router-dom";
import "./Department.css"; // Ensure you have this CSS file in place

const Department = () => {
  return (
    <div>
      <div className="th-hero-wrapper hero-12" style={{ marginTop: "-150px" }}>
        <div className="container z-index-common">
          <div className="hero-style12">
            <h1 className="hero-title">Discover Our Diverse Departments</h1>
            <p className="hero-text">
              At Aharada Education, we offer diverse academic disciplines to
              equip students with knowledge, skills, and hands-on experience for
              success. Our programs, led by top educators and industry experts,
              ensure a well-rounded, future-focused education.
            </p>

            <div className="hero-counter-wrap">
              <div className="hero-counter">
                <div className="hero-counter_icon">
                  <img
                    src="assets/img/update1/icon/hero_counter_1.svg"
                    alt="icon"
                  />
                </div>
                <div>
                  <h2 className="hero-counter_number">
                    <span className="counter-number">10</span>+
                  </h2>
                  <span className="hero-counter_text">COURSES</span>
                </div>
              </div>
              <div className="hero-counter">
                <div className="hero-counter_icon">
                  <img
                    src="assets/img/update1/icon/hero_counter_2.svg"
                    alt="icon"
                  />
                </div>
                <div>
                  <h2 className="hero-counter_number">
                    <span className="counter-number">10000</span>+
                  </h2>
                  <span className="hero-counter_text">STUDENTS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-img1">
          <img
            src="assets/img/update1/hero/hero_img_3_1.png"
            alt="Hero Image"
          />
        </div>
      </div>

      <section className="space department-section">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">Our Departments</span>
            <h2 className="sec-title fw-medium">Explore Our Departments</h2>
          </div>
          <div className="row gy-50">
            {[
              {
                icon: "assets/img/update1/icon/category_1_1.svg",
                title: "School of Engineering & Technology",
                description:
                  "The School of Engineering & Technology offers programs designed to prepare students for cutting-edge technology careers.",
                link: "#set",
              },
              {
                icon: "assets/img/update1/icon/category_1_2.svg",
                title: "School of Commerce & Management",
                description:
                  "Focusing on business and management strategies, this department equips students with essential business acumen and leadership skills.",
                link: "#scm",
              },
              {
                icon: "assets/img/update1/icon/category_1_3.svg",
                title: "School of Basic Science",
                description:
                  "This department focuses on the fundamental scientific principles that are essential for many advanced fields of study.",
                link: "#bsc",
              },
              {
                icon: "assets/img/update1/icon/category_1_4.svg",
                title: "School of Arts & Humanities",
                description:
                  "Offering courses in literature, history, and more, the department emphasizes critical thinking and creativity.",
                link: "#ash",
              },
            ].map((dept, index) => (
              <div className="col-sm-6 col-xl-6" key={index}>
                <article
                  className="department-card"
                  style={{
                    background: "linear-gradient(to bottom, #fdfbf9, #f4ebdd)",
                  }}
                >
                  <div className="department-card_icon">
                    <img src={dept.icon} alt={`${dept.title} Icon`} />
                  </div>
                  <div className="department-card_content">
                    <h3 className="department-card_title">
                      <a href={dept.link}>{dept.title}</a>
                    </h3>
                    <p className="department-card_text">{dept.description}</p>
                    <a href={dept.link} className="link-btn">
                      Learn More <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space engineering-courses-section" id="set">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">Engineering Courses</span>
            <h3>Explore Courses in Engineering & Technology</h3>
          </div>
          <div className="row gy-50 justify-content-center">
            {[
              {
                title: "B.Tech - Aerospace Engineering",
                description:
                  "The B.Tech in Aerospace Engineering covers aerodynamics, propulsion systems, aircraft design, and space exploration. Students are equipped with the knowledge to contribute to the aviation and aerospace industries.",
                link: "/btech-aerospace-engineering",
              },
              {
                title: "M.Tech - Defence Technology",
                description:
                  "M.Tech in Defence Technology focuses on the development and deployment of military technologies, including radar systems, defense robotics, and cyber defense. Graduates are trained to enhance national security and defense.",
                link: "/mtech-defence-technology",
              },
            ].map((course, index) => (
              <div className="col-sm-6 col-md-6 col-lg-6" key={index}>
                <article
                  className="course-card"
                  style={{
                    background: "linear-gradient(to bottom, #fdfbf9, #f4ebdd)",
                  }}
                >
                  <div className="course-card_content">
                    <h3 className="course-card_title">
                      <Link to={course.link}>{course.title}</Link>
                    </h3>
                    <p className="course-card_text">{course.description}</p>
                    <Link to={course.link} className="link-btn">
                      Learn More <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space engineering-courses-section" id="scm">
        <div className="container" style={{ marginTop: "-100px" }}>
          <div className="title-area text-center">
            <span className="sub-title">Management Courses</span>
            <h2>School of Commerce & Management</h2>
          </div>
          <div className="row gy-50 justify-content-center">
            {[
              {
                title: "BBA - Data Analytics and Artificial Intelligence",
                description:
                  "A three-year BBA program designed to equip students with expertise in data science, AI, machine learning, and business analytics, preparing them for the digital economy.",
                link: "/data-analytics-and-ai",
              },
              {
                title: "BBA - Aviation & Travel",
                description:
                  "A three-year undergraduate program focusing on aviation industry operations, travel management, and airline business strategies to build careers in the aviation and tourism sectors.",
                link: "/aviation-and-travel",
              },
              {
                title: "BBA - Entrepreneurship and Innovation",
                description:
                  "This program fosters entrepreneurial thinking and innovative business strategies, enabling students to create and manage startups in a competitive global market.",
                link: "/entrepreneurship-and-innovation",
              },
              {
                title: "MBA - Aviation Management",
                description:
                  "A two-year specialized MBA program focusing on airport operations, airline business management, and aviation regulations to develop skilled leaders in the aviation sector.",
                link: "/mba-aviation-management",
              },
              {
                title: "BBA - Aviation & Airport Management",
                description:
                  "A three-year undergraduate course covering airport operations, airline management, safety regulations, and logistics, preparing students for the aviation industry.",
                link: "/aviation-and-airport-management",
              },
              {
                title: "MBA - HR & Aviation",
                description:
                  "An MBA program designed to merge HR management skills with aviation industry requirements, covering talent management, labor laws, and aviation workforce strategies.",
                link: "/mba-hr-aviation",
              },
            ].map((course, index) => (
              <div className="col-sm-6 col-md-4 col-lg-4" key={index}>
                <article
                  className="course-card"
                  style={{
                    background: "linear-gradient(to bottom, #fdfbf9, #f4ebdd)",
                  }}
                >
                  <div className="course-card_content">
                    <h3 className="course-card_title">
                      <Link to={course.link}>{course.title}</Link>
                    </h3>
                    <p className="course-card_text">{course.description}</p>
                    <Link to={course.link} className="link-btn">
                      Learn More <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space engineering-courses-section" id="bsc">
        <div className="container" style={{ marginTop: "-100px" }}>
          <div className="title-area text-center">
            <span className="sub-title">Science Courses</span>
            <h3>Explore Courses in School of Basic Science</h3>
          </div>
          <div className="row gy-50 justify-content-center">
            {[
              {
                title: "BSC - Aeronautical Science",
                description:
                  "The B.SC in Aeronautical Science covers core topics such as aircraft design, flight mechanics, propulsion systems, and aerospace technologies. Students gain comprehensive knowledge to excel in the aviation and aerospace industries, preparing them for roles in both commercial and defense sectors.",
                link: "/bsc-aeronautical",
              },
            ].map((course, index) => (
              <div className="col-sm-6 col-md-6 col-lg-6" key={index}>
                <article
                  className="course-card"
                  style={{
                    background: "linear-gradient(to bottom, #fdfbf9, #f4ebdd)",
                  }}
                >
                  <div className="course-card_content">
                    <h3 className="course-card_title">
                      <Link to={course.link}>{course.title}</Link>
                    </h3>
                    <p className="course-card_text">{course.description}</p>
                    <Link to={course.link} className="link-btn">
                      Learn More <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="space engineering-courses-section" id="ash">
        <div className="container" style={{ marginTop: "-100px" }}>
          <div className="title-area text-center">
            <span className="sub-title">Arts & Humanities Courses</span>
            <h2>School of Arts & Humanities</h2>
          </div>
          <div className="row gy-50 justify-content-center">
            {[
              {
                title: "BFA - Fine Arts",
                description:
                  "A four-year program designed to provide students with the skills and knowledge in various art forms including painting, sculpture, digital art, and photography, preparing them for a successful career in the creative industry.",
                link: "/fine-arts",
              },
              {
                title: "BFA - Fashion Design",
                description:
                  "A comprehensive program that trains students in the art of fashion design, from sketching to garment creation, and fashion marketing, preparing them to pursue careers in the fashion industry, including design, styling, and brand management.",
                link: "/fashion-design",
              },
            ].map((course, index) => (
              <div className="col-sm-6 col-md-5 col-lg-6" key={index}>
                <article
                  className="course-card"
                  style={{
                    background: "linear-gradient(to bottom, #fdfbf9, #f4ebdd)",
                  }}
                >
                  <div className="course-card_content">
                    <h3 className="course-card_title">
                      <Link to={course.link}>{course.title}</Link>
                    </h3>
                    <p className="course-card_text">{course.description}</p>
                    <Link to={course.link} className="link-btn">
                      Learn More <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Department;
