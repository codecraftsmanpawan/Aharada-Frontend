import React, { useState, useEffect } from "react";
import axios from "axios";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function StudentComplaints() {
  const [studentName, setStudentName] = useState("");
  const [campus, setCampus] = useState("");
  const [admissionNumber, setAdmissionNumber] = useState("");
  const [complaintType, setComplaintType] = useState("");
  const [description, setDescription] = useState("");
  const [attachments, setAttachments] = useState(null);
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    document.title = "Complaints - Aharada Education";

    // Fetch universities data
    const fetchUniversities = async () => {
      try {
        const response = await axios.get(
          "https://backend.aharadaedu.in/api/universities"
        );
        if (response.data.success) {
          setUniversities(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching universities:", error);
        toast.error("Failed to load universities. Please try again.");
      }
    };

    fetchUniversities();
  }, []);

  const handleFileChange = (event) => {
    setAttachments(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("studentName", studentName);
    formData.append("campus", campus);
    formData.append("admissionNumber", admissionNumber);
    formData.append("complaintType", complaintType);
    formData.append("description", description);
    if (attachments) {
      formData.append("attachments", attachments);
    }

    try {
      const response = await axios.post(
        "https://backend.aharadaedu.in/api/complaints",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Complaint submitted successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      console.log(response.data); // Handle the response as needed

      // Reload the page after submission
      window.location.reload();
    } catch (error) {
      toast.error("Error submitting complaint. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.error(error); // Handle the error as needed
    }
  };

  return (
    <div>
      <main>
        <Breadcrumbs />
        <section className="space">
          <div className="container">
            <div className="row">
              {/* Information Section */}
              <div className="col-lg-8">
                <h3 className="title h4 fw-semibold mt-n1">
                  Student Complaints
                </h3>
                <p>
                  Our institution is committed to maintaining a respectful and
                  supportive learning environment. If you have any concerns or
                  issues related to faculty conduct, academic matters, or other
                  aspects of your educational experience, please use this
                  platform to file your complaints. We take all feedback
                  seriously and strive to address each issue promptly and
                  effectively.
                </p>
                <p className="mb-30">
                  To ensure your complaint is processed efficiently, please
                  provide detailed information and any relevant documentation.
                  Our administration team will review your submission and take
                  appropriate action to resolve the matter.
                </p>

                <h3 className="title h4 fw-semibold mt-n1">
                  Types of Complaints
                </h3>
                <p>
                  The complaint system covers a wide range of issues, including
                  but not limited to:
                </p>
                <div className="checklist style5 mt-30">
                  <ul>
                    <li>
                      <i className="fa-solid fa-file-certificate text-theme me-2" />
                      Faculty Conduct and Professionalism
                    </li>
                    <li>
                      <i className="fa-solid fa-file-certificate text-theme me-2" />
                      Academic Integrity and Grievances
                    </li>
                    <li>
                      <i className="fa-solid fa-file-certificate text-theme me-2" />
                      Campus Facilities and Resources
                    </li>
                    <li>
                      <i className="fa-solid fa-file-certificate text-theme me-2" />
                      Discrimination or Harassment Issues
                    </li>
                    <li>
                      <i className="fa-solid fa-file-certificate text-theme me-2" />
                      Other Institutional Concerns
                    </li>
                  </ul>
                </div>
              </div>

              {/* Complaint Form Section */}
              <div className="col-lg-4">
                <form
                  onSubmit={handleSubmit}
                  method="POST"
                  className="th-team-form bg-smoke ajax-contact mt-50 mt-lg-0"
                >
                  <div className="form-title mb-30 text-center">
                    <h3 className="fw-semibold mt-n1">File a Complaint</h3>
                  </div>
                  <div className="row">
                    {/* Name Input */}
                    <div className="col-12">
                      <div className="form-group position-relative">
                        <input
                          type="text"
                          name="studentName"
                          placeholder="Your Name"
                          className="form-control style-white"
                          required
                          value={studentName}
                          onChange={(e) => setStudentName(e.target.value)}
                        />
                        <i className="fa fa-user position-absolute top-50 end-0 translate-middle-y me-3 text-muted"></i>
                      </div>
                    </div>

                    {/* Campus Select */}
                    <div className="col-12 form-group">
                      <select
                        name="campus"
                        id="campus"
                        className="form-select style-white single-select nice-select"
                        required
                        value={campus}
                        onChange={(e) => setCampus(e.target.value)}
                      >
                        <option value="" disabled hidden>
                          Select Campus
                        </option>
                        {universities.length > 0 ? (
                          universities.map((university) => (
                            <option
                              key={university._id}
                              value={university.name}
                            >
                              {university.name}
                            </option>
                          ))
                        ) : (
                          <option disabled>Loading universities...</option>
                        )}
                      </select>
                    </div>

                    {/* Admission Number Input */}
                    <div className="col-12">
                      <div className="form-group position-relative">
                        <input
                          type="text"
                          name="admissionNumber"
                          placeholder="Admission Number"
                          className="form-control style-white"
                          required
                          value={admissionNumber}
                          onChange={(e) => setAdmissionNumber(e.target.value)}
                        />
                        <i className="fa fa-id-card position-absolute top-50 end-0 translate-middle-y me-3 text-muted"></i>
                      </div>
                    </div>

                    {/* Type of Complaint Select */}
                    <div className="col-12 form-group">
                      <select
                        name="complaintType"
                        id="complaintType"
                        className="form-select style-white single-select nice-select"
                        required
                        value={complaintType}
                        onChange={(e) => setComplaintType(e.target.value)}
                      >
                        <option value="" disabled hidden>
                          Select Type of Complaint
                        </option>
                        <option value="Faculty Conduct">Faculty Conduct</option>
                        <option value="Academic Integrity">
                          Academic Integrity
                        </option>
                        <option value="Campus Facilities">
                          Campus Facilities
                        </option>
                        <option value=" Discrimination/Harassment">
                          Discrimination/Harassment
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Description Textarea */}
                    <div className="col-12">
                      <div className="form-group position-relative">
                        <textarea
                          name="description"
                          placeholder="Describe Your Complaint..."
                          className="form-control style-white"
                          rows="5"
                          required
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                        <i className="fa fa-pencil-alt position-absolute top-50 end-0 translate-middle-y me-3 text-muted"></i>
                      </div>
                    </div>

                    {/* Attachments Input */}
                    <div className="col-12">
                      <div className="form-group position-relative">
                        <input
                          type="file"
                          name="attachments"
                          className="form-control style-white"
                          accept=".pdf, .doc, .docx, .jpg, .png"
                          onChange={handleFileChange}
                        />
                        <i className="fa fa-paperclip position-absolute top-50 end-0 translate-middle-y me-3 text-muted"></i>
                      </div>
                      <small className="form-text text-muted">
                        Optional: Attach any relevant documents or evidence.
                      </small>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12">
                      <button type="submit" className="th-btn w-100">
                        Submit Complaint{" "}
                        <i className="fa fa-paper-plane ms-2"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
}

export default StudentComplaints;
