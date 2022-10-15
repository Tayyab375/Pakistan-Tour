import React, { useState } from "react";

import { musicContentData } from "./Music Content Data";

import {
  MusicParentDiv,
  ParentContentDiv,
  ButtonDiv,
  ContentDiv,
  ImgDiv,
} from "./Music.styled";

const Music = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <MusicParentDiv>
      <ParentContentDiv>
        <h1>Festivals</h1>
        <ButtonDiv>
          <button
            className={toggleState === 1 ? "activebtn" : null}
            onClick={() => toggleTab(1)}
          >
            Folk Music
          </button>
          <button
            className={toggleState === 2 ? "activebtn" : null}
            onClick={() => toggleTab(2)}
          >
            Regional Music
          </button>
          <button
            className={toggleState === 3 ? "activebtn" : null}
            onClick={() => toggleTab(3)}
          >
            Sufism
          </button>
          <button
            className={toggleState === 4 ? "activebtn" : null}
            onClick={() => toggleTab(4)}
          >
            Popular Music
          </button>
        </ButtonDiv>

        <ContentDiv className={toggleState === 1 ? "activeContent" : null}>
          <h2>{musicContentData[0].heading}</h2>
          <p>{musicContentData[0].detail}</p>
        </ContentDiv>

        <ContentDiv className={toggleState === 2 ? "activeContent" : null}>
          <h2>{musicContentData[1].heading}</h2>
          <p>{musicContentData[1].detail}</p>
        </ContentDiv>

        <ContentDiv className={toggleState === 3 ? "activeContent" : null}>
          <h2>{musicContentData[2].heading}</h2>
          <p>{musicContentData[2].detail}</p>
        </ContentDiv>

        <ContentDiv className={toggleState === 4 ? "activeContent" : null}>
          <h2>{musicContentData[3].heading}</h2>
          <p>{musicContentData[3].detail}</p>
        </ContentDiv>
      </ParentContentDiv>

      <ImgDiv className={toggleState === 1 ? "activeImg" : null}>
        <img src={musicContentData[0].img} alt="festival" />
      </ImgDiv>

      <ImgDiv className={toggleState === 2 ? "activeImg" : null}>
        <img src={musicContentData[1].img} alt="festival" />
      </ImgDiv>

      <ImgDiv className={toggleState === 3 ? "activeImg" : null}>
        <img src={musicContentData[2].img} alt="festival" />
      </ImgDiv>

      <ImgDiv className={toggleState === 4 ? "activeImg" : null}>
        <img src={musicContentData[3].img} alt="festival" />
      </ImgDiv>
    </MusicParentDiv>
  );
};

export default Music;
