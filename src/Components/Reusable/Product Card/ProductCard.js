import React from "react";
import { Link } from "react-router-dom";

// ------------------styled import----------------------
import { CardContainerDiv, ImgDiv, ContentDiv } from "./ProductCard.styled";

import Button from "../Button/Button";

function ProductCard(props) {
  return (
    <CardContainerDiv>
      <ImgDiv>
        <img src={props.img} alt="" />
      </ImgDiv>
      <ContentDiv>
        <span>
          {props.date} <br /> {props.month}
        </span>
        <h3>Price:PKR {props.price}/Person</h3>
        <p>{props.detail}</p>
        <Link to={props.path}>
          <Button btntext={"Book Now"} />
        </Link>
      </ContentDiv>
    </CardContainerDiv>
  );
}

export default ProductCard;
