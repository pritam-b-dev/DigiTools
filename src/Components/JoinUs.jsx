import React from "react";

const JoinUs = () => {
  return (
    <>
      <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-20 px-4">
        <div className="max-w-6xl mx-auto text-center space-y-5">
          <h1 className="font-extrabold text-5xl text-white">
            Ready to Transform Your Workflow?
          </h1>
          <p className="text-[#ffffffbb]">
            Join thousands of professionals who are already using Digitools to
            work smarter. <br />
            Start your free trial today.
          </p>
          <div>
            <button className="btn btn-ghost rounded-full bg-white mr-4">
              <span className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold">
                Explore Products
              </span>
            </button>
            <button className="btn btn-ghost border border-white rounded-full px-8 bg-transparent text-white">
              View Pricing
            </button>
          </div>
          <p className="text-[#ffffffbb] text-[12px] md:text-base">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
