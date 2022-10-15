import React from "react";
import ProductCard from "../../../../../Reusable/Product Card/ProductCard";

// -----------------------------importing Data-----------------
import { HunzaHotelsData } from "./Hunza Hotels Mapping Data";

// -------------------mapping() function------------------------

function HunzaHotelsProductCard() {
  return (
    <>
      {HunzaHotelsData.map((product) => {
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

export default HunzaHotelsProductCard;
