import React, { useState } from "react";
import "./GalleryStyles.css";

const CampusGallery = () => {
  const [activeTab, setActiveTab] = useState("campus");
  const [selectedMedia, setSelectedMedia] = useState(null);

  const galleryData = {
    campus: [
      {
        id: 1,
        type: "image",
        src: "assets/placement/iimt1.jpg",
        alt: "Main Campus Building",
        caption: "Our beautiful main campus building",
      },
      {
        id: 2,
        type: "image",
        src: "assets/placement/sage1.jpg",
        alt: "Campus Library",
        caption: "State-of-the-art library facility",
      },
      {
        id: 3,
        type: "image",
        src: "assets/placement/iimt3.jpg",
        alt: "Campus Garden",
        caption: "The tranquil campus garden",
      },
      {
        id: 4,
        type: "image",
        src: "assets/placement/vidya1.jpg",
        alt: "Campus Garden",
        caption: "The tranquil campus garden",
      },
    ],
    activities: [
      {
        id: 1,
        type: "image",
        src: "assets/img/IMG_7421.JPG",
        alt: "Student Debate",
        caption: "Inter-college debate competition",
      },
      {
        id: 2,
        type: "image",
        src: "assets/img/IMG_8552.JPG",
        alt: "Cultural Dance",
        caption: "Traditional dance performance by students",
      },
      {
        id: 3,
        type: "image",
        src: "assets/img/IMG_8568.JPG",
        alt: "Cultural Dance",
        caption: "Traditional dance performance by students",
      },
      {
        id: 4,
        type: "image",
        src: "assets/img/IMG_8474.JPG",
        alt: "Volunteer Work",
        caption: "Students participating in community service",
      },
    ],
    fest: [
      {
        id: 1,
        type: "image",
        src: "assets/img/a2.jpg",
        alt: "Fest Concert",
        caption: "Live concert during the cultural night",
      },
      {
        id: 2,
        type: "image",
        src: "assets/img/a1.jpg",
        alt: "Fest Concert",
        caption: "Live concert during the cultural night",
      },
      {
        id: 3,
        type: "image",
        src: "assets/img/a3.jpg",
        alt: "Innovation Exhibition",
        caption: "Student projects at the innovation exhibition",
      },
      {
        id: 4,
        type: "image",
        src: "assets/img/a4.jpg",
        alt: "Award Ceremony",
        caption: "Awards ceremony celebrating student achievements",
      },
    ],
  };

  const handleMediaClick = (media) => {
    setSelectedMedia(media);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <section className="uniqGallerySection">
      <div className="uniqGalleryContainer">
        <h1 className="ahrda-programs-title">Campus Gallery</h1>
        <div className="ahrda-title-underline"></div>

        <div className="uniqGalleryTabs">
          <button
            className={`uniqGalleryTab ${
              activeTab === "campus" ? "uniqGalleryTabActive" : ""
            }`}
            onClick={() => setActiveTab("campus")}
          >
            Campus Images & Videos
          </button>
          <button
            className={`uniqGalleryTab ${
              activeTab === "activities" ? "uniqGalleryTabActive" : ""
            }`}
            onClick={() => setActiveTab("activities")}
          >
            Student Activities
          </button>
          <button
            className={`uniqGalleryTab ${
              activeTab === "fest" ? "uniqGalleryTabActive" : ""
            }`}
            onClick={() => setActiveTab("fest")}
          >
            Fest Highlights
          </button>
        </div>

        <div className="uniqGalleryGrid">
          {galleryData[activeTab].map((media) => (
            <div
              key={media.id}
              className="uniqGalleryItem"
              onClick={() => handleMediaClick(media)}
            >
              {media.type === "image" ? (
                <img
                  src={media.src}
                  alt={media.alt}
                  className="uniqGalleryImage"
                />
              ) : (
                <div className="uniqGalleryVideoThumbnail">
                  <img
                    src={media.poster}
                    alt="Video thumbnail"
                    className="uniqGalleryImage"
                  />
                  <div className="uniqGalleryPlayButton">
                    <i className="uniqGalleryPlayIcon">▶</i>
                  </div>
                </div>
              )}
              {/* <div className="uniqGalleryCaption">{media.caption}</div> */}
            </div>
          ))}
        </div>
      </div>

      {selectedMedia && (
        <div className="uniqGalleryModal" onClick={closeModal}>
          <div
            className="uniqGalleryModalContent"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="uniqGalleryCloseButton" onClick={closeModal}>
              &times;
            </span>
            {selectedMedia.type === "image" ? (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                className="uniqGalleryModalImage"
              />
            ) : (
              <video
                src={selectedMedia.src}
                poster={selectedMedia.poster}
                controls
                className="uniqGalleryModalVideo"
              />
            )}
            <div className="uniqGalleryModalCaption">
              {selectedMedia.caption}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CampusGallery;
