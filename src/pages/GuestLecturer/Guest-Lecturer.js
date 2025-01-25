import React, { useState } from "react";
import axios from "axios";
import "./GuestLecturerForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import config from "../../config";
const GuestLecturerForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dateOfBirth: "",
    contactNumber: "",
    emailAddress: "",
    address: "",
    designation: "",
    currentOrganization: "",
    yearsOfExperience: "",
    highestQualification: "",
    universityName: "",
    yearOfGraduation: "",
    preferredTiming: "",
    role: "Guest Lecturer",
    modeOfDelivery: "Online",
    travelAvailability: false,
    linkedInProfile: "",
    photo: null,
    specializationAreas: [{ area: "", description: "" }],
    subjectsTaught: [{ subject: "", level: "" }],
    additionalCertifications: [{ certification: "", year: "" }],
    publishedResearchPapers: [{ paper: "", year: "" }],
    booksAuthored: [{ book: "", year: "" }],
    patents: [{ patent: "", year: "" }],
    workshopsConducted: [{ workshop: "", year: "" }],
  });

  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleArrayChange = (index, field, value, key) => {
    const updatedArray = [...formData[key]];
    updatedArray[index][field] = value;
    setFormData({ ...formData, [key]: updatedArray });
  };

  const addArrayField = (key, newField) => {
    setFormData({ ...formData, [key]: [...formData[key], newField] });
  };

  const removeArrayField = (key, index) => {
    const updatedArray = [...formData[key]];
    updatedArray.splice(index, 1);
    setFormData({ ...formData, [key]: updatedArray });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Frontend Validation (Optional)
    if (!formData.photo) {
      toast.error("Please upload a photo.");
      return;
    }

    const data = new FormData();
    for (const key in formData) {
      if (key === "photo") {
        data.append(key, formData.photo);
      } else if (Array.isArray(formData[key])) {
        data.append(key, JSON.stringify(formData[key]));
      } else {
        data.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.post(
        `${config.apiBaseUrl}/api/guest-lecturers`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setResponse(response.data);
      toast.success("Guest Lecturer added successfully!");

      setTimeout(() => {
        navigate(`/guest-lecturer/${response.data.guestLecturer._id}`);
      }, 1500); // 1.5 seconds delay

      setFormData({
        fullName: "",
        gender: "",
        dateOfBirth: "",
        contactNumber: "",
        emailAddress: "",
        address: "",
        designation: "",
        currentOrganization: "",
        yearsOfExperience: "",
        highestQualification: "",
        universityName: "",
        yearOfGraduation: "",
        preferredTiming: "",
        role: "Guest Lecturer",
        modeOfDelivery: "Online",
        travelAvailability: false,
        linkedInProfile: "",
        photo: null,
        specializationAreas: [{ area: "", description: "" }],
        subjectsTaught: [{ subject: "", level: "" }],
        additionalCertifications: [{ certification: "", year: "" }],
        publishedResearchPapers: [{ paper: "", year: "" }],
        booksAuthored: [{ book: "", year: "" }],
        patents: [{ patent: "", year: "" }],
        workshopsConducted: [{ workshop: "", year: "" }],
      });
    } catch (error) {
      console.error("Error:", error);
      // Extract and display the detailed error message
      if (error.response && error.response.data) {
        const errorMessage =
          error.response.data.message || error.response.data.error;
        toast.error(` ${errorMessage}`);
      } else {
        toast.error("Failed to add Guest Lecturer. Please try again.");
      }
    }
  };

  // Define dynamic sections with field requirements
  const dynamicSections = [
    {
      key: "specializationAreas",
      label: "Specialization Areas",
      fields: [
        { name: "Area", required: true },
        { name: "Description", required: true },
      ],
    },
    {
      key: "subjectsTaught",
      label: "Subjects Taught",
      fields: [
        { name: "Subject", required: true },
        { name: "Level", required: true },
      ],
    },
    {
      key: "additionalCertifications",
      label: "Additional Certifications",
      fields: [
        { name: "Certification", required: true },
        { name: "Year", required: true },
      ],
    },
    {
      key: "publishedResearchPapers",
      label: "Published Research Papers",
      fields: [
        { name: "Paper", required: false },
        { name: "Year", required: false },
      ],
    },
    {
      key: "booksAuthored",
      label: "Books Authored",
      fields: [
        { name: "Book", required: false },
        { name: "Year", required: false },
      ],
    },
    {
      key: "patents",
      label: "Patents",
      fields: [
        { name: "Patent", required: false },
        { name: "Year", required: false },
      ],
    },
    {
      key: "workshopsConducted",
      label: "Workshops Conducted",
      fields: [
        { name: "Workshop", required: false },
        { name: "Year", required: false },
      ],
    },
  ];

  return (
    <>
      <section className="space position-relative mb-12">
        <div
          className="bg-img"
          style={{
            backgroundImage: "url('assets/img/update1/bg/bg_overlay_1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img src="assets/img/update1/bg/bg_overlay_1.png" alt="overlay" />
        </div>
        <div className="container text-center">
          <div className="title-area text-center mb-0">
            <h2 className="sec-title text-white">
              Apply For Guest Lecturer or Mantor
            </h2>
          </div>
        </div>
      </section>
      <div className="guest-lecturer-container">
        {/* <h2 className="guest-lecturer-title">Add Guest Lecturer</h2> */}
        <form onSubmit={handleSubmit} className="guest-lecturer-form ">
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="fullName" className="guest-lecturer-label">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              className="guest-lecturer-input"
              required
            />
          </div>

          {/* Gender */}
          <div className="form-group">
            <label htmlFor="gender" className="guest-lecturer-label">
              Gender <span className="required">*</span>
            </label>
            <select
              id="gender"
              name="gender"
              onChange={handleChange}
              className="guest-lecturer-input"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div className="form-group relative">
            <label htmlFor="dateOfBirth" className="guest-lecturer-label">
              Date of Birth <span className="required">*</span>
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              onChange={handleChange}
              className="guest-lecturer-input pl-10 pr-12 appearance-none"
              required
            />

            <i
              style={{ cursor: "pointer" }}
              className="calendar-icon mt-4 absolute top-1/2 right-3 transform -translate-y-1/2 text-xl cursor-pointer"
              onClick={() =>
                document.getElementById("dateOfBirth").showPicker()
              }
            >
              📅
            </i>
          </div>

          {/* Contact Number */}
          <div className="form-group">
            <label htmlFor="contactNumber" className="guest-lecturer-label">
              Contact Number <span className="required">*</span>
            </label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              placeholder="Contact Number"
              onChange={handleChange}
              className="guest-lecturer-input"
              required
            />
          </div>

          {/* Email Address */}
          <div className="form-group">
            <label htmlFor="emailAddress" className="guest-lecturer-label">
              Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              placeholder="Email Address"
              onChange={handleChange}
              className="guest-lecturer-input"
              required
            />
          </div>

          {/* Address */}
          <div className="form-group">
            <label htmlFor="address" className="guest-lecturer-label">
              Address <span className="required">*</span>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              onChange={handleChange}
              className="guest-lecturer-input"
              required
            />
          </div>

          {/* Designation */}
          <div className="form-group">
            <label htmlFor="designation" className="guest-lecturer-label">
              Designation <span className="required">*</span>
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              placeholder="Designation"
              onChange={handleChange}
              className="guest-lecturer-input"
              required
            />
          </div>

          {/* Current Organization */}
          <div className="form-group">
            <label
              htmlFor="currentOrganization"
              className="guest-lecturer-label"
            >
              Current Organization <span className="required">*</span>
            </label>
            <input
              type="text"
              id="currentOrganization"
              name="currentOrganization"
              placeholder="Current Organization"
              onChange={handleChange}
              className="guest-lecturer-input"
              required
            />
          </div>

          {/* Years of Experience */}
          <div className="form-group">
            <label htmlFor="yearsOfExperience" className="guest-lecturer-label">
              Years of Experience <span className="required">*</span>
            </label>
            <input
              type="number"
              id="yearsOfExperience"
              name="yearsOfExperience"
              placeholder="Years of Experience"
              onChange={handleChange}
              className="guest-lecturer-input"
              required
            />
          </div>

          {/* Highest Qualification */}
          <div className="form-group">
            <label
              htmlFor="highestQualification"
              className="guest-lecturer-label"
            >
              Highest Qualification <span className="required">*</span>
            </label>
            <input
              type="text"
              id="highestQualification"
              name="highestQualification"
              placeholder="Highest Qualification"
              onChange={handleChange}
              className="guest-lecturer-input"
              required
            />
          </div>

          {/* University Name */}
          <div className="form-group">
            <label htmlFor="universityName" className="guest-lecturer-label">
              University Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="universityName"
              name="universityName"
              placeholder="University Name"
              onChange={handleChange}
              className="guest-lecturer-input"
              required
            />
          </div>

          {/* Year of Graduation */}
          <div className="form-group">
            <label htmlFor="yearOfGraduation" className="guest-lecturer-label">
              Year of Graduation <span className="required">*</span>
            </label>
            <input
              type="number"
              id="yearOfGraduation"
              name="yearOfGraduation"
              placeholder="Year of Graduation"
              onChange={handleChange}
              className="guest-lecturer-input"
              required
            />
          </div>

          {/* Preferred Timing */}
          <div className="form-group">
            <label htmlFor="preferredTiming" className="guest-lecturer-label">
              Preferred Timing <span className="required">*</span>
            </label>
            <input
              type="text"
              id="preferredTiming"
              name="preferredTiming"
              placeholder="Preferred Timing"
              onChange={handleChange}
              className="guest-lecturer-input"
              required
            />
          </div>

          {/* Role */}
          <div className="form-group">
            <label htmlFor="role" className="guest-lecturer-label">
              Role <span className="required">*</span>
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="guest-lecturer-input"
              required
            >
              <option value="Guest Lecturer">Guest Lecturer</option>
              <option value="Mentor">Mentor</option>
              <option value="Both">Both</option>
            </select>
          </div>
          {/* Mode of Delivery */}
          <div className="form-group">
            <label htmlFor="modeOfDelivery" className="guest-lecturer-label">
              Mode of Delivery <span className="required">*</span>
            </label>
            <select
              id="modeOfDelivery"
              name="modeOfDelivery"
              onChange={handleChange}
              className="guest-lecturer-input"
              required
            >
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>

          {/* Travel Availability */}
          <div className="form-group">
            <label
              htmlFor="travelAvailability"
              className="guest-lecturer-label"
            >
              Travel Availability <span className="required">*</span>
            </label>
            <select
              id="travelAvailability"
              name="travelAvailability"
              onChange={handleChange}
              className="guest-lecturer-input"
              required
            >
              <option value={false}>No</option>
              <option value={true}>Yes</option>
            </select>
          </div>

          {/* LinkedIn Profile (Optional) */}
          <div className="form-group">
            <label htmlFor="linkedInProfile" className="guest-lecturer-label">
              LinkedIn Profile
            </label>
            <input
              type="url"
              id="linkedInProfile"
              name="linkedInProfile"
              placeholder="LinkedIn Profile URL"
              onChange={handleChange}
              className="guest-lecturer-input"
            />
          </div>

          {/* Photo Upload */}
          <div className="form-group">
            <label htmlFor="photo" className="guest-lecturer-label">
              Upload Photo <span className="required">*</span>
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              onChange={handleChange}
              className="guest-lecturer-input"
              accept="image/*"
              required
            />
          </div>
          <br />
          {/* Dynamic Sections */}
          {dynamicSections.map(({ key, label, fields }) => (
            <div key={key} className="guest-lecturer-section">
              <h3 className="guest-lecturer-subtitle">{label}</h3>
              <button
                type="button"
                onClick={() =>
                  addArrayField(
                    key,
                    fields.reduce(
                      (acc, field) => ({
                        ...acc,
                        [field.name.toLowerCase()]: "",
                      }),
                      {}
                    )
                  )
                }
                className="guest-lecturer-add-btn"
              >
                Add {label}
              </button>
              {formData[key].map((item, index) => (
                <div key={index} className="guest-lecturer-array-fields">
                  {fields.map((field) => (
                    <div
                      key={field.name}
                      className="guest-lecturer-array-field"
                    >
                      <label
                        htmlFor={`${key}[${index}].${field.name.toLowerCase()}`}
                        className="guest-lecturer-label"
                      >
                        {field.name}{" "}
                        {field.required && <span className="required">*</span>}
                      </label>
                      <input
                        type={
                          field.name.toLowerCase() === "year"
                            ? "number"
                            : "text"
                        }
                        id={`${key}[${index}].${field.name.toLowerCase()}`}
                        name={`${key}[${index}].${field.name.toLowerCase()}`}
                        placeholder={field.name}
                        value={formData[key][index][field.name.toLowerCase()]}
                        onChange={(e) =>
                          handleArrayChange(
                            index,
                            field.name.toLowerCase(),
                            e.target.value,
                            key
                          )
                        }
                        className="guest-lecturer-input"
                        required={field.required}
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => removeArrayField(key, index)}
                    className="guest-lecturer-remove-btn"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          ))}
          {/* Terms and Conditions Checkbox */}
          {/* <div className="form-group flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="form-checkbox" // You can leave this class for custom styling
              required
            />
            <span className="text-sm ml-2">
              I accept the{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Terms and Conditions
              </a>
            </span>
          </div> */}

          {/* Submit Button */}
          <button type="submit" className="guest-lecturer-submit-btn">
            Submit
          </button>
        </form>

        {/* Toast Container */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
};

export default GuestLecturerForm;
