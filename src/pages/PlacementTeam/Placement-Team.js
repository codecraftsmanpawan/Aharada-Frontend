import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import axios from "axios";
import Slider from "react-slick"; // Import Slider from react-slick
import "./PlacementTeam.css";

function PlacementTeam() {
  const [placementTeam, setPlacementTeam] = useState([]);

  // Hardcoded company partners logos
  const companyPartners = [
    {
      id: 1,
      logo: "assets/placement/American - Logo.png",
      name: "American",
    },
    { id: 2, logo: "assets/placement/AISATS - logo.png", name: "AISATS" },
    {
      id: 3,
      logo: "assets/placement/Arabian Vibes Logo.jpeg",
      name: "Arabian Vibes",
    },
    { id: 4, logo: "assets/placement/Celebi- Logo.jpeg", name: "Celebi" },
    {
      id: 5,
      logo: "assets/placement/Delhi Duty Free - Logo.png",
      name: "Delhi Duty",
    },
    {
      id: 6,
      logo: "assets/placement/Drone Stark Logo.png",
      name: "American",
    },
    { id: 7, logo: "assets/placement/Eniva Logo.svg", name: "AISATS" },
    {
      id: 8,
      logo: "assets/placement/GMR- logo.png",
      name: "Arabian Vibes",
    },
    { id: 9, logo: "assets/placement/Indigo - Logo.png", name: "Celebi" },
    {
      id: 10,
      logo: "assets/placement/IRSLogo.png",
      name: "IRS Logo ",
    },
    {
      id: 11,
      logo: "assets/placement/Leela Travels Logo.png",
      name: "American",
    },
    { id: 12, logo: "assets/placement/Ocube Logo.jpeg", name: "AISATS" },
    {
      id: 13,
      logo: "assets/placement/OH! Puhleeez Logo.jpeg",
      name: "Arabian Vibes",
    },
    { id: 14, logo: "assets/placement/Omullane - Logo.png", name: "Celebi" },
    {
      id: 15,
      logo: "assets/placement/phs logo.png",
      name: "Delhi Duty",
    },
    {
      id: 16,
      logo: "assets/placement/Qatar- Logo.jpeg",
      name: "American",
    },
    {
      id: 17,
      logo: "assets/placement/Teleperformance Logo.png",
      name: "AISATS",
    },
    {
      id: 18,
      logo: "assets/placement/Vimaana - Logo.jpeg",
      name: "Arabian Vibes",
    },
  ];

  // Define your base URL for images
  const baseURL = "https://backend.aharadaedu.in";

  // Fetch placement team data from the API
  useEffect(() => {
    document.title = "Placement Team - Aharada Education";

    // Fetch placement team data
    axios
      .get("https://backend.aharadaedu.in/api/placement-team")
      .then((response) => {
        if (response.data && response.data.placementTeam) {
          setPlacementTeam(response.data.placementTeam);
        }
      })
      .catch((error) => {
        console.error("Error fetching placement team data:", error);
      });
  }, []);

  // Slick Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="placement-team">
      <main>
        <Breadcrumbs />

        <section
          className="space"
          style={{
            background: "linear-gradient(to bottom, #f4ebdd, #fdfbf9)",
          }}
        >
          <div className="container">
            <div className="row">
              {placementTeam.map((member) => (
                <div key={member._id} className="col-md-6 col-lg-4 col-xxl-3">
                  <div className="team-card2">
                    <div
                      className="team-img"
                      style={{ height: "250px", overflow: "hidden" }}
                    >
                      <img
                        src={`${baseURL}${member.profileImage}`}
                        alt={member.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div
                      className="team-social"
                      style={{ marginBottom: "-80px" }}
                    >
                      <button className="icon-btn">
                        <i className="fa-solid fa-plus" />
                      </button>
                      <div className="th-social">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={member.linkedin}
                        >
                          <i className="fab fa-linkedin-in" />
                        </a>
                        <a href={`mailto:${member.email}`}>
                          <i className="fas fa-envelope" />
                        </a>
                      </div>
                    </div>
                    <div className="team-content">
                      <h3 className="team-title">{member.name}</h3>
                      <span className="team-desig">{member.designation}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Placement Company Partners Logos with Slider */}
        <section
          className="partners-section py-5"
          style={{
            backgroundColor: "transparent", // Removed background
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div className="container">
            <h2 className="text-center" style={{ marginBottom: "90px" }}>
              Our Placement Partners
            </h2>
            <div className="row">
              {companyPartners.map((partner) => (
                <div key={partner.id} className="col-md-2 col-4 mb-4">
                  {" "}
                  {/* 5 columns */}
                  <div className="partner-logo">
                    <img
                      src={partner.logo} // Hardcoded image path
                      alt={partner.name}
                      className="img-fluid"
                      style={{
                        height: "150px", // Ensures uniform size
                        objectFit: "contain",
                        margin: "0 5px",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          className="instructions-section py-5 bg-light"
          style={{ marginTop: "-30px" }}
        >
          <div className="container">
            <h2 className="mb-4">
              How to Connect with the Aharada Education Placement Team
            </h2>
            <p>
              The Placement Department at Aharada Education is committed to
              helping you kickstart your dream career. Follow these steps to get
              started:
            </p>
            <ol>
              <li>
                <strong>Contact the Placement Team:</strong> Reach out to our
                Placement Officer, <strong>Yogita Tyagi</strong>, via email at{" "}
                <a href="mailto:placements@aharadaedu.in">
                  placements@aharadaedu.in
                </a>{" "}
                or call <a href="tel:+919528344096">+91 95283 44096</a>,{" "}
                <a href="tel:+919105344408">+91 91053 44408</a>.
              </li>
              <li>
                <strong>Participate in Training Programs:</strong> Join our
                career workshops, interview preparation sessions, and
                resume-building webinars designed to enhance your employability
                skills.
              </li>
              <li>
                <strong>Submit Your Profile:</strong> Register on the{" "}
                <a href="/placement-portal">Aharada Placement Portal</a> and
                upload your latest resume, academic details, and other required
                documents.
              </li>
              <li>
                <strong>Attend Placement Drives:</strong> Participate in campus
                recruitment drives, interact with top recruiters, and seize job
                opportunities tailored to your skills and aspirations.
              </li>
            </ol>

            <h2 className="mt-5 mb-4">
              How to Apply for Placement Opportunities
            </h2>
            <p>
              Applying for placements at Aharada Education is straightforward
              and organized. Here’s how you can proceed:
            </p>
            <ul>
              <li>
                <strong>Update Your Student Profile:</strong> Log in to the
                Placement Portal and ensure your profile is complete with
                updated academic records, certifications, and contact details.
              </li>
              <li>
                <strong>Browse Opportunities:</strong> Explore job and
                internship openings posted by our trusted industry partners on
                the portal.
              </li>
              <li>
                <strong>Apply Directly:</strong> Select the opportunity that
                interests you, review the job description, and submit your
                application through the portal.
              </li>
              <li>
                <strong>Track Your Progress:</strong> Monitor your application
                status and stay informed about interview schedules and
                recruitment updates.
              </li>
              <li>
                <strong>Get Support:</strong> For any queries or assistance,
                connect with our Placement Coordinator,{" "}
                <strong>Mr. Rahul Verma</strong>, at{" "}
                <a href="mailto:support@aharadaedu.in">support@aharadaedu.in</a>{" "}
                or call <a href="tel:+918765432109">+91 87654 32109</a>.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PlacementTeam;
