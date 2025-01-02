import React, { useEffect } from "react";

import HeroSection from "./component/HeroSection";
import AboutSection from "./component/AboutSection";
import CollaboratorsSection from "./component/CollaboratorsSection";
import WhyChooseSection from "./component/WhyChooseSection";
import FetauredEventsSection from "./component/FetauredEventsSection";
import AwardsSection from "./component/AwardsSection";
import TestimonialsSection from "../../components/Testimonials/Testimonials";
import CouseOffer from "./component/CouseOffer";
import videoTestimonialsSection from "./component/VideoTestimonials";
import Universities from "./component/Universities";
import RecentBlog from "./component/RecentBlog";

function Home() {
  useEffect(() => {
    document.title = "Home - Aharada Education";
  }, []);
  return (
    <div>
      <main>
        <HeroSection />
        {/* <WhyChooseSection /> */}
        <CouseOffer />

        {/* <AboutSection /> */}
        <CollaboratorsSection />

        <AwardsSection />
        {/* <FetauredEventsSection /> */}
        <Universities />
        <TestimonialsSection />

        {/* <videoTestimonialsSection /> */}
        <RecentBlog />
      </main>
    </div>
  );
}

export default Home;
