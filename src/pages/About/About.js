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
                <div className="img-box1 mb-40 mb-xl-0" data-aos="fade-right">
                  <div className="img1">
                    <img
                      className="tilt-active"
                      src="assets/img/normal/about_1_1.png"
                      alt="About"
                    />
                  </div>

                  <div className="img2">
                    <img
                      className="tilt-active"
                      src="assets/img/normal/about_1_2.png"
                      alt="About"
                    />
                  </div>
                  <div
                    className="shape-mockup jump"
                    data-left="-67px"
                    data-bottom={0}
                  >
                    <img src="assets/img/normal/about_1_shape1.png" alt="img" />
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
                    <i className="fal fa-book me-2" /> About Our University
                  </span>
                  <h2 className="sec-title">
                    Welcome to Aharadaedu University.
                  </h2>
                </div>
                <p className="mt-n2 mb-25">
                  Collaboratively simplify user friendly networks after
                  principle centered coordinate effective methods of empowerment
                  distributed niche markets pursue market positioning
                  web-readiness after resource sucking applications.
                </p>
                <p className="mb-30">
                  Online education, also known as e-learning, is a method of
                  learning that takes place over the internet. It offers
                  individuals the opportunity to acquire knowledge, skills.
                </p>
                <div className="row align-items-center">
                  <div
                    className="col-md-7"
                    data-aos="fade-up"
                    data-aos-delay="800"
                  >
                    <div className="checklist">
                      <ul>
                        <li>Get access to 4,000+ of our top courses</li>
                        <li>Popular topics to learn now</li>
                        <li>Find the right instructor for you</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="why-area-1 space overflow-hidden">
          <div
            className="shape-mockup why-shape-1 jump"
            data-top="10%"
            data-left="7%"
          >
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
                  <div className="text-end">
                    <a className="th-btn mt-30" href="#">
                      Get Started <i className="far fa-arrow-right ms-1" />
                    </a>
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
