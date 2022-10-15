import React from "react";

//---------------------import images-------------------
import banner from "./Assets/Images/banner.jpg";
import aboutProvinceVideo from "./Assets/Images/aboutProvinceVideo.mp4";

//---------------------import data------------------
import { aboutPunjab } from "./PunjabData";

//---------------------import components-------------------
import Banner from "../Reusable Components/Banner/Banner";
import AboutProvince from "../Reusable Components/Section 2 About Province/AboutProvince";
import DistrictCardSlider from "./Section 3 Districts/District Card Slider/DistrictCardSlider";

const Punjab = () => {
  return (
    <>
      <Banner heading={"EXPLORE LAND OF FIVE RIVERS"} img={banner} />
      <AboutProvince
        heading={"Punjab"}
        paragraph={aboutPunjab}
        dialogHeading={"About Punjab"}
        video={aboutProvinceVideo}
      />
      <DistrictCardSlider />
    </>
  );
};

export default Punjab;
