import React from "react";

const AwardsSection = () => {
  return (
    <div
      className="space"
      data-bg-src="assets/img/update1/bg/why_bg_2.png"
      style={{
        background: "linear-gradient(to bottom, #fdfbf9, #f4ebdd)",
        marginTop: "-40px",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 mb-45 mb-xl-0 text-center text-xl-start">
            <div className="title-area mb-35">
              <span className="sub-title">Awards and Recognitions</span>
              <h2
                className="sec-title fw-semibold"
                style={{ color: "#cd9644" }}
              >
                Awards and Recognitions
              </h2>
            </div>
            <div className="row gy-4 mb-5">
              <div className="col-md-6">
                <div className="feature-card style2">
                  <div className="feature-card_icon">
                    <img src="./assets/img/Certificate.jpg" alt="icon" />
                  </div>
                  {/* <h3 className="feature-card_title"> Certificate</h3> */}
                  {/* <p className="feature-card_text">
                    Innovative markets without extensive coordinate stand alone
                    catalysts for change before bricks
                  </p> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature-card style2">
                  <div className="feature-card_icon">
                    <img src="./assets/img/Certificate.jpg" alt="icon" />
                  </div>
                  {/* <h3 className="feature-card_title">Educational Support</h3> */}
                  {/* <p className="feature-card_text">
                    Innovative markets without extensive coordinate stand alone
                    catalysts for change before bricks
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="ps-xxl-5 ms-xl-2">
              <div className="video-box2">
                <img src="./assets/img/about-us.webp" alt="video" />{" "}
                <a
                  href="https://youtu.be/AYVMWDkMyxY?si=HD0kFjuoZTW4_IbZ"
                  className="play-btn style3 popup-video"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;
