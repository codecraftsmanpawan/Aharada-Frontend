import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import "./courseoffer.css";
function CoursebyUniversity() {
  const [selectedCategory, setSelectedCategory] = useState("*");
  const navigate = useNavigate();

  const courses = [
    { id: 2, title: "Aviation and Airport Management", categories: ["BBA"] },
    { id: 3, title: "Aviation and Travel", categories: ["BBA"] },
    { id: 4, title: "Entrepreneurship and Innovation", categories: ["BBA"] },
    {
      id: 5,
      title: "Data Analytics and Artificial Intelligence",
      categories: ["BBA"],
    },
    { id: 6, title: "Aviation Management", categories: ["MBA"] },
    { id: 7, title: "HR & Aviation", categories: ["MBA"] },
    { id: 8, title: "Aerospace Engineering", categories: ["B.Tech"] },
    { id: 9, title: "Defence Technology", categories: ["M.Tech"] },
    { id: 10, title: "Bachelor of Fine Art", categories: ["Arts"] },
    { id: 11, title: "Bachelor of Fashion Designing", categories: ["Arts"] },
    { id: 12, title: "Aeronautical Science", categories: ["BSC"] },
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
    // Encode the title to make it URL-safe
    const encodedTitle = encodeURIComponent(title);
    navigate(`/course-details/${encodedTitle}`);
  };

  return (
    <section className="courseoffer">
      <div className="courseoffer-container">
        <div className="courseoffer-header">
          <div className="courseoffer-title">
            <span>Kickstart your career with diverse job opportunities</span>
            <h2>Programs Offered</h2>
          </div>
        </div>
        <div className="courseoffer-filter">
          <button
            className={`filter-btn ${selectedCategory === "*" ? "active" : ""}`}
            onClick={() => handleCategoryChange("*")}
          >
            All Program
          </button>
          <button
            className={`filter-btn ${
              selectedCategory === "BBA" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("BBA")}
          >
            BBA
          </button>
          <button
            className={`filter-btn ${
              selectedCategory === "MBA" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("MBA")}
          >
            MBA
          </button>
          <button
            className={`filter-btn ${
              selectedCategory === "B.Tech" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("B.Tech")}
          >
            B.Tech
          </button>
          <button
            className={`filter-btn ${
              selectedCategory === "M.Tech" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("M.Tech")}
          >
            M.Tech
          </button>
          <button
            className={`filter-btn ${
              selectedCategory === "BSC" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("BSC")}
          >
            BSC
          </button>
          <button
            className={`filter-btn ${
              selectedCategory === "Arts" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("Arts")}
          >
            Arts
          </button>
        </div>
        <div className="courseoffer-list">
          {filteredCourses.map((course) => (
            <div key={course.id} className="courseoffer-item">
              <div className="courseoffer-item-content">
                <h4
                  className="courseoffer-item-title"
                  onClick={() => handleCourseClick(course.title)}
                >
                  {course.title}
                </h4>
                {/* <span className="courseoffer-item-categories">
                  {course.categories.join(", ")}
                </span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursebyUniversity;
