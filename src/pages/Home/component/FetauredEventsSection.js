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
        src: "assets/lab/166A3563.JPG",
        alt: "Main Campus Building",
        caption: "Our beautiful main campus building",
      },
      {
        id: 2,
        type: "image",
        src: "assets/lab/166A3646.JPG",
        alt: "Campus Library",
        caption: "State-of-the-art library facility",
      },
      {
        id: 3,
        type: "image",
        src: "assets/lab/166A3664.JPG",
        alt: "Campus Garden",
        caption: "The tranquil campus garden",
      },
      {
        id: 4,
        type: "image",
        src: "assets/lab/166A3667.JPG",
        alt: "Campus Garden",
        caption: "The tranquil campus garden",
      },
      {
        id: 5,
        type: "image",
        src: "assets/lab/166A3670.JPG",
        alt: "Main Campus Building",
        caption: "Our beautiful main campus building",
      },
      {
        id: 6,
        type: "image",
        src: "assets/lab/166A3673.JPG",
        alt: "Campus Library",
        caption: "State-of-the-art library facility",
      },
      {
        id: 7,
        type: "image",
        src: " assets/lab/166A4163.JPG",
        alt: "Campus Garden",
        caption: "The tranquil campus garden",
      },
      {
        id: 8,
        type: "image",
        src: " assets/lab/166A4257.JPG",
        alt: "Campus Garden",
        caption: "The tranquil campus garden",
      },
      {
        id: 9,
        type: "image",
        src: " assets/lab/166A4271.JPG",
        alt: "Main Campus Building",
        caption: "Our beautiful main campus building",
      },
      {
        id: 10,
        type: "image",
        src: " assets/lab/166A4303.JPG",
        alt: "Campus Library",
        caption: "State-of-the-art library facility",
      },
      {
        id: 11,
        type: "image",
        src: " assets/lab/166A4306.JPG",
        alt: "Campus Garden",
        caption: "The tranquil campus garden",
      },
      {
        id: 12,
        type: "image",
        src: " assets/lab/166A4407.JPG",
        alt: "Campus Garden",
        caption: "The tranquil campus garden",
      },
      {
        id: 13,
        type: "image",
        src: " assets/lab/166A4428.JPG",
        alt: "Campus Garden",
        caption: "The tranquil campus garden",
      },
      {
        id: 14,
        type: "image",
        src: " assets/lab/166A4430.JPG",
        alt: "Campus Garden",
        caption: "The tranquil campus garden",
      },
      {
        id: 15,
        type: "image",
        src: " assets/lab/166A4640.JPG",
        alt: "Campus Garden",
        caption: "The tranquil campus garden",
      },
      {
        id: 16,
        type: "image",
        src: " assets/lab/166A4733.JPG",
        alt: "Campus Garden",
        caption: "The tranquil campus garden",
      },
      {
        id: 17,
        type: "image",
        src: " assets/lab/166A4802.JPG",
        alt: "Campus Garden",
        caption: "The tranquil campus garden",
      },
      {
        id: 18,
        type: "image",
        src: " assets/lab/166A4813.JPG",
        alt: "Campus Garden",
        caption: "The tranquil campus garden",
      },
      {
        id: 19,
        type: "image",
        src: " assets/lab/166A4831.JPG",
        alt: "Campus Garden",
        caption: "The tranquil campus garden",
      },
      {
        id: 20,
        type: "image",
        src: " assets/lab/166A4839.JPG",
        alt: "Campus Garden",
        caption: "The tranquil campus garden",
      },
    ],
    activities: [
      {
        id: 4,
        type: "image",
        src: " assets/activity/166A3266.JPG",
        alt: "Volunteer Work",
        caption: "Students participating in community service",
      },
      {
        id: 4,
        type: "image",
        src: " assets/activity/166A3382.JPG",
        alt: "Volunteer Work",
        caption: "Students participating in community service",
      },
      {
        id: 4,
        type: "image",
        src: " assets/activity/166A3494.JPG",
        alt: "Volunteer Work",
        caption: "Students participating in community service",
      },
      {
        id: 4,
        type: "image",
        src: " assets/activity/939A6076.jpg",
        alt: "Volunteer Work",
        caption: "Students participating in community service",
      },
      {
        id: 4,
        type: "image",
        src: " assets/activity/939A6238.jpg",
        alt: "Volunteer Work",
        caption: "Students participating in community service",
      },
      {
        id: 4,
        type: "image",
        src: " assets/activity/939A6254.jpg",
        alt: "Volunteer Work",
        caption: "Students participating in community service",
      },
      {
        id: 4,
        type: "image",
        src: " assets/activity/939A6301.jpg",
        alt: "Volunteer Work",
        caption: "Students participating in community service",
      },
      {
        id: 4,
        type: "image",
        src: " assets/activity/939A6321.jpg",
        alt: "Volunteer Work",
        caption: "Students participating in community service",
      },
      {
        id: 1,
        type: "image",
        src: " assets/activity/939A6321.jpg",
        alt: "Student Debate",
        caption: "Inter-college debate competition",
      },
      {
        id: 2,
        type: "image",
        src: " assets/activity/IMG_6099.JPG",
        alt: "Cultural Dance",
        caption: "Traditional dance performance by students",
      },
      {
        id: 2,
        type: "image",
        src: " assets/activity/IMG_6236.JPG",
        alt: "Cultural Dance",
        caption: "Traditional dance performance by students",
      },
      {
        id: 2,
        type: "image",
        src: " assets/activity/IMG_6285.JPG",
        alt: "Cultural Dance",
        caption: "Traditional dance performance by students",
      },
      {
        id: 2,
        type: "image",
        src: " assets/activity/IMG_6496.JPG",
        alt: "Cultural Dance",
        caption: "Traditional dance performance by students",
      },
      {
        id: 2,
        type: "image",
        src: " assets/activity/IMG_6542.JPG",
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
