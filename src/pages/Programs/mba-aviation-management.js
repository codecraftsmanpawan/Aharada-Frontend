import React from "react";
import { Accordion, Button, Card } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Recruiters from "./component/Recruiters";
import CampusSlider from "./component/CampusSlider";
import LeadForm from "./component/LeadForm";
import Testimonials from "../../components/Testimonials/Testimonials";
import Feedback from "../Home/component/Feedback";

const Landingpage = () => {
  const page1Campuses = [
    {
      name: "SAGE University Indore",
      program: "MCA Program | UGC recognised",
      specialisations: 3,
      certifications: 10,
      fees: "₹ 3.88 Lacs",
      images: [
        "../assets/placement/sage1.jpg",
        "../assets/placement/sage2.jpg",
        "../assets/placement/sage3.webp",
      ],
    },
    {
      name: "Vidya Knowledge Park",
      program: "BBA Program | UGC recognised",
      specialisations: 3,
      certifications: 10,
      fees: "₹ 3.88 Lacs",
      images: [
        "../assets/placement/vidya1.jpg",
        "../assets/placement/vidya1.jpg",
        "../assets/placement/vidya1.jpg",
      ],
    },
    {
      name: "IIMT University, Meerut",
      program: "BBA Program | UGC approved",
      specialisations: 6,
      certifications: 10,
      fees: "₹ 3.40 Lacs",
      images: [
        "../assets/placement/iimt1.jpg",
        "../assets/placement/iimt2.jpg",
        "../assets/placement/iimt3.jpg",
      ],
    },
  ];
};

export default Landingpage;
