import React from "react";
import { Link } from "react-router-dom";
import Chef from "../images/chef.png";

const Hero = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <img
        src={Chef}
        alt="chef"
        className="lg:w-72 lg:h-72 xl:w-72 xl:h-72 2xl:w-72 2xl:h-72 md:w-64 md:h-64 w-56 h-56"
      />
      <h1 className="lg:text-6xl md:text-5xl sm:text-3xl text-2xl font-black mb-14 text-center font-mono mt-3 px-1">
        WELCOME TO BFF CAFETERIA
      </h1>
      <Link
        to="/menu"
        className="py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-400 transition duration-300 ease-in-out flex items-center animate-bounce"
      >
        Order Now
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
      </Link>
    </div>
  );
};

export default Hero;
