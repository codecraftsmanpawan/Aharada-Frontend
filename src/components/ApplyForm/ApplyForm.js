import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CSSTransition } from "react-transition-group";
import "./ApplyFrom.css";

const universitiesAndPrograms = {
  "IIMT University, Meerut": [
    "Bachelor of Business Administration - Aviation and Travel",
    "Bachelor of Business Administration - Data Analytics",
    "Master of Business Administration - Aviation Management",
  ],
  "SAGE University Indore": [
    "Bachelor of Technology - Aerospace",
    "Bachelor of Business Administration - Entrepreneurship",
  ],
  "Subharti University, Meerut": [
    "Bachelor of Technology - Computer Science",
    "Bachelor of Business Administration",
  ],
  "Dev Bhoomi Uttarakhand University": [
    "Bachelor of Technology - Civil Engineering",
    "Bachelor of Science - Biotechnology",
  ],
};

const statesAndDistricts = {
  "Andhra Pradesh": ["Anantapur", "Chittoor", "Guntur"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur"],
  Karnataka: ["Bengaluru", "Mysuru", "Hubballi"],
};

const ApplyForm = ({ onSubmit, closeApplyForm, className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      state: "",
      district: "",
      university: "",
      program: "",
    },
  });

  const [selectedState, setSelectedState] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [programs, setPrograms] = useState([]);
  const [inProp, setInProp] = useState(true); // Animation state

  const onFormSubmit = async (data) => {
    try {
      // Simulate API submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted successfully", data);
      reset();
      setInProp(false); // Trigger exit animation
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setDistricts(statesAndDistricts[state] || []);
  };

  const handleUniversityChange = (e) => {
    const university = e.target.value;
    setSelectedUniversity(university);
    setPrograms(universitiesAndPrograms[university] || []);
  };

  return (
    <CSSTransition
      in={inProp}
      timeout={500}
      classNames="slide"
      unmountOnExit
      onExited={closeApplyForm}
    >
      <form
        className={`apply-form ${className}`}
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <button
          type="button"
          className="close-icon"
          onClick={() => setInProp(false)}
          aria-label="Close Form"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* Name */}
        <div className="form-group">
          <label htmlFor="apply-name">Name:</label>
          <input
            id="apply-name"
            {...register("name", { required: "Name is required" })}
            placeholder="Your Name"
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="apply-phone">Phone:</label>
          <input
            id="apply-phone"
            type="tel"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone number must be 10 digits",
              },
            })}
            placeholder="Your Phone Number"
          />
          {errors.phone && (
            <span className="error">{errors.phone.message}</span>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="apply-email">Email:</label>
          <input
            id="apply-email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            placeholder="Your Email"
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>

        {/* State */}
        <div className="form-group">
          <label htmlFor="apply-state">State:</label>
          <select
            id="apply-state"
            {...register("state", { required: "State is required" })}
            onChange={handleStateChange}
          >
            <option value="">Select State</option>
            {Object.keys(statesAndDistricts).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          {errors.state && (
            <span className="error">{errors.state.message}</span>
          )}
        </div>

        {/* District */}
        <div className="form-group">
          <label htmlFor="apply-district">District:</label>
          <select
            id="apply-district"
            {...register("district", { required: "District is required" })}
          >
            <option value="">Select District</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
          {errors.district && (
            <span className="error">{errors.district.message}</span>
          )}
        </div>

        {/* University */}
        <div className="form-group">
          <label htmlFor="apply-university">University:</label>
          <select
            id="apply-university"
            {...register("university", { required: "University is required" })}
            onChange={handleUniversityChange}
          >
            <option value="">Select University</option>
            {Object.keys(universitiesAndPrograms).map((university) => (
              <option key={university} value={university}>
                {university}
              </option>
            ))}
          </select>
          {errors.university && (
            <span className="error">{errors.university.message}</span>
          )}
        </div>

        {/* Program */}
        <div className="form-group">
          <label htmlFor="apply-program">Program:</label>
          <select
            id="apply-program"
            {...register("program", { required: "Program is required" })}
          >
            <option value="">Select Program</option>
            {programs.map((program) => (
              <option key={program} value={program}>
                {program}
              </option>
            ))}
          </select>
          {errors.program && (
            <span className="error">{errors.program.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </CSSTransition>
  );
};

export default ApplyForm;
