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
          <div className="h-15 w-15  rounded-full border border-gray-300 flex justify-center items-center">
            <img
              className="max-h-full max-w-full object-contain"
              src={product.icon}
              alt=""
            />
          </div>
          <div className="font-bold text-2xl">{product.name}</div>
          <div className="text-[#627382]">{product.description}</div>
          <div>
            <span className="font-bold text-2xl">
              $<span>{product.price}</span>
            </span>
            <span className="text-[#627382]">/{product.period}</span>
          </div>
          <div>
            <ul className="text-[#627382]">
              {product.features.map((feat) => (
                <li>
                  <img className="inline mr-2" src="/Check.png" alt="" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={handleBuyProduct}
            className="btn w-full  bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white"
          >
            {isBuy ? "Added to Cart" : "Buy Now"}
          </button>
        </div>
        <div className="absolute top-2 right-5">
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
