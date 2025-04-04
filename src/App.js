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
import NoticeDetails from "./pages/NoticeBoard/NoticeDetails";
import Gallery from "./pages/Gallery/Gallery";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import Programs from "./pages/Programs/Programs";
import TeamMembers from "./pages/TeamMembers/TeamMembers";
import PlacedStudents from "./pages/PlacedStudents/PlacedStudents";
import EventDetails from "./pages/Event/EventDetails";
import UniversityDetails from "./pages/UniversityDetails/UniversityDetails";
import OurCampus from "./pages/UniversityDetails/OurCampus";
import TechnicalClub from "./pages/TechnicalClub/TechnicalClub";
import NewsMedia from "./pages/NewsMedia/NewsMedia";
import NewsMediaDetails from "./pages/NewsMedia/NewsMediaDetails";
import CampuesLife from "./pages/CampusLife/Campus-Life";
import Scholarships from "./pages/Scholarships/Scholarships";
import ApplyNow from "./pages/ApplyNow/Apply-Now";
import AdmissionCard from "./components/AdmissionCard/AdmissionCard";
import GuestLecturer from "./pages/GuestLecturer/Guest-Lecturer";
import GuestLecturerDetails from "./pages/GuestLecturer/Guest-Lecturer-Details";
import GuestLectureList from "./pages/GuestLecturer/GuestLectureList";
import Mentors from "./pages/GuestLecturer/Mentors";
import StudentAmbassador from "./pages/StudentAmbassador/StudentAmbassador";
import MBAtionMnagement from "./pages/Programs/mba-aviation-management";
import MBAfintech from "./pages/Programs/mba-fintech-program";
import BBAdataanalyticsairtificiaintelligencel from "./pages/Programs/bba-data-analytics--airtificial-intelligence-program";
import BBAaviationmanagementprogram from "./pages/Programs/bba-aviation-management-program";
import BBAaviationtravelprogram from "./pages/Programs/bba-aviation--travel-program";
import BBAentrepreneurshipinnovationprogram from "./pages/Programs/bba-entrepreneurship--innovation-program";
import BBAfintechprogram from "./pages/Programs/bba-fintech-program";
import BTECHaerospaceengineeringprogram from "./pages/Programs/btech-aerospace-engineering-program";
import BTECHcswithaimlprogram from "./pages/Programs/btech-cs-with-ai--ml-program";
import BCOMcharteredaccountantprogram from "./pages/Programs/bcom-chartered-accountant-program";
import BCAinternetofthingsiotprogram from "./pages/Programs/bca-internet-of-things-iot-program";
import BFDfashiondesigningprogram from "./pages/Programs/bfd-fashion-designing-program";
import BFAfineartsprogram from "./pages/Programs/bfa-fine-arts-program";
import BBAaviationairportmanagementprogram from "./pages/Programs/bba-aviation--airport-management-program";
import BSCaeronauticalscienceprogram from "./pages/Programs/bsc-aeronautical-science-program";
import MTECHdefencetechnologyprogram from "./pages/Programs/mtech-defence-technology-program";
import MBAhraviationmanagementprogram from "./pages/Programs/mba-hr--aviation-management-program";

import ExploreAI from "./pages/Programs/Program-Explore/Data-Analytics-and-Artificial-Intelligence";
import AviationTravel from "./pages/Programs/Program-Explore/Aviation-&-Travel";
import EntrepreneurshipInnovation from "./pages/Programs/Program-Explore/Entrepreneurship-and-Innovation";
import BScAeronautical from "./pages/Programs/Program-Explore/B.Sc-Aeronautical";
import AviationManagement from "./pages/Programs/Program-Explore/Aviation-Management";
import AviationAirportmanagement from "./pages/Programs/Program-Explore/AviationAirportmanagement";
import AerospaceEngineering from "./pages/Programs/Program-Explore/AerospaceEngineering";
import DefenceTechnology from "./pages/Programs/Program-Explore/DefenceTechnology";
import HRAviation from "./pages/Programs/Program-Explore/HRAviation";
import DronePilotTraining from "./pages/Programs/Program-Explore/DronePilotTraining";
import FineArts from "./pages/Programs/Program-Explore/FineArts";
import FashionDesign from "./pages/Programs/Program-Explore/FashionDesign";
import Department from "./pages/Department/Department";
import Awards from "./pages/Awards/Awards";
import HRRegistration from "./pages/HR/HRRegistration";
import StudentRegistration from "./pages/HR/StudentRegistration";
import BBAFinTech from "./pages/Programs/Program-Explore/BBA-FinTech";
import BcaIot from "./pages/Programs/Program-Explore/Bca-Iot";
import BcomCharteredAccountant from "./pages/Programs/Program-Explore/Bcom-Chartered-Accountant";
import Btechaiml from "./pages/Programs/Program-Explore/Btech-ai-ml";
import Bbaentrepreneurshipfamilybusiness from "./pages/Programs/Program-Explore/Bba-entrepreneurship-family-business";
import Testpage from "./pages/Programs/Program-Explore/Testpage";
import NotFound from "./NotFound/NotFound";

