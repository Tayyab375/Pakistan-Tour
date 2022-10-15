import React from "react";

import { ContentParentDiv } from "./Content.styled";

const Content = (props) => {
  return (
    <ContentParentDiv>
      <p>{props.detail}</p>
      <div>
        <img src={props.img} alt="Mountain" />
        <span>{props.imgName}</span>
      </div>
    </ContentParentDiv>
  );
};

export default Content;
