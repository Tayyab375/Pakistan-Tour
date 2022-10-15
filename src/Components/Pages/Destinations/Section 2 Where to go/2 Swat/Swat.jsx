import React from "react";

// ------------------Components---------------------------
import SwatTourProductCard from "./Swat Tour/SwatTourProductCard";
import SwatActivitiesProductCard from "./Swat Activities/SwatActivitiesProductCard";

import { SwatParentDiv, FelxBoxDiv } from "./Swat.styled";

const Swat = () => {
  return (
    <SwatParentDiv>
      <h1>Tours of Swat</h1>
      <FelxBoxDiv>
        <SwatTourProductCard />
      </FelxBoxDiv>

      <h1>Activities of Swat</h1>
      <FelxBoxDiv>
        <SwatActivitiesProductCard />
      </FelxBoxDiv>
    </SwatParentDiv>
  );
};

export default Swat;
