import React from "react";

// ----------------import style----------------------------
import { ParentContainerDiv } from "./Sec2TourismInPakistan.styled";

// -----------------import components-----------------------
import Content from "./Content/Content.jsx";
import Chairman from "./Chairman/Chairman";
import TravelThroughPTC from "./Travel Through PTC/TravelThroughPTC";

const Sec2TourismInPakistan = () => {
  return (
    <ParentContainerDiv>
      <Content />
      <Chairman />
      <TravelThroughPTC />
    </ParentContainerDiv>
  );
};

export default Sec2TourismInPakistan;
