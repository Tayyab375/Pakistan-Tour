import React from "react";

// ------------------import styled---------------------
import { ContainerDiv, ImageDiv, ContentDiv } from "./AboutPtc.style";

const AboutPtc = (props) => {
  return (
    <ContainerDiv>
      <ContentDiv>
        <h1>{props.heading}</h1>
        <span>{props.subheading}</span>
        <p>
          {props.ptcParagraph1}
          <br />
          <br />
          {props.ptcParagraph2}
        </p>
      </ContentDiv>
      <ImageDiv>
        <img src={props.rightimg} alt="SideImage" />
      </ImageDiv>
    </ContainerDiv>
  );
};

export default AboutPtc;
