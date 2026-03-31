import React, { use } from "react";
import ProductCard from "./ProductCard";

const Product = ({ productsPromise }) => {
  const productsArray = use(productsPromise);

  return (
    <>
      <div>
        {productsArray.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </>
  );
};

export default Product;
