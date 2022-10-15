import React from "react";
import ProductCard from "../../../../../Reusable/Product Card/ProductCard";

// -----------------------------importing Data-----------------
import { NaranKaghanActivitiesData } from "./Naran Kaghan Activities Mapping Data";

function HunzaActivitiesProductCard() {
  return (
    <>
      {NaranKaghanActivitiesData.map((product) => {
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

export default HunzaActivitiesProductCard;
