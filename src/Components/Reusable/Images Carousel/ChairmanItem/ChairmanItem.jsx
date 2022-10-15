import React from "react";

// ---------------import style-------------
import { ItemContianerDiv } from "./ChairmanItem.styled";

const ImageItem = (props) => {
  return (
    <ItemContianerDiv>
      <img src={props.img} alt="Beauty of Pakistan" />
    </ItemContianerDiv>
  );
};

export default ImageItem;
