import React, { useEffect } from "react";

import HeroSection from "./component/HeroSection";
import AboutSection from "./component/AboutSection";
import CollaboratorsSection from "./component/CollaboratorsSection";
import WhyChooseSection from "./component/WhyChooseSection";
import FetauredEventsSection from "./component/FetauredEventsSection";
import AwardsSection from "./component/AwardsSection";
import TestimonialsSection from "../../components/Testimonials/Testimonials";
import CouseOffer from "./component/CouseOffer";
import Feedback from "./component/Feedback";
import RecentBlog from "./component/RecentBlog";
import ApplyNowButton from "../../components/ApplyNowButton/ApplyNowButton";
import Head from "../../components/Head/Head";
function Home() {
  useEffect(() => {
    document.title = "Home - Aharada Education";
  }, []);
  return (
    <div>
      <Head />
      <main>
        <HeroSection />
        {/* <WhyChooseSection /> */}
        <CouseOffer />

        {/* <AboutSection /> */}
        <CollaboratorsSection />

        <AwardsSection />
        {/* <FetauredEventsSection /> */}
        <Feedback />
        <TestimonialsSection />

        {/* <videoTestimonialsSection /> */}
        <RecentBlog />
      </main>
    </div>
  );
}

export default Home;
