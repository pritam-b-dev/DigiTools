import React, { use } from "react";
import ProductCard from "./ProductCard";

const Product = ({ productsPromise, carts, setCarts }) => {
  const productsArray = use(productsPromise);

  return (
    <>
      <div className="max-w-6xl mx-auto mt-5 mb-15 px-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 items-start">
          {productsArray.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              carts={carts}
              setCarts={setCarts}
            ></ProductCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
