import React from "react";
import ProductCard from "../../../../Reusable/Product Card/ProductCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// -----------------------------styling import-----------------
import { PraentDiv, CardMappingDiv } from "./TourCardSlider.styled";

// -----------------------------importing Data-----------------
import { UpcomingTourData } from "./Mapping Data";

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

function MappingProductCard(props) {
  const slideLeft = () => {
    const productContainer = document.querySelector(".product-container");
    productContainer.scrollLeft = productContainer.scrollLeft - 700;
  };

  const slideRight = () => {
    const productContainer = document.querySelector(".product-container");
    productContainer.scrollLeft = productContainer.scrollLeft + 700;
  };

  return (
    <>
      <PraentDiv>
        <MdChevronLeft size={40} className="prev-btn" onClick={slideLeft} />
        <CardMappingDiv className="product-container">
          {UpcomingTourData.map(mappingImages)}
        </CardMappingDiv>
        <MdChevronRight size={40} className="next-btn" onClick={slideRight} />
      </PraentDiv>
    </>
  );
}

export default MappingProductCard;
