import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";

const NewsMediaSection = () => {
  const [news, setNews] = useState([]);
  const [activeNews, setActiveNews] = useState([]);
  const [scheduledNews, setScheduledNews] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch news posts on component mount
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://backend.aharadaedu.in/api/news-media"
        ); // API endpoint
        const allNews = response.data.newsMedia || [];
        setNews(allNews);

        const currentDate = moment();

        // Separate active and scheduled news using Moment.js
        const active = allNews.filter((newsItem) => {
          const newsDate = moment(newsItem.publicDate);
          // Active if the news item's publicDate is today or before today
          return (
            newsDate.isValid() && newsDate.isSameOrBefore(currentDate, "day")
          );
        });

        const scheduled = allNews.filter((newsItem) => {
          const newsDate = moment(newsItem.publicDate);
          // Scheduled if the news item's publicDate is after today
          return newsDate.isValid() && newsDate.isAfter(currentDate, "day");
        });

        setActiveNews(active);
        setScheduledNews(scheduled);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news media:", error);
        toast.error("Failed to fetch news media!");
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <Breadcrumbs />
      <section
        className="homeblogsection overflow-hidden space"
        id="news-media-sec"
        style={{
          background: "linear-gradient(to bottom, #fdfbf9, #f4ebdd)",
        }}
      >
        <div className="container">
          {/* Loading Indicator */}
          {loading ? (
            <div className="text-center py-10">
              <div className="spinner-border text-blue-500" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              {/* Active News Media */}
              <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
              <div className="row">
                {activeNews.length > 0 ? (
                  activeNews.map((newsItem) => (
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
                            <i className="fa-light fa-clock"></i>{" "}
                            {newsItem.publicDate &&
                            moment(newsItem.publicDate).isValid()
                              ? moment(newsItem.publicDate).format("LLL")
                              : "Date not available"}
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
                  ))
                ) : (
                  <div className="col-12 text-center py-5">
                    <p>No active news media available at this time.</p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Toast Notification Container */}
      <ToastContainer />
    </>
  );
};

export default NewsMediaSection;
