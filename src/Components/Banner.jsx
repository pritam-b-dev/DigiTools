import React from "react";
import { Play } from "lucide-react";

const Banner = () => {
  return (
    <>
      <div className="flex justify-between max-w-6xl mx-auto mb-10 items-center">
        <div className="space-y-4">
          <div className="space-y-6">
            <div className="bg-[#9614fa15] w-65 rounded-full ">
              <div className="badge badge-soft badge-primary font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                <img className="animate-pulse" src="/circle.png" alt="" />
                New: AI-Powered Tools Available
              </div>
            </div>
            <h1 className="text-7xl font-extrabold">
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
            <div class="badge btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white px-6 py-5 mr-4 hover:bg-linear-to-r hover:from-[#4f39f69e] hover:to-[#9614fac0]">
              Explore Products
            </div>
            <div className="badge btn badge-outline badge-primary px-6 py-5 rounded-full hover:bg-gray-100">
              <Play /> Watch Demo
            </div>
          </div>
        </div>
        <div className="h-120 p-3 rounded-full">
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
