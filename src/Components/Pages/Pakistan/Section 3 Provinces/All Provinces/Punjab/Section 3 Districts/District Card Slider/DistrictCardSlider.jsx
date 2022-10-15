import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// --------------------------import data----------------
import { DistrictData } from "./District Mapping Data";

// -----------------------------styling import-----------------
import {
  PraentDiv,
  CardMappingDiv,
  ContentDiv,
} from "./DistrictCardSli.styled";

// -----------------------------import components-----------------
import DistrictCard from "../../../Reusable Components/Section 3 District Card/DistrictCard";

// -------------------mapping() function------------------------

const mappingDistrictCard = (district) => {
  return (
    <DistrictCard
      key={district.id}
      img={district.img}
      districtName={district.districtName}
      path={district.path}
    />
  );
};

function DistrictCardSlider() {
  const slideLeft = () => {
    const districtContainer = document.querySelector(".district-container");
    districtContainer.scrollLeft = districtContainer.scrollLeft - 700;
  };

  const slideRight = () => {
    const districtContainer = document.querySelector(".district-container");
    districtContainer.scrollLeft = districtContainer.scrollLeft + 700;
  };

  return (
    <>
      <ContentDiv>
        <h1>DISTRICTS OF GILGIT BALTISTAN</h1>
        <p>
          Gilgit Baltistan has 10 Different Districts with different cultures
          and traditions.
        </p>
      </ContentDiv>

      <PraentDiv>
        <MdChevronLeft size={40} className="prev-btn" onClick={slideLeft} />
        <CardMappingDiv className="district-container">
          {DistrictData.map(mappingDistrictCard)}
        </CardMappingDiv>
        <MdChevronRight size={40} className="next-btn" onClick={slideRight} />
      </PraentDiv>
    </>
  );
}

export default DistrictCardSlider;
