import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// ----------------Data for mapping----------------------
import { ImgSources } from "./Image Data.js";

// ----------------style import----------------------------
import {
  CarouselContainerDiv,
  OverLayDiv,
  BgImageDiv,
} from "./ImageMapping.styled.js";

// --------------ImageItem component------------
const ImageItem = (props) => {
  return <BgImageDiv bgimg={props.img}></BgImageDiv>;
};
// -------------------mapping()------------------------
const mappingImages = (images) => {
  return <ImageItem key={images.id} img={images.img} />;
};

// ------------------main rendering component--------------------
const ImageMapping = () => {
  return (
    <CarouselContainerDiv>
      <OverLayDiv />
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        stopOnHover={false}
        showThumbs={false}
      >
        {ImgSources.map(mappingImages)}
      </Carousel>
    </CarouselContainerDiv>
  );
};

export default ImageMapping;
