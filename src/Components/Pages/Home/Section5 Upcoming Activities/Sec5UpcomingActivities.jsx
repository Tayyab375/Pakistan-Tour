import React from "react";
import styled from "styled-components";
import { drakGreen } from "../../../Reusable/Colors";

import ActivitiesCardSlider from "./Upcoming Activities Card Slider/ActivitiesCardSlider";

// ---------------styling------------------
const ParentDiv = styled.div`
  margin-top: 10%;

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

const Sec5UpcomingActivities = () => {
  return (
    <>
      <ParentDiv>
        <h1>Upcoming Activities</h1>
      </ParentDiv>
      <ActivitiesCardSlider />
    </>
  );
};

export default Sec5UpcomingActivities;
