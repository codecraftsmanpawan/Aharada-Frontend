import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./courseoffer.css";
import config from "../../../config";

function CoursebyUniversity() {
  const [selectedCategory, setSelectedCategory] = useState("*");
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Fetch data from the API
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `${config.apiBaseUrl}/api/programs-branches`
        );
        setCourses(response.data.data);

        // Extract unique categories from the fetched courses
        const uniqueCategories = [
          ...new Set(response.data.data.flatMap((course) => course.categories)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        // console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
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
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
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
