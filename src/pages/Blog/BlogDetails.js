import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share"; // Import social media share components
import "./BlogDetails.css"; // Import the CSS file

function BlogDetails() {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch the blog post using the ID from the URL
    axios
      .get(`https://backend.aharadaedu.in/api/blogs/${id}`)
      .then((response) => {
        setBlog(response.data.blogPost); // Set the blog data
      })
      .catch((error) => {
        console.error("Error fetching blog details:", error);
      });
  }, [id]);

  if (!blog) {
    return <p>Loading...</p>; // Show a loading message while fetching the data
  }

  const shareUrl = window.location.href; // Get the current page URL to share

  return (
    <div className="blog-details">
      <div className="container">
        <h1 className="blog-title">{blog.title}</h1>
        <div className="blog-meta">
          <span className="publish-date">
            Published on: {new Date(blog.publishedDate).toLocaleDateString()}
          </span>
          <span className="category">{blog.category}</span>
        </div>
        <div className="blog-image">
          <img
            src={`https://backend.aharadaedu.in${blog.image}`}
            alt={blog.title}
          />
        </div>
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>

        {/* Social Media Share Buttons */}
        <div className="social-share">
          <h4>Share this blog:</h4>
          <div className="social-buttons">
            <FacebookShareButton url={shareUrl} quote={blog.title}>
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={blog.title}>
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <LinkedinShareButton url={shareUrl}>
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
            <WhatsappShareButton url={shareUrl} title={blog.title}>
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
