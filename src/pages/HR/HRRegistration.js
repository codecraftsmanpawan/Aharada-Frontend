import React, { useState } from "react";
import axios from "axios"; // Import axios
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./hr.css";

function HRRegistrationForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    companyName: "",
    linkedinId: "",
    designation: "",
    mobileNo: "",
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

  // Validate the form inputs
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.mobileNo) newErrors.mobileNo = "Mobile No. is required.";
    if (!formData.companyName)
      newErrors.companyName = "Company Name is required.";
    if (!formData.linkedinId) newErrors.linkedinId = "LinkedIn ID is required.";
    if (!formData.designation)
      newErrors.designation = "Designation is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission and send the data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data before sending
    if (validateForm()) {
      try {
        // Send POST request with form data to the backend
        const response = await axios.post(
          "https://backend.aharadaedu.in/api/hr-registrations",
          formData
        );

        // Show success toast message
        toast.success("HR registration submitted successfully!");

        // Log response and clear form on success
        // console.log("HR registration submitted successfully:", response.data);
        setFormData({
          email: "",
          name: "",
          companyName: "",
          linkedinId: "",
          designation: "",
          mobileNo: "",
        });
      } catch (error) {
        console.error("Error submitting HR registration:", error);

        // Show error toast message
        toast.error("Error submitting HR registration. Please try again.");
      }
    }
  };

  return (
    <div className="hr-registration-form-container">
      <div className="hr-registration-form">
        <h2 className="hr-registration-form-title">HR Registration</h2>
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
                htmlFor="companyName"
                className="hr-registration-form-label-companyName"
              >
                Company Name{" "}
                <span className="hr-registration-form-required">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="hr-registration-form-input-field"
              />
              {errors.companyName && (
                <p className="text-red-500 text-sm">{errors.companyName}</p>
              )}
            </div>

            <div className="hr-registration-form-field">
              <label
                htmlFor="linkedinId"
                className="hr-registration-form-label-linkedinId"
              >
                LinkedIn ID{" "}
                <span className="hr-registration-form-required">*</span>
              </label>
              <input
                type="url"
                id="linkedinId"
                name="linkedinId"
                value={formData.linkedinId}
                onChange={handleChange}
                className="hr-registration-form-input-field"
              />
              {errors.linkedinId && (
                <p className="text-red-500 text-sm">{errors.linkedinId}</p>
              )}
            </div>

            <div className="hr-registration-form-field">
              <label
                htmlFor="designation"
                className="hr-registration-form-label-designation"
              >
                Designation{" "}
                <span className="hr-registration-form-required">*</span>
              </label>
              <input
                type="text"
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="hr-registration-form-input-field"
              />
              {errors.designation && (
                <p className="text-red-500 text-sm">{errors.designation}</p>
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
          </div>

          <button type="submit" className="hr-registration-form-submit-button">
            Register
          </button>
        </form>
      </div>

      {/* ToastContainer for displaying toast messages */}
      <ToastContainer />
    </div>
  );
}

export default HRRegistrationForm;
