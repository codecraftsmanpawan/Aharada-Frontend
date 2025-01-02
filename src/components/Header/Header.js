import React, { useState } from "react";
import Modal from "react-modal";
import ProgramsModal from "./ProgramsModal";
import { Link } from "react-router-dom";

import ApplyForm from "../ApplyForm/ApplyForm";

Modal.setAppElement("#root");

function Header() {
  const [isAcademicsModalOpen, setIsAcademicsModalOpen] = useState(false);
  const [isApplyFormOpen, setIsApplyFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Function to open the Programs modal
  const openAcademicsModal = (e) => {
    e.preventDefault();
    setIsAcademicsModalOpen(true);
  };

  // Function to close the Programs modal
  const closeAcademicsModal = () => {
    setIsAcademicsModalOpen(false);
  };

  // Function to open the Apply Form modal
  const openApplyForm = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsApplyFormOpen(true);
      setIsLoading(false);
    }, 300);
  };

  // Function to close the Apply Form modal
  const closeApplyForm = () => {
    setIsApplyFormOpen(false);
  };

  return (
    <>
      <header
        className="th-header header-layout1"
        style={{
          background: "linear-gradient(to bottom, #072e46, #145f8b)",
        }}
      >
        {/* Header Top */}
        <div className="header-top fixed">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto d-none d-lg-block">
                <div className="header-links">
                  <ul>
                    <li>
                      <i className="far fa-phone" />
                      <a href="tel:+917303381359">
                        IIMT University +91-7303381359
                      </a>
                    </li>
                    <li>
                      <i className="far fa-phone" />
                      <a href="tel:+917303381359">
                        SAGE University +91-7303381359
                      </a>
                    </li>
                    <li>
                      <i className="far fa-phone" />
                      <a href="tel:+917303381359">
                        Subharti University +91-7303381359
                      </a>
                    </li>
                    <li>
                      <i className="far fa-phone" />
                      <a href="tel:+917303381359">DBUU +91-7303381359</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-links header-right">
                  <ul>
                    <li>
                      <div className="header-social">
                        <a href="mailto:info@aharadaedu.in">
                          <i className="far fa-envelope" />
                        </a>
                        <span className="social-title">Follow Us:</span>
                        <a href="https://www.facebook.com/aharadaeducation/">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="https://www.instagram.com/aharadaeducation/">
                          <i className="fab fa-instagram" />
                        </a>
                        <a href="https://www.twitter.com/">
                          <i className="fab fa-twitter" />
                        </a>{" "}
                        <a href="https://www.linkedin.com/in/aharadaeducation/">
                          <i className="fab fa-linkedin-in" />
                        </a>{" "}
                        <a href="https://www.youtube.com/@aharadaeducation498">
                          <i className="fab fa-youtube" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Area */}
        <div className="sticky-wrapper">
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <a href="/">
                      <img
                        src="../assets/logo.png"
                        width="160px"
                        alt="Aharadaedu"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="row">
                    <div className="col-auto">
                      <nav className="main-menu d-none d-lg-inline-block">
                        <ul>
                          <li className="active">
                            <a href="/">Home</a>
                          </li>

                          <li className="menu-item-has-children">
                            <a href="#">About us</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="/about">About us</a>
                              </li>
                              <li>
                                <a href="/faculty">Our Faculty</a>
                              </li>
                              <li>
                                <a href="/placementTeam">Placement </a>
                              </li>
                              <li>
                                <a href="/events">Events</a>
                              </li>
                              <li>
                                <a href="/gallery">gallery</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#" onClick={openAcademicsModal}>
                              Programs
                            </a>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#">Students</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="/noticeBoard">Notice</a>
                              </li>
                              <li>
                                <a href="/internship">Internship</a>
                              </li>
                              <li>
                                <a href="/alumni">Alumni</a>
                              </li>
                              <li>
                                <a href="/governance">Governance</a>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <a href="/blogs">Blog</a>
                          </li>
                          <li>
                            <a href="/contact">Contact</a>
                          </li>
                        </ul>
                      </nav>
                      <button
                        type="button"
                        className="th-menu-toggle d-block d-lg-none"
                      >
                        <i className="far fa-bars"></i>
                      </button>
                    </div>
                    <div className="col-auto d-none d-xl-block">
                      <div className="header-button">
                        <a
                          className={`th-btn style1 sideMenuToggler ${
                            isLoading ? "loading" : ""
                          }`}
                          style={{
                            cursor: isLoading ? "not-allowed" : "pointer",
                            opacity: isLoading ? 0.7 : 1,
                          }}
                          onClick={isLoading ? null : openApplyForm}
                        >
                          {isLoading ? (
                            <>
                              <i className="fas fa-spinner fa-spin"></i>{" "}
                              Loading...
                            </>
                          ) : (
                            <>
                              Apply Now{" "}
                              <i className="fas fa-arrow-right ms-2"></i>
                            </>
                          )}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Programs Modal */}
      <ProgramsModal
        isOpen={isAcademicsModalOpen}
        closeModal={closeAcademicsModal}
      />

      {/* Modal for Apply Form */}
      <Modal
        isOpen={isApplyFormOpen}
        onRequestClose={closeApplyForm}
        contentLabel="Apply Now Form"
        className="apply-form-modal"
        overlayClassName="apply-form-modal-overlay"
        shouldCloseOnOverlayClick={true}
      >
        <div className="modal-content-container">
          <div className="modal-right">
            <ApplyForm
              onSubmit={closeApplyForm}
              closeApplyForm={closeApplyForm}
            />
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Header;
