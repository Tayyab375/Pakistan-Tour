import React from "react";

import { ParentDiv, ImgDiv, Overlay } from "./Banner.styled";

const Banner = (props) => {
  return (
    <ParentDiv>
      <ImgDiv>
        <img src={props.img} alt="banner img" id="imgSlider" />
      </ImgDiv>
      <Overlay>
        <h1>{props.heading}</h1>
      </Overlay>
    </ParentDiv>
  );
};

export default Banner;
