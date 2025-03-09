import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { format, isBefore, isSameDay } from "date-fns";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsMediaSection = () => {
  const [news, setNews] = useState([]);
  const [activeNews, setActiveNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch news posts on component mount
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://backend.aharadaedu.in/api/news-media"
        ); // API endpoint
        const allNews = response.data.newsMedia || [];
        setNews(allNews);

        const currentDate = new Date();

        // Filter news where publicDate is on or before today
        const active = allNews.filter((newsItem) => {
          const newsDate = new Date(newsItem.publicDate);
          return (
            isBefore(newsDate, currentDate) || isSameDay(newsDate, currentDate)
          );
        });

        setActiveNews(active);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news media:", error);
        toast.error("Failed to fetch news media!");
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const settings = {
    dots: true,
    infinite: activeNews.length > 3, // Make infinite true only if more than slidesToShow
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          infinite: activeNews.length > 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: activeNews.length > 1,
        },
      },
    ],
  };

  return (
    <>
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
                    <i className="fal fa-newspaper me-2"></i> Latest News &
                    Media
                  </span>
                  <h2 className="sec-title">Recent News & Updates</h2>
                </div>
              </div>
              <div className="col-md-auto">
                <Link to="/news-media" className="th-btn">
                  View All News
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Loading Indicator */}
          {loading ? (
            <div className="text-center py-10">
              <div className="spinner-border text-blue-500" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : activeNews.length > 0 ? (
            <Slider
              {...settings}
              className="slider-shadow th-carousel blog-slider-1"
            >
              {activeNews.slice(0, 5).map((newsItem) => (
                <div className="px-2" key={newsItem._id}>
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
                        <i className="fa-light fa-clock"></i>{" "}
                        {format(new Date(newsItem.publicDate), "PPP")}
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
          ) : (
            <div className="text-center py-5">
              <p>No news media available at this time.</p>
            </div>
          )}
        </div>
      </section>

      {/* Toast Notification Container */}
      <ToastContainer />
    </>
  );
};

export default NewsMediaSection;
