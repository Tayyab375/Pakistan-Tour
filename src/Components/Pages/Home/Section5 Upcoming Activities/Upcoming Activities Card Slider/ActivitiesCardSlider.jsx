import React from "react";
import ProductCard from "../../../../Reusable/Product Card/ProductCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// -----------------------------styling import-----------------
import { PraentDiv, CardSliderDiv } from "./TourCardSlider.styled";

// -----------------------------importing Data-----------------
import { UpcomingActivitiesData } from "./Activities Mapping Data";

// -------------------mapping() function------------------------

const mappingImages = (product) => {
  return (
    <ProductCard
      key={product.id}
      img={product.img}
      date={product.date}
      month={product.month}
      price={product.price}
      detail={product.detail}
      path={product.path}
    />
  );
};

function ActivitiesCardSlider() {
  const slideLeftSide = () => {
    const ActivitiesProductContainer = document.querySelector(
      ".activities-product-container"
    );
    ActivitiesProductContainer.scrollLeft =
      ActivitiesProductContainer.scrollLeft - 700;
  };

  const slideRightSide = () => {
    const ActivitiesProductContainer = document.querySelector(
      ".activities-product-container"
    );
    ActivitiesProductContainer.scrollLeft =
      ActivitiesProductContainer.scrollLeft + 700;
  };

  return (
    <>
      <PraentDiv>
        <MdChevronLeft size={40} className="prev-btn" onClick={slideLeftSide} />
        <CardSliderDiv className="activities-product-container">
          {UpcomingActivitiesData.map(mappingImages)}
        </CardSliderDiv>
        <MdChevronRight
          size={40}
          className="next-btn"
          onClick={slideRightSide}
        />
      </PraentDiv>
    </>
  );
}

export default ActivitiesCardSlider;
