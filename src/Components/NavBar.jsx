import React from "react";

const NavBar = ({ carts }) => {
  return (
    <div className="navbar max-w-6xl mx-auto mt-5 mb-3">
      <div className="navbar-start">
        <div className="p-2 font-bold text-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent ">
          DigiTools
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-2 px-1 font-semibold text-[#101727]">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <div className="indicator">
          <img className="w-6 h-6" src="/shopping-cart.png" alt="" />
          <span className="indicator-item rounded-full badge badge-xs text-white bg-red-500 -translate-y-3 translate-x-4 w-6 h-6 flex items-center justify-center text-xs">
            {carts.length}
          </span>
        </div>
        <p className="font-semibold text-[#101727]">Login</p>
        <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white hover:bg-linear-to-r hover:from-[#4f39f69e] hover:to-[#9614fac0]">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default NavBar;
