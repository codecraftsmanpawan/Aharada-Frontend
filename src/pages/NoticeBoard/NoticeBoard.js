import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import NoticeItem from "./NoticeItem";
import NoticeDetail from "./NoticeDetail";
import "./NoticeBoard.css";
import { Link } from "react-router-dom";

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]); // State to store fetched notices
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.title = "Notices - Aharada Education";

    // Fetch notices from the API
    axios
      .get("https://backend.aharadaedu.in/api/notices")
      .then((response) => {
        if (response.data.message === "Notices fetched successfully") {
          // Sort notices by date in descending order
          const sortedNotices = response.data.notices.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          );
          setNotices(sortedNotices); // Set sorted notices to state
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the notices:", error);
      });
  }, []);

  // Filter notices based on search term
  const filteredNotices = notices.filter(
    (notice) =>
      notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notice.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Breadcrumbs />
      <div className="notice-board">
        <section className="space py-5">
          <div className="container">
            <div className="row">
              {/* Notice List Section */}
              <div className="col-lg-8">
                <h3 className="title h4 fw-semibold mt-n1 mb-4">
                  Notice Board
                </h3>
                <p>
                  Stay updated with the latest notices and announcements from
                  the university. Browse through the list below or use the
                  search bar to find specific notices.
                </p>
                {/* Search Bar */}
                <div className="search-bar mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search notices..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                {/* Notices List */}
                {filteredNotices.length > 0 ? (
                  filteredNotices.map((notice) => (
                    <NoticeItem
                      key={notice._id}
                      notice={notice}
                      onSelect={setSelectedNotice}
                    />
                  ))
                ) : (
                  <p>No notices found.</p>
                )}
              </div>

              {/* Sidebar with Upcoming Events */}
              <div className="col-lg-4">
                <div
                  className="widget widget_banner"
                  data-overlay="theme"
                  data-opacity={9}
                  // data-bg-src="../assets/img/university/2025.png"
                >
                  <div className="widget-banner">
                    <h4 className="title text-white">
                      Need Help? We Are Here To Help You
                    </h4>
                    <div className="">
                      <img src="../assets/img/university/02.jpg" alt="img" />
                    </div>
                    <h5 className="subtitle mt-4">You Get Admission</h5>
                    <a href="tel:+91-7303381360" className="link">
                      +91-7303381360
                    </a>{" "}
                    <Link to="/apply-now" className="th-btn style7">
                      Apply Now <i className="far fa-arrow-right ms-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notice Detail Modal */}
        {selectedNotice && (
          <NoticeDetail
            notice={selectedNotice}
            onClose={() => setSelectedNotice(null)}
          />
        )}
      </div>
    </div>
  );
};

export default NoticeBoard;
