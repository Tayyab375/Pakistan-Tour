import React from "react";

// ------------------Components---------------------------
import AzadKashmirTourProductCard from "./Azad Kashmir Tour/AzadKashmirTourProductCard";
import AzadKashmirActivitiesProductCard from "./Azad Kashmir Activities/AzadKashmirActivitiesProductCard";

import { AzadKashmirParentDiv, FelxBoxDiv } from "./AzadKashmir.styled";

const AzadKashmir = () => {
  return (
    <AzadKashmirParentDiv>
      <h1>Tours of Azad Kashmir</h1>
      <FelxBoxDiv>
        <AzadKashmirTourProductCard />
      </FelxBoxDiv>

      <h1>Activities of Azad Kashmir</h1>
      <FelxBoxDiv>
        <AzadKashmirActivitiesProductCard />
      </FelxBoxDiv>
    </AzadKashmirParentDiv>
  );
};

export default AzadKashmir;
