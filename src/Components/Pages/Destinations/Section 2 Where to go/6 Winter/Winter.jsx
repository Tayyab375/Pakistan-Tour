import React from "react";

// ------------------Components---------------------------
import WinterTourProductCard from "./Winter Tour/WinterTourProductCard";
import WinterActivitiesProductCard from "./Winter Activities/WinterActivitiesProductCard";

import { WinterParentDiv, FelxBoxDiv } from "./Winter.styled";

const Winter = () => {
  return (
    <WinterParentDiv>
      <h1>Tours of Winter</h1>
      <FelxBoxDiv>
        <WinterTourProductCard />
      </FelxBoxDiv>

      <h1>Activities of Winter</h1>
      <FelxBoxDiv>
        <WinterActivitiesProductCard />
      </FelxBoxDiv>
    </WinterParentDiv>
  );
};

export default Winter;
