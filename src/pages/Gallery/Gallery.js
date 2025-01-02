import React, { useEffect } from "react";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

function Gallery() {
  useEffect(() => {
    document.title = "Gallery - Aharada Education";
  }, []);
  return (
    <div>
      <main>
        <Breadcrumbs />
        <div className="space">
          <div className="container">
            <div className="row gy-4 masonary-active">
              <div className="col-md-6 col-xxl-auto filter-item">
                <div className="gallery-card">
                  <div className="gallery-img">
                    <img
                      src="assets/img/gallery/gallery_1_1.jpg"
                      alt="gallery image"
                    />{" "}
                    <a
                      href="assets/img/gallery/gallery_1_1.jpg"
                      className="gallery-btn popup-image"
                    >
                      <i className="fas fa-eye" />
                    </a>
                  </div>
                  <div className="gallery-content">
                    <span className="gallery-tag">IT Solution</span>
                    <h2 className="gallery-title">Digital Marketing</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xxl-auto filter-item">
                <div className="gallery-card">
                  <div className="gallery-img">
                    <img
                      src="assets/img/gallery/gallery_1_2.jpg"
                      alt="gallery image"
                    />{" "}
                    <a
                      href="assets/img/gallery/gallery_1_2.jpg"
                      className="gallery-btn popup-image"
                    >
                      <i className="fas fa-eye" />
                    </a>
                  </div>
                  <div className="gallery-content">
                    <span className="gallery-tag">IT Solution</span>
                    <h2 className="gallery-title">Web Development</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xxl-auto filter-item">
                <div className="gallery-card">
                  <div className="gallery-img">
                    <img
                      src="assets/img/gallery/gallery_1_3.jpg"
                      alt="gallery image"
                    />{" "}
                    <a
                      href="assets/img/gallery/gallery_1_3.jpg"
                      className="gallery-btn popup-image"
                    >
                      <i className="fas fa-eye" />
                    </a>
                  </div>
                  <div className="gallery-content">
                    <span className="gallery-tag">IT Solution</span>
                    <h2 className="gallery-title">Product Marketing</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xxl-auto filter-item">
                <div className="gallery-card">
                  <div className="gallery-img">
                    <img
                      src="assets/img/gallery/gallery_1_4.jpg"
                      alt="gallery image"
                    />{" "}
                    <a
                      href="assets/img/gallery/gallery_1_4.jpg"
                      className="gallery-btn popup-image"
                    >
                      <i className="fas fa-eye" />
                    </a>
                  </div>
                  <div className="gallery-content">
                    <span className="gallery-tag">IT Solution</span>
                    <h2 className="gallery-title">Data Analysis</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xxl-auto filter-item">
                <div className="gallery-card">
                  <div className="gallery-img">
                    <img
                      src="assets/img/gallery/gallery_1_5.jpg"
                      alt="gallery image"
                    />{" "}
                    <a
                      href="assets/img/gallery/gallery_1_5.jpg"
                      className="gallery-btn popup-image"
                    >
                      <i className="fas fa-eye" />
                    </a>
                  </div>
                  <div className="gallery-content">
                    <span className="gallery-tag">IT Solution</span>
                    <h2 className="gallery-title">Brand Growth All</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xxl-auto filter-item">
                <div className="gallery-card">
                  <div className="gallery-img">
                    <img
                      src="assets/img/gallery/gallery_1_6.jpg"
                      alt="gallery image"
                    />{" "}
                    <a
                      href="assets/img/gallery/gallery_1_6.jpg"
                      className="gallery-btn popup-image"
                    >
                      <i className="fas fa-eye" />
                    </a>
                  </div>
                  <div className="gallery-content">
                    <span className="gallery-tag">IT Solution</span>
                    <h2 className="gallery-title">Content Writing</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xxl-auto filter-item">
                <div className="gallery-card">
                  <div className="gallery-img">
                    <img
                      src="assets/img/gallery/gallery_1_7.jpg"
                      alt="gallery image"
                    />{" "}
                    <a
                      href="assets/img/gallery/gallery_1_7.jpg"
                      className="gallery-btn popup-image"
                    >
                      <i className="fas fa-eye" />
                    </a>
                  </div>
                  <div className="gallery-content">
                    <span className="gallery-tag">IT Solution</span>
                    <h2 className="gallery-title">UI/UX Design</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xxl-auto filter-item">
                <div className="gallery-card">
                  <div className="gallery-img">
                    <img
                      src="assets/img/gallery/gallery_1_8.jpg"
                      alt="gallery image"
                    />{" "}
                    <a
                      href="assets/img/gallery/gallery_1_8.jpg"
                      className="gallery-btn popup-image"
                    >
                      <i className="fas fa-eye" />
                    </a>
                  </div>
                  <div className="gallery-content">
                    <span className="gallery-tag">IT Solution</span>
                    <h2 className="gallery-title">JavaScript</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xxl-auto filter-item">
                <div className="gallery-card">
                  <div className="gallery-img">
                    <img
                      src="assets/img/gallery/gallery_1_9.jpg"
                      alt="gallery image"
                    />{" "}
                    <a
                      href="assets/img/gallery/gallery_1_9.jpg"
                      className="gallery-btn popup-image"
                    >
                      <i className="fas fa-eye" />
                    </a>
                  </div>
                  <div className="gallery-content">
                    <span className="gallery-tag">IT Solution</span>
                    <h2 className="gallery-title">Wordpress Programing</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xxl-auto filter-item">
                <div className="gallery-card">
                  <div className="gallery-img">
                    <img
                      src="assets/img/gallery/gallery_1_1.jpg"
                      alt="gallery image"
                    />{" "}
                    <a
                      href="assets/img/gallery/gallery_1_1.jpg"
                      className="gallery-btn popup-image"
                    >
                      <i className="fas fa-eye" />
                    </a>
                  </div>
                  <div className="gallery-content">
                    <span className="gallery-tag">IT Solution</span>
                    <h2 className="gallery-title">Digital Marketing</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xxl-auto filter-item">
                <div className="gallery-card">
                  <div className="gallery-img">
                    <img
                      src="assets/img/gallery/gallery_1_2.jpg"
                      alt="gallery image"
                    />{" "}
                    <a
                      href="assets/img/gallery/gallery_1_2.jpg"
                      className="gallery-btn popup-image"
                    >
                      <i className="fas fa-eye" />
                    </a>
                  </div>
                  <div className="gallery-content">
                    <span className="gallery-tag">IT Solution</span>
                    <h2 className="gallery-title">Web Development</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xxl-auto filter-item">
                <div className="gallery-card">
                  <div className="gallery-img">
                    <img
                      src="assets/img/gallery/gallery_1_3.jpg"
                      alt="gallery image"
                    />{" "}
                    <a
                      href="assets/img/gallery/gallery_1_3.jpg"
                      className="gallery-btn popup-image"
                    >
                      <i className="fas fa-eye" />
                    </a>
                  </div>
                  <div className="gallery-content">
                    <span className="gallery-tag">IT Solution</span>
                    <h2 className="gallery-title">Product Marketing</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xxl-auto filter-item">
                <div className="gallery-card">
                  <div className="gallery-img">
                    <img
                      src="assets/img/gallery/gallery_1_4.jpg"
                      alt="gallery image"
                    />{" "}
                    <a
                      href="assets/img/gallery/gallery_1_4.jpg"
                      className="gallery-btn popup-image"
                    >
                      <i className="fas fa-eye" />
                    </a>
                  </div>
                  <div className="gallery-content">
                    <span className="gallery-tag">IT Solution</span>
                    <h2 className="gallery-title">Data Analysis</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xxl-auto filter-item">
                <div className="gallery-card">
                  <div className="gallery-img">
                    <img
                      src="assets/img/gallery/gallery_1_5.jpg"
                      alt="gallery image"
                    />{" "}
                    <a
                      href="assets/img/gallery/gallery_1_5.jpg"
                      className="gallery-btn popup-image"
                    >
                      <i className="fas fa-eye" />
                    </a>
                  </div>
                  <div className="gallery-content">
                    <span className="gallery-tag">IT Solution</span>
                    <h2 className="gallery-title">Brand Growth All</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xxl-auto filter-item">
                <div className="gallery-card">
                  <div className="gallery-img">
                    <img
                      src="assets/img/gallery/gallery_1_6.jpg"
                      alt="gallery image"
                    />{" "}
                    <a
                      href="assets/img/gallery/gallery_1_6.jpg"
                      className="gallery-btn popup-image"
                    >
                      <i className="fas fa-eye" />
                    </a>
                  </div>
                  <div className="gallery-content">
                    <span className="gallery-tag">IT Solution</span>
                    <h2 className="gallery-title">Big Data Science</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Gallery;
