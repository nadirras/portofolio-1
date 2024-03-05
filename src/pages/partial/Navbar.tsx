import React, { useEffect, useRef, useState } from "react";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 items-center">
        <a className="btn btn-ghost text-xl">Portofolio.</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-nav menu-horizontal">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#timeline">Timeline</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
        </ul>
      </div>

      {/* Nav tablet */}
      <div className="dropdown relative">
        <label
          tabIndex={0}
          className="btn btn-circle swap swap-rotate md:hidden"
        >
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[70px] right-0"
        >
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#timeline">Timeline</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
