import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const ProductCard = ({ product, carts, setCarts }) => {
  const [isBuy, setIsBuy] = useState(false);

  const handleBuyProduct = () => {
    setIsBuy(true);
    const isFound = carts.find((item) => item.id === product.id);
    if (isFound) {
      toast.error("Product already in your cart!");
      return;
    }
    setCarts([...carts, product]);
    toast("Product added to cart!");
  };

  return (
    <>
      <div className="p-5 border border-zinc-200 shadow-md rounded-lg relative">
        <div className="space-y-2">
          <div className="h-10 p-3 rounded-full border border-gray-300 inline-block">
            <img
              className="max-h-full max-w-full object-contain"
              src={product.icon}
              alt=""
            />
          </div>
          <div>{product.name}</div>
          <div>{product.description}</div>
          <div>
            $<span>{product.price}</span>
            <span>/{product.period}</span>
          </div>
          <div>
            <ul>
              {product.features.map((feat) => (
                <li>
                  <img className="inline mr-2" src="/Check.png" alt="" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>
          <button onClick={handleBuyProduct} className="btn btn-primary w-full">
            {isBuy ? "Added to Cart" : "Buy Now"}
          </button>
        </div>
        <div className="absolute top-3 right-5">
          {product.tagType === "best-seller" && (
            <div class="badge badge-soft badge-warning px-3 rounded-2xl">
              Best Seller
            </div>
          )}
          {product.tagType === "new" && (
            <div class="badge badge-soft badge-success px-3 rounded-2xl">
              New
            </div>
          )}
          {product.tagType === "popular" && (
            <div class="badge badge-soft badge-primary px-3 rounded-2xl">
              Popular
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
