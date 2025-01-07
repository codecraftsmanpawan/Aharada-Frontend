// src/components/Head/Head.jsx
import React from "react";
import { Helmet } from "react-helmet";

const Head = () => {
  return (
    <Helmet>
      {/* Stylesheets */}
      <link rel="stylesheet" href="/assets/css/app.min.css" />
      <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </Helmet>
  );
};

export default Head;
