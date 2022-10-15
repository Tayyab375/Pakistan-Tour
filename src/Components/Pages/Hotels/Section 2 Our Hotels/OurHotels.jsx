import React, { useState } from "react";

import {
  OurHotelsParentDiv,
  ParentContentDiv,
  ButtonDiv,
  ContentDiv,
} from "./OurHotels.styled";

// ---------------------------import components------------------
import Hunza from "./1 Hunza/Hunza";
import Swat from "./2 Swat/Swat";
import Skardu from "./3 Skardu/Skardu";
import AzadKashmir from "./4 Azad Kashmir/AzadKashmir";
import NaranKaghan from "./5 Naran Kaghan/NaranKaghan";

const OurHotels = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <OurHotelsParentDiv>
      <ParentContentDiv>
        <h1>Our Hotels</h1>
        <ButtonDiv>
          <button
            className={toggleState === 1 ? "activebtn" : null}
            onClick={() => toggleTab(1)}
          >
            Hunza Hotel
          </button>
          <button
            className={toggleState === 2 ? "activebtn" : null}
            onClick={() => toggleTab(2)}
          >
            Swat Hotels
          </button>
          <button
            className={toggleState === 3 ? "activebtn" : null}
            onClick={() => toggleTab(3)}
          >
            Skardu Hotels
          </button>
          <button
            className={toggleState === 4 ? "activebtn" : null}
            onClick={() => toggleTab(4)}
          >
            Azad Kashmir Hotels
          </button>
          <button
            className={toggleState === 5 ? "activebtn" : null}
            onClick={() => toggleTab(5)}
          >
            Naran Kaghan Hotels
          </button>
        </ButtonDiv>

        <ContentDiv className={toggleState === 1 ? "activeContent" : null}>
          <Hunza />
        </ContentDiv>

        <ContentDiv className={toggleState === 2 ? "activeContent" : null}>
          <Swat />
        </ContentDiv>

        <ContentDiv className={toggleState === 3 ? "activeContent" : null}>
          <Skardu />
        </ContentDiv>

        <ContentDiv className={toggleState === 4 ? "activeContent" : null}>
          <AzadKashmir />
        </ContentDiv>

        <ContentDiv className={toggleState === 5 ? "activeContent" : null}>
          <NaranKaghan />
        </ContentDiv>
      </ParentContentDiv>
    </OurHotelsParentDiv>
  );
};

export default OurHotels;
