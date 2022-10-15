import React from "react";

// ---------------import style-------------
import { ItemContianerDiv } from "./ChairmanItem.styled";

const ChairmanItem = (props) => {
  return (
    <ItemContianerDiv>
      <img src={props.img} alt="vip" />
      <div>
        <p className="heading">{props.name}</p>
        <p>{props.designation}</p>
      </div>
    </ItemContianerDiv>
  );
};

export default ChairmanItem;
