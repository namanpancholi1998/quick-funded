import React from "react";
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import "../Header/Header.css";

export default function Header() {
  const navigate = useNavigate();
  return (
    // <div>
    <div className="flex gap-5 justify-between items-center px-7 mx-auto py-4 w-full max-w-[1440px] max-md:flex-wrap max-md:max-full">
      <div>
        <img src="../logo-quick.png" width="300" />
      </div>

      <div>
        <nav
          className="flex gap-5 justify-between self-stretch my-auto text-lg leading-5 text-neutral-900 
        max-md:flex-wrap"
        >
          <div>
            <NavLink to={"/"}>Home</NavLink>
          </div>
          <div>
            <NavLink to={"/blogs"}>Blogs</NavLink>
          </div>
          <div>
            <NavLink to={"/affilate"}>Affilate</NavLink>
          </div>
          <div>
            <NavLink to={"/faq"}>FAQ</NavLink>
          </div>
          <div>
            <NavLink to={"/contactus"}>Contact Us</NavLink>
          </div>
        </nav>
      </div>

      <div>
        <nav className="flex  gap-5 justify-center self-stretch leading-[100%]">
          {/* <div className="flex flex-row my-auto text-lg text-neutral-900">
            <NavLink to={"/clientarea"}>
              <button>Client Area</button>
              <BsBoxArrowUpRight />
            </NavLink>
          </div> */}
          {/* <div className="flex items-center text-lg text-neutral-900">
            <NavLink
              to="/"
              className="flex items-center space-x-2 hover:text-neutral-700 "
            >
              <button className="font-semibold">Client Area</button>
              <BsBoxArrowUpRight className="w-5 h-5" />
            </NavLink>
          </div> */}
          <div className="flex items-center text-lg">
            <NavLink
              to="/clientarea"
              className="flex items-center space-x-2 hover:opacity-80  transition-opacity"
            >
              <button className=" hover:text-green-500">Client Area</button>
              <BsBoxArrowUpRight className="w-5 h-5 text-green-500" />
            </NavLink>
          </div>

          <div
            className="justify-center px-8 py-3 text-base font-semibold text-white 
          bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] rounded-[20px] max-md:px-5"
          >
            <NavLink to={"/signup"}>
              <button>Buy Challenge</button>
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
}
