import React from "react";
import "./NoticeBoard.css";

const NoticeDetail = ({ notice, onClose }) => {
  const formattedDate = new Date(notice.date).toLocaleDateString();

  return (
    <div className="notice-modal" onClick={onClose}>
      <div
        className="modal-dialog modal-lg"
        role="document"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{notice.title}</h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <h6 className="text-muted">{formattedDate}</h6>
            {/* Provide the download link */}
            <a
              href={notice.content} // The URL to the PDF or image
              download // This attribute will trigger the download
              className="btn btn-download-file"
            >
              Download Notice <i className="fas fa-download ms-2"></i>
            </a>
          </div>
          <div className="modal-footer">
            <button className="btn btn-close-modal" onClick={onClose}>
              Close <i className="fas fa-times ms-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetail;
