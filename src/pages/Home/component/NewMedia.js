import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const NewsMediaSection = () => {
  const [news, setNews] = useState([]);

  // Fetch news posts on component mount
  useEffect(() => {
    axios
      .get("https://backend.aharadaedu.in/api/news-media") // New API endpoint
      .then((response) => {
        setNews(response.data.newsMedia); // Assuming the API returns 'newsMedia' instead of 'blogPosts'
      })
      .catch((error) => {
        console.error("Error fetching news media:", error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      className="homeblogsection overflow-hidden space"
      id="news-media-sec"
      style={{ marginTop: "-120px" }}
    >
      <div className="container">
        <div className="mb-35 text-center text-md-start">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-8">
              <div className="title-area mb-md-0">
                <span className="sub-title">
                  <i className="fal fa-newspaper me-2"></i> Latest News & Media
                </span>
                <h2 className="sec-title">Recent News & Updates</h2>
              </div>
            </div>
            <div className="col-md-auto">
              <a href="/news-media" className="th-btn">
                View All News
                <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>

        <Slider
          {...settings}
          className="slider-shadow th-carousel blog-slider-1"
        >
          {news.slice(0, 5).map((newsItem) => (
            <div className="col-md-6 col-xl-4" key={newsItem._id}>
              <div className="th-blog blog-single style2">
                <div
                  className="blog-content"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <h4
                    className="box-title"
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "normal",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      maxWidth: "100%",
                    }}
                  >
                    <Link to={`/news-media/${newsItem._id}`}>
                      {newsItem.title}
                    </Link>
                  </h4>
                </div>
                <div className="blog-meta">
                  <Link to={`/news-media/${newsItem._id}`}>
                    <i className="fa-light fa-clock"></i>
                    {new Date(newsItem.createdAt).toLocaleDateString()}
                  </Link>
                </div>
                <div className="blog-img">
                  <Link to={`/news-media/${newsItem._id}`}>
                    <img
                      src={`https://backend.aharadaedu.in${newsItem.image}`}
                      alt={newsItem.title}
                      style={{
                        width: "100%",
                        height: "220px",
                        objectFit: "cover",
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default NewsMediaSection;
