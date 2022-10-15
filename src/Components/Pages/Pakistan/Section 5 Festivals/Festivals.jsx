import React, { useState } from "react";

import { festivalsContentData } from "./Festivals Content Data";

import {
  FestivalsParentDiv,
  ParentContentDiv,
  ButtonDiv,
  ContentDiv,
  ImgDiv,
} from "./Festivals.styled";

// import polo from "./Assets/Images/shindur.jpg";

const Festivals = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <FestivalsParentDiv>
      <ParentContentDiv>
        <h1>Festivals</h1>
        <ButtonDiv>
          <button
            className={toggleState === 1 ? "activebtn" : null}
            onClick={() => toggleTab(1)}
          >
            Desert Safari Jeep Rally
          </button>
          <button
            className={toggleState === 2 ? "activebtn" : null}
            onClick={() => toggleTab(2)}
          >
            Mango Festival
          </button>
          <button
            className={toggleState === 3 ? "activebtn" : null}
            onClick={() => toggleTab(3)}
          >
            Sibi Mela
          </button>
          <button
            className={toggleState === 4 ? "activebtn" : null}
            onClick={() => toggleTab(4)}
          >
            Shandur Polo Festival
          </button>
        </ButtonDiv>

        <ContentDiv className={toggleState === 1 ? "activeContent" : null}>
          <h2>{festivalsContentData[0].heading}</h2>
          <p>{festivalsContentData[0].detail}</p>
        </ContentDiv>

        <ContentDiv className={toggleState === 2 ? "activeContent" : null}>
          <h2>{festivalsContentData[1].heading}</h2>
          <p>{festivalsContentData[1].detail}</p>
        </ContentDiv>

        <ContentDiv className={toggleState === 3 ? "activeContent" : null}>
          <h2>{festivalsContentData[2].heading}</h2>
          <p>{festivalsContentData[2].detail}</p>
        </ContentDiv>

        <ContentDiv className={toggleState === 4 ? "activeContent" : null}>
          <h2>{festivalsContentData[3].heading}</h2>
          <p>{festivalsContentData[3].detail}</p>
        </ContentDiv>
      </ParentContentDiv>

      <ImgDiv className={toggleState === 1 ? "activeImg" : null}>
        <img src={festivalsContentData[0].img} alt="festival" />
      </ImgDiv>

      <ImgDiv className={toggleState === 2 ? "activeImg" : null}>
        <img src={festivalsContentData[1].img} alt="festival" />
      </ImgDiv>

      <ImgDiv className={toggleState === 3 ? "activeImg" : null}>
        <img src={festivalsContentData[2].img} alt="festival" />
      </ImgDiv>

      <ImgDiv className={toggleState === 4 ? "activeImg" : null}>
        <img src={festivalsContentData[3].img} alt="festival" />
      </ImgDiv>
    </FestivalsParentDiv>
  );
};

export default Festivals;
