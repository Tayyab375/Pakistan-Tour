import React from "react";

import { CuisineParentDiv } from "./Cuisine.styled";

import CuisineCarousel from "./Cuisine Carousel/CuisineCarousel";

const Cuisine = () => {
  return (
    <CuisineParentDiv>
      <div>
        <h1>PAKISTANI CUISINES</h1>
        <h6>
          Pakistani National Cuisine is the inheritor of Muslim Culinary
          Traditions and known for having aromatic and sometimes spicy flavors.
          Pakistani Cuisine is divide into wider range of Regional Cuisine. i.e.
          Punjabi Cuisine, Sindhi Cuisine, Pashtun Cuisine, Balochi Cuisine,
          Hunza Diet, Kashmiri Cuisine and Balti Food.
        </h6>
      </div>

      <CuisineCarousel />
    </CuisineParentDiv>
  );
};

export default Cuisine;
