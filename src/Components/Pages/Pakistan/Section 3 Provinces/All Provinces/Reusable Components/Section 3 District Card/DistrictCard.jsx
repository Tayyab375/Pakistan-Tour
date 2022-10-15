import React from "react";
import { Link } from "react-router-dom";

import {
  CardSection,
  BlackBgDiv,
  HeadingDiv,
  HoverColorDiv,
  LinkDiv,
} from "./DistrictCard.styled";

const DistrictCard = (props) => {
  return (
    <>
      <CardSection>
        <img src={props.img} alt="coverimg" />

        <BlackBgDiv />
        <HeadingDiv>
          <h1>
            <Link to={props.path}>{props.districtName}</Link>
          </h1>
        </HeadingDiv>

        <HoverColorDiv className="bgColor" />
        <LinkDiv>
          <hr className="line" />
          <Link to={props.path} className="link">
            Learn More About District {">>"}
          </Link>
        </LinkDiv>
      </CardSection>
    </>
  );
};

export default DistrictCard;
