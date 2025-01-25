import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(20);

  // Calculate index of the last image on the current page
  const indexOfLastImage = currentPage * imagesPerPage;
  // Calculate index of the first image on the current page
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;

  // Create the array of images (assumed 65 total images)
  const images = [...Array(65)].map((_, index) => ({
    src: `assets/images/${index + 1}.png`,
    alt: `gallery image ${index + 1}`,
  }));

  // Reverse the array to display images in descending order
  const reversedImages = images.reverse();

  // Get the current images to be displayed on this page
  const currentImages = reversedImages.slice(
    indexOfFirstImage,
    indexOfLastImage
  );

  // Inline style for images
  const imageStyle = {
    width: "100%",
    height: "auto",
    maxHeight: "320px",
    objectFit: "cover",
  };

  // Pagination controls
  const handlePageChange = (pageNumber) => {
    if (
      pageNumber >= 1 &&
      pageNumber <= Math.ceil(images.length / imagesPerPage)
    ) {
      setCurrentPage(pageNumber);
    }
  };

  useEffect(() => {
    document.title = "Gallery - Aharada Education";
  }, []);

  return (
    <div>
      <main>
        <Breadcrumbs />
        <div className="space">
          <div className="container px-3">
            <div className="row gy-4 masonary-active">
              {currentImages.map((image, index) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                  <div className="gallery-card">
                    <div className="gallery-img">
                      <img src={image.src} alt={image.alt} style={imageStyle} />
                      <a
                        href={image.src}
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

            {/* Pagination Controls */}
            <div
              className="pagination-controls"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginTop: "100px",
                fontFamily: "Arial, sans-serif",
              }}
            >
              <button
                className="prev-btn"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                style={{
                  padding: "8px 12px",
                  backgroundColor: "#072e46",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: currentPage === 1 ? "not-allowed" : "pointer",
                  opacity: currentPage === 1 ? "0.5" : "1",
                }}
              >
                Previous
              </button>
              <span style={{ fontSize: "16px", color: "#333" }}>
                Page {currentPage}
              </span>
              <button
                className="next-btn"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={
                  currentPage === Math.ceil(images.length / imagesPerPage)
                }
                style={{
                  padding: "8px 12px",
                  backgroundColor: "#072e46",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor:
                    currentPage === Math.ceil(images.length / imagesPerPage)
                      ? "not-allowed"
                      : "pointer",
                  opacity:
                    currentPage === Math.ceil(images.length / imagesPerPage)
                      ? "0.5"
                      : "1",
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Gallery;
