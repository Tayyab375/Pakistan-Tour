import React from "react";

// ------------------Components---------------------------
import SkarduTourProductCard from "./Skardu Tour/SkarduTourProductCard";
import SkarduActivitiesProductCard from "./Skardu Activities/SkarduActivitiesProductCard";

import { SkarduParentDiv, FelxBoxDiv } from "./Skardu.styled";

const Skardu = () => {
  return (
    <SkarduParentDiv>
      <h1>Tours of Skardu</h1>
      <FelxBoxDiv>
        <SkarduTourProductCard />
      </FelxBoxDiv>

      <h1>Activities of Skardu</h1>
      <FelxBoxDiv>
        <SkarduActivitiesProductCard />
      </FelxBoxDiv>
    </SkarduParentDiv>
  );
};

export default Skardu;
