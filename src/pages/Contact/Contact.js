import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "../../config";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${config.apiBaseUrl}/api/enquiries/submit`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log("API Response:", response.data);
      toast.success("Your message has been sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      reset(); // Reset the form after successful submission
    } catch (error) {
      // console.error("API Error:", error);
      // toast.error("Failed to send your message. Please try again.", {
      //   position: "top-right",
      //   autoClose: 3000,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
    }
  };

  useEffect(() => {
    document.title = "Contact - Aharada Education";
  }, []);

  return (
    <div>
      <ToastContainer />
      <main>
        <Breadcrumbs />
        <div className="space" id="contact-sec">
          <div className="container">
            <div className="map-sec">
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.5712368434183!2d77.7586866753034!3d29.000073875466082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c7b0d3a3a7c7b%3A0xf8c29e81f1a1640f!2sIIMT%20University%20Meerut!5e0!3m2!1sen!2sin!4v1735850378599!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xl-5 mb-30 mb-xl-0">
                <div className="me-xxl-5 mt-60">
                  <div className="title-area mb-25">
                    <h2 className="border-title h3">Have Any Questions?</h2>
                  </div>
                  <p className="mt-n2 mb-25">
                    Have a inquiry or some feedback for us? Fill out the form
                    <br />
                    below to contact our team.
                  </p>
                  <div className="contact-feature">
                    <div className="contact-feature-icon">
                      <i className="fal fa-location-dot" />
                    </div>
                    <div className="media-body">
                      <p className="contact-feature_label">Our Address</p>
                      <a
                        href="https://www.google.com/maps"
                        className="contact-feature_link"
                      >
                        Mawana-Kithaur-Hapur Marg, Atrara,
                        <br />
                        Uttar Pradesh 245206
                      </a>
                    </div>
                  </div>
                  <div className="contact-feature">
                    <div className="contact-feature-icon">
                      <i className="fal fa-phone" />
                    </div>
                    <div className="media-body">
                      <p className="contact-feature_label">Phone Number</p>
                      <a
                        href="tel:+011456586986"
                        className="contact-feature_link"
                      >
                        IIMT University, Meerut : <span>+91-7303381359</span>
                      </a>{" "}
                      <a
                        href="tel:+011456586986"
                        className="contact-feature_link"
                      >
                        SAGE University Indore : <span>+91-7303381359</span>
                      </a>
                      <a
                        href="tel:+011456586986"
                        className="contact-feature_link"
                      >
                        Subharti University, Meerut :{" "}
                        <span>+91-7303381359</span>
                      </a>
                      <a
                        href="tel:+011456586986"
                        className="contact-feature_link"
                      >
                        Dev Bhoomi University :<span>+91-7303381359</span>
                      </a>
                    </div>
                  </div>
                  <div className="contact-feature">
                    <div className="contact-feature-icon">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="media-body">
                      <p className="contact-feature_label">
                        Hours of Operation
                      </p>
                      <span className="contact-feature_link">
                        Monday - Friday: 09:00 - 20:00
                      </span>{" "}
                      <span className="contact-feature_link">
                        Sunday &amp; Saturday: 10:30 - 22:00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7">
                <div className="contact-form-wrap">
                  <span className="sub-title">Contact With Us!</span>
                  <h2 className="border-title">Get in Touch</h2>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="contact-form"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control style-white"
                            placeholder="Your Name*"
                            {...register("name", {
                              required: "Name is required",
                            })}
                          />
                          {errors.name && (
                            <span className="error">{errors.name.message}</span>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control style-white"
                            placeholder="Email Address*"
                            {...register("email", {
                              required: "Email is required",
                              pattern: {
                                value:
                                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "Invalid email address",
                              },
                            })}
                          />
                          {errors.email && (
                            <span className="error">
                              {errors.email.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <select
                            className="form-control style-white"
                            {...register("campus", {
                              required: "Campus is required",
                            })}
                          >
                            <option value="" hidden>
                              Select Campus*
                            </option>
                            <option value="Subharti University, Meerut">
                              Subharti University, Meerut
                            </option>
                            <option value="Sanskrit University, Mathura">
                              Sanskrit University, Mathura
                            </option>
                            <option value="SAGE University Indore">
                              SAGE University Indore
                            </option>
                            <option value="IIMT University, Meerut">
                              IIMT University, Meerut
                            </option>
                          </select>
                          {errors.campus && (
                            <span className="error">
                              {errors.campus.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="tel"
                            className="form-control style-white"
                            placeholder="Phone Number*"
                            {...register("phone", {
                              required: "Phone number is required",
                              pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Invalid phone number",
                              },
                            })}
                          />
                          {errors.phone && (
                            <span className="error">
                              {errors.phone.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <textarea
                            className="form-control style-white"
                            placeholder="Write Your Message*"
                            {...register("message", {
                              required: "Message is required",
                            })}
                          />
                          {errors.message && (
                            <span className="error">
                              {errors.message.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="form-btn col-12 mt-10">
                        <button type="submit" className="th-btn">
                          Send Message
                          <i className="fas fa-long-arrow-right ms-2" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
