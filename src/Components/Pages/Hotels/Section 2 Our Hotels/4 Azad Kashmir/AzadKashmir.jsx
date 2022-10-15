import React from "react";

// ------------------Components---------------------------
import AzadKashmirHotelsProductCard from "./Azad Kashmir Hotels/AzadKashmirHotelsProductCard";

import { AzadKashmirParentDiv, FelxBoxDiv } from "./AzadKashmir.styled";

const AzadKashmir = () => {
  return (
    <AzadKashmirParentDiv>
      <h1>Azad Kashmir Hotels</h1>
      <FelxBoxDiv>
        <AzadKashmirHotelsProductCard />
      </FelxBoxDiv>
    </AzadKashmirParentDiv>
  );
};

export default AzadKashmir;