import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsandConditions from "./pages/PrivacyPolicy/TermsandConditions";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./App.css";
import "./assets/css/app.min.css";
import "./assets/css/bootstrap.rtl.min.css";
import "./assets/css/fontawesome.min.css";
import "./assets/css/style.css";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Include the component here */}
      <Header />
      <AdmissionCard />
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
        <Route path="/blogDetails/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/grievance" element={<Grievance />} />
        <Route path="/placement-team" element={<PlacementTeam />} />
        <Route path="/noticeBoard" element={<NoticeBoard />} />
        <Route path="/notice/:id" element={<NoticeDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/team-members" element={<TeamMembers />} />
        <Route path="/placed-students" element={<PlacedStudents />} />
        <Route path="/event-details/:title" element={<EventDetails />} />
        <Route path="/course-details/:title" element={<CourseDetails />} />
        <Route path="/university/:name" element={<UniversityDetails />} />
        <Route path="/ourcampus" element={<OurCampus />} />
        <Route path="/technicalclub" element={<TechnicalClub />} />
        <Route path="/news-media" element={<NewsMedia />} />
        <Route path="/news-media/:id" element={<NewsMediaDetails />} />
        <Route path="/apply-now" element={<ApplyNow />} />
        <Route path="/campus-life" element={<CampuesLife />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/guestLecturer" element={<GuestLecturer />} />
        <Route path="/our-guest-Lecturer" element={<GuestLectureList />} />
        <Route path="/our-mentors" element={<Mentors />} />
        <Route path="/students-ambassador" element={<StudentAmbassador />} />
        <Route path="/guest-lecturer/:id" element={<GuestLecturerDetails />} />
        <Route path="/data-analytics-and-ai" element={<ExploreAI />} />
        <Route path="/aviation-and-travel" element={<AviationTravel />} />
        <Route
          path="/entrepreneurship-and-innovation"
          element={<EntrepreneurshipInnovation />}
        />
        <Route path="/bsc-aeronautical" element={<BScAeronautical />} />
        <Route
          path="/mba-aviation-management"
          element={<AviationManagement />}
        />
        <Route
          path="/aviation-and-airport-management"
          element={<AviationAirportmanagement />}
        />
        <Route
          path="/btech-aerospace-engineering"
          element={<AerospaceEngineering />}
        />
        <Route
          path="/mtech-defence-technology"
          element={<DefenceTechnology />}
        />
        <Route path="/mba-hr-aviation" element={<HRAviation />} />
        <Route path="/drone-pilot-training" element={<DronePilotTraining />} />
        <Route path="/fine-arts" element={<FineArts />} />
        <Route path="/fashion-design" element={<FashionDesign />} />
        <Route path="/privacy/policy" element={<PrivacyPolicy />} />
        <Route path="/termsand/conditions" element={<TermsandConditions />} />
        <Route path="/department" element={<Department />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/hr-registration" element={<HRRegistration />} />
        <Route path="/student-registration" element={<StudentRegistration />} />

        <Route path="/bba-fintech" element={<BBAFinTech />} />
        <Route path="/bca-iot" element={<BcaIot />} />
        <Route
          path="/bcom-chartered-accountant"
          element={<BcomCharteredAccountant />}
        />
        <Route path="/btech-ai-ml" element={<Btechaiml />} />
        <Route
          path="/bba-entrepreneurship-family-business"
          element={<Bbaentrepreneurshipfamilybusiness />}
        />
        <Route
          path="/mba-aviation-management-program"
          element={<MBAtionMnagement />}
        />
        <Route path="/mba-fintech-program" element={<MBAfintech />} />
        <Route
          path="/bba-data-analytics--airtificial-intelligence-program"
          element={<BBAdataanalyticsairtificiaintelligencel />}
        />

        <Route
          path="/bba-aviation-management-program"
          element={<BBAaviationmanagementprogram />}
        />
        <Route
          path="/bba-aviation--travel-program"
          element={<BBAaviationtravelprogram />}
        />
        <Route
          path="/bba-entrepreneurship--innovation-program"
          element={<BBAentrepreneurshipinnovationprogram />}
        />
        <Route path="/bba-fintech-program" element={<BBAfintechprogram />} />
        <Route
          path="/btech-aerospace-engineering-program"
          element={<BTECHaerospaceengineeringprogram />}
        />
        <Route
          path="/btech-cs-with-ai--ml-program"
          element={<BTECHcswithaimlprogram />}
        />
        <Route
          path="/bcom-chartered-accountant-program"
          element={<BCOMcharteredaccountantprogram />}
        />
        <Route
          path="/bca-internet-of-things-iot-program"
          element={<BCAinternetofthingsiotprogram />}
        />
        <Route
          path="/bfd-fashion-designing-program"
          element={<BFDfashiondesigningprogram />}
        />
        <Route path="/bfa-fine-arts-program" element={<BFAfineartsprogram />} />
        <Route
          path="/bba-aviation--airport-management-program"
          element={<BBAaviationairportmanagementprogram />}
        />
        <Route
          path="/bsc-aeronautical-science-program"
          element={<BSCaeronauticalscienceprogram />}
        />
        <Route
          path="/mtech-defence-technology-program"
          element={<MTECHdefencetechnologyprogram />}
        />
        <Route
          path="/mba-hr--aviation-management-program"
          element={<MBAhraviationmanagementprogram />}
        />
        <Route path="/test" element={<Testpage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
