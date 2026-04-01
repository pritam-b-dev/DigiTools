import React from "react";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  const handlePayment = () => {
    setCarts([]);
    toast.success("Payment Successful!");
  };
  const handleDelete = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);
    toast.error("Product Removed!");
  };

  return (
    <div className="max-w-6xl mx-auto mt-5 mb-15 p-10 border border-zinc-300 rounded-2xl">
      {carts.length === 0 ? (
        <p className="flex justify-center items-center text-4xl">
          Your Cart is empty
        </p>
      ) : (
        <>
          <h1 className="mb-10">Your Cart</h1>
          <div className="">
            {carts.map((item) => (
              <div
                className="flex items-center justify-between space-y-5 bg-gray-100 p-5 rounded-lg mt-3 mb-3"
                key={item.id}
              >
                <div className="flex items-center gap-4">
                  <div className="h-15 p-3 rounded-full border border-gray-300 bg-white ">
                    <img
                      className="max-h-full max-w-full object-contain"
                      src={item.icon}
                      alt=""
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <div className="">${item.price}</div>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(item)}
                  className="text-red-500 cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <div>Total</div>
            <div>${totalPrice}</div>
          </div>
          <button
            className="cursor-pointer w-full btn btn-primary mt-5 p-5 text-lg text-white rounded-full"
            onClick={handlePayment}
          >
            Proceed To checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
