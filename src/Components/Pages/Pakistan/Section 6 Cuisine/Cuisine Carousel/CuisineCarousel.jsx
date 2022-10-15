import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// ----------------Data for mapping----------------------
import { cuisineData } from "./Cuisine Item Data.js";

// ----------------style import----------------------------
import { CarouselContainerDiv, OverLayDiv } from "./CuisineCarousel.styled";

// --------------import Components------------
import CuisineCarouselItem from "./Cuisine Carousel Item/CuisineCarouselItem";

// -------------------mapping() function------------------------

const mappingCuisine = (cuisine) => {
  return (
    <CuisineCarouselItem
      key={cuisine.id}
      img1={cuisine.img1}
      img2={cuisine.img2}
      img3={cuisine.img3}
      foodName1={cuisine.foodName1}
      foodName2={cuisine.foodName2}
      foodName3={cuisine.foodName3}
    />
  );
};

const CuisineCarousel = () => {
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
        {cuisineData.map(mappingCuisine)}
      </Carousel>
    </CarouselContainerDiv>
  );
};

export default CuisineCarousel;
