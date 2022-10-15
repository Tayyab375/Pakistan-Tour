import React from "react";

// ------------------Components---------------------------
import NaranKaghanHotelsProductCard from "./Naran Kaghan Hotels/NaranKaghanHotelsProductCard";

import { NaranKaghanParentDiv, FelxBoxDiv } from "./NaranKaghan.styled";
const NaranKaghan = () => {
  return (
    <NaranKaghanParentDiv>
      <h1>Naran Kaghan Hotels</h1>
      <FelxBoxDiv>
        <NaranKaghanHotelsProductCard />
      </FelxBoxDiv>
    </NaranKaghanParentDiv>
  );
};

export default NaranKaghan;
