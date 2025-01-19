import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  CircularProgress,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import DOMPurify from "dompurify";
import "./Ourcampus.css";
import Head from "../../components/Head/Head";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Link } from "react-router-dom";
const UniversityList = () => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await axios.get(
          "https://backend.aharadaedu.in/api/universitiesDetails"
        );
        if (response.data.universities) {
          setUniversities(response.data.universities);
        } else {
          setError("No universities found.");
        }
        setLoading(false);
      } catch (err) {
        setError("Failed to load universities");
        setLoading(false);
      }
    };

    fetchUniversities();
  }, []);

  //   if (loading) {
  //     return (
  //       <div className="loading-spinner">
  //         <CircularProgress />
  //       </div>
  //     );
  //   }

  //   if (error) {
  //     return (
  //       <div className="error-message">
  //         <Typography variant="h6" color="error">
  //           {error}
  //         </Typography>
  //       </div>
  //     );
  //   }

  const baseUrl = "https://backend.aharadaedu.in";

  return (
    <>
      <Head />
      <Breadcrumbs />
      <div className="ourcampus-list-container">
        <Grid container spacing={2} className="ourcampus-list">
          {universities.map((university) => (
            <Grid item key={university._id} xs={12} sm={6} md={4}>
              <CampusCard university={university} baseUrl={baseUrl} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

const CampusCard = ({ university, baseUrl }) => {
  const imageUrl = `${baseUrl}${university.image}`;

  // Sanitize the description to avoid XSS
  const sanitizedDescription = DOMPurify.sanitize(university.description);

  return (
    <Card className="ourcampus-card">
      <CardActionArea component={Link} to={`/university/${university.name}`}>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={university.name}
        />
        <CardContent>
          <Typography
            variant="h6"
            component="div"
            className="ourcampus-university-name"
          >
            {university.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            className="ourcampus-university-location"
          >
            {university.location}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UniversityList;
