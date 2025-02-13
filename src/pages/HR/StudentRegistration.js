import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import styles for toast
import "./hr.css";

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    mobileNo: "",
    course: "",
    semester: "",
    collegeName: "",
  });

  const [errors, setErrors] = useState({});

  // Handle change for input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.mobileNo) newErrors.mobileNo = "Mobile No. is required.";
    if (!formData.course) newErrors.course = "Course is required.";
    if (!formData.semester) newErrors.semester = "Semester is required.";
    if (!formData.collegeName)
      newErrors.collegeName = "College Name is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission and send the data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the form is valid
    if (validateForm()) {
      try {
        // Send POST request with form data to the backend
        const response = await axios.post(
          "https://backend.aharadaedu.in/api/student-registrations",
          formData
        );
        // console.log("Form submitted successfully:", response.data);

        // Show success toast message
        toast.success("Student registered successfully!");

        // Optionally reset the form
        setFormData({
          email: "",
          name: "",
          mobileNo: "",
          course: "",
          semester: "",
          collegeName: "",
        });
      } catch (error) {
        console.error("Error submitting form:", error);

        // Show error toast message
        toast.error("Error submitting form. Please try again.");
      }
    }
  };

  return (
    <div className="hr-registration-form-container">
      <div className="hr-registration-form">
        <h2 className="hr-registration-form-title">Student Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="hr-registration-form-grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="hr-registration-form-field">
              <label
                htmlFor="email"
                className="hr-registration-form-label-email"
              >
                Email <span className="hr-registration-form-required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="hr-registration-form-input-field"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="hr-registration-form-field">
              <label htmlFor="name" className="hr-registration-form-label-name">
                Name <span className="hr-registration-form-required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="hr-registration-form-input-field"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div className="hr-registration-form-field">
              <label
                htmlFor="mobileNo"
                className="hr-registration-form-label-mobileNo"
              >
                Mobile No.{" "}
                <span className="hr-registration-form-required">*</span>
              </label>
              <input
                type="tel"
                id="mobileNo"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                required
                className="hr-registration-form-input-field"
              />
              {errors.mobileNo && (
                <p className="text-red-500 text-sm">{errors.mobileNo}</p>
              )}
            </div>

            <div className="hr-registration-form-field">
              <label
                htmlFor="course"
                className="hr-registration-form-label-course"
              >
                Course <span className="hr-registration-form-required">*</span>
              </label>
              <input
                type="text"
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="hr-registration-form-input-field"
              />
              {errors.course && (
                <p className="text-red-500 text-sm">{errors.course}</p>
              )}
            </div>

            <div className="hr-registration-form-field">
              <label
                htmlFor="semester"
                className="hr-registration-form-label-semester"
              >
                Semester{" "}
                <span className="hr-registration-form-required">*</span>
              </label>
              <input
                type="text"
                id="semester"
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                required
                className="hr-registration-form-input-field"
              />
              {errors.semester && (
                <p className="text-red-500 text-sm">{errors.semester}</p>
              )}
            </div>

            <div className="hr-registration-form-field">
              <label
                htmlFor="collegeName"
                className="hr-registration-form-label-collegeName"
              >
                College Name{" "}
                <span className="hr-registration-form-required">*</span>
              </label>
              <input
                type="text"
                id="collegeName"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleChange}
                required
                className="hr-registration-form-input-field"
              />
              {errors.collegeName && (
                <p className="text-red-500 text-sm">{errors.collegeName}</p>
              )}
            </div>
          </div>

          <button type="submit" className="hr-registration-form-submit-button">
            Register
          </button>
        </form>
      </div>

      {/* ToastContainer for toast messages */}
      <ToastContainer />
    </div>
  );
};

export default StudentRegistration;
