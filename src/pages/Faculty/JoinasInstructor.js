import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "../../config"; // Ensure this path is correct

const InstructorApplication = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    campus: "",
    appliedSubject: "",
    qualification: "",
    experience: "",
    resumeLink: "",
  });

  const [universities, setUniversities] = useState([]);

  // Fetch universities from the API on component mount
  useEffect(() => {
    console.log("Config:", config);
    axios
      .get(`${config.apiBaseUrl}/api/universities`)
      .then((response) => {
        if (response.data.success) {
          setUniversities(response.data.data); // Store universities data
        } else {
          toast.error("Failed to fetch universities.");
        }
      })
      .catch((error) => {
        toast.error("An error occurred while fetching universities.");
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitApplication = () => {
    // Validate all required fields
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.campus ||
      !formData.appliedSubject ||
      !formData.qualification ||
      !formData.experience ||
      !formData.resumeLink
    ) {
      toast.error("Please fill out all the required fields.");
      return;
    }

    const data = JSON.stringify(formData);

    const axiosConfig = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${config.apiBaseUrl}/api/applied-instructors`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(axiosConfig)
      .then((response) => {
        toast.success("Application submitted successfully!");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        toast.error("An error occurred while submitting the application.");
        console.error(error);
      });
  };

  return (
    <div className="container" style={{ maxWidth: "100%", marginTop: "50px" }}>
      <div className="card">
        <div className="card-header bg-primary text-white">
          Instructor Application
        </div>
        <div className="card-body">
          <h5 className="card-title">Fill in your details</h5>
          <form className="mb-12">
            <div className="row">
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Phone <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Campus <span className="text-danger">*</span>
                </label>
                <select
                  className="form-control"
                  name="campus"
                  value={formData.campus}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Campus</option>
                  {universities.map((university) => (
                    <option key={university._id} value={university.name}>
                      {university.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Applied Subject <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="appliedSubject"
                  value={formData.appliedSubject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Qualification <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Experience <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Resume Link <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="resumeLink"
                  value={formData.resumeLink}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={submitApplication}
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>

      {/* ToastContainer to display toasts */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default InstructorApplication;
