import React from "react";

const NavBar = ({ carts }) => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl">
          DigiTools
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-2 px-1 text-lg">
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
          <img src="/shopping-cart.png" alt="" />
          <span className="indicator-item rounded-full badge badge-xs text-white bg-red-500 -translate-y-3 translate-x-4 w-5 h-5 flex items-center justify-center text-xs">
            {carts.length}
          </span>
        </div>
        <p>Login</p>
        <a className="btn btn-primary rounded-full text-white">Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;
