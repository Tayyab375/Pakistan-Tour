import React from "react";

import {
  HeadingDiv,
  ParentDiv,
  CardsContainerDiv,
} from "./ImgCardRender.styled";

import ImageCard from "../Image Card/ImageCard";

// ------------------data import----------------------
import { ImgCardData } from "./Image Card Data";

// -------------------mapping data--------------------
const mappingCardImages = (imgCard) => {
  return (
    <ImageCard
      key={imgCard.id}
      img={imgCard.img}
      heading={imgCard.heading}
      detail={imgCard.detail}
      path={imgCard.path}
    />
  );
};

const ImgCardRender = () => {
  return (
    <ParentDiv>
      <HeadingDiv>
        <h1>Provinces of Pakistan</h1>
      </HeadingDiv>
      <CardsContainerDiv>
        {ImgCardData.map(mappingCardImages)}
      </CardsContainerDiv>
    </ParentDiv>
  );
};

export default ImgCardRender;
