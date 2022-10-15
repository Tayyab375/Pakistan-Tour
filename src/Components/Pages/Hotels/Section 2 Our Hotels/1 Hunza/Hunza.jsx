import React from "react";

// ------------------Components---------------------------
import HunzaHotelsProductCard from "./Hunza Hotels/HunzaHotelsProductCard";

import { HunzaParentDiv, FelxBoxDiv } from "./Hunza.styled";

const Hunza = () => {
  return (
    <HunzaParentDiv>
      <h1>Hunza Hotels</h1>
      <FelxBoxDiv>
        <HunzaHotelsProductCard />
      </FelxBoxDiv>
    </HunzaParentDiv>
  );
};

export default Hunza;
