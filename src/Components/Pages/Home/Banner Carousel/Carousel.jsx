import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// -------------------style imports-------------------
import { CrouselParentDiv, OverlayDiv } from "./Carousel.styled";

// -------------------components import----------------
import CoarouselImages from "./CoarouseIImages/CoarouselImages";

// -------------------import data----------------------
import CarouselImageData from "./CarouselImageData";

// -------------------mapping()------------------------

const mappingImages = (images) => {
  return (
    <CoarouselImages
      key={images.id}
      img={images.img}
      h4={images.h4}
      p={images.p}
    />
  );
};

// ------------------main component--------------------

const HeaderCarousel = () => {
  return (
    <>
      <CrouselParentDiv>
        <OverlayDiv />

        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          interval={4000}
          stopOnHover={false}
          showThumbs={false}
        >
          {CarouselImageData.map(mappingImages)}
        </Carousel>
      </CrouselParentDiv>
    </>
  );
};

export default HeaderCarousel;
