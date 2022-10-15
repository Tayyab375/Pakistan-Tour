import React from "react";

// ------------------Components---------------------------
import HunzaTourProductCard from "./Hunza Tour/HunzaTourProductCard";
import HunzaActivitiesProductCard from "./Hunza Activities/HunzaActivitiesProductCard";

import { HunzaParentDiv, FelxBoxDiv } from "./Hunza.styled";

const Hunza = () => {
  return (
    <HunzaParentDiv>
      <h1>Tours of Hunza</h1>
      <FelxBoxDiv>
        <HunzaTourProductCard />
      </FelxBoxDiv>

      <h1>Activities of Hunza</h1>
      <FelxBoxDiv>
        <HunzaActivitiesProductCard />
      </FelxBoxDiv>
    </HunzaParentDiv>
  );
};

export default Hunza;
