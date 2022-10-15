import React from "react";

// ------------------Components---------------------------
import SwatHotelsProductCard from "./Swat Hotels/SwatHotelsProductCard";

import { SwatParentDiv, FelxBoxDiv } from "./Swat.styled";

const Swat = () => {
  return (
    <SwatParentDiv>
      <h1>Swat Hotels</h1>
      <FelxBoxDiv>
        <SwatHotelsProductCard />
      </FelxBoxDiv>
    </SwatParentDiv>
  );
};

export default Swat;
