import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

function CoursebyUniversity() {
  const [selectedCategory, setSelectedCategory] = useState("*");
  const navigate = useNavigate();

  const courses = [
    // BBA Courses
    {
      id: 2,
      title: "Aviation and Airport Management",
      categories: ["BBA"],
    },
    {
      id: 3,
      title: "Aviation and Travel",
      categories: ["BBA"],
    },
    {
      id: 4,
      title: "Entrepreneurship and Innovation",
      categories: ["BBA"],
    },
    {
      id: 5,
      title: "Data Analytics and Artificial Intelligence",
      categories: ["BBA"],
    },

    // MBA Courses
    {
      id: 6,
      title: "Aviation Management",
      categories: ["MBA"],
    },
    {
      id: 7,
      title: "HR & Aviation",
      categories: ["MBA"],
    },

    // B.Tech Courses
    {
      id: 8,
      title: "Aerospace Engineering",
      categories: ["B.Tech"],
    },

    // M.Tech Courses
    {
      id: 9,
      title: "Defence Technology",
      categories: ["M.Tech"],
    },

    // Arts Courses
    {
      id: 10,
      title: "Bachelor of Fine Art",
      categories: ["Arts"],
    },
    {
      id: 11,
      title: "Bachelor of Fashion Designing",
      categories: ["Arts"],
    },

    // BSC Courses (Add Aeronautical Science)
    {
      id: 12,
      title: "Aeronautical Science",
      categories: ["BSC"],
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredCourses =
    selectedCategory === "*"
      ? courses
      : courses.filter((course) =>
          course.categories.includes(selectedCategory)
        );

  const handleCourseClick = (title) => {
    navigate(`/course-details/${title}`);
  };

  return (
    <section
      class="space"
      data-bg-src="assets/img/update1/bg/category_bg_1.jpg"
      style={{
        background: "linear-gradient(to bottom, #f4ebdd, #f4ebdd)",
        marginTop: "-50px",
      }}
    >
      <div className="container">
        <div className="row justify-content-center justify-content-xl-between align-items-center">
          <div className="col-xl-8 mb-n2 mb-xl-0">
            <div className="title-area text-center text-xl-start">
              <span className="sub-title">
                Kickstart your career with diverse job opportunities
              </span>
              <h2
                className="sec-title fw-semibold"
                style={{ color: "#c88c32" }}
              >
                Programs Offered
              </h2>
            </div>
          </div>
        </div>
        <div className="tab-menu1 filter-menu-active ">
          <button
            data-filter="*"
            className={`filter-btn ${selectedCategory === "*" ? "active" : ""}`}
            onClick={() => handleCategoryChange("*")}
          >
            All Program
          </button>
          <button
            data-filter=".BBA"
            className={`filter-btn ${
              selectedCategory === "BBA" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("BBA")}
          >
            BBA
          </button>
          <button
            data-filter=".MBA"
            className={`filter-btn ${
              selectedCategory === "MBA" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("MBA")}
          >
            MBA
          </button>
          <button
            data-filter=".B.Tech"
            className={`filter-btn ${
              selectedCategory === "B.Tech" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("B.Tech")}
          >
            B.Tech
          </button>
          <button
            data-filter=".M.Tech"
            className={`filter-btn ${
              selectedCategory === "M.Tech" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("M.Tech")}
          >
            M.Tech
          </button>
          <button
            data-filter=".BSC"
            className={`filter-btn ${
              selectedCategory === "BSC" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("BSC")}
          >
            BSC
          </button>
          <button
            data-filter=".Arts"
            className={`filter-btn ${
              selectedCategory === "Arts" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("Arts")}
          >
            Arts
          </button>
        </div>
        <div className="row gy-3 filter-active">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className={`col-lg-6 col-xl-4 filter-item ${course.categories.join(
                " "
              )}`}
            >
              <div className="category-list2">
                {/* <div className="category-list2_icon">
                  <img
                    src="assets/img/update1/icon/category_2_1.svg"
                    alt="icon"
                  />
                </div> */}
                <div className="category-list2_content">
                  <h4
                    className="category-list2_title"
                    onClick={() => handleCourseClick(course.title)}
                    style={{ cursor: "pointer" }}
                  >
                    {course.title}
                  </h4>
                  <span className="category-list2_text">
                    {course.categories.join(", ")}
                  </span>
                </div>
                {/* <a href="course.html" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursebyUniversity;
