import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Footer from "../../components/Footer/Footer";

function FacultyDetails() {
  useEffect(() => {
    document.title = "Faculty Details- Aharada Education";
  }, []);

  return (
    <div>
      <Header />
      <Breadcrumbs />
      <main>
        <section className="space">
          <div className="container">
            <div className="team-details-about-info">
              <div className="row gx-40">
                <div className="col-lg-6 position-relative">
                  <div className="team-details-thumb">
                    <img
                      src="assets/img/team/team-details.png"
                      alt="team image"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-box">
                    <div className="about-info">
                      <h2 className="title">Hirmar Ubunti</h2>
                      <p className="desig">A certified instructor from Edura</p>
                    </div>
                    <div className="th-social style2">
                      <a target="_blank" href="https://facebook.com/">
                        <i className="fab fa-facebook-f" />
                      </a>{" "}
                      <a target="_blank" href="https://twitter.com/">
                        <i className="fab fa-twitter" />
                      </a>{" "}
                      <a target="_blank" href="https://instagram.com/">
                        <i className="fab fa-instagram" />
                      </a>{" "}
                      <a target="_blank" href="https://linkedin.com/">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                  <p>
                    I’m Web Developer. I’m an English and all Teacher with a
                    serious love for teaching. Leverage agile frameworks provide
                    robust synopsis higher leveler overviewed. Iterative and
                    approaches to corporate and strategy's foster collaborative
                    thinking.
                  </p>
                  <div className="about-quality">
                    <div className="quality-box">
                      <span className="quality-text">Course: 4</span>{" "}
                      <span className="quality-text">Students: 50</span>
                    </div>
                    <div className="quality-box">
                      <span className="quality-text">Reviews:</span>
                      <div className="course-rating">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 4.00 out of 5"
                        >
                          <span style={{ width: "79%" }}>
                            Rated <strong className="rating">4.00</strong> out
                            of 5
                          </span>
                        </div>
                        4.00 (70)
                      </div>
                    </div>
                    <div className="quality-box">
                      <span className="quality-text">Experience:</span>{" "}
                      <span className="quality-text">10 Years</span>
                    </div>
                  </div>
                  <div className="about-contact-wrap">
                    <div className="about-contact">
                      <div className="about-contact-icon">
                        <i className="fas fa-phone" />
                      </div>
                      <div className="about-contact-details">
                        <span className="about-contact-subtitle">
                          Call Any Time:
                        </span>
                        <h6 className="about-contact-title">
                          +(963) 2145 3654
                        </h6>
                      </div>
                    </div>
                    <div className="about-contact">
                      <div className="about-contact-icon">
                        <i className="fas fa-envelope" />
                      </div>
                      <div className="about-contact-details">
                        <span className="about-contact-subtitle">
                          Mail Any Time:
                        </span>
                        <h6 className="about-contact-title">
                          hirmarubunti@gmail.com
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-top">
              <div className="row">
                <div className="col-lg-8">
                  <h3 className="title h4 fw-semibold mt-n1">Biography</h3>
                  <p>
                    The curriculum of the certification program covers a wide
                    range of topics relevant to the field, providing a
                    well-rounded education and preparing candidates to excel in
                    their chosen profession. It may include lectures,
                    interactive sessions, case studies, hands-on projects, and
                    assessments to evaluate the candidates' understanding and
                    proficiency.
                  </p>
                  <p className="mb-30">
                    To be eligible for the candidates may need to fulfill
                    certain prerequisites such as completing specific courses,
                    possessing relevant work experience, or holding a related
                    degree or certification.
                  </p>
                  <div className="row gy-4 mb-60">
                    <div className="col-md-4">
                      <div className="skill-card">
                        <h4 className="skill-card-number">
                          <span className="counter-number">100</span>%
                        </h4>
                        <p className="skill-card-title">Professional Teacher</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="skill-card">
                        <h4 className="skill-card-number">
                          <span className="counter-number">22</span>
                        </h4>
                        <p className="skill-card-title">
                          Best Teacher Awards Win
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="skill-card">
                        <h4 className="skill-card-number">
                          <span className="counter-number">10</span>
                        </h4>
                        <p className="skill-card-title">
                          Government Certificate
                        </p>
                      </div>
                    </div>
                  </div>
                  <h3 className="title h4 fw-semibold mt-n1">
                    Education Qualification
                  </h3>
                  <p>
                    I’ve spent years figuring out how to teach technical skills
                    in a classroom environment, and I’m really excited to
                    finally share my expertise with you. I can confidently say
                    that my online courses are doubt the most comprehensive ones
                    on the market.
                  </p>
                  <div className="checklist style5 mt-30">
                    <ul>
                      <li>
                        <i className="fa-solid fa-file-certificate text-theme me-2" />{" "}
                        B.S. State University of New York, United States of
                        America, M.A.C. Ph.D. Urbana-Champaign
                      </li>
                      <li>
                        <i className="fa-solid fa-file-certificate text-theme me-2" />{" "}
                        B.S. State University of California, United States of
                        America, B.S.C. Ph.D. Urbana-Champaign
                      </li>
                      <li>
                        <i className="fa-solid fa-file-certificate text-theme me-2" />{" "}
                        B.S. State University of Las Vegas, United States of
                        America, B.S.S. Ph.D. Urbana-Champaign
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="testimonial-section">
                    <h3 className="title h4 fw-semibold mt-n1">
                      What Students Say
                    </h3>
                    <div className="testimonial-item">
                      <p className="testimonial-quote">
                        "Hirmar is an excellent teacher. His teaching methods
                        are clear and easy to follow. I've learned so much in
                        his classes."
                      </p>
                      <span className="testimonial-author">- John Doe</span>
                    </div>
                    <div className="testimonial-item">
                      <p className="testimonial-quote">
                        "One of the best teachers I've had. He explains complex
                        topics in a simple and engaging way. Highly
                        recommended!"
                      </p>
                      <span className="testimonial-author">- Jane Smith</span>
                    </div>
                    <div className="testimonial-item">
                      <p className="testimonial-quote">
                        "Hirmar’s dedication and passion for teaching is
                        inspiring. His classes are always engaging and
                        informative."
                      </p>
                      <span className="testimonial-author">- Sarah Lee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default FacultyDetails;
