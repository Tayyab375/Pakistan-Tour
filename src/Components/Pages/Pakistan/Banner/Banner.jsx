import React from "react";

import { ParentDiv, ImgDiv, Overlay } from "./Banner.styled";

import img1 from "./Assets/Images/1.jpg";

const Banner = () => {
  return (
    <ParentDiv>
      <ImgDiv>
        <img src={img1} alt="banner img" id="imgSlider" />
      </ImgDiv>
      <Overlay>
        <h1>Pakistan (The Land of Beauty)</h1>
      </Overlay>
    </ParentDiv>
  );
};

export default Banner;
