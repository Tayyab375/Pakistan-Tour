import React from "react";
import ProductCard from "../../../../../Reusable/Product Card/ProductCard";

// -----------------------------importing Data-----------------
import { NaranKaghanTourData } from "./Naran Kaghan Tour Mapping Data";

// -------------------mapping() function------------------------

function NaranKaghanTourProductCard() {
  return (
    <>
      {NaranKaghanTourData.map((product) => {
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

export default NaranKaghanTourProductCard;
