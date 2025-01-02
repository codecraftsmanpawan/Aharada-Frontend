import React, { useEffect, useState } from "react";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

import NoticeItem from "./NoticeItem";
import NoticeDetail from "./NoticeDetail";
import "./NoticeBoard.css";

const NoticeBoard = () => {
  useEffect(() => {
    document.title = "Notices - Aharada Education";
  }, []);

  const notices = [
    {
      id: 1,
      title: "Semester Exams Schedule Released",
      date: "2024-05-10",
      description:
        "The schedule for the upcoming semester exams has been released. Please check the official website for detailed information.",
      content:
        "Dear Students,\n\nWe are pleased to announce that the semester exams schedule has been finalized. The exams will commence from June 1st and conclude by June 15th. Detailed timetables for each department are available on the university portal. Please ensure you are well-prepared and adhere to the exam guidelines.\n\nBest regards,\nAdministration",
    },
    {
      id: 2,
      title: "Holiday Announcement for Labor Day",
      date: "2024-04-25",
      description:
        "The university will observe a holiday on May 1st for Labor Day. All classes and examinations scheduled on this day will be rescheduled.",
      content:
        "Dear Students and Faculty,\n\nIn observance of Labor Day, the university will remain closed on May 1st. Any classes or examinations planned for this day will be rescheduled accordingly. Please stay tuned for further updates on the university portal.\n\nEnjoy the holiday!\nAdministration",
    },
    {
      id: 3,
      title: "New Library Resources Available",
      date: "2024-06-01",
      description:
        "The university library has acquired new books and digital resources. Visit the library to explore the latest additions.",
      content:
        "Dear Students,\n\nWe are excited to inform you that the university library has expanded its collection with numerous new books across various disciplines. Additionally, several new digital resources and journals have been made available online. We encourage you to take advantage of these resources to support your academic endeavors.\n\nHappy Reading!\nLibrary Team",
    },
    {
      id: 4,
      title: "Annual Sports Meet Scheduled",
      date: "2024-07-15",
      description:
        "The Annual Sports Meet will be held on August 20th. Students are encouraged to participate and showcase their talents.",
      content:
        "Dear Students,\n\nMark your calendars for the Annual Sports Meet scheduled for August 20th. This event is a fantastic opportunity to engage in healthy competition and demonstrate your athletic skills. Various sports categories will be available, and both individual and team events are open for participation.\n\nLooking forward to your enthusiastic participation!\nSports Committee",
    },
    {
      id: 5,
      title: "Guest Lecture on Artificial Intelligence",
      date: "2024-08-05",
      description:
        "A renowned expert in Artificial Intelligence will deliver a guest lecture on August 10th. All students are welcome to attend.",
      content:
        "Dear Students and Faculty,\n\nWe are honored to host Dr. Jane Smith, a leading expert in Artificial Intelligence, for a guest lecture on August 10th at 3 PM in the main auditorium. The lecture will cover the latest advancements in AI and its applications across various industries. This is a great opportunity to gain insights from a distinguished professional in the field.\n\nDon't miss out!\nAcademic Affairs",
    },
  ];

  const [selectedNotice, setSelectedNotice] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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
                      key={notice.id}
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
                <div className="upcoming-events">
                  <h5>Upcoming Events</h5>
                  <ul>
                    <li>
                      <i className="fas fa-calendar-alt"></i>
                      Orientation Day - September 1, 2024
                    </li>
                    <li>
                      <i className="fas fa-calendar-alt"></i>
                      Tech Fest - October 15, 2024
                    </li>
                    <li>
                      <i className="fas fa-calendar-alt"></i>
                      Alumni Meet - November 20, 2024
                    </li>
                    {/* Add more events as needed */}
                  </ul>
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
