import React from "react";
import styled from "styled-components";
import { drakGreen } from "../../../Reusable/Colors";

import MappingProductCard from "./Upcoming Tour Card Slider/TourCardSlider.jsx";

// ---------------styling------------------
const ParentDiv = styled.div`
  margin-top: 6%;

  h1 {
    margin-bottom: 4%;
    color: ${drakGreen};
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;

    @media screen and (max-width: 500px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 350px) {
      font-size: 1.3rem;
    }
  }
`;

const Sec4UpcomingTour = () => {
  return (
    <>
      <ParentDiv>
        <h1>Upcoming Tours</h1>
      </ParentDiv>
      <MappingProductCard />
    </>
  );
};

export default Sec4UpcomingTour;
