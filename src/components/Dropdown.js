import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center justify-center items-center bg-yellow-500 font-mono text-1xl"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link className="p-4 " to="/">
        <p className="nav-text">Home</p>
      </Link>
      <Link className="p-4" to="/menu">
        <p className="nav-text">Menu</p>
      </Link>
      <Link className="p-4" to="/about">
        <p className="nav-text">About</p>
      </Link>
      <Link className="p-4" to="/contact">
        <p className="nav-text">Contact</p>
      </Link>
    </div>
  );
};

export default Dropdown;
