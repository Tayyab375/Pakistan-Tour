import React from "react";

import Banner from "./Banner/Banner";
import AboutPakistan from "./Section 2 About Pakistan/AboutPakistan";
import Provinces from "./Section 3 Provinces/Provinces";
import Peaks from "./Section 4 Peaks/Peaks";
import Festivals from "./Section 5 Festivals/Festivals";
import Cuisine from "./Section 6 Cuisine/Cuisine";
import Music from "./Section 7 Music/Music";

const Pakistan = () => {
  return (
    <>
      <Banner />
      <AboutPakistan />
      <Provinces />
      <Peaks />
      <Festivals />
      <Cuisine />
      <Music />
    </>
  );
};

export default Pakistan;
