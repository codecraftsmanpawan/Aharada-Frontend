import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Testimonials from "../../components/Testimonials/Testimonials";

function About() {
  useEffect(() => {
    document.title = "About - Aharada Education";
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div>
      <Breadcrumbs />

      <main
        style={{
          background: "linear-gradient(to bottom, #fff, #fff)",
        }}
      >
        <div
          className="space overflow-hidden"
          id="about-sec"
          style={{
            marginTop: "-50px",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6">
                <div className="img-box1 mb-40 mb-xl-0">
                  <div className="img1">
                    <img
                      className="tilt-active"
                      src="assets/img/normal/about_1_1.png"
                      alt="About Aharada"
                    />
                  </div>

                  <div className="img2">
                    <img
                      className="tilt-active"
                      src="assets/img/normal/about_1_2.png"
                      alt="Education"
                    />
                  </div>
                  <div
                    className="shape-mockup jump"
                    data-left="-67px"
                    data-bottom={0}
                  >
                    <img
                      src="assets/img/normal/about_1_shape1.png"
                      alt="Shape"
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <div className="title-area mb-30">
                  <span className="sub-title">
                    <i className="fal fa-book me-2" /> About Aharada Education
                  </span>
                  <h2 className="sec-title">Welcome to Aharada Education.</h2>
                </div>
                <p className="mt-n2 mb-25">
                  Aharada Education is a pioneer in providing high-quality
                  education in fields like Aviation, Entrepreneurship, and
                  Artificial Intelligence. With live training on real aircraft
                  and innovative learning methods, we bridge the gap between
                  theoretical knowledge and practical application.
                </p>
                <p className="mb-30">
                  Our mission is to empower students with cutting-edge skills
                  and knowledge through our unique programs. Whether you're
                  aspiring for a career in aviation, data analytics, or business
                  innovation, Aharada Education offers a learning experience
                  tailored to your goals.
                </p>
                <div className="row align-items-center">
                  <div
                    className="col-md-7"
                    data-aos="fade-up"
                    data-aos-delay="800"
                  >
                    <div className="checklist">
                      <ul>
                        <li>
                          Live training with Fokker F27-500 aircraft and
                          helicopters
                        </li>
                        <li>Programs in Aviation, AI, and Innovation</li>
                        <li>Personalized mentoring for career success</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section
          className="space-top space-extra2-bottom"
          style={{ marginTop: "-80px" }}
        >
          <div className="container">
            <div className="title-area mb-30 text-center">
              <span className="sub-title">
                <i className="fal fa-book me-2" />
                Aharada “Essence”
              </span>
              <h2 className="sec-title">Educate Empower Excel.</h2>
            </div>
            <div className="row">
              <div className="col-xxl-12 col-lg-8">
                <div className="course-single">
                  <div className="course-single-bottom">
                    <div className="tab-content">
                      <div className="tab-pane fade show active">
                        <div className="course-description">
                          <h5 className="h5">Vision</h5>
                          <p>
                            To empower individuals and institutions globally by
                            fostering innovation, building character, and
                            nurturing leadership through cutting-edge
                            educational technologies, driving societal progress
                            and assisting in making India a beacon of
                            excellence.
                          </p>

                          <h5 className="h5 mt-40 mb-10">Mission</h5>

                          <div className="row mt-25">
                            <div className="col-lg-6">
                              <div className="checklist mb-4">
                                <ul>
                                  <li>
                                    To cultivate a culture of research,
                                    resilience, and entrepreneurship, guiding
                                    startups toward meaningful success.{" "}
                                  </li>
                                  <li>
                                    To instill human values, communication
                                    skills, and professionalism, shaping global
                                    leaders of tomorrow.
                                  </li>
                                  <li>
                                    To uphold diplomacy and stability in all
                                    endeavour’s, inspiring students to achieve
                                    personal and national pride.{" "}
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="checklist">
                                <ul>
                                  <li>
                                    To foster holistic development through
                                    innovative solutions that bridge tradition
                                    with modernity, ensuring a sustainable and
                                    Sacred foundation for lifelong learning.
                                  </li>
                                  <li>
                                    To integrate modern technologies like AI and
                                    advanced software to deliver transformative
                                    education tailored to diverse learners.{" "}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <h5 className="h5 mt-40">Core Values</h5>
                          <div className="col-lg-12">
                            <div className="checklist  mt-30 mb-8">
                              <ul>
                                <li>SACRED:</li>
                                <p>
                                  To integrate modern technologies like AI and
                                  advanced software to deliver transformative
                                  education tailored to diverse learners.
                                </p>
                              </ul>
                            </div>
                          </div>
                          <div className="row mt-25">
                            <div className="col-lg-6 ">
                              <div className="checklist mb-4">
                                <ul>
                                  <li>Character Building:</li>
                                  <p>
                                    Embedding human values and ethics in every
                                    learner.
                                  </p>
                                </ul>
                                <ul>
                                  <li>Communication Excellence:</li>
                                  <p>
                                    Equipping learners with skills to express,
                                    connect, and inspire.
                                  </p>
                                </ul>
                                <ul>
                                  <li>Professionalism and Stability:</li>
                                  <p>
                                    Ensuring consistent quality and growth in
                                    all initiatives.
                                  </p>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="checklist mb-4">
                                <ul>
                                  <li>Research and Innovation: </li>
                                  <p>
                                    Pioneering solutions and strategies to
                                    address emerging educational challenges.
                                  </p>
                                </ul>
                                <ul>
                                  <li>Leadership Development: </li>
                                  <p>
                                    Preparing students to lead with empathy,
                                    professionalism, and confidence.
                                  </p>
                                </ul>
                                <ul>
                                  <li>Pride in India:</li>
                                  <p>
                                    Advancing education to make India a global
                                    leader in knowledge and innovation.
                                  </p>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className="why-area-1 space overflow-hidden"
          style={{ marginTop: "-50px" }}
        >
          <div className="shape-mockup why-shape-1 jump">
            <img src="assets/img/normal/about_1_shape1.png" alt="img" />
          </div>
          <div
            className="shape-mockup why-shape-2"
            data-bg-src="assets/img/normal/wcu_1_shape1.png"
          />
          <div
            className="shape-mockup why-shape-3 jump-reverse"
            data-bottom="25%"
            data-right="-3%"
          >
            {/* <img src="assets/img/normal/wcu_1_shape2.png" alt="img" /> */}
          </div>
          <div
            className="container"
            style={{
              marginTop: "-80px",
            }}
          >
            <div className="row align-items-center">
              <div className="col-xl-6" data-aos="fade-right">
                <div className="wcu-img-1">
                  <div className="img1">
                    <img src="assets/img/normal/wcu_1_1.png" alt="img" />
                  </div>
                  <div className="student-count jump-reverse">
                    <h5 className="title">
                      <span className="text-theme">
                        <span className="counter-number">10</span>k+
                      </span>
                      Active Students
                    </h5>
                    <img
                      src="assets/img/normal/student-group_1_1.png"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <div className="wcu-wrap1">
                  <div className="title-area mb-25">
                    <span className="sub-title">
                      <i className="fal fa-book me-2" /> WHY CHOOSE AHARADA
                      EDUCATION
                    </span>
                    <h2 className="sec-title">
                      A World of Expert Educators at Your Fingertips
                    </h2>
                    <p className="sec-text mt-20">
                      Aharada Education provides unparalleled learning
                      opportunities, empowering students with expert guidance,
                      personalized support, and flexible learning paths. We are
                      dedicated to creating a future where education is
                      accessible, impactful, and transformative.
                    </p>
                  </div>
                  <div className="row gy-4">
                    <div
                      className="col-md-6"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div className="wcu-box">
                        <div className="wcu-box_icon">
                          <i className="fas fa-check-circle" />
                        </div>
                        <div className="wcu-box_details">
                          <h3 className="box-title">Expert Educators</h3>
                          <p className="wcu-box_text">
                            Our instructors are seasoned professionals with
                            real-world experience, ensuring high-quality
                            learning.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-6"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <div className="wcu-box">
                        <div className="wcu-box_icon">
                          <i className="fas fa-check-circle" />
                        </div>
                        <div className="wcu-box_details">
                          <h3 className="box-title">Flexible Learning</h3>
                          <p className="wcu-box_text">
                            Study at your own pace with personalized schedules
                            that fit your lifestyle, making learning easier and
                            more convenient.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-6"
                      data-aos="fade-up"
                      data-aos-delay="600"
                    >
                      <div className="wcu-box">
                        <div className="wcu-box_icon">
                          <i className="fas fa-check-circle" />
                        </div>
                        <div className="wcu-box_details">
                          <h3 className="box-title">Affordable Programs</h3>
                          <p className="wcu-box_text">
                            Aharada Education offers competitive pricing,
                            ensuring that education is accessible.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-6"
                      data-aos="fade-up"
                      data-aos-delay="800"
                    >
                      <div className="wcu-box">
                        <div className="wcu-box_icon">
                          <i className="fas fa-check-circle" />
                        </div>
                        <div className="wcu-box_details">
                          <h3 className="box-title">Global Reach</h3>
                          <p className="wcu-box_text">
                            Join a diverse community of learners from around the
                            world and broaden your horizons through
                            collaborative learning.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Testimonials />
      </main>
    </div>
  );
}

export default About;
