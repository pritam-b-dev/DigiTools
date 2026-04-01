import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
        <div className="flex gap-6 justify-between max-w-6xl mx-auto mb-20 p-10">
          <div className="flex flex-col gap-2">
            <h1 className="font-extrabold text-6xl text-white">50K+</h1>
            <p className="font-medium text-2xl text-[#ffffffa6]">
              Active Users
            </p>
          </div>
          <div className="divider divider-horizontal before:bg-[#ffffffa6] after:bg-[#ffffffa6]"></div>
          <div className="flex flex-col gap-2">
            <h1 className="font-extrabold text-6xl text-white">200+</h1>
            <p className="font-medium text-2xl text-[#ffffffa6]">
              Premium Tools
            </p>
          </div>
          <div className="divider divider-horizontal before:bg-[#ffffffa6] after:bg-[#ffffffa6] "></div>
          <div className="flex flex-col gap-2">
            <h1 className="font-extrabold text-6xl text-white">4.9</h1>
            <p className="font-medium text-2xl text-[#ffffffa6]">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
