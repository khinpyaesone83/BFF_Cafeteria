import React from "react";
import { Link } from "react-router-dom";
import Breakfast from "../images/breakfast.png";

const Navbar = ({ toggle, count }) => {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono text-2xl"
      role="navigation"
    >
      <Link to="/" className="pl-8">
        <img
          src={Breakfast}
          className="w-12 h-12 inline mr-2"
          alt="breakfast"
        />
        BFF
      </Link>
      <div className="flex justify-center items-center">
        <Link to="/" className="cursor-pointer flex relative mr-4">
          <svg
            className="w-6 h-6 ml-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
          <span className="bg-yellow-500 rounded-full flex items-center justify-center h-6 w-6 absolute -right-4 -top-3">
            <small>{count}</small>
          </span>
        </Link>
        <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="pr-8 md:block hidden">
          <Link className="p-4" to="/">
            Home
          </Link>
          <Link className="p-4" to="/menu">
            Menu
          </Link>
          <Link className="p-4" to="/about">
            About
          </Link>
          <Link className="p-4" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
