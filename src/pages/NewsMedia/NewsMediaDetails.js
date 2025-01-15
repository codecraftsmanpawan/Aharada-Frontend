import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Head from "../../components/Head/Head";

const NewsMediaDetails = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    axios
      .get(`https://backend.aharadaedu.in/api/news-media/${id}`)
      .then((response) => {
        setNewsItem(response.data.newsMedia);
      })
      .catch((error) => {
        console.error("Error fetching news details:", error);
      });
  }, [id]);

  if (!newsItem) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head />
      <div
        className="news-media-details"
        style={{
          background: "linear-gradient(to bottom, #fdfbf9, #f4ebdd)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="news-media-detail"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "20px 0",
                }}
              >
                <div
                  className="news-title-date"
                  style={{
                    flex: "1 1 100%",
                    marginBottom: "20px",
                  }}
                >
                  <h2 className="news-title" style={{ marginBottom: "10px" }}>
                    {newsItem.title}
                  </h2>
                  <div className="news-meta" style={{ color: "#777" }}>
                    <i className="fa-light fa-clock"></i>
                    {new Date(newsItem.createdAt).toLocaleDateString()}
                  </div>
                </div>
                <div
                  className="news-description"
                  style={{
                    flex: "1 1 100%",
                  }}
                >
                  <p>{newsItem.description}</p>
                </div>
                <div
                  className="news-img"
                  style={{
                    flex: "1 1 100%",
                    paddingRight: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={`https://backend.aharadaedu.in${newsItem.image}`}
                    alt={newsItem.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsMediaDetails;
