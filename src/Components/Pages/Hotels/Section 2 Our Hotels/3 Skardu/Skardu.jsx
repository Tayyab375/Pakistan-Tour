import React from "react";

// ------------------Components---------------------------
import SkarduHotelsProductCard from "./Skardu Hotels/SkarduHotelsProductCard";

import { SkarduParentDiv, FelxBoxDiv } from "./Skardu.styled";

const Skardu = () => {
  return (
    <SkarduParentDiv>
      <h1>Skardu Hotels</h1>
      <FelxBoxDiv>
        <SkarduHotelsProductCard />
      </FelxBoxDiv>
    </SkarduParentDiv>
  );
};

export default Skardu;
