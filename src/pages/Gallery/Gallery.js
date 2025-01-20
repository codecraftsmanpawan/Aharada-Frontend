import React, { useEffect } from "react";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

function Gallery() {
  useEffect(() => {
    document.title = "Gallery - Aharada Education";
  }, []);

  // Inline style for images
  const imageStyle = {
    width: "100%",
    height: "auto",
    maxHeight: "320px",
    objectFit: "cover",
  };

  return (
    <div>
      <main>
        <Breadcrumbs />
        <div className="space">
          <div className="container px-3">
            {" "}
            {/* Added padding for equal spacing */}
            <div className="row gy-4 masonary-active">
              {[...Array(20)].map((_, index) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                  <div className="gallery-card">
                    <div className="gallery-img">
                      <img
                        src={`assets/images/${index + 1}.png`}
                        alt={`gallery image ${index + 1}`}
                        style={imageStyle}
                      />
                      <a
                        href={`assets/images/${index + 1}.png`}
                        className="gallery-btn popup-image"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-eye" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Gallery;
