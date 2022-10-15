import React from "react";
import ProductCard from "../../../../../Reusable/Product Card/ProductCard";

// -----------------------------importing Data-----------------
import { SwatHotelsData } from "./Swat Hotels Mapping Data";

// -------------------mapping() function------------------------

function SwatHotelsProductCard() {
  return (
    <>
      {SwatHotelsData.map((product) => {
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

export default SwatHotelsProductCard;
