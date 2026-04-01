import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className=" bg-zinc-950 border-t border-red-900/50 pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 lg:grid-cols-12 gap-4 md:gap-8 lg:gap-12 lg:justify-items-start">
          {/* Logo & Description */}
          <div className="md:col-span-3 lg:col-span-4">
            <h2 className=" text-3xl font-bold pb-5 tracking-tighter text-white">
              DigiTools
            </h2>

            <p className="text-zinc-400 text-lg max-w-md">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 lg:col-span-2">
            <h3 className="text-white font-semibold mb-2 mt-2 text-lg">
              Product
            </h3>
            <ul className="space-y-4 text-zinc-400 ">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1 lg:col-span-2">
            <h3 className="text-white font-semibold mb-2 mt-2 text-lg">
              Company
            </h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1 lg:col-span-2">
            <h3 className="text-white font-semibold mb-2 mt-2 text-lg">
              Resources
            </h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1 lg:col-span-2">
            <h3 className="text-white font-semibold mb-2 mt-2 text-lg">
              Social Links
            </h3>
            <ul className="space-y-4 text-zinc-400 flex gap-10 lg:gap-4">
              <li className="bg-white rounded-full w-7 h-7 flex justify-center items-center">
                <a href="#" className="">
                  <FontAwesomeIcon icon={faXTwitter} className="text-black" />
                </a>
              </li>
              <li className="bg-white rounded-full w-7 h-7 flex justify-center items-center">
                <a href="#" className="">
                  <FontAwesomeIcon icon={faInstagram} className="text-black" />
                </a>
              </li>
              <li className="bg-white rounded-full w-7 h-7 flex justify-center items-center">
                <a href="#" className="">
                  <FontAwesomeIcon icon={faFacebook} className="text-black" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div>
            © {new Date().getFullYear()} DigiTools. All rights reserved.
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms Of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
