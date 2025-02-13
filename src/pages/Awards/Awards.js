import React, { useState, useEffect } from "react";

const Awards = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div>
      <div
        className="space"
        style={{
          background: "linear-gradient(to bottom, #fdfbf9, #f4ebdd)",
          marginTop: "-40px",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 text-center">
              <div className="title-area mb-35">
                <span className="sub-title">Awards and Recognitions</span>
                <h2
                  className="sec-title fw-semibold"
                  style={{ color: "#cd9644" }}
                >
                  Awards and Recognitions
                </h2>
              </div>
              <div
                className="row gy-4 mb-5"
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                  gap: "1rem",
                }}
              >
                {/* Card 1 */}
                <div className="col-md-4" style={{ padding: "0" }}>
                  <div
                    className="feature-card"
                    style={{ height: "350px", width: "380px" }}
                  >
                    <div
                      className="feature-card_icon"
                      style={{ height: "100%", width: "100%" }}
                    >
                      <img
                        src="./assets/img/Certificate.JPG"
                        alt="icon"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4" style={{ padding: "0" }}>
                  <div
                    className="feature-card style2"
                    style={{ height: "350px", width: "380px" }}
                  >
                    <div
                      className="feature-card_icon"
                      style={{ height: "100%" }}
                    >
                      <img
                        src="./assets/img/Certificate.JPG"
                        alt="icon"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4" style={{ padding: "0" }}>
                  <div
                    className="feature-card style2"
                    style={{ height: "350px", width: "380px" }}
                  >
                    <div
                      className="feature-card_icon"
                      style={{ height: "100%" }}
                    >
                      <img
                        src="./assets/img/Certificate.JPG"
                        alt="icon"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
