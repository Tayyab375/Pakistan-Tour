import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// ----------------Data for mapping----------------------
import { ChairmanData } from "./ChairmanData.js";

// ----------------style import----------------------------
import { CarouselContainerDiv, OverLayDiv } from "./Chairman.styled.js";

// --------------import Components------------
import ChairmanItem from "./ChairmanItem/ChairmanItem";

// -------------------mapping() function------------------------

const mappingImages = (vipinfo) => {
  return (
    <ChairmanItem
      key={vipinfo.id}
      img={vipinfo.img}
      name={vipinfo.name}
      designation={vipinfo.designation}
    />
  );
};

// ------------------main component--------------------
const Chairman = () => {
  return (
    <CarouselContainerDiv>
      <OverLayDiv />
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        stopOnHover={false}
        showThumbs={false}
      >
        {ChairmanData.map(mappingImages)}
      </Carousel>
    </CarouselContainerDiv>
  );
};

export default Chairman;
