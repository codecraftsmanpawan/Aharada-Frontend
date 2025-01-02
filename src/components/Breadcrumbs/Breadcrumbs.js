import React from "react";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  const title = pathnames[pathnames.length - 1] || "Home";
  const pageTitle = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <div
      className="breadcumb-wrapper"
      data-bg-src="assets/img/bg/breadcumb-bg.jpg"
      data-overlay="title"
      data-opacity={8}
      style={{
        background: "linear-gradient(to bottom, #072e46, #145f8b)",
        maxHeight: "20px",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div className="breadcumb-content text-center">
          <h1 className="breadcumb-title">{pageTitle}</h1>
          <ul className="breadcumb-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            {pathnames.map((segment, index) => {
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;
              return (
                <li key={to}>
                  <Link to={to}>
                    {segment.charAt(0).toUpperCase() + segment.slice(1)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumbs;
