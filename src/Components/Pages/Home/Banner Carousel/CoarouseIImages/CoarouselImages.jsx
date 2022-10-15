import React from "react";

// -------------------------styling imports----------------
import { ImageDiv } from "./CoarouselImagesStyled.styled";

const CoarouselImages = (props) => {
  return (
    <>
      <ImageDiv bgimg={props.img}>
        <h4>{props.h4}</h4>
        <p>{props.p}</p>
      </ImageDiv>
    </>
  );
};

export default CoarouselImages;
