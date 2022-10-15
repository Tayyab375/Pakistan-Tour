import React from "react";

import { ParentDiv, AboutProvinceDiv, VideoDiv } from "./AboutProvince.styled";

import ScrollDialog from "../../Punjab/AboutPunjabDialog/Dialog";

const AboutProvince = (props) => {
  return (
    <ParentDiv>
      <AboutProvinceDiv>
        <h1>{props.heading}</h1>
        <p>{props.paragraph}</p>
        <ScrollDialog
          heading={props.dialogHeading}
          paragraph={props.dialogParagraph}
        />
      </AboutProvinceDiv>

      <VideoDiv>
        <video controls>
          <source src={props.video} type="video/mp4" />
        </video>
      </VideoDiv>
    </ParentDiv>
  );
};

export default AboutProvince;
