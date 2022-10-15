import React, { useState } from "react";

import {
  WhereToGoParentDiv,
  ParentContentDiv,
  ButtonDiv,
  ContentDiv,
} from "./WhereToGo.styled";

// ---------------------------import components------------------
import Hunza from "./Hunza/Hunza";
import Swat from "./2 Swat/Swat";
import Skardu from "./3 Skardu/Skardu";
import AzadKashmir from "./4 Azad Kashmir/AzadKashmir";
import NaranKaghan from "./5 Naran Kaghan/NaranKaghan";
import Winter from "./6 Winter/Winter";

const WhereToGo = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <WhereToGoParentDiv>
      <ParentContentDiv>
        <h1>WHERE YOU WANT TO GO</h1>
        <ButtonDiv>
          <button
            className={toggleState === 1 ? "activebtn" : null}
            onClick={() => toggleTab(1)}
          >
            Hunza Tour Packages
          </button>
          <button
            className={toggleState === 2 ? "activebtn" : null}
            onClick={() => toggleTab(2)}
          >
            Swat Tour Packages
          </button>
          <button
            className={toggleState === 3 ? "activebtn" : null}
            onClick={() => toggleTab(3)}
          >
            Skardu Tour Packages
          </button>
          <button
            className={toggleState === 4 ? "activebtn" : null}
            onClick={() => toggleTab(4)}
          >
            Azad Kashmir Tour Packages
          </button>
          <button
            className={toggleState === 5 ? "activebtn" : null}
            onClick={() => toggleTab(5)}
          >
            Naran Kaghan Tour Packages
          </button>
          <button
            className={toggleState === 6 ? "activebtn" : null}
            onClick={() => toggleTab(6)}
          >
            Winter Tour Packages
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

        <ContentDiv className={toggleState === 6 ? "activeContent" : null}>
          <Winter />
        </ContentDiv>
      </ParentContentDiv>
    </WhereToGoParentDiv>
  );
};

export default WhereToGo;
