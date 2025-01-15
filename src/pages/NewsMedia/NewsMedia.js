import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const NewsMediaSection = () => {
  const [news, setNews] = useState([]);

  // Fetch news posts on component mount
  useEffect(() => {
    axios
      .get("https://backend.aharadaedu.in/api/news-media") // New API endpoint
      .then((response) => {
        setNews(response.data.newsMedia);
      })
      .catch((error) => {
        console.error("Error fetching news media:", error);
      });
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
          {/* Display all news as cards */}
          <div className="row">
            {news.map((newsItem) => (
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
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsMediaSection;
