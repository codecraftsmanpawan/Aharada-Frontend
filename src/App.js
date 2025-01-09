// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Faculty from "./pages/Faculty/Faculty";
import FacultyDetails from "./pages/Faculty/FacultyDetails";
import JoinasInstructor from "./pages/Faculty/JoinasInstructor";
import Alumni from "./pages/Alumni/Alumni";
import Event from "./pages/Event/Events";
import Internship from "./pages/Internship/Internship";
import Blogs from "./pages/Blog/Blogs";
import BlogDetails from "./pages/Blog/BlogDetails";
import Contact from "./pages/Contact/Contact";
import Grievance from "./pages/Governance/Grievance";
import PlacementTeam from "./pages/PlacementTeam/Placement-Team";
import NoticeBoard from "./pages/NoticeBoard/NoticeBoard";
import Gallery from "./pages/Gallery/Gallery";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import Programs from "./pages/Programs/Programs";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./App.css";
// import "./assets/css/app.min.css";
// import "./assets/css/bootstrap.rtl.min.css";
// import "./assets/css/fontawesome.min.css";
// import "./assets/css/style.css";
function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Include the component here */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/facultyDetails/:facultyId" element={<FacultyDetails />} />
        <Route path="/joinasInstructor" element={<JoinasInstructor />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/events" element={<Event />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogDetails" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/grievance" element={<Grievance />} />
        <Route path="/placement" element={<PlacementTeam />} />
        <Route path="/noticeBoard" element={<NoticeBoard />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/course-details/:title" element={<CourseDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
