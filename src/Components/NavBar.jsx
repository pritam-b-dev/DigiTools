import React from "react";
import { Menu } from "lucide-react";

const NavBar = ({ carts }) => {
  const NavLinks = (
    <>
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
    </>
  );

  return (
    <div className="navbar max-w-6xl mx-auto mt-5 mb-3">
      <div className="navbar-start">
        <div className="dropdown">
          {" "}
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            {" "}
            <Menu size={24} />{" "}
          </div>{" "}
          <ul className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
            {" "}
            {NavLinks}{" "}
            {
              <li>
                <a>Login</a>
              </li>
            }
          </ul>{" "}
        </div>
        <div className="sm:p-2 text-md font-bold md:text-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent ">
          DigiTools
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1 font-semibold text-[#101727]">
          {NavLinks}
        </ul>
      </div>
      <div className="navbar-end gap-3 md:gap-5">
        <div className="indicator">
          <img
            className="w-3.5 h-3.5 md:w-6 md:h-6"
            src="/shopping-cart.png"
            alt=""
          />
          <span className="indicator-item rounded-full md:badge md:badge-xs text-white bg-red-500 md:-translate-y-3 md:translate-x-4 w-3.5 h-3.5 md:w-6 md:h-6 flex items-center justify-center text-xs">
            {carts.length}
          </span>
        </div>
        <p className="hidden md:block font-semibold text-[#101727]">Login</p>
        <a className="btn btn-xs md:btn-md bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white hover:bg-linear-to-r hover:from-[#4f39f69e] hover:to-[#9614fac0]">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default NavBar;
