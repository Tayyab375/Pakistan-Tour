import React from "react";

// ---------------------import styling--------------------
import { ItemParentDiv, ItemDiv, ImgDiv } from "./CuisineCarouselItem.styled";

const CuisineCarouselItem = (props) => {
  return (
    <ItemParentDiv>
      <ItemDiv>
        <ImgDiv>
          <img src={props.img1} alt="cuisine" />
        </ImgDiv>
        <h2>{props.foodName1}</h2>
      </ItemDiv>

      <ItemDiv>
        <ImgDiv>
          <img src={props.img2} alt="cuisine" />
        </ImgDiv>
        <h2>{props.foodName2}</h2>
      </ItemDiv>

      <ItemDiv>
        <ImgDiv>
          <img src={props.img3} alt="cuisine" />
        </ImgDiv>
        <h2>{props.foodName3}</h2>
      </ItemDiv>
    </ItemParentDiv>
  );
};

export default CuisineCarouselItem;
