import React from "react";

// ------------------Components---------------------------
import NaranKaghanTourProductCard from "./Naran Kaghan Tour/NaranKaghanTourProductCard";
import NaranKaghanActivitiesProductCard from "./Naran Kaghan Activities/NaranKaghanActivitiesProductCard";

import { NaranKaghanParentDiv, FelxBoxDiv } from "./NaranKaghan.styled";
const NaranKaghan = () => {
  return (
    <NaranKaghanParentDiv>
      <h1>Tours of Naran Kaghan</h1>
      <FelxBoxDiv>
        <NaranKaghanTourProductCard />
      </FelxBoxDiv>

      <h1>Activities of Naran Kaghan</h1>
      <FelxBoxDiv>
        <NaranKaghanActivitiesProductCard />
      </FelxBoxDiv>
    </NaranKaghanParentDiv>
  );
};

export default NaranKaghan;
