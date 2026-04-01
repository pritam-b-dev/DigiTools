import React from "react";

const Dashboard = () => {
  return (
    <div className="mx-4 md:mx-0 ">
      <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] mb-20 ">
        <div className="flex flex-col md:flex-row gap-6 justify-between max-w-6xl mx-auto  p-10 md:px-20">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h1 className="font-extrabold text-3xl md:text-6xl text-white">
              50K+
            </h1>
            <p className="font-medium text-2xl text-[#ffffffa6]">
              Active Users
            </p>
          </div>
          <div className="divider divider-vertical md:divider-horizontal  before:bg-[#ffffffa6] after:bg-[#ffffffa6]"></div>
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h1 className="font-extrabold text-3xl md:text-6xl text-white">
              200+
            </h1>
            <p className="font-medium text-2xl text-[#ffffffa6]">
              Premium Tools
            </p>
          </div>
          <div className="divider divider-vertical md:divider-horizontal before:bg-[#ffffffa6] after:bg-[#ffffffa6] "></div>
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h1 className="font-extrabold text-3xl md:text-6xl text-white">
              4.9
            </h1>
            <p className="font-medium text-2xl text-[#ffffffa6]">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
