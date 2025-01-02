import React, { useEffect } from "react";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

function StudentComplaints() {
  useEffect(() => {
    document.title = "Complaints - Aharada Education";
  }, []);
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
                  action=""
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
                      >
                        <option value="" disabled selected hidden>
                          Select Campus
                        </option>
                        <option value="meerut">IIMT University, Meerut</option>
                        <option value="indore">SAGE University, Indore</option>
                        <option value="subharti">
                          Subharti University, Meerut
                        </option>
                        <option value="dev-bhoomi">
                          Dev Bhoomi Uttarakhand University
                        </option>
                        {/* Add more campuses as needed */}
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
                      >
                        <option value="" disabled selected hidden>
                          Type of Complaint
                        </option>
                        <option value="faculty_conduct">Faculty Conduct</option>
                        <option value="academic_integrity">
                          Academic Integrity
                        </option>
                        <option value="facility">Campus Facilities</option>
                        <option value="harassment">
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
    </div>
  );
}

export default StudentComplaints;
