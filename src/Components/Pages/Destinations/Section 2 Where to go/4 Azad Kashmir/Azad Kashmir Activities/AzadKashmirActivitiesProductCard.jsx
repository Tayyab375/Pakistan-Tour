import React from "react";
import ProductCard from "../../../../../Reusable/Product Card/ProductCard";

// -----------------------------importing Data-----------------
import { AzadKashmirActivitiesData } from "./Azad Kashmir Activities Mapping Data";

function AzadKashmirActivitiesProductCard() {
  return (
    <>
      {AzadKashmirActivitiesData.map((product) => {
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

export default AzadKashmirActivitiesProductCard;
