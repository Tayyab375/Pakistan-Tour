import React from "react";
import ProductCard from "../../../../../Reusable/Product Card/ProductCard";

// -----------------------------importing Data-----------------
import { SwatActivitiesData } from "./Swat Activities Mapping Data";

function SwatActivitiesProductCard() {
  return (
    <>
      {SwatActivitiesData.map((product) => {
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

export default SwatActivitiesProductCard;
