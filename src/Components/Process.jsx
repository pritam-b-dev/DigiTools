import React from "react";

const Process = () => {
  return (
    <>
      <div className="bg-zinc-50 py-10 px-4">
        <div className="flex flex-col gap-6 justify-center items-center max-w-6xl mx-auto mb-10">
          <h1 className="font-extrabold text-5xl">Get Started in 3 Steps</h1>
          <p className="text-[#627382]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="flex flex-col gap-2 md:flex-row justify-between max-w-6xl mx-auto mb-10">
          <div className="py-15 px-7 bg-white border border-zinc-200 shadow-md rounded-lg relative ">
            <div className="flex flex-col justify-center items-center space-y-5">
              <div className=" flex justify-center items-center p-3 rounded-full bg-[#9614fa3c]">
                <img src="/user.png" alt="" />
              </div>
              <h1 className="font-bold text-2xl">Create Account</h1>
              <p className="text-center text-[#627382]">
                Sign up for free in seconds. No credit card <br /> required to
                get started.
              </p>
            </div>
            <span className="flex justify-center h-7 w-7 items-center p-2 rounded-full text-white bg-[#9614fa] absolute top-5 right-5">
              01
            </span>
          </div>
          <div className="py-15 px-7 bg-white border border-zinc-200 shadow-md rounded-lg relative ">
            <div className="flex flex-col justify-center items-center space-y-5">
              <div className=" flex justify-center items-center p-3 rounded-full bg-[#9614fa3c]">
                <img src="/package.png" alt="" />
              </div>
              <h1 className="font-bold text-2xl">Choose Products</h1>
              <p className="text-center text-[#627382]">
                Browse our catalog and select the tools <br />
                that fit your needs.
              </p>
            </div>
            <span className="flex justify-center h-7 w-7 items-center p-2 rounded-full text-white bg-[#9614fa] absolute top-5 right-5">
              02
            </span>
          </div>
          <div className="py-15 px-7 bg-white border border-zinc-200 shadow-md rounded-lg relative ">
            <div className="flex flex-col justify-center items-center space-y-5">
              <div className=" flex justify-center items-center p-3 rounded-full bg-[#9614fa3c]">
                <img src="/rocket.png" alt="" />
              </div>
              <h1 className="font-bold text-2xl">Start Creating</h1>
              <p className="text-center text-[#627382]">
                Download and start using your premium <br /> tools immediately.
              </p>
            </div>
            <span className="flex justify-center h-7 w-7 items-center p-2 rounded-full text-white bg-[#9614fa] absolute top-5 right-5">
              03
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
