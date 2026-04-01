import React from "react";
import { Play } from "lucide-react";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-between max-w-6xl mx-auto mb-5 items-center px-4">
        <div className="space-y-4 text-center md:text-left">
          <div className="space-y-6">
            <button className="my-3 md:my-0 flex px-2 py-1 gap-1 rounded-full bg-[#4f39f61d] mx-auto md:mx-0">
              <img
                className="animate-pulse object-contain"
                src="/circle.png"
                alt=""
              />
              <span className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-medium">
                New: AI-Powered Tools Available
              </span>
            </button>
            <h1 className="text-4xl md:text-7xl font-extrabold">
              Supercharge Your <br /> Digital Workflow
            </h1>
            <p className="text-[#627382]">
              Access premium AI tools, design assets, templates, and
              productivity <br />
              software—all in one place. Start creating faster today. <br />{" "}
              Explore Products
            </p>
          </div>
          <div>
            <div class="badge btn btn-xs bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white md:px-6 md:py-5 px-3 py-4 mr-4 hover:bg-linear-to-r hover:from-[#4f39f69e] hover:to-[#9614fac0]">
              Explore Products
            </div>
            <div className="badge btn-xs badge-outline badge-primary cursor-pointer md:px-6 md:py-5 px-3 py-4 rounded-full hover:bg-gray-100">
              <Play /> Watch Demo
            </div>
          </div>
        </div>
        <div className="h-90 md:h-120 md:p-3 rounded-full">
          <img
            className="max-h-full max-w-full object-contain"
            src="/banner.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
