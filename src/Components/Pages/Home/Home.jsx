import React from "react";

// -------------import compoents-----------------------
import HeaderCarousel from "./Banner Carousel/Carousel";
import Sec2TourismInPakistan from "./Section2 Tourism In Pakistan/Sec2TourismInPakistan"; // sec > section
import Section3AboutPtcAndPtcb from "./Section3 About PTC/Section3AboutPtcAndPtcb";
import WhyChoosePTC from "./Why Choose PTC/WhyChoosePTC";
import Sec4UpcomingTour from "./Section4 Upcoming Tour/Sec4UpcomingTour";
import Sec5UpcomingActivities from "./Section5 Upcoming Activities/Sec5UpcomingActivities";
function Home() {
  return (
    <>
      <HeaderCarousel />
      <Sec2TourismInPakistan />
      <Section3AboutPtcAndPtcb />
      <WhyChoosePTC />
      <Sec4UpcomingTour />
      <Sec5UpcomingActivities />
    </>
  );
}

export default Home;
