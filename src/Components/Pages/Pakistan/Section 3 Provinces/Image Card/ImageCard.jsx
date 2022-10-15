import React from "react";
import { Link } from "react-router-dom";

import { CardSection, ContentDiv } from "./ImageCard.styled";

const ImageCard = (props) => {
  return (
    <>
      <CardSection>
        <img src={props.img} alt="coverimg" />

        <ContentDiv>
          <div>
            <h1>{props.heading}</h1>
            <p>{props.detail}</p>
            <Link to={props.path}>Read More {">>"}</Link>
          </div>
        </ContentDiv>
      </CardSection>
    </>
  );
};

export default ImageCard;
