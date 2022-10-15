import React from "react";
import ProductCard from "../../../../../Reusable/Product Card/ProductCard";

// -----------------------------importing Data-----------------
import { AzadKashmirTourData } from "./AzadKashmir Tour Mapping Data";

// -------------------mapping() function------------------------

function AzadKashmirTourProductCard() {
  return (
    <>
      {AzadKashmirTourData.map((product) => {
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
      })}
    </>
  );
}

export default AzadKashmirTourProductCard;
